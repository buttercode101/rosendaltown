'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, type ReactNode } from 'react';
import { EASE, DURATION, fadeRise, stagger } from '@/lib/motion';

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-12% 0px' });
  const reduce = useReducedMotion();
  return (
    <motion.div ref={ref} className={className} variants={fadeRise} initial={reduce ? false : 'hidden'} animate={inView ? 'visible' : 'hidden'} transition={{ delay }}>
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className, stagger: st = 0.09, delay = 0 }: { children: ReactNode; className?: string; stagger?: number; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  return (
    <motion.div ref={ref} className={className} variants={stagger(st, delay)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.div className={className} variants={fadeRise}>{children}</motion.div>;
}
