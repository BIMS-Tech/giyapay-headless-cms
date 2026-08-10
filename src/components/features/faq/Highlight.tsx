import { Fragment } from 'react';

import { splitOnTerms } from '@src/lib/faq/search';

interface HighlightProps {
  text: string;
  terms: string[];
}

/** Renders text with the searched terms wrapped in <mark>. */
export const Highlight = ({ text, terms }: HighlightProps) => (
  <>
    {splitOnTerms(text, terms).map((chunk, index) => (
      <Fragment key={`${chunk.text}-${index}`}>
        {chunk.hit ? <mark className="faq-mark">{chunk.text}</mark> : chunk.text}
      </Fragment>
    ))}
  </>
);
