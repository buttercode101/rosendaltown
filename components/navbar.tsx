'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Magnetic } from '@/components/motion/magnetic';
import { nav, site } from '@/lib/data';
import { EASE, DURATION } from '@/lib/motion';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'glass' : 'py-2'}`}>
        <div className="container-editorial flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex flex-col leading-none text-cream">
            <span className="font-serif text-2xl md:text-3xl tracking-tight">{site.name}</span>
            <span className="eyebrow mt-0.5 !text-[0.6rem]">{site.region}</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-sm">
            {nav.map((n) => (
              <Magnetic key={n.href} strength={0.4}>
                <Link href={n.href} className="group relative transition-colors hover:text-brass" data-cursor="grow">
                  {n.label}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-brass transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </Link>
              </Magnetic>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Magnetic strength={0.4}>
              <Link href="/plan-your-visit" className="btn-pill btn-pill-forest" data-cursor="grow">
                Plan your visit <ArrowRight className="h-4 w-4" />
              </Link>
            </Magnetic>
          </div>

          <button className="text-xs uppercase tracking-[0.2em] lg:hidden" onClick={() => setOpen((v) => !v)}>
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.aside initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="fixed inset-0 z-40 bg-forest-deep text-cream lg:hidden">
            <div className="flex h-full flex-col justify-center gap-6 px-10">
              {nav.map((n, i) => (
                <motion.div key={n.href} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 + i * 0.07, duration: DURATION.base, ease: EASE.out }}>
                  <Link href={n.href} className="font-serif text-4xl italic" onClick={() => setOpen(false)}>{n.label}</Link>
                </motion.div>
              ))}
              <Link href="/plan-your-visit" className="btn-pill btn-pill-brass mt-4 w-fit" onClick={() => setOpen(false)}>Plan your visit</Link>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
