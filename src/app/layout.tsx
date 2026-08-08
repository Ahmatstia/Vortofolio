import type { Metadata } from 'next';
import { EB_Garamond, Hanken_Grotesk, Geist } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { BottomNav } from '@/components/layout/BottomNav';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const garamond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-garamond',
  display: 'swap',
});

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ahmat Setiadi — Portofolio',
  description: 'Mahasiswa Teknik Informatika (Peminatan Sistem Cerdas/AI) — Portofolio Web, Mobile & AI oleh Ahmat Setiadi',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Ahmat Setiadi — Portofolio',
    description: 'Mahasiswa Teknik Informatika (Peminatan Sistem Cerdas/AI) — Portofolio Web, Mobile & AI oleh Ahmat Setiadi',
    url: 'https://ahmtstia.dev',
    siteName: 'ahmtstia',
    images: [
      {
        url: '/favicon.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmat Setiadi — Portofolio',
    description: 'Mahasiswa Teknik Informatika (Peminatan Sistem Cerdas/AI) — Portofolio Web, Mobile & AI',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("light", garamond.variable, hanken.variable, "font-sans", geist.variable)}>
      <head>
        {/* Material Symbols Outlined icon font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-brand-bg text-brand-text antialiased min-h-screen flex flex-col selection:bg-brand-accent/20 selection:text-brand-accent">
        <Header />
        <main className="flex-1 flex flex-col w-full">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
