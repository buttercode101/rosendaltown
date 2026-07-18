'use client';

import Image from 'next/image';
import { PageHero } from '@/components/site/page-hero';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import { eatDrink } from '@/lib/data';

export default function EatDrinkPage() {
  return (
    <>
      <PageHero eyebrow="Eat & Drink" title="Savour the flavours of Rosendal." intro="Cafés, country kitchens and tiny bars — local tastes worth the trip." image="/eat-drink.jpg" />
      <section className="bg-cream py-20">
        <div className="container-editorial">
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {eatDrink.map((e) => (
              <StaggerItem key={e.name} className="group overflow-hidden rounded-lg border border-ink/10 bg-white">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={e.img} alt={e.name} fill loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5 font-serif text-xl">{e.name}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
