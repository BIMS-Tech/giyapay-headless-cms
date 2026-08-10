import { dir } from 'i18next';
import type { Metadata, Viewport } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import { draftMode } from 'next/headers';
import Script from 'next/script';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { ContentfulPreviewProvider } from '@src/components/features/contentful';
import TranslationsProvider from '@src/components/shared/i18n/TranslationProvider';
import AnimationSystem from '@src/components/AnimationSystem';
import GiyaPayHeader from '@src/components/templates/header/GiyaPayHeader';
import initTranslations from '@src/i18n';
import { locales } from '@src/i18n/config';

export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://giyapay.com'),
    title: {
      default: 'GiyaPay - Secure Payment Solutions',
      template: '%s | GiyaPay',
    },
    description:
      'GiyaPay offers secure, fast, and reliable payment solutions for businesses of all sizes.',
    twitter: {
      card: 'summary_large_image',
    },
  };
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export async function generateStaticParams(): Promise<LayoutProps['params'][]> {
  return locales.map(locale => ({ locale }));
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const allowedOriginList = ['https://app.contentful.com', 'https://app.eu.contentful.com'];

interface LayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function PageLayout({ children, params }: LayoutProps) {
  const { isEnabled: preview } = draftMode();
  const { locale } = params;
  const { resources } = await initTranslations({ locale });

  return (
    <html lang={locale} dir={dir(locale)}>
      <head>
        {/* Enables the hidden starting state for scroll animations before the
            first paint, so revealing content never flashes. Skipped entirely
            when the visitor prefers reduced motion. */}
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('js-anim')}}catch(e){}`,
          }}
        />
        <link rel="icon" href="/favicons/favicon.png" type="image/png" />
        <link rel="mask-icon" href="/favicons/favicon.png" color="#5bbad5" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4SXKN758Q0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4SXKN758Q0');
          `}
        </Script>
      </head>

      <body className={`${inter.variable} ${montserrat.variable}`}>
        <TranslationsProvider locale={locale} resources={resources}>
          <ContentfulPreviewProvider
            locale={locale}
            enableInspectorMode={preview}
            enableLiveUpdates={preview}
            targetOrigin={allowedOriginList}
          >
            <GiyaPayHeader locale={locale} />
            <main>
              {children}
              <AnimationSystem />
            </main>
            <SpeedInsights />
            <div id="portal" />
          </ContentfulPreviewProvider>
        </TranslationsProvider>
      </body>
    </html>
  );
}
