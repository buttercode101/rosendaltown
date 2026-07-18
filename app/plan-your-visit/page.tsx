'use client';

import { PageHero } from '@/components/site/page-hero';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import { Magnetic } from '@/components/motion/magnetic';
import { steps, stats, site } from '@/lib/data';

export default function PlanVisitPage() {
  return (
    <>
      <PageHero eyebrow="Plan your visit" title="Your perfect Free State getaway." intro="A few simple steps to extraordinary memories in Rosendal." image="/story.jpg" />
      <section className="bg-cream py-20">
        <div className="container-editorial grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <Reveal><p className="eyebrow">Itinerary</p></Reveal>
            <Reveal delay={0.1}><h2 className="mt-4 font-serif text-4xl">How to spend your Rosendal days.</h2></Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 grid grid-cols-3 gap-6">
                {stats.map((s) => (
                  <div key={s.l}><div className="font-serif text-3xl text-brass">{s.n}</div><div className="mt-1 text-xs text-muted-foreground">{s.l}</div></div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <Magnetic strength={0.5} className="mt-10 inline-block"><a href={`mailto:${site.email}`} className="btn-pill btn-pill-forest" data-cursor="grow">Email our team</a></Magnetic>
            </Reveal>
          </div>
          <Stagger className="grid grid-cols-2 gap-4">
            {steps.map((s) => (
              <StaggerItem key={s.n} className="rounded-lg border border-ink/10 bg-white p-6">
                <div className="font-serif text-3xl text-brass">{s.n}</div>
                <div className="mt-6 font-medium">{s.t}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.s}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
