'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PROJECTS } from '@/data/portfolio';

export const ProjectsView: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'WEB' | 'MOBILE' | 'UI'>('ALL');

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'ALL') return true;
    return p.category === activeFilter;
  });

  const filterCounts = {
    ALL: PROJECTS.length,
    WEB: PROJECTS.filter((p) => p.category === 'WEB').length,
    MOBILE: PROJECTS.filter((p) => p.category === 'MOBILE').length,
    UI: PROJECTS.filter((p) => p.category === 'UI').length,
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 pt-6 pb-24">
      {/* Page Title & Counter */}
      <section className="pt-2 pb-6">
        <p className="font-hanken text-xs uppercase tracking-widest text-brand-text-muted font-bold mb-2">
          PORTFOLIO
        </p>
        <div className="flex justify-between items-end border-b border-brand-border/40 pb-4">
          <h1 className="font-garamond text-3xl sm:text-5xl font-bold text-brand-text tracking-tight">
            Selected Work
          </h1>
          <div className="flex items-center gap-2">
            <span className="font-hanken text-xs sm:text-sm font-bold text-brand-accent">
              {String(filteredProjects.length).padStart(2, '0')}
            </span>
            <span className="w-4 h-px bg-brand-border" />
            <span className="font-hanken text-xs sm:text-sm font-bold text-brand-muted-light">
              {String(PROJECTS.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-10 overflow-x-auto hide-scrollbar">
        <div className="flex gap-3 whitespace-nowrap min-w-max pb-2">
          {(['ALL', 'WEB', 'MOBILE', 'UI'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`group flex items-center gap-2 px-5 py-2.5 rounded-full font-hanken text-xs font-bold uppercase tracking-wider transition-all duration-300 active:scale-95 cursor-pointer ${
                activeFilter === filter
                  ? 'bg-brand-accent text-white shadow-[0_6px_18px_rgba(181,87,59,0.3)]'
                  : 'bg-brand-surface text-brand-text-muted border border-brand-border hover:border-brand-text/20 hover:bg-brand-bg'
              }`}
            >
              {filter}
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full transition-colors ${
                  activeFilter === filter
                    ? 'bg-white/25 text-white'
                    : 'bg-brand-bg text-brand-muted-light group-hover:bg-brand-surface'
                }`}
              >
                {filterCounts[filter]}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Project Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pb-16">
        {filteredProjects.map((project, index) => {
          const isOffsetRight = index % 3 === 1;

          return (
            <Link
              href={`/projects/${project.id}`}
              key={project.id}
              className={`group cursor-pointer block ${isOffsetRight ? 'md:translate-y-6' : ''}`}
            >
              <div className="relative rounded-[20px] bg-brand-surface p-3 border border-brand-border shadow-[0_4px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.14)] hover:-translate-y-1.5 transition-all duration-300">
                {/* number tag */}
                <span className="absolute -top-3 -left-3 z-10 w-9 h-9 rounded-full bg-brand-bg border border-brand-border/70 flex items-center justify-center font-hanken text-[11px] font-bold text-brand-text-muted shadow-[0_4px_10px_rgba(15,23,42,0.08)] group-hover:bg-brand-accent group-hover:text-white group-hover:border-brand-accent transition-colors duration-300">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-brand-bg">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-text/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute top-4 right-4 bg-brand-bg/90 backdrop-blur-sm rounded-full p-2.5 text-brand-accent shadow-sm scale-90 group-hover:scale-100 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                    <span className="material-symbols-outlined text-lg">arrow_outward</span>
                  </div>

                  {project.featured && (
                    <div className="absolute bottom-4 left-4 bg-brand-bg/90 backdrop-blur-sm text-brand-accent text-[10px] uppercase font-hanken font-bold tracking-widest px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                      Featured
                    </div>
                  )}
                </div>

                <div className="px-2 pb-2">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h2 className="font-garamond text-2xl font-bold text-brand-text group-hover:text-brand-accent transition-colors leading-tight">
                      {project.title}
                    </h2>
                    <span className="font-hanken text-xs font-bold text-brand-muted-light shrink-0 mt-1">
                      {project.year}
                    </span>
                  </div>

                  <p className="font-hanken text-xs text-brand-text-muted mb-4 line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-brand-bg text-brand-text-muted-alt font-hanken text-[10px] font-bold tracking-wider border border-brand-border"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 2 && (
                        <span className="px-2.5 py-1 rounded-full text-brand-muted-light font-hanken text-[10px] font-bold">
                          +{project.tags.length - 2}
                        </span>
                      )}
                    </div>
                    <span className="material-symbols-outlined text-brand-muted-light text-base opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </section>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <span className="material-symbols-outlined text-4xl text-brand-muted-light mb-3">search_off</span>
          <p className="font-hanken text-sm text-brand-text-muted">
            No projects found in this category yet.
          </p>
        </div>
      )}
    </div>
  );
};