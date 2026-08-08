import React from 'react';
import { Project } from '../types';

interface LiveSiteModalProps {
  project: Project | null;
  mode: 'live' | 'casestudy';
  isOpen: boolean;
  onClose: () => void;
}

export const LiveSiteModal: React.FC<LiveSiteModalProps> = ({
  project,
  mode,
  isOpen,
  onClose
}) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#FFFFFF] w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl border border-[#E2E8F0] shadow-[0_16px_50px_rgba(15, 23, 42,0.25)] overflow-hidden relative">
        {/* Modal Header */}
        <div className="p-4 sm:p-6 bg-[#F8FAFC] border-b border-[#E2E8F0] flex justify-between items-center">
          <div>
            <span className="font-hanken text-[10px] uppercase tracking-widest text-[#2563EB] font-bold block">
              {mode === 'live' ? 'INTERACTIVE PREVIEW' : 'FULL CASE STUDY'}
            </span>
            <h2 className="font-garamond text-2xl font-bold text-[#0F172A]">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#FFFFFF] hover:bg-[#2563EB] hover:text-white transition-colors flex items-center justify-center text-[#0F172A] cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {mode === 'live' ? (
            <div>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#E2E8F0] mb-6 shadow-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="bg-[#FFFFFF] p-6 rounded-2xl max-w-md text-center border border-[#E2E8F0] shadow-lg">
                    <span className="material-symbols-outlined text-4xl text-[#2563EB] mb-2">
                      devices
                    </span>
                    <h3 className="font-garamond text-2xl font-bold text-[#0F172A] mb-1">
                      Live Simulation Active
                    </h3>
                    <p className="font-hanken text-xs text-[#475569] mb-4">
                      {project.shortDescription}
                    </p>
                    <a
                      href={project.liveUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#2563EB] text-white font-hanken text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-full hover:bg-[#1D4ED8] transition-all"
                    >
                      Open External App
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#F8FAFC] p-6 rounded-xl border border-[#E2E8F0]">
                <h4 className="font-hanken text-xs uppercase tracking-widest text-[#2563EB] font-bold mb-2">
                  System Architecture
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#FFFFFF] text-[#0F172A] font-hanken text-xs px-3 py-1 rounded-full border border-[#E2E8F0]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="border-b border-[#E2E8F0] pb-4">
                <h3 className="font-garamond text-2xl font-bold text-[#0F172A] mb-2">
                  Challenge & Objective
                </h3>
                <p className="font-hanken text-base text-[#475569] leading-relaxed">
                  {project.client} needed an architectural revamp for {project.title}. The goal was to unify brand aesthetics, reduce bounce rates, and introduce high-performance touch controls for mobile visitors.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.highlights.map((h, i) => (
                  <div key={i} className="bg-[#F8FAFC] p-5 rounded-xl border border-[#E2E8F0]">
                    <div className="flex items-center gap-2 text-[#2563EB] mb-2">
                      <span className="material-symbols-outlined">{h.icon}</span>
                      <h4 className="font-garamond text-xl font-bold text-[#0F172A]">
                        {h.title}
                      </h4>
                    </div>
                    <p className="font-hanken text-xs text-[#475569] leading-relaxed">
                      {h.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-[#F8FAFC] p-6 rounded-xl border border-[#E2E8F0]">
                <h3 className="font-garamond text-xl font-bold text-[#0F172A] mb-2">
                  Results & Impact
                </h3>
                <p className="font-hanken text-sm text-[#475569] leading-relaxed">
                  Post-launch telemetry indicated a 38% increase in session duration, a 99.9% uptime record, and immediate adoption across mobile web users.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#F8FAFC] border-t border-[#E2E8F0] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#2563EB] text-white font-hanken text-xs font-bold uppercase tracking-wider hover:bg-[#1D4ED8] transition-all cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
