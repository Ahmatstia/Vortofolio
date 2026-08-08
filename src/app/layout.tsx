import type { Metadata } from 'next';
import { EB_Garamond, Hanken_Grotesk } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { BottomNav } from '@/components/BottomNav';

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
  title: 'ahmtstia — Fullstack Developer Portfolio',
  description: 'Fullstack Developer Portfolio by ahmtstia',
  openGraph: {
    title: 'ahmtstia — Fullstack Developer Portfolio',
    description: 'Fullstack Developer Portfolio by ahmtstia',
    url: 'https://ahmtstia.dev',
    siteName: 'ahmtstia',
    images: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALIPCHTCqix-hDNIBgBaIaISeQKUFf_bzVn3xBzwDzZU7-9NfgmkIn860SMWtVeZC9Iz99DiP2YNElGDqeJEk3EK4yaZtYYrqRGrSV8_Qt9Ep7qo9X_7MFRKEXR4b3vuaBDX1z_sirG8JGcKqrmF996iZ4_0-Yj6GWwiZgTHdK2PcremNj5ipgfW3204LDoW3LQ96yIBEsCDFaroVhIDHJWSuCNGI9EXKsdDyENpd7zcfBKvsV2-4OHg', // HERO IMAGE
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ahmtstia — Fullstack Developer Portfolio',
    description: 'Fullstack Developer Portfolio by ahmtstia',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`light ${garamond.variable} ${hanken.variable}`}>
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
