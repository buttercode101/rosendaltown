'use client';

import Image from 'next/image';
import { PageHero } from '@/components/site/page-hero';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import { thingsToDo } from '@/lib/data';

export default function ThingsToDoPage() {
  return (
    <>
      <PageHero eyebrow="Things to Do" title="Adventures, relaxation and everything in between." intro="Trails, art routes, dams and dam-views — fill your days in Rosendal." image="/things-to-do.jpg" />
      <section className="bg-cream py-20">
        <div className="container-editorial">
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {thingsToDo.map((t) => (
              <StaggerItem key={t.name} className="group overflow-hidden rounded-lg border border-ink/10 bg-white">
                <div className="relative aspect-square overflow-hidden">
                  <Image src={t.img} alt={t.name} fill loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5 font-serif text-xl">{t.name}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
