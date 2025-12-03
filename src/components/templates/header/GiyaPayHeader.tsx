'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { Container } from '@src/components/shared/container';

interface GiyaPayHeaderProps {
  locale: string;
}

export default function GiyaPayHeader({ locale }: GiyaPayHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === `/${locale}`) {
      return pathname === `/${locale}` || pathname === '/';
    }
    return pathname?.includes(path);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <Container>
        <div className="navbar-content">
          {/* Logo */}
          <Link href={`/${locale}`} className="navbar-logo">
            <Image
              src="/images/giyapay-logo.png"
              alt="GiyaPay Logo"
              width={160}
              height={45}
              priority
              className="h-auto w-auto"
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
            <Link href={`/${locale}#features`} className="nav-link">
              Features
            </Link>
            <Link href={`/${locale}#pricing`} className="nav-link">
              Pricing
            </Link>
            <Link
              href={`/${locale}/blog`}
              className={`nav-link ${isActive('/blog') ? 'active' : ''}`}
            >
              Blog
            </Link>
            <Link href={`/${locale}#faq`} className="nav-link">
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
            <Link
              href={`/${locale}#features`}
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
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
              href={`/${locale}#faq`}
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
