'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { LineText } from '@/components/motion/text';
import { EASE, DURATION } from '@/lib/motion';

export function PageHero({ eyebrow, title, intro, image }: { eyebrow: string; title: string; intro?: string; image: string }) {
  return (
    <section className="relative flex min-h-[60vh] flex-col justify-end overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
      <motion.div initial={{ scale: 1.12 }} animate={{ scale: 1 }} transition={{ duration: DURATION.hero, ease: EASE.out }} className="absolute inset-0 -z-10">
        <Image src={image} alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/80 via-forest-deep/60 to-cream" />
      </motion.div>
      <div className="container-editorial text-cream">
        <p className="eyebrow text-brass-soft">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1] md:text-7xl">
          <LineText>{title}</LineText>
        </h1>
        {intro && <p className="mt-6 max-w-xl text-lg text-cream/85">{intro}</p>}
      </div>
    </section>
  );
}
