'use client';

import Image from 'next/image';
import { PageHero } from '@/components/site/page-hero';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import { shops } from '@/lib/data';

export default function ShopsPage() {
  return (
    <>
      <PageHero eyebrow="Shops & Services" title="Everything you need." intro="Local craft, trading posts and the essentials — Rosendal's small businesses." image="/shops.jpg" />
      <section className="bg-cream py-20">
        <div className="container-editorial">
          <Stagger className="grid gap-5 md:grid-cols-3">
            {shops.map((s) => (
              <StaggerItem key={s.name} className="group overflow-hidden rounded-lg border border-ink/10 bg-white">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src={s.img} alt={s.name} fill loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5 font-serif text-xl">{s.name}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
