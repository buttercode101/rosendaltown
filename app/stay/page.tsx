'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/site/page-hero';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import { Magnetic } from '@/components/motion/magnetic';
import { stays, site } from '@/lib/data';

export default function StayPage() {
  return (
    <>
      <PageHero eyebrow="Places to stay" title="Book in comfort. Wake up inspired." intro="From country houses to cosy cabins — find your perfect Rosendal retreat." image="/stay-cottage.jpg" />
      <section className="bg-cream py-20">
        <div className="container-editorial">
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {stays.map((s) => (
              <StaggerItem key={s.name} className="group overflow-hidden rounded-lg border border-ink/10 bg-white">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src={s.img} alt={s.name} fill loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="font-serif text-xl">{s.name}</div>
                  <div className="mt-1 text-sm text-brass">{s.price}</div>
                  <button className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-forest transition-colors hover:text-brass">Check availability <ArrowRight className="h-3.5 w-3.5" /></button>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal>
            <div className="mt-12 flex items-center justify-between rounded-lg border border-ink/10 bg-mist p-6">
              <div><p className="font-serif text-2xl">Own a place in Rosendal?</p><p className="text-sm text-muted-foreground">List your accommodation and reach 1000+ visitors.</p></div>
              <Magnetic strength={0.4}><Link href="/contact" className="btn-pill btn-pill-outline" data-cursor="grow">List your accommodation</Link></Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
