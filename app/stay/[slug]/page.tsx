import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Check, Star } from 'lucide-react';
import { getProperty, properties } from '@/lib/properties';
import { PropertyGallery } from '@/components/property/gallery';
import { BookingCard } from '@/components/property/booking-card';
import { GuestReviews } from '@/components/property/reviews';
import { NearbyMap } from '@/components/property/nearby';
import { AvailabilityCalendar } from '@/components/property/calendar';
import { Reveal } from '@/components/motion/reveal';

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export default function PropertyPage({ params }: { params: { slug: string } }) {
  const property = getProperty(params.slug);
  if (!property) return notFound();

  return (
    <article>
      {/* Title row over hero */}
      <div className="container-editorial relative z-10 -mb-40 pt-28 text-cream">
        <Link href="/stay" className="inline-flex items-center gap-2 text-sm text-cream/80 transition-colors hover:text-cream">
          <ArrowLeft className="h-4 w-4" /> All stays
        </Link>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1] md:text-7xl">{property.name}</h1>
        <p className="mt-3 text-lg text-cream/85">{property.location}</p>
        <div className="mt-3 flex items-center gap-2 text-cream/85">
          <Star className="h-4 w-4 fill-brass text-brass" /> {property.rating} · {property.reviews} reviews
        </div>
      </div>

      <PropertyGallery images={[property.hero, ...property.gallery].filter(Boolean) as string[]} name={property.name} />

      <div className="container-editorial grid gap-12 py-16 lg:grid-cols-[1.6fr_1fr]">
        <div>
          {/* Quick facts */}
          <Reveal>
            <p className="eyebrow">The essentials</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {property.facts.slice(0, 8).map((f) => (
                <span key={f} className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-forest-mist px-4 py-2 text-sm">
                  <Check className="h-3.5 w-3.5 text-brass" /> {f}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Story */}
          <Reveal delay={0.1}>
            <h2 className="mt-12 font-serif text-3xl md:text-4xl">The story</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream/80">{property.story}</p>
          </Reveal>

          {/* Huge gallery strip */}
          <Reveal delay={0.15}>
            <h2 className="mt-12 font-serif text-3xl md:text-4xl">The space</h2>
            <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3">
              {property.gallery.slice(0, 9).map((src, i) => (
                <div key={src + i} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`${property.name} ${i + 1}`} className="h-full w-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Sticky booking */}
        <aside>
          <BookingCard property={property} />
        </aside>
      </div>

      <NearbyMap />
      <AvailabilityCalendar />
      <GuestReviews />

      <section className="container-editorial pb-20">
        <h2 className="font-serif text-2xl">More places to stay</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {properties.filter((p) => p.slug !== property.slug).slice(0, 3).map((p) => (
            <Link key={p.slug} href={`/stay/${p.slug}`} className="group rounded-xl overflow-hidden border border-cream/10 bg-forest-mist" data-cursor="grow">
              <div className="relative aspect-[4/3] overflow-hidden">
                {p.hero && <img src={p.hero} alt={p.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />}
              </div>
              <div className="p-4"><div className="font-serif text-lg">{p.name}</div><div className="text-sm text-cream/55">{p.price[0] || 'Enquire'}</div></div>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
