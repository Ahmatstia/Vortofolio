'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Project } from '@/types';
import { LiveSiteModal } from '@/components/modals/LiveSiteModal';

interface ProjectDetailViewProps {
  project: Project;
}

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({ project }) => {
  const router = useRouter();
  const [liveModal, setLiveModal] = useState<{
    isOpen: boolean;
    mode: 'live' | 'casestudy';
  }>({
    isOpen: false,
    mode: 'live'
  });

  return (
    <div className="pb-32 md:pb-24 w-full">
      {/* Hero Image Section */}
      <div className="relative w-full h-[400px] sm:h-[520px] md:h-[618px] rounded-b-[24px] overflow-hidden bg-brand-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.08)]">
        <div
          className="absolute inset-0 bg-cover bg-center w-full h-full transform hover:scale-105 transition-transform duration-700 ease-out"
          style={{ backgroundImage: `url('${project.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

        {/* Floating Back Button */}
        <button
          onClick={() => router.push('/projects')}
          className="absolute top-6 left-4 sm:left-10 z-10 w-12 h-12 rounded-full bg-brand-bg/90 backdrop-blur-md flex items-center justify-center text-brand-text hover:bg-brand-bg hover:text-brand-accent transition-all shadow-[0_4px_20px_rgba(15,23,42,0.12)] cursor-pointer active:scale-95"
          title="Go back to projects"
          aria-label="Go back"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
      </div>

      {/* Main Content */}
      <main className="px-4 sm:px-8 max-w-4xl mx-auto -mt-16 sm:-mt-20 relative z-10">
        {/* Title Card */}
        <div className="bg-brand-bg p-6 sm:p-10 rounded-[20px] shadow-[0_8px_30px_rgba(15,23,42,0.12)] mb-12 border border-brand-border">
          <span className="font-hanken text-xs uppercase tracking-widest text-brand-accent font-bold block mb-2">
            PROJECT OVERVIEW
          </span>
          <h1 className="font-garamond text-3xl sm:text-5xl md:text-6xl text-brand-text font-bold mb-8 leading-tight">
            {project.title}
          </h1>

          <div className="grid grid-cols-3 gap-4 border-t border-brand-border pt-6">
            {[
              { label: 'Client', value: project.client },
              { label: 'Role', value: project.role },
              { label: 'Year', value: project.year },
            ].map(({ label, value }) => (
              <div key={label}>
                <span className="block font-hanken text-[11px] sm:text-xs uppercase tracking-wider text-brand-text-muted font-bold mb-1">
                  {label}
                </span>
                <span className="font-hanken text-sm sm:text-base font-semibold text-brand-text">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mb-12 sm:mb-16">
          <p className="font-hanken text-lg sm:text-xl text-brand-text-muted leading-relaxed md:w-11/12 font-normal">
            {project.fullDescription}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-12 sm:mb-16">
          <h3 className="font-hanken text-xs text-brand-text-muted font-bold mb-4 uppercase tracking-widest">
            Tech Stack
          </h3>
          <div className="flex overflow-x-auto hide-scrollbar space-x-3 pb-2">
            {project.techStack.map((tech) => (
              <div key={tech} className="flex-none px-5 py-2.5 rounded-full bg-brand-accent/10 border border-brand-accent/30">
                <span className="font-hanken text-xs font-bold text-brand-accent">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="mb-16">
          <h3 className="font-hanken text-xs text-brand-text-muted font-bold mb-6 uppercase tracking-widest">
            Key Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.highlights.map((highlight, idx) => (
              <div key={idx} className="bg-brand-surface p-6 sm:p-8 rounded-[18px] border border-brand-border shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-brand-bg flex items-center justify-center mb-5 text-brand-accent shadow-sm">
                  <span className="material-symbols-outlined text-2xl">{highlight.icon}</span>
                </div>
                <h4 className="font-garamond text-2xl font-bold text-brand-text mb-2">
                  {highlight.title}
                </h4>
                <p className="font-hanken text-sm sm:text-base text-brand-text-muted leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Sticky Bottom CTA Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-brand-bg/95 backdrop-blur-lg border-t border-brand-border px-4 sm:px-8 py-4 z-40 shadow-[0_-4px_25px_rgba(15,23,42,0.08)]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-end items-center">
          <button
            onClick={() => setLiveModal({ isOpen: true, mode: 'casestudy' })}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-brand-bg text-brand-text border border-brand-border font-hanken text-sm font-semibold hover:bg-brand-surface transition-all shadow-sm active:scale-95 cursor-pointer text-center"
          >
            View Case Study
          </button>
          <button
            onClick={() => setLiveModal({ isOpen: true, mode: 'live' })}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-brand-accent text-white font-hanken text-sm font-semibold hover:bg-brand-accent-hover transition-all shadow-[0_4px_16px_rgba(37,99,235,0.3)] active:scale-95 cursor-pointer text-center"
          >
            View Live Site
          </button>
        </div>
      </div>

      <LiveSiteModal
        isOpen={liveModal.isOpen}
        project={project}
        mode={liveModal.mode}
        onClose={() => setLiveModal({ isOpen: false, mode: 'live' })}
      />
    </div>
  );
};
