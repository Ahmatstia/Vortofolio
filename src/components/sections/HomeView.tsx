'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { HERO_IMAGE, PROJECTS } from '@/data/portfolio';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/ui/ProjectCard';
import Lottie from 'lottie-react';
import animationData from '../../../assets/lottie/astronot.json';

const SwipeToNavigate: React.FC = () => {
  const router = useRouter();
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const maxDrag = containerRect.width - 64; // 56px thumb + 8px padding
    let newX = e.clientX - containerRect.left - 28;
    if (newX < 0) newX = 0;
    if (newX > maxDrag) newX = maxDrag;
    setDragX(newX);
  };
  
  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
    if (!containerRef.current) return;
    const maxDrag = containerRef.current.getBoundingClientRect().width - 64;
    
    if (dragX > maxDrag * 0.7) {
      setDragX(maxDrag);
      setTimeout(() => {
        router.push('/projects');
      }, 200);
    } else {
      setDragX(0);
    }
  };
  
  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-[280px] h-16 bg-brand-surface rounded-full flex items-center justify-center overflow-hidden border border-brand-border shadow-[0_4px_20px_rgba(15,23,42,0.06)] touch-none select-none"
    >
      <span className={`font-hanken text-sm font-bold text-brand-text-muted transition-opacity duration-300 ml-8 ${dragX > 40 ? 'opacity-0' : 'opacity-100'}`}>
        Geser ke Proyek
      </span>
      <div 
        className="absolute top-0 left-0 h-full bg-brand-accent/10 transition-none rounded-l-full"
        style={{ width: dragX > 0 ? dragX + 32 : 0 }}
      />
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="absolute left-1 top-1 w-14 h-14 rounded-full bg-brand-accent flex items-center justify-center text-white cursor-grab active:cursor-grabbing shadow-[0_4px_16px_rgba(37,99,235,0.4)] z-10"
        style={{ 
          transform: `translateX(${dragX}px)`,
          transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)'
        }}
      >
        <span className="material-symbols-outlined text-xl">arrow_forward</span>
      </div>
    </div>
  );
};

export const HomeView: React.FC = () => {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="flex-grow flex flex-col justify-between px-4 sm:px-10 pt-2 pb-28 sm:pt-6 sm:pb-16 max-w-7xl mx-auto w-full">
      {/* Main Hero Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center min-h-[500px] md:min-h-[580px] relative">

        {/* Text Column */}
        <div className="col-span-1 md:col-span-7 flex flex-col gap-6 z-10">

          <p className="font-hanken text-xs uppercase tracking-widest text-brand-text-muted font-bold">
            INFORMATICS STUDENT & AI ENTHUSIAST
          </p>

          <h1 className="font-garamond text-4xl sm:text-5xl md:text-6xl lg:text5xl font-bold leading-[1.05] text-brand-text tracking-tight">
            ahmtstia_<br />
            <span className="relative inline-block text-brand-text-muted-alt italic font-normal">
              Mengembangkan Web, Mobile & Solusi Sistem Cerdas
              <svg
                className="absolute left-0 -bottom-2 w-full h-3 text-brand-accent/40"
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M2 9C60 3 240 3 298 9"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="font-hanken text-base sm:text-lg text-brand-text-muted max-w-lg leading-relaxed mt-1">
            Mahasiswa Teknik Informatika yang berfokus pada pengembangan aplikasi Web & Mobile, serta penerapan Deep Learning dan Computer Vision untuk solusi nyata.
          </p>

          {/* Desktop Buttons */}
          <div className="hidden md:flex flex-row gap-4 mt-4">
            <Button variant="primary" href="/projects" icon="arrow_forward">
              Lihat Karya Saya
            </Button>
            <Button variant="outline" href="/contact">
              Mari Berdiskusi
            </Button>
          </div>
        </div>

        {/* Animation Column */}
        <div className="col-span-1 md:col-span-5 flex justify-center md:justify-end mt-6 md:mt-0 relative">
          {/* decorative blob accent behind animation */}
          <div className="absolute -top-6 -right-4 w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-brand-accent/10 blur-2xl -z-10" />
          <div className="absolute bottom-4 -left-4 w-24 h-24 rounded-full border border-brand-border/60 -z-10" />

          <div className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] relative z-10 flex items-center justify-center">
            <Lottie 
              animationData={animationData} 
              loop={true} 
              className="w-full h-auto drop-shadow-[0_12px_40px_rgba(15,23,42,0.16)]" 
            />
          </div>
        </div>

        {/* Mobile Buttons (below animation) */}
        <div className="col-span-1 flex md:hidden flex-row gap-3 mt-4 w-full z-10">
          <Button variant="primary" href="/projects" className="flex-1 px-2 py-3.5 text-xs sm:text-sm whitespace-nowrap">
            Karya Saya
          </Button>
          <Button variant="outline" href="/contact" className="flex-1 px-2 py-3.5 text-xs sm:text-sm whitespace-nowrap">
            Berdiskusi
          </Button>
        </div>
      </div>

      {/* Tech marquee strip */}
      <div className="mt-16 sm:mt-20 py-4 border-y border-brand-border/40 overflow-hidden relative">
        <div className="flex gap-10 whitespace-nowrap animate-[marquee_24s_linear_infinite] font-hanken text-xs uppercase tracking-widest text-brand-text-muted font-bold">
          {Array(2).fill(['Next.js', 'TypeScript', 'React Native', 'Flutter', 'Tailwind CSS', 'Node.js', 'Flask']).flat().map((tech, i) => (
            <span key={i} className="flex items-center gap-10">
              {tech}
              <span className="text-brand-accent/50">•</span>
            </span>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      {/* Featured Work Teaser Grid */}
      <div className="mt-16 sm:mt-24 pt-12">
        <div className="flex justify-between items-end mb-8">
          <div>
            <p className="font-hanken text-xs uppercase tracking-widest text-brand-text-muted font-bold">
              KARYA PILIHAN
            </p>
            <h2 className="font-garamond text-2xl sm:text-3xl text-brand-text font-bold mt-1">
              Studi Kasus Terbaru
            </h2>
          </div>
          <Link
            href="/projects"
            className="font-hanken text-xs uppercase tracking-widest text-brand-accent font-bold hover:underline flex items-center gap-1 cursor-pointer"
          >
            Lihat Semua ({PROJECTS.length})
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, idx) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={idx}
              variant="simple"
              className={idx === 1 ? 'md:mt-6' : ''}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator / Swipe to Navigate */}
      <div className="flex justify-center w-full mt-16 md:mt-12 mb-8 md:mb-0">
        <div className="hidden md:flex justify-center w-full">
          <Link
            href="/projects"
            className="text-brand-muted-light hover:text-brand-accent transition-all hover:translate-y-1 cursor-pointer"
            aria-label="Gulir ke bawah untuk melihat proyek"
          >
            <span className="material-symbols-outlined text-3xl">arrow_downward</span>
          </Link>
        </div>
        <div className="flex md:hidden w-full justify-center">
          <SwipeToNavigate />
        </div>
      </div>
    </div>
  );
};