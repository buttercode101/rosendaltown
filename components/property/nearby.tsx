// Illustrated "nearby" — beautiful list, not a Google Map embed.
const NEARBY = [
  { label: 'Coffee', mins: 2 },
  { label: 'Wine Bar', mins: 3 },
  { label: 'Gallery', mins: 4 },
  { label: 'Church', mins: 5 },
  { label: 'Bakery', mins: 6 },
  { label: 'Walking Trail', mins: 7 }
];

export function NearbyMap() {
  return (
    <section className="bg-mist py-16">
      <div className="container-editorial">
        <p className="eyebrow">Around you</p>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl">A short walk from your door.</h2>
        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl bg-ink/10 md:grid-cols-3">
          {NEARBY.map((n) => (
            <div key={n.label} className="flex items-center justify-between bg-cream px-7 py-6">
              <span className="font-serif text-xl">{n.label}</span>
              <span className="text-sm text-muted-foreground">{n.mins} min</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
