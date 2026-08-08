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
      <div className="flex items-center justify-between border-b border-[#D9D3C7]/40 pb-4 mb-6">
        <div className="flex items-center gap-2 text-[#B5573B]">
          <span className="material-symbols-outlined text-xl">terminal</span>
          <span className="font-garamond text-2xl font-bold tracking-tight text-[#2B211A]">
            AHMTSTIA
          </span>
        </div>
        <span className="font-hanken text-xs uppercase tracking-widest text-[#55423d] font-bold">
          PORTFOLIO ARCHIVE
        </span>
      </div>

      {/* Page Title & Counter */}
      <section className="pt-2 pb-6">
        <div className="flex justify-between items-baseline border-b border-[#D9D3C7]/40 pb-4">
          <h1 className="font-garamond text-3xl sm:text-5xl font-bold text-[#2B211A]">
            Selected Work
          </h1>
          <span className="font-hanken text-xs sm:text-sm font-bold text-[#625e52]">
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
                  ? 'bg-[#B5573B] text-white shadow-[0_4px_12px_rgba(181,87,59,0.25)]'
                  : 'bg-[#E8E3DB] text-[#55423d] border border-[#D9D3C7] hover:bg-[#F5F1EA]'
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
              <div className="rounded-2xl bg-[#E8E3DB] p-3 border border-[#D9D3C7] shadow-[0_4px_20px_rgba(43,33,26,0.06)] hover:shadow-[0_8px_30px_rgba(43,33,26,0.12)] transition-all duration-300">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-[#F5F1EA]">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-4 right-4 bg-[#F5F1EA]/90 backdrop-blur-sm rounded-full p-2.5 text-[#B5573B] shadow-sm group-hover:bg-[#B5573B] group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-lg">arrow_outward</span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-[#B5573B] text-white text-[10px] uppercase font-hanken font-bold tracking-widest px-3 py-1 rounded-full shadow-sm">
                      Featured
                    </div>
                  )}
                </div>

                <div className="px-2 pb-2">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h2 className="font-garamond text-2xl font-bold text-[#2B211A] group-hover:text-[#B5573B] transition-colors leading-tight">
                      {project.title}
                    </h2>
                    <span className="font-hanken text-xs font-bold text-[#89726c]">
                      {project.year}
                    </span>
                  </div>

                  <p className="font-hanken text-xs text-[#55423d] mb-4 line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-[#E6DFD0]/80 text-[#676256] font-hanken text-[10px] font-bold tracking-wider border border-[#D9D3C7]"
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
