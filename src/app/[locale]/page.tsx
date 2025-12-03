import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import FixedBanner from '@src/components/FixedBanner';
import { Container } from '@src/components/shared/container';
import TranslationsProvider from '@src/components/shared/i18n/TranslationProvider';
import initTranslations from '@src/i18n';
import { defaultLocale, locales } from '@src/i18n/config';

interface LandingPageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params: _params }: LandingPageProps): Promise<Metadata> {
  const languages = Object.fromEntries(
    locales.map(locale => [locale, locale === defaultLocale ? '/' : `/${locale}`]),
  );
  const metadata: Metadata = {
    title: 'GiyaPay - Your complete payment solution.',
    description:
      'Accept major debit/credit cards and other popular payment methods to offer a seamless check out experience. Manage your entire business, payments and payouts – right from your dashboard. GiyaPay is an easy-to-use online payment solution that provides easy-set-up and consolidated reports for your business.',
    alternates: {
      canonical: '/',
      languages: languages,
    },
  };

  return metadata;
}

export default async function Page({ params: { locale } }: LandingPageProps) {
  const { resources } = await initTranslations({ locale });

  return (
    <TranslationsProvider locale={locale} resources={resources}>
      <div className="min-h-screen">
        {/* Fixed Bottom Banner */}
        <FixedBanner />

        {/* Hero Section - White Background with Gradient Text */}
        <section className="hero-gradient-section">
          {/* Hero Title */}
          <div className="hero-title-container">
            <h1 className="hero-title-large">
              Your complete
              <br />
              payment solution.
            </h1>
          </div>
        </section>

        {/* Gradient Wave Section with Devices, Content and Buttons */}
        <section className="hero-gradient-wave-section">
          {/* Devices Image */}
          <div className="hero-devices-container">
            <div className="hero-devices-wrapper">
              <Image
                src="/images/Group-42535.png"
                alt="GiyaPay payment solution devices"
                width={858}
                height={600}
                className="hero-devices-image"
                priority
              />
            </div>
          </div>

          {/* Content Text and Buttons */}
          <div className="hero-content-container">
            <div className="hero-content-text">
              <p>
                Accept major debit/credit cards and other popular payment methods to offer a
                seamless check out experience. Manage your entire business, payments and payouts –
                right from your dashboard.
              </p>
              <p>
                GiyaPay is an easy-to-use online payment solution that provides easy-set-up and
                consolidated reports for your business.
              </p>
            </div>
            <div className="hero-content-buttons">
              <Link
                href="https://calendly.com/salesbimstech/60min-1?back=1&month=2021-10"
                target="_blank"
                className="btn-white-solid"
              >
                Request a Demo
              </Link>
              <Link href="#features" className="btn-white-outline">
                See Features ↘
              </Link>
            </div>
          </div>
        </section>

        {/* Payment Partners */}
        <section className="payment-partners">
          <Container>
            <div className="text-center">
              <h2 className="h2 fade-in mb-6">Our Payment Partners</h2>
              <p className="text-gray-600 fade-in mx-auto mb-12 max-w-3xl text-xl">
                Select from a variety of payment gateways to conveniently accept payments through
                our secure and reliable online payment solution. It is as easy as one click of a
                button.
              </p>
              <div className="partners-grid fade-in">
                <Image
                  src="/images/visa.png"
                  alt="Visa"
                  width={80}
                  height={50}
                  className="partner-logo"
                />
                <Image
                  src="/images/mastercard.png"
                  alt="Mastercard"
                  width={80}
                  height={50}
                  className="partner-logo"
                />
                <Image
                  src="/images/shopee.png"
                  alt="Shopee Pay"
                  width={80}
                  height={50}
                  className="partner-logo"
                />
                <Image
                  src="/images/wechat.png"
                  alt="WeChat Pay"
                  width={80}
                  height={50}
                  className="partner-logo"
                />
                <Image
                  src="/images/gcash.png"
                  alt="GCash"
                  width={80}
                  height={50}
                  className="partner-logo"
                />
                <Image
                  src="/images/alipay.png"
                  alt="Alipay"
                  width={80}
                  height={50}
                  className="partner-logo"
                />
                <Image
                  src="/images/grab.png"
                  alt="Grab Pay"
                  width={80}
                  height={50}
                  className="partner-logo"
                />
                <Image
                  src="/images/instapay.png"
                  alt="InstaPay"
                  width={80}
                  height={50}
                  className="partner-logo"
                />
                <Image
                  src="/images/qr-ph.png"
                  alt="QR PH"
                  width={80}
                  height={50}
                  className="partner-logo"
                />
                <Image
                  src="/images/union-pay.png"
                  alt="UnionPay"
                  width={80}
                  height={50}
                  className="partner-logo"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* What We Can Do Section */}
        <section className="section-padding from-orange-400 to-pink-500 text-white bg-gradient-to-r">
          <Container>
            <div className="max-w-4xl">
              <h2 className="h2 fade-right mb-6">What We Can Do For You</h2>
              <p className="fade-right text-xl leading-relaxed">
                We enable you to accept online payments without the complexity of set-up
                requirements while providing a good customer service.
              </p>
            </div>
          </Container>
        </section>

        {/* Features Section */}
        <section id="features" className="features-section">
          <Container>
            <div className="mb-16 text-center">
              <h4 className="text-gray-500 mb-4 text-sm font-semibold uppercase tracking-wider">
                FEATURES
              </h4>
              <h2 className="h2">How Are We Different?</h2>
            </div>

            {/* Feature 1 - Flexible */}
            <div className="mb-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="fade-right">
                <Image
                  src="/images/flexible.png"
                  alt="Flexible Payment"
                  width={650}
                  height={500}
                  className="h-auto w-full"
                />
              </div>
              <div className="fade-left">
                <h3 className="mb-4 text-5xl font-bold">
                  <span className="gradient-text">Flexible.</span>
                </h3>
                <h3 className="mb-6 text-5xl font-bold">
                  Choose how you want to accept online payments.
                </h3>
                <p className="text-gray-600 text-xl leading-relaxed">
                  Our basic and add-on features designed to address your specific requirements and
                  needs.
                </p>
              </div>
            </div>

            {/* Feature 2 - Simple */}
            <div className="mb-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="fade-right order-2 lg:order-1">
                <h3 className="mb-4 text-5xl font-bold">
                  <span className="gradient-text">Simple.</span>
                </h3>
                <h3 className="mb-6 text-5xl font-bold">Seamless User Journey</h3>
                <p className="text-gray-600 text-xl leading-relaxed">
                  Reduce abandoned carts and boost your sales with a streamlined check out. Let
                  customers pay for your products and services without ever leaving your site.
                </p>
              </div>
              <div className="fade-left order-1 lg:order-2">
                <Image
                  src="/images/steps.png"
                  alt="Simple Steps"
                  width={600}
                  height={400}
                  className="h-auto w-full"
                />
              </div>
            </div>

            {/* Feature 3 - Dashboard */}
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="fade-right">
                <Image
                  src="/images/dashboard-alt.png"
                  alt="Dashboard"
                  width={600}
                  height={600}
                  className="h-auto w-full"
                />
              </div>
              <div className="fade-left">
                <h3 className="mb-4 text-5xl font-bold">
                  <span className="gradient-text">Dashboard.</span>
                </h3>
                <h3 className="mb-6 text-5xl font-bold">
                  Integrated <br />
                  Payment Dashboard.
                </h3>
                <p className="text-gray-600 text-xl leading-relaxed">
                  Keep track of all payment statuses from a single dashboard and easily download
                  transaction reports when needed.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="section-padding bg-gray-50">
          <Container>
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="fade-in">
                <h2 className="h2 mb-6">Competitive Pricing</h2>
                <p className="text-gray-600 mb-8 text-xl leading-relaxed">
                  We offer flexible transaction and processing fees based on your business
                  transactions.
                </p>
                <Link href="#demo" className="btn-primary">
                  Get a Quote
                </Link>
              </div>
              <div className="fade-left">
                <Image
                  src="/images/processing-fees.png"
                  alt="Processing Fees"
                  width={748}
                  height={500}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* Payment Links Section */}
        <section className="section-padding from-orange-400 to-pink-500 text-white bg-gradient-to-r">
          <Container>
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="fade-right">
                <Image
                  src="/images/payment-links.png"
                  alt="Payment Links"
                  width={513}
                  height={400}
                  className="h-auto w-full"
                />
              </div>
              <div className="fade-left">
                <h4 className="text-pink-200 mb-4 text-lg font-semibold">GIYAPAY PAYMENT LINKS</h4>
                <h2 className="h2 mb-6">
                  Don&apos;t have a website?
                  <br />
                  That&apos;s okay!
                </h2>
                <p className="mb-8 text-xl leading-relaxed">
                  Get paid via Chat, SMS, and Email using GiyaPay&apos;s Payment links.
                </p>
                <div className="mb-8 flex gap-4">
                  <Image src="/images/tg.png" alt="Telegram" width={40} height={40} />
                  <Image src="/images/Messenger_4_.png" alt="Messenger" width={40} height={40} />
                  <Image src="/images/viber.png" alt="Viber" width={40} height={40} />
                  <Image src="/images/android-msg.png" alt="SMS" width={40} height={40} />
                  <Image src="/images/Symbols_6_.png" alt="Email" width={40} height={40} />
                  <Image
                    src="/images/WhatsApp-Logo-Icon.png"
                    alt="WhatsApp"
                    width={40}
                    height={40}
                  />
                </div>
                <Link
                  href="#demo"
                  className="bg-black text-white hover:bg-gray-800 inline-block rounded-lg px-8 py-4 font-semibold transition-colors duration-200"
                >
                  Try Payment Link
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Social Proof */}
        <section className="social-proof">
          <Container>
            <h2 className="h2 mb-12 text-center">Businesses that Trust Us</h2>
            <div className="logo-group">
              <Image
                src="/images/IAU.png"
                alt="IAU"
                width={120}
                height={60}
                className="client-logo"
              />
              <Image
                src="/images/Papa-Diddi_s---Brand-Logo---on-White-1.png"
                alt="Papa Diddi's"
                width={200}
                height={60}
                className="client-logo"
              />
              <Image
                src="/images/CCTN.png"
                alt="CCTN"
                width={120}
                height={60}
                className="client-logo"
              />
              <Image
                src="/images/airworks-logo-png.png"
                alt="Airworks"
                width={120}
                height={60}
                className="client-logo"
              />
              <Image
                src="/images/mr-quickie.png"
                alt="Mr. Quickie Corp"
                width={120}
                height={60}
                className="client-logo"
              />
            </div>
            <div className="logo-group">
              <Image
                src="/images/blocxy.png"
                alt="Blocxy"
                width={120}
                height={60}
                className="client-logo"
              />
              <Image
                src="/images/mmda.png"
                alt="MMDA"
                width={120}
                height={60}
                className="client-logo"
              />
              <Image
                src="/images/icore-tech.png"
                alt="iCore Technologies"
                width={120}
                height={60}
                className="client-logo"
              />
            </div>
          </Container>
        </section>

        {/* Featured Article */}
        <section className="section-padding bg-gray-50">
          <Container>
            <h2 className="h2 mb-12 text-center">Featured Article</h2>
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <Image
                src="/images/giyapay_image3.jpg"
                alt="Featured Article"
                width={694}
                height={400}
                className="h-auto w-full rounded-lg"
              />
              <div>
                <h3 className="h3 mb-4">
                  Payment Gateways, Merchant Accounts, and More: Is There An Easier Process?
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  2020 – a year filled with uncertainty, adversity, and surprises. All industries
                  suffered massive losses, adjusted to ever-shifting consumer needs, and confronted
                  both the ugly and inspiring sides of change. Despite these, humanity has proven
                  one thing: when push comes to shove, we do what we must to adjust. One of the
                  biggest changes this year has been the (close to) complete transition into
                  e-commerce. Most people who have access to stable internet connection and working
                  gadgets have dabbled in online shopping, whether as a consumer or as a product or
                  service provider.
                </p>
                <Link
                  href={`/${locale}/blog`}
                  className="text-pink-500 font-semibold hover:underline"
                >
                  Read more
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="faq-section">
          <Container>
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
              <div>
                <h2 className="faq-title text-white">Having trouble? We&apos;re here for you.</h2>
                <div className="space-y-4">
                  <div className="accordion-item">
                    <button className="accordion-trigger">
                      Is GiyaPay similar to e-wallets?
                      <span>+</span>
                    </button>
                    <div className="accordion-content">
                      GiyaPay is not similar to e-wallets. There is no need for the payor to create
                      an account, download an application or register to its service unlike
                      e-wallets. GiyaPay just needs to activate your Merchant Account, integrate our
                      hosted payment button in your website, and you can easily start to accept
                      payments from various payment channels!
                    </div>
                  </div>
                  <div className="accordion-item">
                    <button className="accordion-trigger">
                      How secure is GiyaPay?
                      <span>+</span>
                    </button>
                    <div className="accordion-content">
                      Giyapay uses an SSL encrypted website and is PCI-DSS Compliant. Each payment
                      gateway has their respective security protocols, including possible 2MFA and
                      OTP, which will be at the discretion and responsibility of the Payment
                      Gateway.
                    </div>
                  </div>
                  <div className="accordion-item">
                    <button className="accordion-trigger">
                      Can I use GiyaPay if I do not have a website?
                      <span>+</span>
                    </button>
                    <div className="accordion-content">
                      Yes, through our Payment Link feature. As for the GiyaPay button, we would
                      recommend having a hosted domain or a centralized payment page where we could
                      attach the GiyaPay button for your payors to pay. We may provide this simple
                      page for you, or we may coordinate with the team who built your website to
                      provide this for you.
                    </div>
                  </div>
                </div>
                <Link href="/faq" className="text-white mt-6 inline-block underline">
                  — Visit FAQ page for a list of all Frequently Asked Questions
                </Link>
              </div>
              <div className="fade-left">
                <Image
                  src="/images/support.png"
                  alt="Support"
                  width={565}
                  height={400}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-white">
          <Container>
            <div className="relative text-center">
              <div className="mb-8 flex items-center justify-center gap-8">
                <Image
                  src="/images/📱-iPad.png"
                  alt="iPad"
                  width={300}
                  height={200}
                  className="fade-right"
                />
                <Image
                  src="/images/💻--Macbook.png"
                  alt="MacBook"
                  width={400}
                  height={250}
                  className="fade-left"
                />
              </div>
              <div className="fade-in">
                <h4 className="text-gray-500 mb-4 text-sm font-semibold uppercase tracking-wider">
                  ENOUGH TALK, LET&apos;S WORK TOGETHER
                </h4>
                <h2 className="h2 mb-8">Let&apos;s talk and see how we can help.</h2>
                <Link href="#demo" className="btn-primary">
                  Get Started with GiyaPay
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Newsletter Section */}
        <section className="section-padding bg-gray-900 text-white">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-6 flex items-center justify-center">
                <div className="bg-gray-600 h-px flex-1" />
                <span className="text-gray-400 px-4 text-sm font-semibold uppercase tracking-wider">
                  STAY TUNED
                </span>
                <div className="bg-gray-600 h-px flex-1" />
              </div>
              <h3 className="h3 mb-8">
                Subscribe to our newsletter and never miss our latest news, offers and discounts.
              </h3>
              <form className="mx-auto flex max-w-lg flex-col gap-4 sm:flex-row">
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-gray-800 text-white border-gray-700 focus:border-pink-500 flex-1 rounded border px-4 py-3 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="bg-gray-800 text-white border-gray-700 focus:border-pink-500 flex-1 rounded border px-4 py-3 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="email@email.com"
                  className="bg-gray-800 text-white border-gray-700 focus:border-pink-500 flex-1 rounded border px-4 py-3 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-white text-gray-900 hover:bg-gray-100 rounded px-6 py-3 font-semibold transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </Container>
        </section>

        {/* Footer */}
        <footer className="footer">
          <Container>
            <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
              <div>
                <Image
                  src="/images/giyapay-white.png"
                  alt="GiyaPay"
                  width={150}
                  height={40}
                  className="mb-4"
                />
                <p className="text-gray-400 text-sm">
                  17th Floor, KMC, Skyrise 4B, Geonzon Street,
                  <br />
                  Cebu IT Park, Cebu City, 6000
                </p>
              </div>
              <div>
                <h4 className="footer-title">Menu</h4>
                <div className="space-y-2">
                  <Link href="/" className="footer-link">
                    Home
                  </Link>
                  <Link href="#contact" className="footer-link">
                    Contact
                  </Link>
                  <Link href={`/${locale}/blog`} className="footer-link">
                    Blog
                  </Link>
                  <Link href="#faq" className="footer-link">
                    FAQ
                  </Link>
                  <Link href="/privacy-policy" className="footer-link">
                    Privacy Policy
                  </Link>
                </div>
              </div>
              <div>
                <h4 className="footer-title">Follow Us</h4>
                <div className="flex gap-4">
                  <Link href="https://www.facebook.com/GiyaPay" target="_blank">
                    <Image src="/images/fb.png" alt="Facebook" width={25} height={25} />
                  </Link>
                  <Link href="https://www.instagram.com/giyapay/" target="_blank">
                    <Image src="/images/ig.png" alt="Instagram" width={25} height={25} />
                  </Link>
                  <Link
                    href="https://www.youtube.com/channel/UCV8M_KPE5i75L_ne1KuARSA"
                    target="_blank"
                  >
                    <Image src="/images/youtube-2.png" alt="YouTube" width={25} height={25} />
                  </Link>
                </div>
              </div>
              <div>
                <h4 className="footer-title">Contact Us</h4>
                <Link href="mailto:info@bims.tech" className="footer-link">
                  info@bims.tech
                </Link>
              </div>
            </div>
            <div className="border-gray-800 border-t pt-8">
              <p className="text-gray-400 text-center text-sm">
                Copyright © 2021 GiyaPay is a product of BIMS Technologies, Inc.
              </p>
            </div>
          </Container>
        </footer>
      </div>
    </TranslationsProvider>
  );
}
