'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';

import { LanguageSelector } from '@src/components/features/language-selector';
import { Container } from '@src/components/shared/container';

export const Header = () => {
  const { t } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || 'en-US';

  return (
    <header className="py-5">
      <nav>
        <Container className="flex items-center justify-between">
          <Link
            href={`/${locale}`}
            title={t('common.homepage')}
            className="text-blue-600 hover:text-blue-700 text-2xl font-bold"
          >
            GiyaPay
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href={`/${locale}/blog`}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Blog
            </Link>
            <LanguageSelector />
          </div>
        </Container>
      </nav>
    </header>
  );
};
