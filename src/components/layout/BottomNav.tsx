'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const BottomNav: React.FC = () => {
  const pathname = usePathname();
  const isProjectsActive = pathname?.startsWith('/projects');

  return (
    <nav className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-md rounded-full bg-brand-bg/95 backdrop-blur-md border border-brand-border shadow-[0_4px_25px_rgba(15,23,42,0.12)] z-50">
      <ul className="flex justify-around items-center px-3 py-2">
        {/* Home */}
        <li>
          <Link
            href="/"
            className={`flex flex-col items-center justify-center px-4 py-1.5 rounded-full transition-all duration-200 active:scale-90 ${
              pathname === '/'
                ? 'bg-brand-accent text-white shadow-sm'
                : 'text-brand-text-muted hover:text-brand-accent'
            }`}
            aria-label="Home"
          >
            <span
              className="material-symbols-outlined text-xl"
              style={{ fontVariationSettings: pathname === '/' ? "'FILL' 1" : "'FILL' 0" }}
            >
              home
            </span>
            <span className="font-hanken text-[10px] uppercase tracking-wider font-semibold mt-0.5">
              Home
            </span>
          </Link>
        </li>

        {/* Projects */}
        <li>
          <Link
            href="/projects"
            className={`flex flex-col items-center justify-center px-4 py-1.5 rounded-full transition-all duration-200 active:scale-90 ${
              isProjectsActive
                ? 'bg-brand-accent text-white shadow-sm'
                : 'text-brand-text-muted hover:text-brand-accent'
            }`}
            aria-label="Projects"
          >
            <span
              className="material-symbols-outlined text-xl"
              style={{
                fontVariationSettings: isProjectsActive ? "'FILL' 1" : "'FILL' 0"
              }}
            >
              work_outline
            </span>
            <span className="font-hanken text-[10px] uppercase tracking-wider font-semibold mt-0.5">
              Projects
            </span>
          </Link>
        </li>

        {/* About */}
        <li>
          <Link
            href="/about"
            className={`flex flex-col items-center justify-center px-4 py-1.5 rounded-full transition-all duration-200 active:scale-90 ${
              pathname === '/about'
                ? 'bg-brand-accent text-white shadow-sm'
                : 'text-brand-text-muted hover:text-brand-accent'
            }`}
            aria-label="About"
          >
            <span
              className="material-symbols-outlined text-xl"
              style={{ fontVariationSettings: pathname === '/about' ? "'FILL' 1" : "'FILL' 0" }}
            >
              person_outline
            </span>
            <span className="font-hanken text-[10px] uppercase tracking-wider font-semibold mt-0.5">
              About
            </span>
          </Link>
        </li>

        {/* Contact */}
        <li>
          <Link
            href="/contact"
            className={`flex flex-col items-center justify-center px-4 py-1.5 rounded-full transition-all duration-200 active:scale-90 ${
              pathname === '/contact'
                ? 'bg-brand-accent text-white shadow-sm'
                : 'text-brand-text-muted hover:text-brand-accent'
            }`}
            aria-label="Contact"
          >
            <span
              className="material-symbols-outlined text-xl"
              style={{ fontVariationSettings: pathname === '/contact' ? "'FILL' 1" : "'FILL' 0" }}
            >
              mail_outline
            </span>
            <span className="font-hanken text-[10px] uppercase tracking-wider font-semibold mt-0.5">
              Contact
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
