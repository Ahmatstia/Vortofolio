'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  label: string;
  href: string;
  icon: string;
  matchPrefix?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/', icon: 'home' },
  { label: 'Projects', href: '/projects', icon: 'work_outline', matchPrefix: true },
  { label: 'About', href: '/about', icon: 'person_outline' },
  { label: 'Contact', href: '/contact', icon: 'mail_outline' },
];

export const BottomNav: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav 
      aria-label="Mobile Navigation"
      className="md:hidden fixed bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 w-[calc(100%-24px)] max-w-sm sm:max-w-md rounded-full bg-brand-bg/90 backdrop-blur-lg border border-brand-border/80 shadow-[0_8px_30px_rgba(15,23,42,0.15)] z-50 transition-all"
    >
      <ul className="flex items-center justify-between px-2 py-1.5 sm:px-3 sm:py-2">
        {NAV_ITEMS.map((item) => {
          const isActive = item.matchPrefix
            ? pathname?.startsWith(item.href)
            : pathname === item.href;

          return (
            <li key={item.href} className="flex-1 text-center">
              <Link
                href={item.href}
                className={`inline-flex flex-col items-center justify-center w-full py-1.5 px-1 sm:px-3 rounded-full transition-all duration-300 active:scale-90 ${
                  isActive
                    ? 'bg-brand-accent text-white shadow-sm font-semibold'
                    : 'text-brand-text-muted hover:text-brand-accent'
                }`}
                aria-label={item.label}
              >
                <span
                  className="material-symbols-outlined text-xl sm:text-[22px] transition-transform duration-200"
                  style={{
                    fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0",
                  }}
                >
                  {item.icon}
                </span>
                <span className="font-hanken text-[9px] sm:text-[10px] uppercase tracking-wider mt-0.5 leading-none">
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};