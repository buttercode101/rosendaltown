'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { type ReactNode } from 'react';
import { EASE, DURATION, lineReveal, maskReveal } from '@/lib/motion';

const hasJs = () =>
  typeof document !== 'undefined' && document.documentElement.classList.contains('js-enabled');

export function LineText({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  const noJs = !hasJs();
  return (
    <span className={`inline-block overflow-hidden align-bottom ${className || ''}`}>
      <motion.span className="inline-block" variants={lineReveal} custom={delay} initial={noJs || reduce ? false : 'hidden'} whileInView={noJs || reduce ? undefined : 'visible'} viewport={{ once: true, margin: '-10% 0px' }}>
        {children}
      </motion.span>
    </span>
  );
}

export function MaskReveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  const noJs = !hasJs();
  return (
    <motion.div className={className} initial={noJs || reduce ? false : { clipPath: 'inset(100% 0 0 0)' }} whileInView={noJs || reduce ? undefined : { clipPath: 'inset(0% 0 0 0)' }} viewport={{ once: true, margin: '-10% 0px' }} transition={{ duration: DURATION.slow, ease: EASE.out, delay }}>
      {children}
    </motion.div>
  );
}
