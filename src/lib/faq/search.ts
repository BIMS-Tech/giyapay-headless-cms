import { FaqItem, faqCategories, faqItems, faqSearchIndex } from './faq-data';

export interface FaqMatch {
  item: FaqItem;
  score: number;
  /** Snippet of the answer around the first match, used in the results list. */
  excerpt?: string;
}

const haystackById = new Map(faqSearchIndex.map(entry => [entry.id, entry.haystack]));
const categoryLabelById = new Map(faqCategories.map(category => [category.id, category.label]));

export const getCategoryLabel = (id: FaqItem['category']) => categoryLabelById.get(id) ?? '';

/** Splits a raw query into lowercase terms, dropping punctuation and noise words. */
export const tokenize = (query: string): string[] =>
  query
    .toLowerCase()
    .replace(/[^\p{L}\p{N}+\s]/gu, ' ')
    .split(/\s+/)
    .filter(term => term.length > 1 || /\d/.test(term));

const plainAnswer = (item: FaqItem) =>
  item.answer.map(block => (block.type === 'p' ? block.text : block.items.join(' '))).join(' ');

/**
 * Terms match on a word prefix, so "payme" still finds "payment" while "vat"
 * no longer matches the middle of "activation".
 */
const containsTerm = (text: string, term: string) =>
  new RegExp(`\\b${escapeRegExp(term)}`).test(text);

interface ItemScore {
  /** How many of the typed terms this entry matches at all. */
  coverage: number;
  score: number;
}

/**
 * Scores one FAQ against the search terms. Matches in the question or in the
 * curated keywords count for much more than matches buried in an answer.
 */
const scoreItem = (item: FaqItem, terms: string[]): ItemScore => {
  const question = item.question.toLowerCase();
  const keywords = (item.keywords ?? []).join(' ').toLowerCase();
  const haystack = haystackById.get(item.id) ?? '';

  let coverage = 0;
  let score = 0;

  for (const term of terms) {
    if (!containsTerm(haystack, term)) continue;
    coverage += 1;

    if (question.startsWith(term)) score += 14;
    else if (containsTerm(question, term)) score += 10;
    else if (question.includes(term)) score += 6;

    if (containsTerm(keywords, term)) score += 5;
    else score += 1;
  }

  // A phrase match ("payment link") should outrank two scattered word matches.
  const phrase = terms.join(' ');
  if (terms.length > 1 && question.includes(phrase)) score += 12;
  else if (terms.length > 1 && haystack.includes(phrase)) score += 4;

  return { coverage, score };
};

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Builds a short answer snippet centred on the first matching term. */
const buildExcerpt = (item: FaqItem, terms: string[]): string | undefined => {
  const text = plainAnswer(item);
  const lower = text.toLowerCase();
  const position = terms.map(term => lower.indexOf(term)).find(index => index >= 0);

  if (position === undefined) return text.slice(0, 160).trim() + (text.length > 160 ? '…' : '');

  const start = Math.max(0, position - 60);
  const end = Math.min(text.length, position + 120);

  return `${start > 0 ? '…' : ''}${text.slice(start, end).trim()}${end < text.length ? '…' : ''}`;
};

export const searchFaqs = (query: string): FaqMatch[] => {
  const terms = tokenize(query);
  if (terms.length === 0) return [];

  const scored = faqItems
    .map(item => ({ item, ...scoreItem(item, terms) }))
    .filter(match => match.coverage > 0);

  // Prefer entries that match every term the visitor typed. Only when nothing
  // matches them all do we fall back to the next-best coverage, so a phrase
  // like "documents needed" still returns the application requirements.
  const bestCoverage = scored.reduce((best, match) => Math.max(best, match.coverage), 0);

  return scored
    .filter(match => match.coverage === bestCoverage)
    .sort(
      (a, b) =>
        b.score - a.score ||
        // On a tie, the more focused (shorter) question is usually the answer.
        a.item.question.length - b.item.question.length ||
        a.item.question.localeCompare(b.item.question),
    )
    .map(({ item, score }) => ({ item, score, excerpt: buildExcerpt(item, terms) }));
};

/**
 * Splits text into alternating plain / highlighted chunks so the UI can mark
 * the terms the visitor typed.
 */
export const splitOnTerms = (text: string, terms: string[]): { text: string; hit: boolean }[] => {
  if (terms.length === 0) return [{ text, hit: false }];

  const pattern = new RegExp(`(${terms.map(escapeRegExp).join('|')})`, 'gi');
  return text
    .split(pattern)
    .filter(chunk => chunk !== '')
    .map(chunk => ({ text: chunk, hit: terms.includes(chunk.toLowerCase()) }));
};
