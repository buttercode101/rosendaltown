'use client';

import Image from 'next/image';
import { PageHero } from '@/components/site/page-hero';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import { directory, directoryMeta } from '@/lib/directory';

export default function ThingsToDoPage() {
  const meta = directoryMeta.do;
  const items = directory.do;
  return (
    <>
      <PageHero eyebrow={meta.eyebrow} title={meta.title} intro={meta.intro} image={meta.image} />
      <section className="bg-forest-deep py-20">
        <div className="container-editorial">
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((b) => (
              <StaggerItem key={b.name}>
                <article className="group overflow-hidden rounded-2xl border border-cream/10 bg-forest-mist" data-cursor="grow">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {b.image ? <Image src={b.image} alt={b.name} fill loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-105" /> : <div className="h-full w-full bg-forest-deep" />}
                  </div>
                  <div className="p-5">
                    <div className="font-serif text-2xl">{b.name}</div>
                    {b.category && <p className="text-sm text-brass">{b.category}</p>}
                    <p className="mt-2 text-sm leading-relaxed text-cream/55">{b.blurb}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
