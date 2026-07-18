'use client';

import { useState } from 'react';

// Visual availability calendar — green = available, grey = booked.
// Static demo grid (Phase 1). Hover shows min stay.
export function AvailabilityCalendar() {
  const [hover, setHover] = useState<number | null>(null);
  const days = Array.from({ length: 35 }, (_, i) => {
    const booked = (i * 7 + 3) % 11 < 4; // deterministic pseudo-pattern
    return { d: i + 1, booked };
  });
  return (
    <section className="container-editorial py-16">
      <p className="eyebrow">Availability</p>
      <h2 className="mt-3 font-serif text-3xl md:text-4xl">Plan your dates.</h2>
      <div className="mt-8 max-w-2xl rounded-2xl border border-ink/10 bg-white p-6">
        <div className="grid grid-cols-7 gap-2 text-center text-xs text-muted-foreground">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => <div key={i}>{d}</div>)}
        </div>
        <div className="mt-2 grid grid-cols-7 gap-2">
          {days.map((c) => (
            <button
              key={c.d}
              onMouseEnter={() => setHover(c.d)}
              onMouseLeave={() => setHover(null)}
              className={`aspect-square rounded-lg text-sm transition-colors ${c.booked ? 'bg-ink/5 text-ink/30' : 'bg-forest/10 text-forest hover:bg-forest hover:text-cream'}`}
            >
              {c.d}
            </button>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><span className="h-4 w-4 rounded bg-forest/10" /> Available</span>
          <span className="flex items-center gap-2"><span className="h-4 w-4 rounded bg-ink/5" /> Booked</span>
          {hover && <span className="ml-auto">Min stay: 2 nights</span>}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">Live availability arrives in Phase 2 — owners manage their own calendar.</p>
      </div>
    </section>
  );
}
