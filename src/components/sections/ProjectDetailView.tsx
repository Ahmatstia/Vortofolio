'use client';

import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';
import { Project } from '@/types';
import { LiveSiteModal } from '@/components/modals/LiveSiteModal';

interface ProjectDetailViewProps {
  project: Project;
}

/* ---------------------------------------------------------------------- */
/* Stacked / Fanned Swipeable Gallery                                     */
/* ---------------------------------------------------------------------- */

interface StackedGalleryProps {
  images: string[];
  alt: string;
}

const StackedGallery: React.FC<StackedGalleryProps> = ({ images, alt }) => {
  const [active, setActive] = useState(0);
  const dragState = useRef<{ startX: number; dragging: boolean }>({ startX: 0, dragging: false });
  const [dragOffset, setDragOffset] = useState(0);

  const count = images.length;

  const goTo = (idx: number) => {
    setActive(((idx % count) + count) % count);
  };
  const next = () => goTo(active + 1);
  const prev = () => goTo(active - 1);

  const onPointerDown = (e: React.PointerEvent) => {
    dragState.current = { startX: e.clientX, dragging: true };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragState.current.dragging) return;
    setDragOffset(e.clientX - dragState.current.startX);
  };
  const endDrag = () => {
    if (!dragState.current.dragging) return;
    dragState.current.dragging = false;
    if (dragOffset > 60) prev();
    else if (dragOffset < -60) next();
    setDragOffset(0);
  };

  /* Position of each card relative to the active one, fanned like petals */
  const getCardStyle = (idx: number): React.CSSProperties => {
    let offset = idx - active;
    if (offset > count / 2) offset -= count;
    if (offset < -count / 2) offset += count;

    const dragInfluence = dragState.current.dragging ? dragOffset / 6 : 0;
    const absOffset = Math.abs(offset);

    const translateX = offset * 78 + dragInfluence;
    const translateY = absOffset * 14;
    const rotate = offset * 9;
    const scale = offset === 0 ? 1 : 1 - absOffset * 0.12;
    const zIndex = 10 - absOffset;
    const opacity = absOffset > 2 ? 0 : 1 - absOffset * 0.18;

    return {
      transform: `translate(-50%, -50%) translateX(${translateX}%) translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`,
      zIndex,
      opacity,
      transition: dragState.current.dragging ? 'none' : 'transform 0.5s cubic-bezier(0.22,1,0.36,1), opacity 0.4s ease',
    };
  };

  return (
    <div className="relative w-full h-[420px] sm:h-[520px] md:h-[618px] select-none">
      <div
        className="relative w-full h-full overflow-hidden rounded-b-[28px] cursor-grab active:cursor-grabbing touch-pan-y"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className="absolute top-1/2 left-1/2 w-[82%] sm:w-[62%] md:w-[48%] lg:w-[40%] max-w-[480px] aspect-[4/5] rounded-[22px] overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.20)] border-4 border-brand-bg bg-[#faf7f2]"
            style={getCardStyle(idx)}
            onClick={() => idx !== active && goTo(idx)}
          >
            {/* Menggunakan object-contain + bg krem agar poster tidak terpotong di Desktop */}
            <img
              src={src}
              alt={`${alt} — ${idx + 1}`}
              draggable={false}
              className="w-full h-full object-contain pointer-events-none"
            />
            {idx === active && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            )}
          </div>
        ))}
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-brand-bg/90 backdrop-blur-md border border-brand-border/70 flex items-center justify-center text-brand-text hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all shadow-[0_4px_16px_rgba(15,23,42,0.12)] cursor-pointer active:scale-90"
      >
        <span className="material-symbols-outlined text-xl">chevron_left</span>
      </button>
      <button
        onClick={next}
        aria-label="Next image"
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-brand-bg/90 backdrop-blur-md border border-brand-border/70 flex items-center justify-center text-brand-text hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all shadow-[0_4px_16px_rgba(15,23,42,0.12)] cursor-pointer active:scale-90"
      >
        <span className="material-symbols-outlined text-xl">chevron_right</span>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-brand-bg/80 backdrop-blur-md rounded-full px-3 py-2 border border-brand-border/60 shadow-sm">
        {images.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to image ${idx + 1}`}
            onClick={() => goTo(idx)}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              idx === active ? 'w-6 h-2 bg-brand-accent' : 'w-2 h-2 bg-brand-border hover:bg-brand-text-muted'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

/* ---------------------------------------------------------------------- */
/* Masonry Gallery with Lightbox                                          */
/* ---------------------------------------------------------------------- */

const ProjectGallery: React.FC<{ images?: string[] }> = ({ images }) => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!images || images.length === 0) return null;

  return (
    <div className="mb-20">
      <h3 className="font-hanken text-xs text-brand-text-muted font-bold mb-8 uppercase tracking-widest flex items-center gap-2">
        <span className="w-4 h-px bg-brand-accent" />
        Galeri & Tangkapan Layar
      </h3>
      
      {/* 2 Columns on mobile, 3 on tablet, 4 on desktop */}
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-5 space-y-3 sm:space-y-5">
        {images.map((src, idx) => {
          const isOdd = idx % 2 !== 0;
          const rotateClass = isOdd ? 'group-hover:rotate-2' : 'group-hover:-rotate-2';

          return (
            <div 
              key={idx} 
              className="break-inside-avoid relative overflow-hidden rounded-xl bg-brand-surface border border-brand-border/40 cursor-zoom-in group shadow-sm hover:shadow-xl transition-all duration-500 hover:z-10"
              onClick={() => setSelectedImg(src)}
            >
              <img 
                src={src} 
                alt={`Gallery ${idx + 1}`} 
                loading="lazy"
                className={`w-full h-auto object-cover transition-all duration-700 ease-out group-hover:scale-110 ${rotateClass}`} 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {selectedImg && mounted && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-10 cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <img 
            src={selectedImg} 
            alt="Enlarged view" 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in duration-200" 
          />
          <button 
            className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full backdrop-blur-md transition-all cursor-pointer"
            onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
          >
            <span className="material-symbols-outlined block text-2xl">close</span>
          </button>
        </div>,
        document.body
      )}
    </div>
  );
};

/* ---------------------------------------------------------------------- */
/* Project Detail View                                                    */
/* ---------------------------------------------------------------------- */

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({ project }) => {
  const router = useRouter();
  const [liveModal, setLiveModal] = useState<{
    isOpen: boolean;
    mode: 'live' | 'casestudy';
  }>({
    isOpen: false,
    mode: 'live'
  });

  // 1. Ambil coverSlides khusus untuk StackedGallery Atas.
  // Jika coverSlides tidak diisi di data, gunakan gallery (maksimal 5 item), atau fallback ke image tunggal.
  const heroSlides: string[] =
    (project as any).coverSlides && (project as any).coverSlides.length > 0
      ? (project as any).coverSlides
      : (project as any).gallery && (project as any).gallery.length >= 2
      ? (project as any).gallery.slice(0, 5)
      : Array(5).fill(project.image);

  return (
    <div className="pb-48 sm:pb-32 w-full">
      {/* Hero Gallery Section (Menampilkan Poster Slide) */}
      <div className="relative w-full bg-brand-slate-100">
        <StackedGallery images={heroSlides} alt={project.title} />
      </div>

      {/* Main Content */}
      <main className="px-4 sm:px-8 max-w-4xl mx-auto mt-10 sm:mt-14 relative z-10">
        {/* Title Card */}
        <div className="bg-brand-bg p-6 sm:p-10 rounded-[24px] shadow-[0_12px_36px_rgba(15,23,42,0.14)] mb-12 border border-brand-border">
          <span className="font-hanken text-xs uppercase tracking-widest text-brand-accent font-bold block mb-2">
            RINGKASAN PROYEK
          </span>
          <h1 className="font-garamond text-2xl sm:text-3xl md:text-4xl text-brand-text font-bold mb-6 sm:mb-8 leading-tight tracking-tight">
            {project.title}
          </h1>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 border-t border-brand-border pt-6 mb-8">
            {[
              { label: 'Klien', value: project.client, icon: 'business_center' },
              { label: 'Peran', value: project.role, icon: 'badge' },
              { label: 'Tahun', value: project.year, icon: 'calendar_today' },
            ].map(({ label, value, icon }) => (
              <div key={label}>
                <span className="flex items-center gap-1 sm:gap-1.5 font-hanken text-[10px] sm:text-xs uppercase tracking-wider text-brand-text-muted font-bold mb-1 sm:mb-1.5">
                  <span className="material-symbols-outlined text-[14px] sm:text-sm text-brand-accent/70">{icon}</span>
                  {label}
                </span>
                <span className="font-hanken text-xs sm:text-base font-semibold text-brand-text">
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-row gap-3">
            <button
              onClick={() => setLiveModal({ isOpen: true, mode: 'live' })}
              className="group flex-1 px-4 py-3.5 rounded-full bg-brand-accent text-white font-hanken text-sm font-semibold hover:bg-brand-accent-hover transition-all shadow-[0_6px_20px_rgba(181,87,59,0.3)] hover:shadow-[0_10px_28px_rgba(181,87,59,0.4)] active:scale-95 cursor-pointer text-center flex items-center justify-center gap-2"
            >
              Tonton Demo
            </button>
            <button
              onClick={() => setLiveModal({ isOpen: true, mode: 'casestudy' })}
              className="flex-1 px-4 py-3.5 rounded-full bg-brand-bg text-brand-text border border-brand-border font-hanken text-sm font-semibold hover:bg-brand-surface hover:border-brand-text/20 transition-all shadow-sm active:scale-95 cursor-pointer text-center"
            >
              Lihat Studi Kasus
            </button>
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
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-brand-bg flex items-center justify-center text-brand-accent shadow-sm group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300 shrink-0">
                    <span className="material-symbols-outlined text-2xl">{highlight.icon}</span>
                  </div>
                  <h4 className="font-garamond text-2xl font-bold text-brand-text leading-tight">
                    {highlight.title}
                  </h4>
                </div>
                <p className="font-hanken text-sm sm:text-base text-brand-text-muted leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Masonry Gallery (Menampilkan Seluruh Screenshot di Bawah) */}
        <ProjectGallery images={project.gallery} />
      </main>

      <LiveSiteModal
        isOpen={liveModal.isOpen}
        project={project}
        mode={liveModal.mode}
        onClose={() => setLiveModal({ isOpen: false, mode: 'live' })}
      />
    </div>
  );
};