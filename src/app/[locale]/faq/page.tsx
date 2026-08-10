import type { Metadata } from 'next';
import Link from 'next/link';

import { FaqSearch } from '@src/components/features/faq';
import { Container } from '@src/components/shared/container';
import TranslationsProvider from '@src/components/shared/i18n/TranslationProvider';
import { Footer } from '@src/components/templates/footer';
import initTranslations from '@src/i18n';
import { defaultLocale, locales } from '@src/i18n/config';
import { faqItems } from '@src/lib/faq/faq-data';

interface FaqPageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata(_props: FaqPageProps): Promise<Metadata> {
  const languages = Object.fromEntries(
    locales.map(locale => [locale, locale === defaultLocale ? '/faq' : `/${locale}/faq`]),
  );

  return {
    title: 'GiyaPay FAQ - Search Frequently Asked Questions',
    description:
      'Search the GiyaPay FAQ by keyword to find answers on pricing and transaction fees, account activation requirements, payment links, payouts and settlement, reports, refunds and security.',
    alternates: {
      canonical: '/faq',
      languages,
    },
  };
}

/** FAQPage structured data so answers can surface directly in search results. */
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer
        .map(block => (block.type === 'p' ? block.text : block.items.join(' ')))
        .join(' '),
    },
  })),
};

export default async function FaqPage({ params: { locale } }: FaqPageProps) {
  const { resources } = await initTranslations({ locale });

  return (
    <TranslationsProvider locale={locale} resources={resources}>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="bg-white min-h-screen">
        <section className="faq-hero">
          <Container>
            <p className="faq-hero-eyebrow">Help Center</p>
            <h1 className="faq-hero-title">Frequently Asked Questions</h1>
            <p className="faq-hero-subtitle">
              Search by keyword and we&apos;ll suggest the topics that match as you type — no need
              to open every section.
            </p>
          </Container>
        </section>

        <section className="faq-main">
          <Container>
            <FaqSearch />
          </Container>
        </section>

        <section className="faq-contact">
          <Container>
            <div className="faq-contact-card">
              <div>
                <h2 className="faq-contact-title">Still have questions?</h2>
                <p className="faq-contact-text">
                  Our team is happy to walk you through GiyaPay and answer anything this page
                  didn&apos;t cover.
                </p>
              </div>
              <div className="faq-contact-actions">
                <Link
                  href="https://calendly.com/salesbimstech/60min-1?back=1&month=2021-10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="faq-contact-primary"
                >
                  Talk to us
                </Link>
                <a href="mailto:info@bims.tech" className="faq-contact-secondary">
                  info@bims.tech
                </a>
              </div>
            </div>
          </Container>
        </section>

        <Footer />
      </div>
    </TranslationsProvider>
  );
}
