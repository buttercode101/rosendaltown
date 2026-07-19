'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, type ReactNode } from 'react';
import { EASE, DURATION, fadeRise, stagger } from '@/lib/motion';

// JS-gated reveals: content ships VISIBLE in SSR HTML (so no-JS crawlers /
// headless renders see it), then only animates once the `js-enabled` class
// (set by an inline pre-paint script in layout.tsx) confirms JS is live.
// Prevents the "blank page without JS" failure mode.
const hasJs = () =>
  typeof document !== 'undefined' && document.documentElement.classList.contains('js-enabled');

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-12% 0px' });
  const reduce = useReducedMotion();
  const animate = !hasJs() || reduce ? 'visible' : inView ? 'visible' : 'hidden';
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={fadeRise}
      initial={!hasJs() || reduce ? false : 'hidden'}
      animate={animate}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className, stagger: st = 0.09, delay = 0 }: { children: ReactNode; className?: string; stagger?: number; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const animate = !hasJs() ? 'visible' : inView ? 'visible' : 'hidden';
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={stagger(st, delay)}
      initial={!hasJs() ? false : 'hidden'}
      animate={animate}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.div className={className} variants={fadeRise}>{children}</motion.div>;
}
