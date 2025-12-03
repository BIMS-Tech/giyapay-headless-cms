import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { ArticleTileGrid } from '@src/components/features/article';
import { Container } from '@src/components/shared/container';
import TranslationsProvider from '@src/components/shared/i18n/TranslationProvider';
import initTranslations from '@src/i18n';
import { defaultLocale, locales } from '@src/i18n/config';
import { PageBlogPostOrder } from '@src/lib/__generated/sdk';
import { client, previewClient } from '@src/lib/client';

interface BlogPageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const languages = Object.fromEntries(
    locales.map(locale => [locale, locale === defaultLocale ? '/blog' : `/${locale}/blog`]),
  );
  const metadata: Metadata = {
    title: 'Blog - GiyaPay',
    description: 'Read the latest articles and insights from GiyaPay.',
    alternates: {
      canonical: '/blog',
      languages: languages,
    },
  };

  return metadata;
}

export default async function BlogPage({ params: { locale } }: BlogPageProps) {
  const { isEnabled: preview } = draftMode();
  const { t, resources } = await initTranslations({ locale });
  const gqlClient = preview ? previewClient : client;

  try {
    const blogPostsData = await gqlClient.pageBlogPostCollection({
      limit: 20,
      locale,
      order: PageBlogPostOrder.PublishedDateDesc,
      preview,
    });
    const posts = blogPostsData.pageBlogPostCollection?.items;

    return (
      <TranslationsProvider locale={locale} resources={resources}>
        <div className="min-h-screen">
          {/* Blog Hero Section */}
          <section
            className="blog-hero-section"
            style={{ background: 'linear-gradient(102deg, #fa9f42, #f03b6e)' }}
          >
            <Container>
              <div className="blog-hero-content">
                <Link
                  href={`/${locale}`}
                  className="back-to-home-link"
                  style={{ color: '#ffffff' }}
                >
                  ← Back to Home
                </Link>
                <h1 className="blog-hero-title" style={{ color: '#ffffff' }}>
                  GiyaPay Blog
                </h1>
                <p className="blog-hero-description" style={{ color: '#ffffff' }}>
                  Stay updated with the latest news, insights, and updates from GiyaPay.
                </p>
              </div>
            </Container>
          </section>

          {/* Blog Posts Section */}
          <section className="blog-posts-section bg-gray-50">
            <Container>
              {posts && posts.length > 0 ? (
                <ArticleTileGrid className="md:grid-cols-2 lg:grid-cols-3" articles={posts} />
              ) : (
                <div className="blog-empty-state">
                  <p className="blog-empty-text">No blog posts available at the moment.</p>
                  <Link href={`/${locale}`} className="btn-primary">
                    Return to Home
                  </Link>
                </div>
              )}
            </Container>
          </section>
        </div>
      </TranslationsProvider>
    );
  } catch (error) {
    // If Contentful is not configured, show a message
    return (
      <TranslationsProvider locale={locale} resources={resources}>
        <div className="min-h-screen">
          {/* Blog Hero Section */}
          <section
            className="blog-hero-section"
            style={{ background: 'linear-gradient(102deg, #fa9f42, #f03b6e)' }}
          >
            <Container>
              <div className="blog-hero-content">
                <Link
                  href={`/${locale}`}
                  className="back-to-home-link"
                  style={{ color: '#ffffff' }}
                >
                  ← Back to Home
                </Link>
                <h1 className="blog-hero-title" style={{ color: '#ffffff' }}>
                  GiyaPay Blog
                </h1>
                <p className="blog-hero-description" style={{ color: '#ffffff' }}>
                  Stay updated with the latest news, insights, and updates from GiyaPay.
                </p>
              </div>
            </Container>
          </section>

          {/* Blog Posts Section */}
          <section className="blog-posts-section bg-gray-50">
            <Container>
              <div className="blog-empty-state">
                <p className="blog-empty-text">
                  Blog posts will appear here once Contentful is configured.
                </p>
                <Link href={`/${locale}`} className="btn-primary">
                  Return to Home
                </Link>
              </div>
            </Container>
          </section>
        </div>
      </TranslationsProvider>
    );
  }
}
