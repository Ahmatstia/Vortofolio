import React from 'react';
import Link from 'next/link';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  variant?: 'simple' | 'detailed';
  index: number;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  variant = 'detailed',
  index,
  className = '' 
}) => {
  if (variant === 'simple') {
    return (
      <Link
        href={`/projects/${project.id}`}
        className={`group bg-brand-surface rounded-[18px] p-3 border border-brand-border/50 shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_32px_rgba(15,23,42,0.1)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer block ${className}`}
      >
        <div className="relative w-full aspect-[4/3] rounded-[14px] overflow-hidden mb-3">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-text/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="absolute top-3 left-3 bg-brand-bg/90 backdrop-blur-sm rounded-full px-2.5 py-1 font-hanken text-[10px] uppercase tracking-wider font-bold text-brand-text-muted">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="absolute top-3 right-3 bg-brand-bg/90 backdrop-blur-sm rounded-full p-2 text-brand-accent shadow-sm scale-90 group-hover:scale-100 transition-transform duration-300">
            <span className="material-symbols-outlined text-lg">arrow_outward</span>
          </div>
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
  }

  // Detailed variant (used in ProjectsView)
  return (
    <Link
      href={`/projects/${project.id}`}
      className={`group cursor-pointer block ${className}`}
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
};
