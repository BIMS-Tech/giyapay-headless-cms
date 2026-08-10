'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

import { Container } from '@src/components/shared/container';

interface GiyaPayHeaderProps {
  locale: string;
}

export default function GiyaPayHeader({ locale }: GiyaPayHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [mobileFeatsOpen, setMobileFeatsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isPos = pathname?.includes('/pos');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setFeaturesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const isActive = (path: string) => {
    if (path === `/${locale}`) {
      return pathname === `/${locale}` || pathname === '/';
    }
    return pathname?.includes(path);
  };

  const navStyle =
    isPos && !scrolled
      ? { backgroundColor: '#FFF4E0', boxShadow: 'none' }
      : isPos && scrolled
        ? { backgroundColor: '#ffffff' }
        : {};

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`} style={navStyle}>
      <Container>
        <div className="navbar-content">
          {/* Logo */}
          <Link href={`/${locale}`} className="navbar-logo">
            <Image
              src="/images/giyapay-logo.png"
              alt="GiyaPay Logo"
              width={200}
              height={56}
              priority
              className="h-auto w-auto"
              style={{ height: '50px', width: 'auto' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-desktop-menu">
            <Link
              href={`/${locale}`}
              className={`nav-link ${isActive(`/${locale}`) ? 'active' : ''}`}
            >
              Home
            </Link>

            {/* Features dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="nav-link flex items-center gap-1"
                onClick={() => setFeaturesOpen(prev => !prev)}
              >
                Features
                <svg
                  className={`h-3 w-3 transition-transform ${featuresOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {featuresOpen && (
                <div
                  className="border-gray-100 absolute left-0 top-full z-50 mt-2 w-44 rounded-lg border py-1 shadow-lg"
                  style={{ backgroundColor: '#ffffff' }}
                >
                  <Link
                    href={`/${locale}#features`}
                    className="text-gray-700 hover:bg-gray-50 block px-4 py-2 text-sm"
                    onClick={() => setFeaturesOpen(false)}
                  >
                    Features
                  </Link>
                  <Link
                    href={`/${locale}/pos`}
                    className="text-gray-700 hover:bg-gray-50 block px-4 py-2 text-sm"
                    onClick={() => setFeaturesOpen(false)}
                  >
                    Partners
                  </Link>
                </div>
              )}
            </div>

            <Link href={`/${locale}#pricing`} className="nav-link">
              Pricing
            </Link>
            <Link
              href={`/${locale}/blog`}
              className={`nav-link ${isActive('/blog') ? 'active' : ''}`}
            >
              Blog
            </Link>
            <Link href={`/${locale}/faq`} className="nav-link">
              FAQ
            </Link>
            <Link href={`/${locale}#contact`} className="nav-link">
              Contact
            </Link>
            <Link
              href="https://calendly.com/salesbimstech/60min-1?back=1&month=2021-10"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-get-demo"
            >
              Get A Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="navbar-mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="navbar-mobile-menu">
            <Link
              href={`/${locale}`}
              className={`mobile-nav-link ${isActive(`/${locale}`) ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Features accordion */}
            <div>
              <button
                className="mobile-nav-link flex w-full items-center justify-between"
                onClick={() => setMobileFeatsOpen(prev => !prev)}
              >
                Features
                <svg
                  className={`h-3 w-3 transition-transform ${mobileFeatsOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {mobileFeatsOpen && (
                <div className="pl-4">
                  <Link
                    href={`/${locale}#features`}
                    className="mobile-nav-link block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Features
                  </Link>
                  <Link
                    href={`/${locale}/pos`}
                    className="mobile-nav-link block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Partners
                  </Link>
                </div>
              )}
            </div>

            <Link
              href={`/${locale}#pricing`}
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href={`/${locale}/blog`}
              className={`mobile-nav-link ${isActive('/blog') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href={`/${locale}/faq`}
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href={`/${locale}#contact`}
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="https://calendly.com/salesbimstech/60min-1?back=1&month=2021-10"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-get-demo-mobile"
              onClick={() => setIsMenuOpen(false)}
            >
              Get A Demo
            </Link>
          </div>
        )}
      </Container>
    </nav>
  );
}
