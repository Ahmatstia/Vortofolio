'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  variant?: 'simple' | 'detailed';
  index: number;
  className?: string;
}

/* ─── Media Layer (reusable) ─────────────────────────────────────────── */
const MediaLayer: React.FC<{ project: Project }> = ({ project }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoActive, setVideoActive] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  const handleMouseEnter = () => {
    if (!project.previewVideo) return;
    setVideoActive(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (!project.previewVideo) return;
    setVideoActive(false);
    if (videoRef.current) videoRef.current.pause();
  };

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Thumbnail image */}
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
        style={{
          opacity: videoActive && videoReady ? 0 : 1,
          transition: 'opacity 0.4s ease',
        }}
      />

      {/* Video preview — only rendered if URL exists */}
      {project.previewVideo && (
        <video
          ref={videoRef}
          src={project.previewVideo}
          muted
          loop
          playsInline
          preload="metadata"
          onCanPlay={() => setVideoReady(true)}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: videoActive && videoReady ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }}
        />
      )}

      {/* PREVIEW badge — muncul saat video aktif */}
      {project.previewVideo && (
        <div
          className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm rounded-full px-2.5 py-1 z-10"
          style={{
            opacity: videoActive && videoReady ? 1 : 0,
            transform: videoActive && videoReady ? 'translateY(0)' : 'translateY(-4px)',
            transition: 'opacity 0.35s ease, transform 0.35s ease',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
          <span className="font-hanken text-[9px] uppercase tracking-widest font-bold text-white/90">
            Preview
          </span>
        </div>
      )}
    </div>
  );
};

/* ─── Simple Variant ─────────────────────────────────────────────────── */
const SimpleCard: React.FC<{ project: Project; index: number; className: string }> = ({
  project,
  index,
  className,
}) => (
  <Link
    href={`/projects/${project.id}`}
    className={`group bg-brand-surface rounded-[18px] p-3 border border-brand-border/50 shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_32px_rgba(15,23,42,0.1)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer block ${className}`}
  >
    <div className="relative w-full aspect-[4/3] rounded-[14px] overflow-hidden mb-3">
      <MediaLayer project={project} />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-text/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Index badge */}
      <span className="absolute top-3 left-3 bg-brand-bg/90 backdrop-blur-sm rounded-full px-2.5 py-1 font-hanken text-[10px] uppercase tracking-wider font-bold text-brand-text-muted z-10">
        {String(index + 1).padStart(2, '0')}
      </span>

    </div>

    <div className="p-1">
      <span className="font-hanken text-[10px] uppercase tracking-wider text-brand-text-muted font-bold block mb-1">
        {project.client} — {project.year}
      </span>
      <h3 className="font-garamond text-xl font-bold text-brand-text group-hover:text-brand-accent transition-colors">
        {project.title}
      </h3>
    </div>
  </Link>
);

/* ─── Detailed Variant ───────────────────────────────────────────────── */
const DetailedCard: React.FC<{ project: Project; index: number; className: string }> = ({
  project,
  index,
  className,
}) => (
  <Link href={`/projects/${project.id}`} className={`group cursor-pointer block ${className}`}>
    <div className="relative rounded-[20px] bg-brand-surface p-3 border border-brand-border shadow-[0_4px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.14)] hover:-translate-y-1.5 transition-all duration-300">
      {/* Number tag */}
      <span className="absolute -top-3 -left-3 z-10 w-9 h-9 rounded-full bg-brand-bg border border-brand-border/70 flex items-center justify-center font-hanken text-[11px] font-bold text-brand-text-muted shadow-[0_4px_10px_rgba(15,23,42,0.08)] group-hover:bg-brand-accent group-hover:text-white group-hover:border-brand-accent transition-colors duration-300">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Media area */}
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-brand-bg">
        <MediaLayer project={project} />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-text/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute bottom-4 left-4 bg-brand-bg/90 backdrop-blur-sm text-brand-accent text-[10px] uppercase font-hanken font-bold tracking-widest px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 z-10">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            Featured
          </div>
        )}
      </div>

      {/* Info */}
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

/* ─── Export ─────────────────────────────────────────────────────────── */
export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  variant = 'detailed',
  index,
  className = '',
}) => {
  if (variant === 'simple') {
    return <SimpleCard project={project} index={index} className={className} />;
  }
  return <DetailedCard project={project} index={index} className={className} />;
};

