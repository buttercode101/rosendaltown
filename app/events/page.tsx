'use client';

import Image from 'next/image';
import { PageHero } from '@/components/site/page-hero';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import { events } from '@/lib/data';

export default function EventsPage() {
  return (
    <>
      <PageHero eyebrow="Events" title="There's always something happening." intro="From winter festivals to country markets — mark your calendar." image="/events.jpg" />
      <section className="bg-cream py-20">
        <div className="container-editorial">
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {events.map((e) => (
              <StaggerItem key={e.title} className="group overflow-hidden rounded-lg border border-ink/10 bg-white">
                <div className="relative aspect-[4/5]">
                  <Image src={e.img} alt={e.title} fill loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute left-4 top-4 rounded-md bg-cream px-3 py-2 text-center leading-none">
                    <div className="eyebrow text-[0.6rem]">{e.mon}</div>
                    <div className="mt-1 font-serif text-2xl">{e.day}</div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="font-serif text-xl">{e.title}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{e.when} · 2026</div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
