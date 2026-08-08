'use client';

import React from 'react';
import Link from 'next/link';
import { HERO_IMAGE, PROJECTS } from '@/data/portfolio';

export const HomeView: React.FC = () => {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="flex-grow flex flex-col justify-between px-4 sm:px-10 py-8 sm:py-16 max-w-7xl mx-auto w-full">
      {/* Main Hero Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center my-auto min-h-[500px] md:min-h-[580px]">
        {/* Text Column */}
        <div className="col-span-1 md:col-span-7 flex flex-col gap-6 z-10">
          <p className="font-hanken text-xs uppercase tracking-widest text-brand-text-muted font-bold">
            FULLSTACK DEVELOPER
          </p>

          <h1 className="font-garamond text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-brand-text tracking-tight">
            ahmtstia —<br />
            <span className="text-brand-text-muted-alt italic font-normal">Crafting Digital Experiences</span>
          </h1>

          <p className="font-hanken text-base sm:text-lg text-brand-text-muted max-w-lg leading-relaxed mt-1">
            Building high-performance applications with an editorial design focus.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              href="/projects"
              className="bg-brand-accent text-white font-hanken text-sm font-semibold px-8 py-4 rounded-full shadow-[0_4px_20px_rgba(15,23,42,0.12)] hover:bg-brand-accent-hover transition-all duration-300 active:scale-95 text-center cursor-pointer inline-block"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="bg-brand-bg text-brand-text font-hanken text-sm font-semibold px-8 py-4 rounded-full border border-brand-border hover:bg-brand-surface transition-all duration-300 active:scale-95 text-center shadow-[0_4px_20px_rgba(15,23,42,0.02)] cursor-pointer inline-block"
            >
              Let's Talk
            </Link>
          </div>
        </div>

        {/* Image Column */}
        <div className="col-span-1 md:col-span-5 flex justify-center md:justify-end mt-6 md:mt-0 relative">
          <div className="image-accent w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px]">
            <img
              src={HERO_IMAGE}
              alt="ahmtstia portrait"
              className="w-full h-auto object-cover rounded-[16px] shadow-[0_8px_30px_rgba(15,23,42,0.12)] border border-brand-border/60"
            />
          </div>
        </div>
      </div>

      {/* Featured Work Teaser Grid */}
      <div className="mt-16 sm:mt-24 pt-12 border-t border-brand-border/40">
        <div className="flex justify-between items-end mb-8">
          <div>
            <p className="font-hanken text-xs uppercase tracking-widest text-brand-text-muted font-bold">
              FEATURED WORK
            </p>
            <h2 className="font-garamond text-2xl sm:text-3xl text-brand-text font-bold mt-1">
              Recent Case Studies
            </h2>
          </div>
          <Link
            href="/projects"
            className="font-hanken text-xs uppercase tracking-widest text-brand-accent font-bold hover:underline flex items-center gap-1 cursor-pointer"
          >
            See All ({PROJECTS.length})
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <Link
              href={`/projects/${project.id}`}
              key={project.id}
              className="group bg-brand-surface rounded-[16px] p-3 border border-brand-border/50 shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:-translate-y-1 transition-all duration-300 cursor-pointer block"
            >
              <div className="relative w-full aspect-[4/3] rounded-[12px] overflow-hidden mb-3">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-brand-bg/90 backdrop-blur-sm rounded-full p-2 text-brand-accent shadow-sm">
                  <span className="material-symbols-outlined text-lg">arrow_outward</span>
                </div>
              </div>
              <div className="p-1">
                <span className="font-hanken text-[10px] uppercase tracking-wider text-brand-text-muted font-bold block mb-1">
                  {project.client} — {project.year}
                </span>
                <h3 className="font-garamond text-xl font-bold text-brand-text group-hover:text-brand-accent transition-colors">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:flex justify-center w-full mt-12 scroll-indicator">
        <Link
          href="/projects"
          className="text-brand-muted-light hover:text-brand-accent transition-colors cursor-pointer"
          aria-label="Scroll down to projects"
        >
          <span className="material-symbols-outlined text-3xl">arrow_downward</span>
        </Link>
      </div>
    </div>
  );
};
