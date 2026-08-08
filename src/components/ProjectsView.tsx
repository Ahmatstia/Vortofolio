'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PROJECTS } from '../data/portfolioData';

export const ProjectsView: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'WEB' | 'MOBILE' | 'UI'>('ALL');

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'ALL') return true;
    return p.category === activeFilter;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 pt-6 pb-24">
      {/* Header Brand Sub-title */}
      <div className="flex items-center justify-between border-b border-[#E2E8F0]/40 pb-4 mb-6">
        <div className="flex items-center gap-2 text-[#2563EB]">
          <span className="material-symbols-outlined text-xl">terminal</span>
          <span className="font-garamond text-2xl font-bold tracking-tight text-[#0F172A]">
            AHMTSTIA
          </span>
        </div>
        <span className="font-hanken text-xs uppercase tracking-widest text-[#475569] font-bold">
          PORTFOLIO ARCHIVE
        </span>
      </div>

      {/* Page Title & Counter */}
      <section className="pt-2 pb-6">
        <div className="flex justify-between items-baseline border-b border-[#E2E8F0]/40 pb-4">
          <h1 className="font-garamond text-3xl sm:text-5xl font-bold text-[#0F172A]">
            Selected Work
          </h1>
          <span className="font-hanken text-xs sm:text-sm font-bold text-[#64748B]">
            01 / 0{filteredProjects.length || 6}
          </span>
        </div>
      </section>

      {/* Filters (Horizontal Scrollable) */}
      <section className="pb-8 overflow-x-auto hide-scrollbar">
        <div className="flex gap-3 whitespace-nowrap min-w-max pb-2">
          {(['ALL', 'WEB', 'MOBILE', 'UI'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full font-hanken text-xs font-bold uppercase tracking-wider transition-all duration-200 active:scale-95 cursor-pointer ${
                activeFilter === filter
                  ? 'bg-[#2563EB] text-white shadow-[0_4px_12px_rgba(37, 99, 235,0.25)]'
                  : 'bg-[#FFFFFF] text-[#475569] border border-[#E2E8F0] hover:bg-[#F8FAFC]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Project Cards (Grid / Asymmetric Stack) */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pb-16">
        {filteredProjects.map((project, index) => {
          // Add asymmetric layout variation for desktop
          const isOffsetRight = index % 3 === 1;
          const isWideCard = index % 3 === 2;

          return (
            <Link
              href={`/projects/${project.id}`}
              key={project.id}
              className={`group cursor-pointer block ${
                isOffsetRight ? 'md:translate-y-4' : ''
              } ${isWideCard ? 'lg:col-span-1' : ''}`}
            >
              <div className="rounded-2xl bg-[#FFFFFF] p-3 border border-[#E2E8F0] shadow-[0_4px_20px_rgba(15, 23, 42,0.06)] hover:shadow-[0_8px_30px_rgba(15, 23, 42,0.12)] transition-all duration-300">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-[#F8FAFC]">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-4 right-4 bg-[#F8FAFC]/90 backdrop-blur-sm rounded-full p-2.5 text-[#2563EB] shadow-sm group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-lg">arrow_outward</span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-[#2563EB] text-white text-[10px] uppercase font-hanken font-bold tracking-widest px-3 py-1 rounded-full shadow-sm">
                      Featured
                    </div>
                  )}
                </div>

                <div className="px-2 pb-2">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h2 className="font-garamond text-2xl font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors leading-tight">
                      {project.title}
                    </h2>
                    <span className="font-hanken text-xs font-bold text-[#94A3B8]">
                      {project.year}
                    </span>
                  </div>

                  <p className="font-hanken text-xs text-[#475569] mb-4 line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-[#F1F5F9]/80 text-[#64748B] font-hanken text-[10px] font-bold tracking-wider border border-[#E2E8F0]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
};
