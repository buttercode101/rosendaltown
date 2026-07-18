import type { Metadata } from 'next';
import { Cormorant_Garamond, Work_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CustomCursor } from '@/components/motion/cursor';

const serif = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-display', weight: ['400', '500', '600', '700'], style: ['normal', 'italic'] });
const sans = Work_Sans({ subsets: ['latin'], variable: '--font-sans', weight: ['300', '400', '500', '600'] });

export const metadata: Metadata = {
  title: { default: 'Rosendal — Free State', template: '%s · Rosendal' },
  description: 'Timeless charm. Authentic experiences. Your perfect Free State getaway — stay, eat, explore and feel Rosendal.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="grain">
        <CustomCursor />
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
