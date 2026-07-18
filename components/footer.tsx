import Link from 'next/link';
import { footer, site } from '@/lib/data';

export function Footer() {
  return (
    <footer className="mt-24 bg-forest-deep text-cream">
      <div className="container-editorial grid gap-10 py-16 md:grid-cols-4">
        <div>
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-serif text-3xl tracking-tight">{site.name}</span>
            <span className="eyebrow mt-1 !text-brass-soft">{site.region}</span>
          </Link>
          <p className="mt-5 max-w-xs text-sm text-cream/70">{site.tagline} {site.sub}</p>
        </div>
        <div>
          <p className="eyebrow !text-brass-soft">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {footer.explore.map((l) => (
              <li key={l}><Link href={`/${l.toLowerCase().replace(/ & | &| /g, '-')}`} className="text-cream/80 transition-colors hover:text-brass">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow !text-brass-soft">Information</p>
          <ul className="mt-4 space-y-2 text-sm">
            {footer.information.map((l) => (
              <li key={l.label}><Link href={l.href} className="text-cream/80 transition-colors hover:text-brass">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow !text-brass-soft">For Businesses</p>
          <ul className="mt-4 space-y-2 text-sm">
            {footer.business.map((l) => (
              <li key={l}><span className="text-cream/80">{l}</span></li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-cream/70">{site.email}</p>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-editorial py-6 text-xs text-cream/50">© {new Date().getFullYear()} Rosendal Town. All rights reserved.</div>
      </div>
    </footer>
  );
}
