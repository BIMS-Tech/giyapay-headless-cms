import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@src/components/shared/container';
import TranslationsProvider from '@src/components/shared/i18n/TranslationProvider';
import { Footer } from '@src/components/templates/footer';
import initTranslations from '@src/i18n';
import { defaultLocale, locales } from '@src/i18n/config';

interface PosPageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: PosPageProps): Promise<Metadata> {
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
        <section className="bg-[radial-gradient(circle_at_top,_#fff8f3,_#ffe6f3)] pb-16 pt-20 sm:pb-20 sm:pt-24 lg:pb-24 lg:pt-28">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#f97316]">
                Giyapay POS
              </p>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-[#111827] sm:text-5xl lg:text-6xl">
                Get a POS That
                <br />
                Does It All
              </h1>
              <p className="mx-auto mb-8 max-w-xl text-base text-[#4b5563] sm:text-lg">
                Upgrade your POS with GiyaPay. Sell smarter, track sharper, and get paid quicker
                with real-time reporting and seamless payments in one dashboard.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Link
                  href="https://calendly.com/salesbimstech/60min-1"
                  target="_blank"
                  className="text-white inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#fa9f42] to-[#f03b6e] px-8 py-3 text-sm font-semibold tracking-wide shadow-lg shadow-[#f03b6e]/30 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] focus-visible:ring-offset-2 focus-visible:ring-offset-[#ffe6f3]"
                >
                  Schedule a Demo
                </Link>
              </div>
            </div>

            <div className="mt-16 flex justify-center">
              <div className="relative w-full max-w-5xl">
                <div className="from-white to-transparent pointer-events-none absolute inset-x-10 bottom-0 h-28 bg-gradient-to-t" />
                <Image
                  src="/pos/hero.png"
                  alt="GiyaPay POS dashboard"
                  width={1024}
                  height={600}
                  priority
                  className="h-auto w-full rounded-[2.25rem] shadow-[0_32px_90px_rgba(240,59,110,0.35)] ring-1 ring-[#ffd1e3]"
                />
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
                How GiyaPay Integration Works
              </h2>
              <p className="mx-auto max-w-2xl text-sm text-[#4b5563] sm:text-base">
                Plug GiyaPay into your existing POS and start accepting cards and e‑wallets in just
                a few simple steps.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                {
                  title: 'Connect your POS',
                  body: 'Link GiyaPay to your existing POS or cloud system without disrupting daily operations.',
                },
                {
                  title: 'Start accepting payments',
                  body: 'Enable cards and e‑wallets so customers can pay however they like—online or in‑store.',
                },
                {
                  title: 'Track everything in one place',
                  body: 'View transactions, fees, and settlements in a unified dashboard that updates in real time.',
                },
              ].map(item => (
                <div
                  key={item.title}
                  className="flex flex-col items-start rounded-2xl border border-[#e5e7eb] bg-[#f9fafb] p-6"
                >
                  <div className="text-white mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#fa9f42] to-[#f97316] text-sm font-semibold">
                    {item.title.split(' ')[0]}
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-[#111827] sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#4b5563]">{item.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="text-white bg-gradient-to-b from-[#ffedd5] via-[#f97316] to-[#ec4899] py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Supercharge your POS
              </h2>
              <p className="mx-auto max-w-2xl text-sm text-[#fee2e2] sm:text-base">
                Add powerful payment and reporting features to the POS you already use so you can
                serve more customers, faster.
              </p>
            </div>

            <div className="mt-14 grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
              <div className="order-2 space-y-4 text-sm sm:text-base lg:order-1">
                <div>
                  <h3 className="mb-1 text-base font-semibold sm:text-lg">Lower queues</h3>
                  <p className="text-[#fef2f2]">
                    Speed up checkout with streamlined payment flows that reduce taps and errors.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-base font-semibold sm:text-lg">Smarter decisions</h3>
                  <p className="text-[#fef2f2]">
                    Understand peak hours, top products, and branch performance with clear reports.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-base font-semibold sm:text-lg">
                    Flexible payment options
                  </h3>
                  <p className="text-[#fef2f2]">
                    Let customers pay via cards, QR, or e‑wallets without stitching together
                    different systems.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-base font-semibold sm:text-lg">Built for scale</h3>
                  <p className="text-[#fef2f2]">
                    Whether you have one location or many branches, GiyaPay grows with your
                    business.
                  </p>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative mx-auto h-64 w-64 max-w-xs rounded-full bg-gradient-to-tr from-[#f97316] via-[#ec4899] to-[#f97316] p-[2px] shadow-2xl">
                  <div className="bg-white/95 relative h-full w-full overflow-hidden rounded-full">
                    <Image
                      src="/images/payment-links.png"
                      alt="GiyaPay POS in action"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#f9fafb] py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
                Why Choose GiyaPay&apos;s Integration
              </h2>
              <p className="mx-auto max-w-2xl text-sm text-[#4b5563] sm:text-base">
                We combine deep integration experience with reliable infrastructure so your teams
                can deploy with confidence.
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div className="bg-white rounded-3xl p-6 shadow-sm ring-1 ring-[#e5e7eb]">
                <div className="relative mb-5 h-44 w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/images/giyapay_image3.jpg"
                    alt="Proven success in integration"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[#111827] sm:text-xl">
                  Proven Success in Integration
                </h3>
                <p className="text-sm text-[#4b5563] sm:text-base">
                  GiyaPay powers payment experiences for businesses across retail, services, and
                  government projects—so your POS rollout starts on solid ground.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-sm ring-1 ring-[#e5e7eb]">
                <div className="relative mb-5 h-44 w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/images/dashboard-alt.png"
                    alt="Unmatched technical capabilities"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[#111827] sm:text-xl">
                  Unmatched Technical Capabilities
                </h3>
                <p className="text-sm text-[#4b5563] sm:text-base">
                  From secure APIs to real‑time monitoring, our platform is engineered for uptime,
                  resilience, and compliance.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
                  See the Tech for Yourself
                </h2>
                <p className="mb-4 text-sm text-[#4b5563] sm:text-base">
                  Explore how GiyaPay POS connects your payment channels, branches, and dashboards
                  in a single secure ecosystem.
                </p>
                <p className="mb-6 text-sm text-[#4b5563] sm:text-base">
                  Our team walks you through live demos tailored to your current POS setup—so you
                  can see exactly how GiyaPay fits into your operations.
                </p>
                <Link
                  href="https://calendly.com/salesbimstech/60min-1"
                  target="_blank"
                  className="text-white hover:bg-black inline-flex items-center justify-center rounded-lg bg-[#111827] px-6 py-3 text-sm font-semibold shadow-sm transition"
                >
                  Book a Technical Demo
                </Link>
              </div>

              <div className="relative h-72 w-full overflow-hidden rounded-3xl bg-[#0f172a]">
                <Image
                  src="/images/payment-links.png"
                  alt="GiyaPay POS hardware and dashboard"
                  fill
                  className="object-cover opacity-90"
                />
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-gradient-to-r from-[#f97316] to-[#ec4899] py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="bg-white/5 ring-white/10 mx-auto max-w-3xl rounded-3xl p-8 text-center shadow-lg ring-1 sm:p-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#fee2e2]">
                Not sure yet?
              </p>
              <h2 className="text-white mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Not sure if GiyaPay will work with your POS?
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-sm text-[#fee2e2] sm:text-base">
                Share your current setup and we&apos;ll show you how GiyaPay can plug in—with no
                pressure and no obligation.
              </p>
              <Link
                href="https://calendly.com/salesbimstech/60min-1"
                target="_blank"
                className="bg-white inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold text-[#ec4899] shadow-md transition hover:bg-[#f9fafb]"
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
