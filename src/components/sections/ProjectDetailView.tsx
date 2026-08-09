'use client';

import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';
import { Project } from '@/types';
import { LiveSiteModal } from '@/components/modals/LiveSiteModal';

// Extend interface jika coverSlides belum ada di tipe utama
interface ExtendedProject extends Project {
  coverSlides?: string[];
}

interface ProjectDetailViewProps {
  project: ExtendedProject;
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
    if (dragOffset > 50) prev();
    else if (dragOffset < -50) next();
    setDragOffset(0);
  };

  /* Offset fanning dioptimalkan untuk responsif mobile */
  const getCardStyle = (idx: number): React.CSSProperties => {
    let offset = idx - active;
    if (offset > count / 2) offset -= count;
    if (offset < -count / 2) offset += count;

    const dragInfluence = dragState.current.dragging ? dragOffset / 6 : 0;
    const absOffset = Math.abs(offset);

    // Memperkecil translateX di layar HP agar kartu di belakang tidak berlebihan menyamping
    const translateX = offset * 65 + dragInfluence; 
    const translateY = absOffset * 10;
    const rotate = offset * 7;
    const scale = offset === 0 ? 1 : 1 - absOffset * 0.1;
    const zIndex = 10 - absOffset;
    const opacity = absOffset > 2 ? 0 : 1 - absOffset * 0.2;

    return {
      transform: `translate(-50%, -50%) translateX(${translateX}%) translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`,
      zIndex,
      opacity,
      transition: dragState.current.dragging ? 'none' : 'transform 0.5s cubic-bezier(0.22,1,0.36,1), opacity 0.4s ease',
    };
  };

  return (
    <div className="relative w-full h-[360px] sm:h-[480px] md:h-[580px] select-none overflow-hidden">
      <div
        className="relative w-full h-full cursor-grab active:cursor-grabbing touch-pan-y"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className="absolute top-1/2 left-1/2 w-[85%] sm:w-[62%] md:w-[48%] lg:w-[40%] max-w-[460px] aspect-[4/5] sm:aspect-[4/5] rounded-2xl sm:rounded-[22px] overflow-hidden shadow-[0_12px_36px_rgba(15,23,42,0.18)] border-2 sm:border-4 border-brand-bg bg-[#faf7f2]"
            style={getCardStyle(idx)}
            onClick={() => idx !== active && goTo(idx)}
          >
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

      {/* Prev / Next arrows (responsif & hemat tempat) */}
      <button
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-1.5 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-brand-bg/90 backdrop-blur-md border border-brand-border flex items-center justify-center text-brand-text hover:bg-brand-accent hover:text-white transition-all shadow-md active:scale-90 cursor-pointer"
      >
        <span className="material-symbols-outlined text-lg sm:text-xl">chevron_left</span>
      </button>
      <button
        onClick={next}
        aria-label="Next image"
        className="absolute right-1.5 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-brand-bg/90 backdrop-blur-md border border-brand-border flex items-center justify-center text-brand-text hover:bg-brand-accent hover:text-white transition-all shadow-md active:scale-90 cursor-pointer"
      >
        <span className="material-symbols-outlined text-lg sm:text-xl">chevron_right</span>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-2 bg-brand-bg/85 backdrop-blur-md rounded-full px-2.5 py-1.5 sm:px-3 sm:py-2 border border-brand-border/60 shadow-sm">
        {images.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to image ${idx + 1}`}
            onClick={() => goTo(idx)}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              idx === active ? 'w-5 sm:w-6 h-1.5 sm:h-2 bg-brand-accent' : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-brand-border hover:bg-brand-text-muted'
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
    <div className="mb-12 sm:mb-20">
      <h3 className="font-hanken text-[11px] sm:text-xs text-brand-text-muted font-bold mb-4 sm:mb-8 uppercase tracking-widest flex items-center gap-2">
        <span className="w-4 h-px bg-brand-accent" />
        Galeri & Tangkapan Layar
      </h3>
      
      {/* Grid responsif: 1 kolom di HP sangat kecil, 2 di mobile standar, 3 tablet, 4 desktop */}
      <div className="columns-1 xs:columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-5 space-y-3 sm:space-y-5">
        {images.map((src, idx) => {
          const isOdd = idx % 2 !== 0;
          const rotateClass = isOdd ? 'group-hover:rotate-1' : 'group-hover:-rotate-1';

          return (
            <div 
              key={idx} 
              className="break-inside-avoid relative overflow-hidden rounded-xl bg-brand-surface border border-brand-border/60 cursor-zoom-in group shadow-sm hover:shadow-lg transition-all duration-300"
              onClick={() => setSelectedImg(src)}
            >
              <img 
                src={src} 
                alt={`Gallery ${idx + 1}`} 
                loading="lazy"
                className={`w-full h-auto object-cover transition-all duration-500 ease-out group-hover:scale-105 ${rotateClass}`} 
              />
              <div className="absolute inset-0 bg-brand-accent/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {selectedImg && mounted && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-10 cursor-zoom-out animate-fade-in"
          onClick={() => setSelectedImg(null)}
        >
          <img 
            src={selectedImg} 
            alt="Enlarged view" 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" 
          />
          <button 
            className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-md transition-all cursor-pointer"
            onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
            aria-label="Tutup gambar"
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

  // Ekstraksi hero slides secara aman tanpa 'any' cast
  const heroSlides: string[] =
    project.coverSlides && project.coverSlides.length > 0
      ? project.coverSlides
      : project.gallery && project.gallery.length >= 2
      ? project.gallery.slice(0, 5)
      : Array(5).fill(project.image);

  return (
    <div className="pb-32 sm:pb-32 w-full overflow-x-hidden">
      {/* Hero Gallery Section */}
      <div className="relative w-full bg-brand-slate-100">
        <StackedGallery images={heroSlides} alt={project.title} />
      </div>

      {/* Main Content */}
      <main className="px-4 sm:px-8 max-w-4xl mx-auto mt-6 sm:mt-12 relative z-10">
        
        {/* Title Card */}
        <div className="bg-brand-bg p-4 sm:p-8 md:p-10 rounded-2xl sm:rounded-[24px] shadow-[0_8px_30px_rgba(15,23,42,0.1)] mb-8 sm:mb-12 border border-brand-border">
          <span className="font-hanken text-[10px] sm:text-xs uppercase tracking-widest text-brand-accent font-bold block mb-1 sm:mb-2">
            RINGKASAN PROYEK
          </span>
          <h1 className="font-garamond text-xl sm:text-3xl md:text-4xl text-brand-text font-bold mb-4 sm:mb-8 leading-snug tracking-tight">
            {project.title}
          </h1>

          {/* Grid Informasi Klien, Peran, Tahun */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 border-t border-brand-border pt-4 sm:pt-6 mb-6 sm:mb-8">
            {[
              { label: 'Klien', value: project.client, icon: 'business_center' },
              { label: 'Peran', value: project.role, icon: 'badge' },
              { label: 'Tahun', value: project.year, icon: 'calendar_today' },
            ].map(({ label, value, icon }) => (
              <div key={label} className="min-w-0">
                <span className="flex items-center gap-1 font-hanken text-[9px] sm:text-xs uppercase tracking-wider text-brand-text-muted font-bold mb-0.5 sm:mb-1.5 truncate">
                  <span className="material-symbols-outlined text-[13px] sm:text-sm text-brand-accent/70 shrink-0">{icon}</span>
                  {label}
                </span>
                <span className="font-hanken text-xs sm:text-base font-semibold text-brand-text block truncate">
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-row gap-2.5 sm:gap-3">
            <button
              onClick={() => setLiveModal({ isOpen: true, mode: 'live' })}
              className="flex-1 px-3 py-2.5 md:px-4 md:py-3 rounded-xl bg-brand-accent text-white font-hanken text-xs sm:text-sm font-semibold hover:bg-brand-accent-hover transition-all shadow-md active:scale-95 cursor-pointer text-center flex items-center justify-center gap-1.5 sm:gap-2"
            >
              Tonton Demo
            </button>
            <button
              onClick={() => setLiveModal({ isOpen: true, mode: 'casestudy' })}
              className="flex-1 px-3 py-2.5 md:px-4 md:py-3 rounded-xl bg-brand-bg text-brand-text border border-brand-border font-hanken text-xs sm:text-sm font-semibold hover:bg-brand-surface hover:border-brand-text/20 transition-all shadow-sm active:scale-95 cursor-pointer text-center"
            >
              Studi Kasus
            </button>
          </div>
        </div>

        {/* Deskripsi Ringkas */}
        <div className="mb-8 sm:mb-16 relative pl-4 sm:pl-6 border-l-2 border-brand-accent/40">
          <p className="font-hanken text-base sm:text-xl text-brand-text-muted leading-relaxed font-normal">
            {project.fullDescription}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-8 sm:mb-16">
          <h3 className="font-hanken text-[11px] sm:text-xs text-brand-text-muted font-bold mb-3 sm:mb-4 uppercase tracking-widest flex items-center gap-2">
            <span className="w-4 h-px bg-brand-accent" />
            Teknologi
          </h3>
          <div className="flex overflow-x-auto hide-scrollbar space-x-2 sm:space-x-3 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            {project.techStack.map((tech) => (
              <div key={tech} className="flex-none px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 hover:bg-brand-accent hover:border-brand-accent transition-colors duration-300 cursor-default group">
                <span className="font-hanken text-xs font-bold text-brand-accent group-hover:text-white transition-colors">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sorotan Utama (Key Highlights) */}
        <div className="mb-12 sm:mb-16">
          <h3 className="font-hanken text-[11px] sm:text-xs text-brand-text-muted font-bold mb-4 sm:mb-6 uppercase tracking-widest flex items-center gap-2">
            <span className="w-4 h-px bg-brand-accent" />
            Sorotan Utama
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {project.highlights.map((highlight, idx) => (
              <div key={idx} className="relative bg-brand-surface p-4 sm:p-8 rounded-xl sm:rounded-[20px] border border-brand-border shadow-sm hover:shadow-md transition-all duration-300 group">
                <span className="absolute top-4 right-5 sm:top-5 sm:right-6 font-garamond text-2xl sm:text-3xl font-bold text-brand-border/70 group-hover:text-brand-accent/20 transition-colors">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-bg flex items-center justify-center text-brand-accent shadow-sm group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300 shrink-0">
                    <span className="material-symbols-outlined text-xl sm:text-2xl">{highlight.icon}</span>
                  </div>
                  <h4 className="font-garamond text-lg sm:text-2xl font-bold text-brand-text leading-tight pr-6">
                    {highlight.title}
                  </h4>
                </div>
                <p className="font-hanken text-xs sm:text-base text-brand-text-muted leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Masonry Gallery */}
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