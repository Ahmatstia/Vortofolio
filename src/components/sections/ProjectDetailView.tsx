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
      <div className="relative w-full h-[400px] sm:h-[520px] md:h-[618px] rounded-b-[28px] overflow-hidden bg-brand-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.08)]">
        <div
          className="absolute inset-0 bg-cover bg-center w-full h-full transform hover:scale-105 transition-transform duration-700 ease-out"
          style={{ backgroundImage: `url('${project.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-black/20" />

        {/* Floating Back Button */}
        <button
          onClick={() => router.push('/projects')}
          className="absolute top-6 left-4 sm:left-10 z-10 w-12 h-12 rounded-full bg-brand-bg/90 backdrop-blur-md flex items-center justify-center text-brand-text hover:bg-brand-bg hover:text-brand-accent transition-all shadow-[0_4px_20px_rgba(15,23,42,0.12)] cursor-pointer active:scale-95"
          title="Kembali ke daftar proyek"
          aria-label="Kembali"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>

        {/* Category badge floating top-right */}
        {project.category && (
          <div className="absolute top-6 right-4 sm:right-10 z-10 bg-brand-bg/90 backdrop-blur-md rounded-full px-4 py-2.5 shadow-[0_4px_20px_rgba(15,23,42,0.12)]">
            <span className="font-hanken text-[11px] uppercase tracking-widest font-bold text-brand-text">
              {project.category}
            </span>
          </div>
        )}
      </div>

      {/* Main Content */}
      <main className="px-4 sm:px-8 max-w-4xl mx-auto -mt-16 sm:-mt-20 relative z-10">
        {/* Title Card */}
        <div className="bg-brand-bg p-6 sm:p-10 rounded-[24px] shadow-[0_12px_36px_rgba(15,23,42,0.14)] mb-12 border border-brand-border">
          <span className="font-hanken text-xs uppercase tracking-widest text-brand-accent font-bold block mb-2">
            RINGKASAN PROYEK
          </span>
          <h1 className="font-garamond text-3xl sm:text-5xl md:text-6xl text-brand-text font-bold mb-8 leading-tight tracking-tight">
            {project.title}
          </h1>

          <div className="grid grid-cols-3 gap-4 border-t border-brand-border pt-6">
            {[
              { label: 'Klien', value: project.client, icon: 'business_center' },
              { label: 'Peran', value: project.role, icon: 'badge' },
              { label: 'Tahun', value: project.year, icon: 'calendar_today' },
            ].map(({ label, value, icon }) => (
              <div key={label}>
                <span className="flex items-center gap-1.5 font-hanken text-[11px] sm:text-xs uppercase tracking-wider text-brand-text-muted font-bold mb-1.5">
                  <span className="material-symbols-outlined text-sm text-brand-accent/70">{icon}</span>
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
        <div className="mb-12 sm:mb-16 relative pl-6 border-l-2 border-brand-accent/30">
          <p className="font-hanken text-lg sm:text-xl text-brand-text-muted leading-relaxed md:w-11/12 font-normal">
            {project.fullDescription}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-12 sm:mb-16">
          <h3 className="font-hanken text-xs text-brand-text-muted font-bold mb-4 uppercase tracking-widest flex items-center gap-2">
            <span className="w-4 h-px bg-brand-accent" />
            Teknologi
          </h3>
          <div className="flex overflow-x-auto hide-scrollbar space-x-3 pb-2">
            {project.techStack.map((tech) => (
              <div key={tech} className="flex-none px-5 py-2.5 rounded-full bg-brand-accent/10 border border-brand-accent/30 hover:bg-brand-accent hover:border-brand-accent transition-colors duration-300 cursor-default group">
                <span className="font-hanken text-xs font-bold text-brand-accent group-hover:text-white transition-colors">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="mb-16">
          <h3 className="font-hanken text-xs text-brand-text-muted font-bold mb-6 uppercase tracking-widest flex items-center gap-2">
            <span className="w-4 h-px bg-brand-accent" />
            Sorotan Utama
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.highlights.map((highlight, idx) => (
              <div key={idx} className="relative bg-brand-surface p-6 sm:p-8 rounded-[20px] border border-brand-border shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_32px_rgba(15,23,42,0.1)] hover:-translate-y-1.5 transition-all duration-300 group">
                <span className="absolute top-5 right-6 font-garamond text-3xl font-bold text-brand-border/70 group-hover:text-brand-accent/20 transition-colors">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className="w-12 h-12 rounded-full bg-brand-bg flex items-center justify-center mb-5 text-brand-accent shadow-sm group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
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
      <div className="fixed bottom-0 left-0 w-full bg-brand-bg/95 backdrop-blur-lg border-t border-brand-border px-4 sm:px-8 py-4 z-40 shadow-[0_-8px_28px_rgba(15,23,42,0.1)]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-end items-center">
          <button
            onClick={() => setLiveModal({ isOpen: true, mode: 'casestudy' })}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-brand-bg text-brand-text border border-brand-border font-hanken text-sm font-semibold hover:bg-brand-surface hover:border-brand-text/20 transition-all shadow-sm active:scale-95 cursor-pointer text-center"
          >
            Lihat Studi Kasus
          </button>
          <button
            onClick={() => setLiveModal({ isOpen: true, mode: 'live' })}
            className="group w-full sm:w-auto px-8 py-3.5 rounded-full bg-brand-accent text-white font-hanken text-sm font-semibold hover:bg-brand-accent-hover transition-all shadow-[0_6px_20px_rgba(181,87,59,0.3)] hover:shadow-[0_10px_28px_rgba(181,87,59,0.4)] active:scale-95 cursor-pointer text-center flex items-center justify-center gap-2"
          >
            Kunjungi Situs
            <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1">
              arrow_outward
            </span>
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