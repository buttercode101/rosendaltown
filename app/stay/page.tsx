'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import { PageHero } from '@/components/site/page-hero';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import { properties } from '@/lib/properties';

export default function StayPage() {
  return (
    <>
      <PageHero eyebrow="Places to stay" title="Book in comfort. Wake up inspired." intro="Forty characterful stays across historic Rosendal — from antique week-end homes to modern mountain cabins." image="/story.jpg" />
      <section className="bg-cream py-20">
        <div className="container-editorial">
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((p) => (
              <StaggerItem key={p.slug}>
                <Link href={`/stay/${p.slug}`} className="group block overflow-hidden rounded-2xl border border-ink/10 bg-white" data-cursor="grow">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {p.hero ? (
                      <Image src={p.hero} alt={p.name} fill loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    ) : (
                      <div className="h-full w-full bg-forest-deep" />
                    )}
                    <div className="absolute right-3 top-3 rounded-full bg-cream/90 px-2.5 py-1 text-xs text-forest"><Star className="mr-1 inline h-3 w-3 fill-brass text-brass" />{p.rating}</div>
                  </div>
                  <div className="p-5">
                    <div className="font-serif text-2xl">{p.name}</div>
                    <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">{p.tagline}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-sm text-brass">{p.price[0] || 'Enquire for rates'}</span>
                      <span className="inline-flex items-center gap-1 text-sm text-forest opacity-0 transition-opacity group-hover:opacity-100">View <ArrowRight className="h-3.5 w-3.5" /></span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
