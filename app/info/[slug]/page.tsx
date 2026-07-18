import { notFound } from 'next/navigation';
import Image from 'next/image';
import { infoPages, infoOrder, type InfoContent } from '@/lib/content';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';

export function generateStaticParams() {
  return Object.keys(infoPages).map((slug) => ({ slug }));
}

export default function InfoPage({ params }: { params: { slug: string } }) {
  const page = infoPages[params.slug] as InfoContent | undefined;
  if (!page) return notFound();

  return (
    <article className="pb-20">
      <header className="relative flex h-[60vh] items-end overflow-hidden bg-forest-deep">
        {page.images[0] && (
          <Image src={page.images[0]} alt={page.title} fill priority className="object-cover opacity-70" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 to-transparent" />
        <div className="container-editorial relative z-10 pb-12 text-cream">
          <span className="eyebrow !text-brass-soft">Rosendal</span>
          <h1 className="mt-3 max-w-3xl font-serif text-5xl leading-[1.05] md:text-7xl">{page.title}</h1>
        </div>
      </header>

      <div className="container-editorial py-16">
        {/* Intro */}
        <Reveal>
          <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-ink/80">
            {page.intro.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </Reveal>

        {/* Body */}
        <Reveal delay={0.1}>
          <div className="mt-10 max-w-3xl space-y-5 text-lg leading-relaxed text-ink/80">
            {page.paragraphs.filter((p) => p && p !== page.intro[0]).map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </Reveal>

        {/* Checklist (birdwatching) */}
        {page.kind === 'checklist' && page.checklist.length > 0 && (
          <section className="mt-14">
            <h2 className="font-serif text-3xl">Top {page.checklist.length} birds in Rosendal</h2>
            <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {page.checklist.map((b) => (
                <div key={b} className="rounded-lg border border-ink/10 bg-white px-4 py-3 text-sm">{b}</div>
              ))}
            </div>
          </section>
        )}

        {/* Maps (town-maps) */}
        {page.kind === 'maps' && (
          <section className="mt-14 grid gap-6 md:grid-cols-3">
            {page.images.map((src, i) => (
              <a key={src + i} href={src} target="_blank" rel="noreferrer" className="group overflow-hidden rounded-xl border border-ink/10 bg-white">
                <div className="relative aspect-[3/4]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`Rosendal map ${i + 1}`} className="h-full w-full object-contain p-3 transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
              </a>
            ))}
          </section>
        )}

        {/* Gallery */}
        {page.kind === 'gallery' && (
          <section className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {page.images.map((src, i) => (
              <div key={src + i} className="relative aspect-square overflow-hidden rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={`Rosendal ${i + 1}`} className="h-full w-full object-cover" loading="lazy" />
              </div>
            ))}
          </section>
        )}

        {/* More content pages */}
        <nav className="mt-20 border-t border-ink/10 pt-10">
          <p className="eyebrow">More about Rosendal</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {infoOrder.filter((o) => o.slug !== params.slug).map((o) => (
              <a key={o.slug} href={`/info/${o.slug}`} className="rounded-full border border-ink/15 px-4 py-2 text-sm transition-colors hover:border-brass hover:text-brass">{o.label}</a>
            ))}
          </div>
        </nav>
      </div>
    </article>
  );
}
