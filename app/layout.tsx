import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SITE } from '@/lib/site-config';
import { LeadWidget } from '@/components/lead-widget';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Lasky Metal Construction | Steel Buildings in Arkansas & Oklahoma',
    template: '%s | Lasky Metal Construction',
  },
  description: SITE.tagline,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: SITE.name,
    title: 'Lasky Metal Construction | Steel Buildings in Arkansas & Oklahoma',
    description: SITE.tagline,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-cream text-steel">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-forge-red focus:px-4 focus:py-2 focus:text-white">
          Skip to main content
        </a>
        {children}
        <LeadWidget />
      </body>
    </html>
  );
}
