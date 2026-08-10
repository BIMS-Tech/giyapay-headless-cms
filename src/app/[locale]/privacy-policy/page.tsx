import type { Metadata } from 'next';

import { Container } from '@src/components/shared/container';
import TranslationsProvider from '@src/components/shared/i18n/TranslationProvider';
import { Footer } from '@src/components/templates/footer';
import initTranslations from '@src/i18n';
import { defaultLocale, locales } from '@src/i18n/config';

interface PrivacyPolicyPageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata(_props: PrivacyPolicyPageProps): Promise<Metadata> {
  const languages = Object.fromEntries(
    locales.map(locale => [
      locale,
      locale === defaultLocale ? '/privacy-policy' : `/${locale}/privacy-policy`,
    ]),
  );

  return {
    title: 'Privacy Policy and Disclaimer',
    description:
      'How GiyaPay and BIMS Technologies, Inc. collect, use, share and retain your data, and your rights under the Philippine Data Privacy Act of 2012.',
    alternates: {
      canonical: '/privacy-policy',
      languages,
    },
  };
}

export default async function PrivacyPolicyPage({ params: { locale } }: PrivacyPolicyPageProps) {
  const { resources } = await initTranslations({ locale });

  return (
    <TranslationsProvider locale={locale} resources={resources}>
      <div className="bg-white min-h-screen">
        <section className="legal-hero">
          <Container>
            <p className="legal-hero-eyebrow">Legal</p>
            <h1 className="legal-hero-title">Privacy Policy and Disclaimer</h1>
            <p className="legal-hero-subtitle">
              How GiyaPay and BIMS Technologies, Inc. collect, use and protect your data.
            </p>
          </Container>
        </section>

        <section className="legal-main">
          <Container>
            <article className="legal-content">
              <p>
                GiyaPay/BIMS, its subsidiaries, affiliates, and authorized subcontractors may
                collect the data you provided to us, whether or not that data be personal or be
                classified as personal information/sensitive personal information under the Data
                Privacy Act of 2012. The said data collected may be shared to
                BIMS&rsquo;/GiyaPay&rsquo;s authorized agents, subsidiaries, affiliates, partners,
                and other authorized third parties.
              </p>

              <h2>How we use the data we collect</h2>
              <p>
                BIMS/GiyaPay may also use the data collected in the following manner and/or to
                undertake the following activities:
              </p>
              <ul>
                <li>
                  Conducting analysis for purposes of research and marketing initiatives, including
                  the creation of profiles based on user interests, preferences, mobility patterns,
                  and other information that may be relevant for marketing and market research
                  purposes;
                </li>
                <li>
                  Managing your account and/or experience, providing customer care activities,
                  monitoring network quality and security, staff training, and providing services in
                  a timely and efficient manner, processing user requests, enhancing customer
                  experience, and ensuring fair and lawful use of GiyaPay&rsquo;s website,
                  platforms, features, components and services;
                </li>
                <li>Generating statistical insights based on usage and other information;</li>
                <li>
                  Credit scoring programs and initiatives, including but not limited to providing
                  information to the Credit Information Corporation in furtherance of the objectives
                  of Republic Act No. 9501, otherwise known as the Credit Information System Act;
                </li>
                <li>
                  Sending commercial and promotional advertisements, loyalty and rewards offers,
                  surveys, customer-care, and after sales communications, and other promotional and
                  broadcast push messages;
                </li>
                <li>Analysis and management of commercial and other risks;</li>
                <li>Legal compliance and prevention, detection, and investigation of crime;</li>
                <li>
                  Such other processing or disclosures that may be required under law or
                  regulations.
                </li>
              </ul>

              <h2>Data concerning other people</h2>
              <p>
                In providing/disclosing data concerning any other person/entity other than yourself,
                you warrant that: appropriate consent has been obtained to (1) allow you to make
                such disclosure; and (2) allow BIMS/GiyaPay to use, process, store, and share such
                data. BIMS/GiyaPay reserves the right to require presentation of proof of the
                above-mentioned consent at any time before, during, or after allowance of access
                to/use of the GiyaPay website/platform/services or any component thereof.
              </p>

              <h2>How we obtain data</h2>
              <p>
                Data may also be obtained by BIMS/GiyaPay in several ways such as, but not limited
                to, through market research activities, GiyaPay demos, functionalities, services,
                platforms and/or any of its components, websites, webpages, and mobile or other
                applications, third-party platforms or channels, and GiyaPay business partners,
                subsidiaries, affiliates, and other third-party service providers.
              </p>

              <h2>How long we keep data</h2>
              <p>
                Data obtained by us may be maintained in GiyaPay&rsquo;s records for as long as you
                or the entity you represent avail of its platforms, features, components, and/or
                services, and for as long as necessary for the fulfillment of the purposes for which
                the information was obtained or for the establishment, exercise or defense of legal
                claims, or for legitimate business purposes, or as provided by law, rules and
                regulations.
              </p>

              <h2>Your rights under the Data Privacy Act</h2>
              <p>
                Finally, you are aware and are hereby reminded that you and/or the entity you
                represent are afforded certain rights in relation to personal data under the Data
                Privacy Act, including the right to object to processing, the right to access your
                data, the right to rectification of inaccurate data, and the right to erasure or
                blocking of data. Should you desire to withdraw their consent in relation to data
                privacy and processing, you may do so by sending your request to
                BIMS/GiyaPay&rsquo;s technical support. However, depending on the nature of the
                withdrawal of consent, GiyaPay&rsquo;s website/platform/services or any component
                thereof may no longer be accessible/available to you.
              </p>

              <h2>Disclaimer</h2>
              <p>
                You agree that as part of ongoing development, the GiyaPay
                website/platform/experience will always be subject to changes and modifications.
                Thus, the contents and/or experiences as shown in the Demo may change as determined
                solely by BIMS/GiyaPay and without need of notice, prior or subsequent.
              </p>
              <p>
                In agreeing to proceed with the Demo, you indicate that you agree and consent to our
                Privacy Policy and Disclaimer.
              </p>

              <h2>Contact us</h2>
              <p>
                For privacy questions, data requests, or to withdraw consent, contact BIMS
                Technologies, Inc.:
              </p>
              <p className="legal-contact">
                <a href="mailto:info@bims.tech">info@bims.tech</a>
                <br />
                17th Floor, KMC, Skyrise 4B, Geonzon Street,
                <br />
                Cebu IT Park, Cebu City, 6000, Philippines
              </p>
            </article>
          </Container>
        </section>

        <Footer />
      </div>
    </TranslationsProvider>
  );
}
