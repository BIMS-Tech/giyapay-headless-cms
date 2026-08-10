'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { FaqAccordionItem } from './FaqAccordionItem';
import { Highlight } from './Highlight';

import { FaqCategoryId, faqCategories, faqItems, popularSearches } from '@src/lib/faq/faq-data';
import { getCategoryLabel, searchFaqs, tokenize } from '@src/lib/faq/search';

const MAX_SUGGESTIONS = 6;

export default function FaqSearch() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<FaqCategoryId | 'all'>('all');
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const [openItems, setOpenItems] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  const comboRef = useRef<HTMLDivElement>(null);

  const terms = useMemo(() => tokenize(query), [query]);
  const matches = useMemo(() => searchFaqs(query), [query]);
  const isSearching = terms.length > 0;

  const suggestions = useMemo(
    () => (isSearching ? matches.slice(0, MAX_SUGGESTIONS) : []),
    [isSearching, matches],
  );

  // Results shown below the search box: search hits when searching, otherwise
  // the full list filtered by the selected category.
  const results = useMemo(() => {
    if (isSearching) {
      return category === 'all'
        ? matches.map(match => match.item)
        : matches.filter(match => match.item.category === category).map(match => match.item);
    }

    return category === 'all' ? faqItems : faqItems.filter(item => item.category === category);
  }, [category, isSearching, matches]);

  const groupedResults = useMemo(
    () =>
      faqCategories
        .map(group => ({ group, items: results.filter(item => item.category === group.id) }))
        .filter(entry => entry.items.length > 0),
    [results],
  );

  // Deep links such as /faq?q=payout or /faq#refunds should land ready to read.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initialQuery = params.get('q');
    if (initialQuery) setQuery(initialQuery);

    const hash = window.location.hash.replace('#', '');
    if (hash && faqItems.some(item => item.id === hash)) {
      setOpenItems([hash]);
      window.requestAnimationFrame(() => {
        document.getElementById(`faq-${hash}`)?.scrollIntoView({ block: 'center' });
      });
    }
  }, []);

  // Close the suggestion dropdown when clicking anywhere outside of it.
  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (comboRef.current && !comboRef.current.contains(event.target as Node)) {
        setSuggestionsOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, []);

  const toggleItem = useCallback((id: string) => {
    setOpenItems(current =>
      current.includes(id) ? current.filter(openId => openId !== id) : [...current, id],
    );
  }, []);

  const revealItem = useCallback((id: string) => {
    setSuggestionsOpen(false);
    setActiveSuggestion(-1);
    setOpenItems(current => (current.includes(id) ? current : [...current, id]));

    window.requestAnimationFrame(() => {
      const element = document.getElementById(`faq-${id}`);
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      element?.querySelector<HTMLButtonElement>('.faq-question')?.focus();
    });
  }, []);

  const runSearch = (value: string) => {
    setQuery(value);
    setCategory('all');
    setSuggestionsOpen(true);
    setActiveSuggestion(-1);
    inputRef.current?.focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      setSuggestionsOpen(false);
      setActiveSuggestion(-1);
      return;
    }

    if (suggestions.length === 0) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setSuggestionsOpen(true);
      setActiveSuggestion(current => (current + 1) % suggestions.length);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setSuggestionsOpen(true);
      setActiveSuggestion(current => (current <= 0 ? suggestions.length - 1 : current - 1));
    } else if (event.key === 'Enter') {
      event.preventDefault();
      const target = suggestions[activeSuggestion] ?? suggestions[0];
      if (target) revealItem(target.item.id);
    }
  };

  const showSuggestions = suggestionsOpen && isSearching;
  const activeId =
    activeSuggestion >= 0 && suggestions[activeSuggestion]
      ? `faq-suggestion-${suggestions[activeSuggestion].item.id}`
      : undefined;

  return (
    <div className="faq-search-shell">
      <div className="faq-searchbox" ref={comboRef}>
        <div className="faq-search-field">
          <svg className="faq-search-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2" />
            <path
              d="M13.5 13.5 17 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <input
            ref={inputRef}
            type="text"
            className="faq-search-input"
            placeholder="Search FAQs — try “payout”, “fees” or “payment link”"
            aria-label="Search frequently asked questions"
            role="combobox"
            aria-autocomplete="list"
            aria-expanded={showSuggestions}
            aria-controls="faq-suggestion-list"
            aria-activedescendant={activeId}
            autoComplete="off"
            value={query}
            onChange={event => {
              setQuery(event.target.value);
              setSuggestionsOpen(true);
              setActiveSuggestion(-1);
            }}
            onFocus={() => setSuggestionsOpen(true)}
            onKeyDown={handleKeyDown}
          />

          {query && (
            <button
              type="button"
              className="faq-search-clear"
              aria-label="Clear search"
              onClick={() => {
                setQuery('');
                setActiveSuggestion(-1);
                inputRef.current?.focus();
              }}
            >
              ×
            </button>
          )}
        </div>

        {showSuggestions && (
          <ul className="faq-suggestions" id="faq-suggestion-list" role="listbox">
            {suggestions.length === 0 ? (
              <li className="faq-suggestion-empty">
                No topics match “{query}”. Try a different keyword.
              </li>
            ) : (
              suggestions.map((match, index) => (
                <li key={match.item.id} role="presentation">
                  <button
                    type="button"
                    id={`faq-suggestion-${match.item.id}`}
                    role="option"
                    aria-selected={index === activeSuggestion}
                    className={`faq-suggestion ${index === activeSuggestion ? 'is-active' : ''}`}
                    onMouseEnter={() => setActiveSuggestion(index)}
                    onClick={() => revealItem(match.item.id)}
                  >
                    <span className="faq-suggestion-question">
                      <Highlight text={match.item.question} terms={terms} />
                    </span>
                    <span className="faq-suggestion-meta">
                      {getCategoryLabel(match.item.category)}
                    </span>
                    {match.excerpt && (
                      <span className="faq-suggestion-excerpt">
                        <Highlight text={match.excerpt} terms={terms} />
                      </span>
                    )}
                  </button>
                </li>
              ))
            )}
          </ul>
        )}
      </div>

      {!isSearching && (
        <div className="faq-popular">
          <span className="faq-popular-label">Popular:</span>
          {popularSearches.map(term => (
            <button
              key={term}
              type="button"
              className="faq-popular-chip"
              onClick={() => runSearch(term)}
            >
              {term}
            </button>
          ))}
        </div>
      )}

      <div className="faq-body">
        <div className="faq-filters" role="group" aria-label="Filter by topic">
          <button
            type="button"
            className={`faq-filter ${category === 'all' ? 'is-active' : ''}`}
            onClick={() => setCategory('all')}
          >
            All topics
            <span className="faq-filter-count">
              {isSearching ? matches.length : faqItems.length}
            </span>
          </button>
          {faqCategories.map(group => {
            const count = (isSearching ? matches.map(match => match.item) : faqItems).filter(
              item => item.category === group.id,
            ).length;

            return (
              <button
                key={group.id}
                type="button"
                className={`faq-filter ${category === group.id ? 'is-active' : ''}`}
                onClick={() => setCategory(group.id)}
                disabled={isSearching && count === 0}
              >
                {group.label}
                <span className="faq-filter-count">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="faq-results">
          <p className="faq-results-summary" aria-live="polite">
            {isSearching
              ? `${results.length} ${results.length === 1 ? 'result' : 'results'} for “${query}”`
              : `Showing ${results.length} ${results.length === 1 ? 'question' : 'questions'}`}
          </p>

          {results.length === 0 ? (
            <div className="faq-empty">
              <h3 className="faq-empty-title">We couldn’t find an answer for “{query}”</h3>
              <p>
                Try a broader keyword such as “payout”, “fees” or “documents” — or reach out and
                we’ll answer it directly.
              </p>
              <a className="faq-empty-cta" href="mailto:info@bims.tech">
                Email info@bims.tech
              </a>
            </div>
          ) : (
            groupedResults.map(({ group, items }) => (
              <section key={group.id} className="faq-group" id={`topic-${group.id}`}>
                <header className="faq-group-header">
                  <h2 className="faq-group-title">{group.label}</h2>
                  <p className="faq-group-description">{group.description}</p>
                </header>

                <div className="faq-group-items">
                  {items.map(item => (
                    <FaqAccordionItem
                      key={item.id}
                      item={item}
                      terms={terms}
                      isOpen={openItems.includes(item.id)}
                      onToggle={() => toggleItem(item.id)}
                    />
                  ))}
                </div>
              </section>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
