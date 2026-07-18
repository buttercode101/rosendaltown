'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Search, Heart, Mountain, Compass, Map } from 'lucide-react';
import { LineText, MaskReveal } from '@/components/motion/text';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import { Parallax } from '@/components/motion/parallax';
import { Magnetic } from '@/components/motion/magnetic';
import { EASE, DURATION } from '@/lib/motion';
import { categories, steps, stats, events, site } from '@/lib/data';

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative flex h-[100svh] min-h-[640px] w-full flex-col justify-center overflow-hidden">
        <motion.div initial={{ scale: 1.12 }} animate={{ scale: 1 }} transition={{ duration: DURATION.hero, ease: EASE.out }} className="absolute inset-0">
          <Image src="/hero-rosendal.jpg" alt="Rosendal at sunset" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/50 via-forest-deep/25 to-forest-deep/85" />
        </motion.div>

        <div className="container-editorial relative z-10 text-cream">
          <Reveal><p className="eyebrow text-brass-soft">A historic Free State town</p></Reveal>
          <h1 className="mt-6 font-serif text-[3.25rem] leading-[0.95] md:text-[7rem]">
            <LineText delay={0.1}>{site.name}</LineText>
          </h1>
          <Reveal delay={0.25}>
            <p className="mt-4 max-w-xl text-lg text-cream/90 md:text-xl">{site.tagline} {site.sub}</p>
          </Reveal>

          {/* search bar */}
          <Reveal delay={0.35}>
            <div className="mt-10 flex max-w-3xl items-center gap-3 rounded-full bg-cream/95 p-1.5 pl-6 text-ink shadow-2xl backdrop-blur">
              <Search className="h-5 w-5 shrink-0 text-stone" />
              <input type="text" placeholder="I&apos;m looking for a cottage, a hike, a restaurant…" className="flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-stone/70" />
              <button className="hidden rounded-full bg-forest px-6 py-3 text-sm text-cream transition-colors hover:bg-forest-deep sm:inline-flex">Search</button>
            </div>
          </Reveal>

          {/* feature strip */}
          <Reveal delay={0.45}>
            <div className="mt-14 hidden max-w-4xl grid-cols-4 gap-8 md:grid">
              {[
                { icon: Heart, t: 'Warm hospitality', s: 'Small town, big heart' },
                { icon: Mountain, t: 'Rich in heritage', s: 'A town with a story' },
                { icon: Compass, t: 'Scenic beauty', s: 'Breathtaking landscapes' },
                { icon: Map, t: 'Easy to reach', s: 'Between Clarens & Ficksburg' }
              ].map(({ icon: Icon, t, s }) => (
                <div key={t} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-5 w-5 text-brass" />
                  <div><div className="text-sm text-cream">{t}</div><div className="text-xs text-cream/60">{s}</div></div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-editorial grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <Reveal><p className="eyebrow">How it works</p></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">Plan your perfect Rosendal escape.</h2>
              <p className="mt-5 max-w-md text-muted-foreground">A few simple steps to extraordinary memories — whether it&apos;s a weekend, a festival, or a long slow week.</p>
            </Reveal>
            <Reveal delay={0.2}>
              <Magnetic strength={0.5} className="mt-8 inline-block">
                <Link href="/plan-your-visit" className="btn-pill btn-pill-forest" data-cursor="grow">Plan your visit <ArrowRight className="h-4 w-4" /></Link>
              </Magnetic>
            </Reveal>
          </div>
          <Stagger className="grid grid-cols-2 gap-4 md:grid-cols-4">
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

      {/* CATEGORY GRID */}
      <section className="bg-cream pb-20 md:pb-28">
        <div className="container-editorial grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
          {categories.map((c) => (
            <Link key={c.href} href={c.href} className="group relative aspect-[4/5] overflow-hidden rounded-xl" data-cursor="grow">
              <Image src={c.img} alt={c.label} fill loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-cream md:p-6">
                <div className="font-serif text-xl md:text-2xl">{c.label}</div>
                <div className="mt-1 text-xs text-cream/80 md:text-sm">{c.tag}</div>
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs opacity-0 transition-opacity group-hover:opacity-100">Discover <ArrowRight className="h-3.5 w-3.5" /></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* STORY BAND */}
      <section className="relative overflow-hidden bg-forest-deep py-20 text-cream md:py-28">
        <div className="container-editorial grid items-center gap-12 md:grid-cols-2">
          <div>
            <Reveal><p className="eyebrow text-brass-soft">Our story</p></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-serif text-4xl italic leading-[1.05] md:text-6xl">Not just a place to visit,<br />a place to feel.</h2>
              <p className="mt-6 max-w-md text-cream/80">Founded in 1857, Rosendal is a small town with a big heart — a place of beauty, culture and community beneath the Free State&apos;s endless sky.</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 grid max-w-md grid-cols-3 gap-6">
                {stats.map((s) => (
                  <div key={s.l}>
                    <div className="font-serif text-3xl text-brass md:text-4xl">{s.n}</div>
                    <div className="mt-1 text-xs text-cream/60">{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <Magnetic strength={0.5} className="mt-10 inline-block">
                <Link href="/plan-your-visit" className="btn-pill border border-cream/30 hover:bg-cream/10" data-cursor="grow">Read the story <ArrowRight className="h-4 w-4" /></Link>
              </Magnetic>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Parallax speed={0.06}><Image src="/story.jpg" alt="Free State landscape" width={400} height={560} className="h-full w-full rounded-lg object-cover" /></Parallax>
            <div className="grid gap-3">
              <Image src="/church.jpg" alt="Rosendal church" width={400} height={270} className="w-full rounded-lg object-cover" />
              <Image src="/stay-cottage.jpg" alt="Rosendal cottage" width={400} height={270} className="w-full rounded-lg object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-editorial">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <p className="eyebrow">Upcoming events</p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">There&apos;s always something happening.</h2>
            </Reveal>
            <Link href="/events" className="inline-flex items-center gap-1.5 border-b border-forest pb-0.5 text-sm">View all events <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <Stagger className="mt-12 grid gap-4 md:grid-cols-4">
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

      {/* NEWSLETTER */}
      <section className="bg-forest py-20 text-cream">
        <div className="container-editorial grid items-center gap-12 md:grid-cols-2">
          <div>
            <Reveal><p className="eyebrow text-brass-soft">Stay in the know</p></Reveal>
            <Reveal delay={0.1}><h2 className="mt-4 font-serif text-4xl md:text-5xl">Get the Rosendal Guide.</h2></Reveal>
            <Reveal delay={0.2}><p className="mt-4 max-w-md text-cream/80">Your free guide to the best stays, eats, events and hidden gems — straight to your inbox.</p></Reveal>
          </div>
          <Reveal delay={0.2}>
            <form className="flex items-center gap-2 rounded-full bg-cream p-1.5 pl-6 text-ink">
              <input type="email" placeholder="Enter your email address" className="flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-stone" />
              <button className="rounded-full bg-forest px-6 py-3 text-sm text-cream transition-colors hover:bg-forest-deep">Send me the guide</button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
