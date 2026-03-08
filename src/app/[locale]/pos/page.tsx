import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@src/components/shared/container';
import TranslationsProvider from '@src/components/shared/i18n/TranslationProvider';
import { Footer } from '@src/components/templates/footer';
import GiyaPayHeader from '@src/components/templates/header/GiyaPayHeader';
import initTranslations from '@src/i18n';
import { defaultLocale, locales } from '@src/i18n/config';

interface PosPageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata(_props: PosPageProps): Promise<Metadata> {
  const languages = Object.fromEntries(
    locales.map(locale => [locale, locale === defaultLocale ? '/pos' : `/${locale}/pos`]),
  );

  const metadata: Metadata = {
    title: 'GiyaPay POS - Get a POS That Does It All',
    description:
      'Upgrade your point-of-sale with GiyaPay POS. Sell smarter, track sharper, and get paid quicker with a modern POS that connects payments and reporting in one place.',
    alternates: {
      canonical: '/pos',
      languages,
    },
  };

  return metadata;
}

export default async function PosPage({ params: { locale } }: PosPageProps) {
  const { resources } = await initTranslations({ locale });

  return (
    <TranslationsProvider locale={locale} resources={resources}>
      <div className="bg-white min-h-screen">
        <GiyaPayHeader locale={locale} />

        {/* ── HERO ── */}
        <section
          className="relative overflow-hidden pb-0 pt-28"
          style={{
            background: 'linear-gradient(160deg, #FFF4E0 0%, #FFE0EC 55%, #ffffff 100%)',
          }}
        >
          {/* Text block – constrained width */}
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h1 className="mb-5 text-5xl font-bold leading-tight tracking-tight text-[#111827] sm:text-5xl lg:text-5xl">
              Get a POS That Does It All
            </h1>
            <p className="mx-auto mb-9 max-w-lg text-base text-[#6b7280] sm:text-lg">
              Upgrade your POS with GiyaPay. Sell smarter, track sharper, get paid quicker
            </p>
            <Link
              href="https://calendly.com/salesbimstech/60min-1"
              target="_blank"
              className="inline-flex items-center justify-center rounded-lg px-8 py-3 text-sm font-medium shadow-sm transition"
              style={{ backgroundColor: '#e8518a', color: '#ffffff' }}
            >
              Schedule a Demo
            </Link>
          </div>

          {/* Dashboard screenshot – full section width */}
          <div className="mt-16">
            <Image
              src="/pos/hero.png"
              alt="GiyaPay POS dashboard"
              width={1280}
              height={780}
              priority
              className="h-auto w-full"
            />
          </div>
        </section>

        {/* ── HOW INTEGRATION WORKS ── */}
        <section className="bg-[#f7f8fa] py-16 sm:py-20">
          <Container>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
                How GiyaPay Integration Works
              </h2>
            </div>

            <div className="grid gap-10 md:grid-cols-3">
              {/* Step 1 */}
              <div className="flex flex-row items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#fcd3a8] bg-[#fff3ea]">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12.5C7.76 9.74 11.18 8.5 12 8.5s4.24 1.24 7 4"
                      stroke="#f97316"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M2 9C5.52 5.48 8.5 4 12 4s6.48 1.48 10 5"
                      stroke="#f97316"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8 15.5c1.1-1.1 2.5-1.8 4-1.8s2.9.7 4 1.8"
                      stroke="#f97316"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <circle cx="12" cy="19" r="1.2" fill="#f97316" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-[#111827] sm:text-lg">
                  Connect GiyaPay To Your POS
                </h3>
              </div>

              {/* Step 2 */}
              <div className="flex flex-row items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#fcd3a8] bg-[#fff3ea]">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <rect
                      x="2"
                      y="6"
                      width="20"
                      height="13"
                      rx="2"
                      stroke="#f97316"
                      strokeWidth="1.8"
                    />
                    <path d="M2 10h20" stroke="#f97316" strokeWidth="1.8" />
                    <path d="M6 14h4" stroke="#f97316" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-[#111827] sm:text-lg">
                  Start Accepting Payments From All Major Banks And Payment Gateways
                </h3>
              </div>

              {/* Step 3 */}
              <div className="flex flex-row items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#fcd3a8] bg-[#fff3ea]">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <rect
                      x="3"
                      y="3"
                      width="7"
                      height="7"
                      rx="1"
                      stroke="#f97316"
                      strokeWidth="1.8"
                    />
                    <rect
                      x="14"
                      y="3"
                      width="7"
                      height="7"
                      rx="1"
                      stroke="#f97316"
                      strokeWidth="1.8"
                    />
                    <rect
                      x="3"
                      y="14"
                      width="7"
                      height="7"
                      rx="1"
                      stroke="#f97316"
                      strokeWidth="1.8"
                    />
                    <rect
                      x="14"
                      y="14"
                      width="7"
                      height="7"
                      rx="1"
                      stroke="#f97316"
                      strokeWidth="1.8"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-[#111827] sm:text-lg">
                  Track Everything In One Dashboard
                </h3>
              </div>
            </div>
          </Container>
        </section>

        {/* ── SUPERCHARGE YOUR POS ── */}
        <section>
          {/* Gradient header band */}
          <div className="bg-gradient-to-r from-[#fa9f42] to-[#f03b6e] py-20 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: '#ffffff' }}>
              Supercharge your POS
            </h2>
            <p
              className="mx-auto mt-3 max-w-xl text-sm sm:text-base"
              style={{ color: 'rgba(255,255,255,0.85)' }}
            >
              It&apos;s time to reimagine what your POS can do. Talk to our client support team and
              see what possibilities are in store for your business.
            </p>
          </div>

          {/* middle.png – full natural width / height (1291 × 696) */}
          <div className="bg-white py-12 sm:py-16">
            <div className="mx-auto px-6 sm:px-10 lg:px-16" style={{ maxWidth: '1291px' }}>
              <Image
                src="/pos/middle.png"
                alt="GiyaPay POS supercharge diagram"
                width={1291}
                height={696}
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE GIYAPAY'S INTEGRATION ── */}
        <section className="bg-white py-16 sm:py-20">
          <Container>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="mb-3 text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
                Why Choose GiyaPay&apos;s Integration
              </h2>
              <p className="text-sm text-[#4b5563] sm:text-base">
                Connect your POS with GiyaPay to widen your sales funnel and enhance your accounting
                workflow.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Card 1 */}
              <div className="pos-why-card">
                <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                  Proven Success In Integration
                </h3>
                <p className="mb-6 text-sm">
                  We&apos;ve successfully integrated payment systems across diverse platforms, and
                  we&apos;re ready to replicate that success for you.
                </p>
                <Image
                  src="/pos/card1.png"
                  alt="Proven success in integration"
                  width={439}
                  height={293}
                  className="pos-why-card-img h-auto w-full rounded-xl"
                />
              </div>

              {/* Card 2 */}
              <div className="pos-why-card">
                <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                  Unmatched Technical Capabilities
                </h3>
                <p className="mb-6 text-sm">
                  We&apos;ve successfully integrated payment systems across diverse platforms, and
                  we&apos;re ready to replicate that success for you.
                </p>
                <Image
                  src="/pos/card2.png"
                  alt="Unmatched technical capabilities"
                  width={439}
                  height={293}
                  className="pos-why-card-img h-auto w-full rounded-xl"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* ── SEE THE TECH FOR YOURSELF ── */}
        <section className="bg-[#f7f8fa] py-16 sm:py-20">
          <Container>
            <div className="grid items-center gap-10 md:grid-cols-[2fr_3fr]">
              {/* Left image – card3.png */}
              <Image
                src="/pos/card3.png"
                alt="GiyaPay POS technology"
                width={600}
                height={429}
                className="h-auto w-full rounded-2xl"
              />

              {/* Right text */}
              <div>
                <h2 className="mb-4 text-4xl font-bold tracking-tight text-[#111827] sm:text-5xl">
                  See the Tech for Yourself
                </h2>
                <p className="mb-6 text-left text-sm text-[#4b5563] sm:text-base">
                  Sell faster, get paid faster, and track effortlessly. Discover how zerpos upgraded
                  their POS terminals with GiyaPay.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* ── CTA – NOT SURE ── */}
        <section className="relative py-20 sm:py-24">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/pos/giyapay-blog.png"
              alt="Background"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#fa9f42]/70 to-[#f03b6e]/70" />
          </div>

          <Container className="relative z-10">
            <div
              className="mx-auto max-w-5xl rounded-2xl px-8 py-12 text-center sm:px-16"
              style={{ backgroundColor: '#ffffff' }}
            >
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-[#111827] sm:text-3xl lg:text-4xl">
                Not sure if <span className="text-[#f97316]">GiyaPay</span> will work with your POS?
              </h2>
              <p className="mx-auto mb-8 max-w-md text-sm text-[#4b5563] sm:text-base">
                Our client support team will walk you through the technical and business ends of
                GiyaPay&apos;s integration into your POS.
              </p>
              <Link
                href="https://calendly.com/salesbimstech/60min-1"
                target="_blank"
                className="inline-flex items-center justify-center rounded-lg px-10 py-3 text-sm font-semibold shadow-lg transition"
                style={{
                  background: 'linear-gradient(to right, #fa9f42, #f03b6e)',
                  color: '#ffffff',
                }}
              >
                Schedule a Demo
              </Link>
            </div>
          </Container>
        </section>

        <Footer />
      </div>
    </TranslationsProvider>
  );
}
