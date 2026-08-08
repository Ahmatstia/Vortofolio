'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  brandName?: string;
}

export const Header: React.FC<HeaderProps> = ({ brandName = 'PORTFOLIO' }) => {
  const pathname = usePathname();

  // If we're on projects or a specific project, consider 'projects' active
  const isProjectsActive = pathname?.startsWith('/projects');

  return (
    <header className="sticky top-0 w-full z-40 bg-[#F5F1EA]/90 backdrop-blur-md border-b border-[#D9D3C7]/40 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 py-4">
        {/* Left icon / Menu button */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-[#B5573B] hover:bg-[#E8E3DB] transition-colors p-2 rounded-full active:scale-95 flex items-center justify-center cursor-pointer"
            title="Go to Home"
            aria-label="Home menu"
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
          </Link>
          
          <Link
            href="/"
            className="font-garamond text-xl sm:text-2xl font-bold tracking-tight text-[#2B211A] hover:text-[#B5573B] transition-colors cursor-pointer"
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
                ? 'text-[#B5573B] border-[#B5573B]'
                : 'text-[#55423d] border-transparent hover:text-[#2B211A]'
            }`}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={`font-hanken text-xs uppercase tracking-widest font-bold transition-all py-1 border-b-2 ${
              isProjectsActive
                ? 'text-[#B5573B] border-[#B5573B]'
                : 'text-[#55423d] border-transparent hover:text-[#2B211A]'
            }`}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className={`font-hanken text-xs uppercase tracking-widest font-bold transition-all py-1 border-b-2 ${
              pathname === '/about'
                ? 'text-[#B5573B] border-[#B5573B]'
                : 'text-[#55423d] border-transparent hover:text-[#2B211A]'
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`font-hanken text-xs uppercase tracking-widest font-bold transition-all py-1 border-b-2 ${
              pathname === '/contact'
                ? 'text-[#B5573B] border-[#B5573B]'
                : 'text-[#55423d] border-transparent hover:text-[#2B211A]'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right profile / Action button */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="text-[#B5573B] hover:bg-[#E8E3DB] transition-colors p-2 rounded-full active:scale-95 flex items-center justify-center cursor-pointer"
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
