'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Project } from '@/types';

interface LiveSiteModalProps {
  project: Project | null;
  mode: 'live' | 'casestudy';
  isOpen: boolean;
  onClose: () => void;
}

/** Extracts a YouTube video ID from any YouTube URL format */
function getYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

export const LiveSiteModal: React.FC<LiveSiteModalProps> = ({
  project,
  mode,
  isOpen,
  onClose,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !project || !mounted) return null;

  const youtubeId = project.demoVideoUrl ? getYouTubeId(project.demoVideoUrl) : null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-brand-bg w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl border border-brand-border shadow-[0_16px_50px_rgba(15,23,42,0.25)] overflow-hidden relative">

        {/* Modal Header */}
        <div className="p-4 sm:p-6 bg-brand-surface border-b border-brand-border flex justify-between items-center shrink-0">
          <div>
            <span className="font-hanken text-[10px] uppercase tracking-widest text-brand-accent font-bold block">
              {mode === 'live' ? 'VIDEO DEMO' : 'FULL CASE STUDY'}
            </span>
            <h2 className="font-garamond text-2xl font-bold text-brand-text">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-brand-bg hover:bg-brand-accent hover:text-white transition-colors flex items-center justify-center text-brand-text cursor-pointer shrink-0"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {mode === 'live' ? (
            <div>
              {youtubeId ? (
                /* ── YouTube Embed ── */
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-brand-border shadow-md bg-black">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&modestbranding=1`}
                    title={`Demo video — ${project.title}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                  />
                </div>
              ) : (
                /* ── Fallback: belum ada video ── */
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-brand-border shadow-md">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="bg-brand-bg p-6 rounded-2xl max-w-sm text-center border border-brand-border shadow-lg">
                      <span className="material-symbols-outlined text-4xl text-brand-accent block mb-3">
                        videocam_off
                      </span>
                      <h3 className="font-garamond text-xl font-bold text-brand-text mb-1">
                        Video Belum Tersedia
                      </h3>
                      <p className="font-hanken text-xs text-brand-text-muted m-0">
                        Demo video sedang disiapkan.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Button to Actual Live Site */}
              {project.liveUrl && project.liveUrl !== '#' && (
                <div className="flex justify-center mt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-brand-accent text-white font-hanken text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full hover:bg-brand-accent-hover transition-all shadow-[0_6px_20px_rgba(181,87,59,0.3)] hover:shadow-[0_10px_28px_rgba(181,87,59,0.4)]"
                  >
                    Buka Aplikasi Langsung
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                </div>
              )}

              {/* Tech Stack */}
              <div className="bg-brand-surface p-5 rounded-xl border border-brand-border mt-4">
                <h4 className="font-hanken text-xs uppercase tracking-widest text-brand-accent font-bold mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-brand-bg text-brand-text font-hanken text-xs px-3 py-1.5 rounded-full border border-brand-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* ── Case Study ── */
            <div className="space-y-6">
              <div className="border-b border-brand-border pb-4">
                <h3 className="font-garamond text-2xl font-bold text-brand-text mb-2">
                  Challenge & Objective
                </h3>
                <p className="font-hanken text-base text-brand-text-muted leading-relaxed">
                  {project.client} needed an architectural revamp for {project.title}. The goal was to unify brand aesthetics, reduce bounce rates, and introduce high-performance touch controls for mobile visitors.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.highlights.map((h, i) => (
                  <div key={i} className="bg-brand-surface p-5 rounded-xl border border-brand-border">
                    <div className="flex items-center gap-2 text-brand-accent mb-2">
                      <span className="material-symbols-outlined">{h.icon}</span>
                      <h4 className="font-garamond text-xl font-bold text-brand-text">
                        {h.title}
                      </h4>
                    </div>
                    <p className="font-hanken text-xs text-brand-text-muted leading-relaxed">
                      {h.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-brand-surface p-6 rounded-xl border border-brand-border">
                <h3 className="font-garamond text-xl font-bold text-brand-text mb-2">
                  Results & Impact
                </h3>
                <p className="font-hanken text-sm text-brand-text-muted leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-brand-surface border-t border-brand-border flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-brand-accent text-white font-hanken text-xs font-bold uppercase tracking-wider hover:bg-brand-accent-hover transition-all cursor-pointer"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>,
    document.body
  );
};
