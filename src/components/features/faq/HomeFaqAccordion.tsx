'use client';

import { useState } from 'react';

import { FaqAccordionItem } from './FaqAccordionItem';

import { faqItems } from '@src/lib/faq/faq-data';

/** Questions surfaced in the landing page FAQ teaser. */
const HIGHLIGHTED_IDS = ['similar-to-e-wallets', 'how-secure', 'no-website'];

const highlighted = HIGHLIGHTED_IDS.map(id => faqItems.find(item => item.id === id)).filter(
  (item): item is (typeof faqItems)[number] => Boolean(item),
);

export default function HomeFaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(highlighted[0]?.id ?? null);

  return (
    <div className="faq-home-list">
      {highlighted.map(item => (
        <FaqAccordionItem
          key={item.id}
          item={item}
          terms={[]}
          isOpen={openId === item.id}
          onToggle={() => setOpenId(current => (current === item.id ? null : item.id))}
        />
      ))}
    </div>
  );
}
