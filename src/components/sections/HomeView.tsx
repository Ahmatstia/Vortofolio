'use client';

import React from 'react';
import Link from 'next/link';
import { HERO_IMAGE, PROJECTS } from '@/data/portfolio';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/ui/ProjectCard';

export const HomeView: React.FC = () => {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="flex-grow flex flex-col justify-between px-4 sm:px-10 py-8 sm:py-16 max-w-7xl mx-auto w-full">
      {/* Main Hero Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center my-auto min-h-[500px] md:min-h-[580px] relative">

        {/* Text Column */}
        <div className="col-span-1 md:col-span-7 flex flex-col gap-6 z-10">

          <p className="font-hanken text-xs uppercase tracking-widest text-brand-text-muted font-bold">
            FULLSTACK DEVELOPER
          </p>

          <h1 className="font-garamond text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-brand-text tracking-tight">
            ahmtstia —<br />
            <span className="relative inline-block text-brand-text-muted-alt italic font-normal">
              Crafting Digital Experiences
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
            Building high-performance applications with an editorial design focus.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button variant="primary" href="/projects" icon="arrow_forward">
              View My Work
            </Button>
            <Button variant="outline" href="/contact">
              Let's Talk
            </Button>
          </div>
        </div>

        {/* Image Column */}
        <div className="col-span-1 md:col-span-5 flex justify-center md:justify-end mt-6 md:mt-0 relative">
          {/* decorative blob accent behind image */}
          <div className="absolute -top-6 -right-4 w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-brand-accent/10 blur-2xl -z-10" />
          <div className="absolute bottom-4 -left-4 w-24 h-24 rounded-full border border-brand-border/60 -z-10" />

          <div className="image-accent w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] relative">
            <img
              src={HERO_IMAGE}
              alt="ahmtstia portrait"
              className="w-full h-auto object-cover rounded-[20px] shadow-[0_12px_40px_rgba(15,23,42,0.16)] border border-brand-border/60"
            />

          </div>
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
              FEATURED WORK
            </p>
            <h2 className="font-garamond text-2xl sm:text-3xl text-brand-text font-bold mt-1">
              Recent Case Studies
            </h2>
          </div>
          <Link
            href="/projects"
            className="font-hanken text-xs uppercase tracking-widest text-brand-accent font-bold hover:underline flex items-center gap-1 cursor-pointer"
          >
            See All ({PROJECTS.length})
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

      {/* Scroll Indicator */}
      <div className="hidden md:flex justify-center w-full mt-12">
        <Link
          href="/projects"
          className="text-brand-muted-light hover:text-brand-accent transition-all hover:translate-y-1 cursor-pointer"
          aria-label="Scroll down to projects"
        >
          <span className="material-symbols-outlined text-3xl">arrow_downward</span>
        </Link>
      </div>
    </div>
  );
};