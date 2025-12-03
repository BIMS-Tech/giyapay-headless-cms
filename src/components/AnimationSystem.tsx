'use client';

import { useEffect } from 'react';

export default function AnimationSystem() {
  useEffect(() => {
    // Animation observer for fade-in effects
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;

          // Add animation classes based on element's animation class
          if (element.classList.contains('fade-in')) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
          } else if (element.classList.contains('fade-left')) {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
          } else if (element.classList.contains('fade-right')) {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
          }

          // Stop observing once animated
          observer.unobserve(element);
        }
      });
    }, observerOptions);

    // Observe all animation elements
    const animationElements = document.querySelectorAll('.fade-in, .fade-left, .fade-right');
    animationElements.forEach(el => {
      observer.observe(el);
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
