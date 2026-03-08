'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import { Container } from '@src/components/shared/container';

export const Footer = () => {
  const params = useParams();
  const locale = params?.locale || 'en-US';

  return (
    <footer className="giyapay-footer">
      <Container>
        <div className="footer-content">
          {/* Logo and Address */}
          <div className="footer-column">
            <Image
              src="/images/giyapay-white.png"
              alt="GiyaPay Logo"
              width={180}
              height={50}
              className="footer-logo"
            />
            <p className="footer-address">
              17th Floor, KMC, Skyrise 4B, Geonzon Street,
              <br />
              Cebu IT Park, Cebu City, 6000
            </p>
          </div>

          {/* Menu */}
          <div className="footer-column">
            <h4 className="footer-heading">MENU</h4>
            <div className="footer-links">
              <Link href={`/${locale}`} className="footer-link-item">
                Home
              </Link>
              <Link href={`/${locale}/pos`} className="footer-link-item">
                POS
              </Link>
              <Link href={`/${locale}#contact`} className="footer-link-item">
                Contact
              </Link>
              <Link href={`/${locale}/blog`} className="footer-link-item">
                Blog
              </Link>
              <Link href={`/${locale}#faq`} className="footer-link-item">
                FAQ
              </Link>
              <Link href={`/${locale}/privacy-policy`} className="footer-link-item">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Follow Us */}
          <div className="footer-column">
            <h4 className="footer-heading">FOLLOW US</h4>
            <div className="footer-social">
              <Link
                href="https://www.facebook.com/GiyaPay"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/images/fb.png" alt="Facebook" width={32} height={32} />
              </Link>
              <Link
                href="https://www.instagram.com/giyapay/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/images/ig.png" alt="Instagram" width={32} height={32} />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCV8M_KPE5i75L_ne1KuARSA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/images/youtube-2.png" alt="YouTube" width={32} height={32} />
              </Link>
            </div>
          </div>

          {/* Contact Us */}
          <div className="footer-column">
            <h4 className="footer-heading">CONTACT US</h4>
            <Link href="mailto:info@bims.tech" className="footer-email">
              info@bims.tech
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>Copyright © 2021 GiyaPay is a product of BIMS Technologies, Inc.</p>
        </div>
      </Container>
    </footer>
  );
};
