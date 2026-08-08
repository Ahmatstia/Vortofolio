'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '@/data/portfolio';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { PageWrapper, Reveal, fadeUp, staggerContainer, scaleIn } from '@/components/ui/animations';

export const ProjectsView: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'WEB' | 'MOBILE' | 'UI' | 'AI / ML'>('ALL');

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'ALL') return true;
    return p.category === activeFilter;
  });

  const filterCounts: Record<string, number> = {
    ALL: PROJECTS.length,
    WEB: PROJECTS.filter((p) => p.category === 'WEB').length,
    MOBILE: PROJECTS.filter((p) => p.category === 'MOBILE').length,
    UI: PROJECTS.filter((p) => p.category === 'UI').length,
    'AI / ML': PROJECTS.filter((p) => p.category === 'AI / ML').length,
  };

  return (
    <PageWrapper>
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 pt-6 pb-24">
      {/* Page Title & Counter */}
      <Reveal>
      <section className="pt-2 pb-6">
        <p className="font-hanken text-xs uppercase tracking-widest text-brand-text-muted font-bold mb-2">
          PORTOFOLIO
        </p>
        <div className="flex justify-between items-end border-b border-brand-border/40 pb-4">
          <h1 className="font-garamond text-3xl sm:text-5xl font-bold text-brand-text tracking-tight">
            Karya Pilihan
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
      </Reveal>

      {/* Filters */}
      <Reveal>
      <section className="pb-10 overflow-x-auto hide-scrollbar">
        <div className="flex gap-3 whitespace-nowrap min-w-max pb-2">
          {(['ALL', 'WEB', 'MOBILE', 'UI', 'AI / ML'] as const).map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileTap={{ scale: 0.94 }}
              whileHover={{ scale: 1.04 }}
              className={`group flex items-center gap-2 px-5 py-2.5 rounded-full font-hanken text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeFilter === filter
                  ? 'bg-brand-accent text-white shadow-[0_6px_18px_rgba(181,87,59,0.3)]'
                  : 'bg-brand-surface text-brand-text-muted border border-brand-border hover:border-brand-text/20 hover:bg-brand-bg'
              }`}
            >
              {filter === 'ALL' ? 'SEMUA' : filter}
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full transition-colors ${
                  activeFilter === filter
                    ? 'bg-white/25 text-white'
                    : 'bg-brand-bg text-brand-muted-light group-hover:bg-brand-surface'
                }`}
              >
                {filterCounts[filter]}
              </span>
            </motion.button>
          ))}
        </div>
      </section>
      </Reveal>

      {/* Project Cards Grid */}
      <AnimatePresence mode="wait">
        <motion.section
          key={activeFilter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pb-16"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {filteredProjects.map((project, index) => {
            const isOffsetRight = index % 3 === 1;

            return (
              <motion.div key={project.id} variants={scaleIn}>
                <ProjectCard
                  project={project}
                  index={index}
                  variant="detailed"
                  className={isOffsetRight ? 'md:translate-y-6' : ''}
                />
              </motion.div>
            );
          })}
        </motion.section>
      </AnimatePresence>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <span className="material-symbols-outlined text-4xl text-brand-muted-light mb-3">search_off</span>
          <p className="font-hanken text-sm text-brand-text-muted">
            Belum ada proyek di kategori ini.
          </p>
        </div>
      )}
    </div>
    </PageWrapper>
  );
};