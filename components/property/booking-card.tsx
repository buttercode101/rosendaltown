'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Star } from 'lucide-react';
import { Property } from '@/lib/properties';

// Sticky booking card (UI only — Phase 1). Price breakdown + Reserve.
export function BookingCard({ property }: { property: Property }) {
  const [saved, setSaved] = useState(false);
  const price = property.price[0] || 'Enquire for rates';
  const perNight = /night/i.test(price) ? price : `${price} / night`;
  return (
    <div className="sticky top-28 rounded-2xl border border-ink/10 bg-white p-6 shadow-[0_20px_60px_-20px_rgba(34,51,40,0.25)]">
      <div className="flex items-baseline justify-between">
        <div className="flex items-baseline gap-1">
          <span className="font-serif text-3xl">{perNight.replace(' / night', '')}</span>
          {/night/i.test(price) && <span className="text-sm text-muted-foreground">/ night</span>}
        </div>
        <button onClick={() => setSaved((s) => !s)} className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-brass" data-cursor="grow">
          <Heart className={`h-4 w-4 ${saved ? 'fill-brass text-brass' : ''}`} /> {saved ? 'Saved' : 'Save'}
        </button>
      </div>

      <div className="mt-4 space-y-3 text-sm">
        <div className="grid grid-cols-2 gap-2">
          <input type="date" className="border border-ink/15 px-3 py-2.5" aria-label="Check-in" />
          <input type="date" className="border border-ink/15 px-3 py-2.5" aria-label="Check-out" />
        </div>
        <input type="number" min={1} defaultValue={2} className="w-full border border-ink/15 px-3 py-2.5" aria-label="Guests" placeholder="Guests" />
      </div>

      <button className="btn-pill btn-pill-forest mt-4 w-full justify-center" data-cursor="grow">
        Reserve
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">You won&apos;t be charged yet</p>

      <div className="mt-5 space-y-2 border-t border-ink/10 pt-4 text-sm">
        <div className="flex justify-between"><span className="text-muted-foreground">{perNight} × 2 nights</span><span>R—</span></div>
        <div className="flex justify-between"><span className="text-muted-foreground">Cleaning fee</span><span>R—</span></div>
        <div className="flex justify-between border-t border-ink/10 pt-2 font-medium"><span>Total</span><span>R—</span></div>
      </div>

      <div className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground">
        <Star className="h-4 w-4 fill-brass text-brass" /> {property.rating} · {property.reviews} Rosendal Guest Reviews
      </div>
    </div>
  );
}
