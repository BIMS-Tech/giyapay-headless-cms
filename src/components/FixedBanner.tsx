'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function FixedBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed-banner">
      <button className="banner-close" onClick={() => setIsVisible(false)}>
        <Image src="/images/icons8-macos-close-32.png" alt="Close banner" width={32} height={32} />
      </button>
      <div className="banner-content">
        <span className="banner-text">
          Avail our lowest rates when you avail GiyaPay this year.
        </span>
        <Link
          href="https://calendly.com/salesbimstech/60min-1?back=1&month=2021-10"
          target="_blank"
          className="banner-button"
        >
          Get a Demo
        </Link>
      </div>
    </div>
  );
}
