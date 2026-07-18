'use client';

import { PageHero } from '@/components/site/page-hero';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import { events } from '@/lib/events';

// Derive a short month + day badge from the real date string.
function badge(date: string) {
  const m = date.match(/(january|february|march|april|may|june|july|august|september|october|november|december)/i);
  const month = m ? m[1].slice(0, 3) : '';
  const d = date.match(/\d{1,2}/);
  const day = d ? d[0] : '';
  return { month, day };
}

export default function EventsPage() {
  return (
    <>
      <PageHero eyebrow="Events" title="There's always something happening." intro="From winter trail runs to country markets and cherry festivals — mark your calendar." image="/events.jpg" />
      <section className="bg-forest-deep py-20">
        <div className="container-editorial">
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {events.map((e) => {
              const b = badge(e.date);
              return (
                <StaggerItem key={e.title} className="group overflow-hidden rounded-2xl border border-cream/10 bg-forest-mist" data-cursor="grow">
                  <div className="flex gap-5 p-6">
                    <div className="flex h-20 w-16 shrink-0 flex-col items-center justify-center rounded-lg bg-forest text-cream">
                      <span className="text-xs uppercase tracking-wide">{b.month}</span>
                      <span className="font-serif text-2xl leading-none">{b.day}</span>
                    </div>
                    <div>
                      <div className="font-serif text-2xl leading-tight">{e.title}</div>
                      {e.venue && <div className="mt-1 text-sm text-brass">@{e.venue}</div>}
                      <div className="mt-2 text-xs text-cream/55">{e.date}</div>
                      <p className="mt-3 text-sm leading-relaxed text-cream/55">{e.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
          <p className="mt-10 text-center text-sm text-cream/55">Dates for 2026 as listed on the official Rosendal events calendar. Confirm with venues before travelling.</p>
        </div>
      </section>
    </>
  );
}
