'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/site/page-hero';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import { Magnetic } from '@/components/motion/magnetic';
import { artCulture } from '@/lib/data';

export default function ArtCulturePage() {
  return (
    <>
      <PageHero eyebrow="Art & Culture" title="Inspire your soul." intro="Galleries, the Rosendal Art Route and a creative community worth discovering." image="/art-culture.jpg" />
      <section className="bg-cream py-20">
        <div className="container-editorial">
          <Stagger className="grid gap-5 md:grid-cols-3">
            {artCulture.map((a) => (
              <StaggerItem key={a.name} className="group overflow-hidden rounded-lg border border-ink/10 bg-white">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src={a.img} alt={a.name} fill loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5 font-serif text-xl">{a.name}</div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal>
            <div className="mt-12 rounded-lg bg-forest-deep p-10 text-cream">
              <p className="eyebrow text-brass-soft">Featured gallery</p>
              <h2 className="mt-3 font-serif text-3xl">ark. contemporary</h2>
              <p className="mt-3 max-w-md text-cream/80">A contemporary gallery in Rosendal showcasing the collective endeavours of accomplished local artists.</p>
              <Magnetic strength={0.4} className="mt-6 inline-block"><Link href="https://arkcontemporary.vercel.app" className="btn-pill btn-pill-brass" data-cursor="grow">Visit ark. contemporary</Link></Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
