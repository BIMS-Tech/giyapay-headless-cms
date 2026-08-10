'use client';

import { Highlight } from './Highlight';

import { FaqItem } from '@src/lib/faq/faq-data';

interface FaqAccordionItemProps {
  item: FaqItem;
  terms: string[];
  isOpen: boolean;
  onToggle: () => void;
}

export const FaqAccordionItem = ({ item, terms, isOpen, onToggle }: FaqAccordionItemProps) => (
  <article className={`faq-item ${isOpen ? 'is-open' : ''}`} id={`faq-${item.id}`}>
    <h3 className="faq-question-heading">
      <button
        type="button"
        className="faq-question"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        onClick={onToggle}
      >
        <span>
          <Highlight text={item.question} terms={terms} />
        </span>
        <span className="faq-question-icon" aria-hidden="true" />
      </button>
    </h3>

    {isOpen && (
      <div className="faq-answer" id={`faq-answer-${item.id}`}>
        {item.answer.map((block, index) => {
          if (block.type === 'p') {
            return (
              <p key={index}>
                <Highlight text={block.text} terms={terms} />
              </p>
            );
          }

          const items = block.items.map((entry, entryIndex) => (
            <li key={entryIndex}>
              <Highlight text={entry} terms={terms} />
            </li>
          ));

          return block.type === 'ol' ? <ol key={index}>{items}</ol> : <ul key={index}>{items}</ul>;
        })}
      </div>
    )}
  </article>
);
