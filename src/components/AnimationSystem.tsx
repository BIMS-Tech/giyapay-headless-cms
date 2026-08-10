'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const REVEAL_SELECTOR = '.fade-in, .fade-left, .fade-right';

/** Elements revealed together are staggered slightly, up to this many steps. */
const MAX_STAGGER_STEPS = 4;
const STAGGER_MS = 90;

/**
 * Reveals `.fade-in` / `.fade-left` / `.fade-right` elements as they scroll
 * into view.
 *
 * The hidden starting state lives in CSS behind the `.js-anim` class (set on
 * <html> before first paint), so if this component never runs — JS disabled,
 * hydration failure, reduced-motion preference — every element simply stays
 * visible instead of being stranded at opacity 0.
 */
export default function AnimationSystem() {
  const pathname = usePathname();

  useEffect(() => {
    if (!document.documentElement.classList.contains('js-anim')) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
    if (elements.length === 0) return;

    const reveal = (element: HTMLElement) => element.classList.add('is-visible');

    if (!('IntersectionObserver' in window)) {
      elements.forEach(reveal);
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries
          .filter(entry => entry.isIntersecting)
          .forEach((entry, index) => {
            const element = entry.target as HTMLElement;
            element.style.transitionDelay = `${Math.min(index, MAX_STAGGER_STEPS) * STAGGER_MS}ms`;
            reveal(element);
            observer.unobserve(element);
          });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    );

    elements.forEach(element => observer.observe(element));

    // Belt and braces: if the observer never fires, anything already on screen
    // would be stranded invisible. Content further down is left alone so it
    // still animates when the visitor scrolls to it.
    const failsafe = window.setTimeout(() => {
      elements
        .filter(element => element.getBoundingClientRect().top < window.innerHeight)
        .forEach(reveal);
    }, 2000);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
    // Re-scan after client-side navigation, since the layout (and this
    // component) persists across route changes.
  }, [pathname]);

  return null;
}
