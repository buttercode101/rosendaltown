'use client';

import Image from 'next/image';
import { PageHero } from '@/components/site/page-hero';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import { Magnetic } from '@/components/motion/magnetic';
import { steps, stats, site } from '@/lib/data';
import { infoPages } from '@/lib/content';

export default function PlanVisitPage() {
  const visiting = infoPages['visiting-rosendal'];
  return (
    <>
      <PageHero eyebrow="Plan your visit" title="Your perfect Free State getaway." intro="Everything you need to plan an unforgettable Rosendal escape." image="/story.jpg" />
      <section className="bg-forest-deep py-20">
        <div className="container-editorial grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <Reveal><p className="eyebrow">Itinerary</p></Reveal>
            <Reveal delay={0.1}><h2 className="mt-4 font-serif text-4xl">How to spend your Rosendal days.</h2></Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 grid grid-cols-3 gap-6">
                {stats.map((s) => (
                  <div key={s.l}><div className="font-serif text-3xl text-brass">{s.n}</div><div className="mt-1 text-xs text-cream/55">{s.l}</div></div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <Magnetic strength={0.5} className="mt-10 inline-block"><a href={`mailto:${site.email}`} className="btn-pill btn-pill-forest" data-cursor="grow">Email our team</a></Magnetic>
            </Reveal>
          </div>
          <Stagger className="grid grid-cols-2 gap-4">
            {steps.map((s) => (
              <StaggerItem key={s.n} className="rounded-lg border border-cream/10 bg-forest-mist p-6">
                <div className="font-serif text-3xl text-brass">{s.n}</div>
                <div className="mt-6 font-medium">{s.t}</div>
                <div className="mt-2 text-sm text-cream/55">{s.s}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Real "Why visit Rosendal?" content from the old site */}
      <section className="bg-forest-mist py-20">
        <div className="container-editorial">
          <Reveal><p className="eyebrow">Why visit Rosendal?</p></Reveal>
          <Reveal delay={0.1}><h2 className="mt-4 max-w-2xl font-serif text-4xl">A small town with a big soul.</h2></Reveal>
          <Reveal delay={0.15}>
            <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-cream/80">
              {visiting.intro.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </Reveal>
          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visiting.paragraphs.filter((p) => p && p !== visiting.intro[0]).map((p, i) => (
              <StaggerItem key={i} className="rounded-xl border border-cream/10 bg-forest-mist p-6">
                <p className="text-base leading-relaxed text-cream/80">{p}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Map / how to get here */}
      <section className="bg-forest-deep py-20">
        <div className="container-editorial grid gap-12 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Getting here</p>
            <h2 className="mt-4 font-serif text-4xl">Where to find us.</h2>
            <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-cream/80">
              {infoPages['where-to-find-us'].paragraphs.filter((p) => p && not_a_url(p)).map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <a href="/info/where-to-find-us" className="btn-pill btn-pill-outline mt-6 inline-flex">Full route &amp; road info</a>
          </Reveal>
          <Reveal delay={0.1}>
            {infoPages['where-to-find-us'].images[0] && (
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={infoPages['where-to-find-us'].images[0]} alt="Rosendal" className="h-full w-full object-cover" />
              </div>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}

function not_a_url(s: string) {
  return !/^https?:\/\//.test(s.trim());
}
