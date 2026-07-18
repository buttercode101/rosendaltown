'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { EASE } from '@/lib/motion';

// Full-bleed hero + tappable huge gallery with lightbox.
export function PropertyGallery({ images, name }: { images: string[]; name: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const lead = images[0];
  const rest = images.slice(1, 9);
  return (
    <div>
      <div className="relative h-[68vh] w-full overflow-hidden">
        {lead ? (
          <Image src={lead} alt={name} fill priority className="object-cover" />
        ) : (
          <div className="h-full w-full bg-forest-deep" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent" />
      </div>

      <div className="container-editorial -mt-24 grid grid-cols-2 gap-2 md:grid-cols-4">
        {rest.map((src, i) => (
          <button key={src + i} onClick={() => setOpen(i + 1)} className="group relative aspect-[4/3] overflow-hidden rounded-lg" data-cursor="grow">
            <Image src={src} alt={`${name} ${i + 2}`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[90] flex items-center justify-center bg-forest-deep/95 p-4" onClick={() => setOpen(null)}>
            <button className="absolute right-6 top-6 text-cream"><X className="h-8 w-8" /></button>
            <motion.div initial={{ scale: 0.96 }} animate={{ scale: 1 }} transition={{ ease: EASE.out, duration: 0.4 }} className="relative h-[80vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
              <Image src={images[open]} alt={name} fill className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
