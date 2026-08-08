'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  brandName?: string;
}

export const Header: React.FC<HeaderProps> = ({ brandName = 'PORTFOLIO' }) => {
  const pathname = usePathname();
  const isProjectsActive = pathname?.startsWith('/projects');

  return (
    <header className="sticky top-0 w-full z-40 bg-brand-bg/90 backdrop-blur-md border-b border-brand-border/40 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 py-4">
        {/* Left icon / Menu button */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="font-garamond text-xl sm:text-2xl font-bold tracking-tight text-brand-text hover:text-brand-accent transition-colors cursor-pointer"
          >
            {isProjectsActive ? 'AHMTSTIA' : brandName}
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`font-hanken text-xs uppercase tracking-widest font-bold transition-all py-1 border-b-2 ${
              pathname === '/'
                ? 'text-brand-accent border-brand-accent'
                : 'text-brand-text-muted border-transparent hover:text-brand-text'
            }`}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={`font-hanken text-xs uppercase tracking-widest font-bold transition-all py-1 border-b-2 ${
              isProjectsActive
                ? 'text-brand-accent border-brand-accent'
                : 'text-brand-text-muted border-transparent hover:text-brand-text'
            }`}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className={`font-hanken text-xs uppercase tracking-widest font-bold transition-all py-1 border-b-2 ${
              pathname === '/about'
                ? 'text-brand-accent border-brand-accent'
                : 'text-brand-text-muted border-transparent hover:text-brand-text'
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`font-hanken text-xs uppercase tracking-widest font-bold transition-all py-1 border-b-2 ${
              pathname === '/contact'
                ? 'text-brand-accent border-brand-accent'
                : 'text-brand-text-muted border-transparent hover:text-brand-text'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right profile / Action button */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="text-brand-accent hover:bg-brand-surface transition-colors p-2 rounded-full active:scale-95 flex items-center justify-center cursor-pointer"
            title="Profile & Contact"
            aria-label="Profile and Contact"
          >
            <span className="material-symbols-outlined text-2xl">account_circle</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
