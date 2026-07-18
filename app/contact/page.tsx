'use client';

import { useState } from 'react';
import { PageHero } from '@/components/site/page-hero';
import { Reveal } from '@/components/motion/reveal';
import { Magnetic } from '@/components/motion/magnetic';
import { site } from '@/lib/data';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const update = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const data = await res.json();
      if (res.ok && data.status === 'ok') { setStatus('ok'); setMessage(data.message); setForm({ name: '', email: '', subject: '', message: '' }); }
      else { setStatus('error'); setMessage(data.message || 'Something went wrong.'); }
    } catch { setStatus('error'); setMessage('Network error. Please try again.'); }
  }

  return (
    <>
      <PageHero eyebrow="Contact" title="Reach the Rosendal team." intro="Questions, listings or just a hello — we'd love to hear from you." image="/captains-cabin.jpg" />
      <section className="bg-forest-deep py-20">
        <div className="container-editorial grid gap-10 md:grid-cols-[1fr_2fr]">
          <Reveal>
            <aside className="space-y-6 text-sm">
              <div><p className="eyebrow">Email</p><a href={`mailto:${site.email}`} className="transition-colors hover:text-brass">{site.email}</a></div>
              <div><p className="eyebrow">Phone</p><a href={`tel:${site.phone.replace(/\s/g, '')}`} className="transition-colors hover:text-brass">{site.phone}</a></div>
              <div><p className="eyebrow">Town</p><p className="text-cream/55">Rosendal, Free State, South Africa</p></div>
            </aside>
          </Reveal>
          <form onSubmit={submit} className="grid gap-4 text-sm">
            <input className="border border-cream/20 bg-forest-deep px-4 py-3 transition-colors focus:border-brass" placeholder="Name" value={form.name} onChange={(e) => update('name', e.target.value)} required />
            <input type="email" className="border border-cream/20 bg-forest-deep px-4 py-3 transition-colors focus:border-brass" placeholder="Email" value={form.email} onChange={(e) => update('email', e.target.value)} required />
            <input className="border border-cream/20 bg-forest-deep px-4 py-3 transition-colors focus:border-brass" placeholder="Subject (optional)" value={form.subject} onChange={(e) => update('subject', e.target.value)} />
            <textarea className="min-h-40 border border-cream/20 bg-forest-deep px-4 py-3 transition-colors focus:border-brass" placeholder="Message" value={form.message} onChange={(e) => update('message', e.target.value)} required />
            <Magnetic strength={0.5} className="w-fit">
              <button type="submit" disabled={status === 'sending'} data-cursor="grow" className="btn-pill btn-pill-forest disabled:opacity-50">{status === 'sending' ? 'Sending…' : 'Send message'}</button>
            </Magnetic>
            {message && <p className={`text-sm ${status === 'ok' ? 'text-brass' : 'text-red-600'}`} role="status">{message}</p>}
          </form>
        </div>
      </section>
    </>
  );
}
