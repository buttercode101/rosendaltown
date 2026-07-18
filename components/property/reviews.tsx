import { Star } from 'lucide-react';

// Curated "Rosendal Guest Reviews" — collected on the website (Phase 1 static).
const REVIEWS = [
  { name: 'Marlé', from: 'Bloemfontein', text: 'Woke up to birdsong and mountain air. The most calm we have felt all year. We will be back.' },
  { name: 'Johan & Anri', from: 'Pretoria', text: 'Exactly as described — character, warmth and silence. Walked into the village for coffee and never wanted to leave.' },
  { name: 'The Fouries', from: 'Cape Town', text: 'A hidden gem. The fireplace, the views, the antique details. Rosendal delivered on every promise.' }
];

export function GuestReviews() {
  return (
    <section className="container-editorial py-16">
      <p className="eyebrow">Rosendal Guest Reviews</p>
      <h2 className="mt-3 font-serif text-3xl md:text-4xl">What guests say.</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {REVIEWS.map((r) => (
          <figure key={r.name} className="rounded-2xl border border-ink/10 bg-white p-7">
            <div className="flex gap-1 text-brass"><Star className="h-4 w-4 fill-brass" /><Star className="h-4 w-4 fill-brass" /><Star className="h-4 w-4 fill-brass" /><Star className="h-4 w-4 fill-brass" /><Star className="h-4 w-4 fill-brass" /></div>
            <blockquote className="mt-4 text-lg leading-relaxed">&ldquo;{r.text}&rdquo;</blockquote>
            <figcaption className="mt-5 text-sm text-muted-foreground">{r.name} · {r.from}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
