'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ABOUT_SPOTIFY_URL, EXPERIENCES, SKILLS } from '@/data/portfolio';
import { CvModal } from '@/components/modals/CvModal';
import { ProcessModal } from '@/components/modals/ProcessModal';
import { PageWrapper, Reveal, slideInLeft, slideInRight } from '@/components/ui/animations';

import profileImg from '../../../assets/img/profile.png';

/** Extracts Spotify Track ID and returns embed URL */
function getSpotifyEmbedUrl(url: string): string | null {
  const match = url.match(/track\/([a-zA-Z0-9]+)/);
  if (match) return `https://open.spotify.com/embed/track/${match[1]}?utm_source=generator&theme=0`;
  return null;
}

export const AboutView: React.FC = () => {
  const router = useRouter();
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [isProcessOpen, setIsProcessOpen] = useState(false);

  const spotifyEmbedUrl = ABOUT_SPOTIFY_URL ? getSpotifyEmbedUrl(ABOUT_SPOTIFY_URL) : null;

  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-6 sm:pt-16 pb-28 overflow-x-hidden sm:overflow-x-visible">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16 sm:mb-20 items-center">
          
          {/* Text Column */}
          <Reveal variants={slideInLeft} className="col-span-1 md:col-span-7 order-2 md:order-1 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 w-fit mb-3 sm:mb-4">
              <span className="w-8 h-px bg-brand-accent" />
              <span className="font-hanken text-xs uppercase tracking-widest text-brand-accent font-bold">
                BIOGRAFI
              </span>
            </div>

            <h1 className="font-garamond text-3xl sm:text-4xl lg:text-5xl text-brand-text font-bold mb-6 leading-[1.1] sm:leading-[1.05] tracking-tight">
              Sosok<br />
              <span className="italic font-normal text-brand-text-muted-alt">di Balik Kode</span>
            </h1>

            <div className="font-hanken text-sm sm:text-lg text-brand-text-muted max-w-2xl mb-8 leading-relaxed space-y-4">
              <p>
                Saya seorang mahasiswa Teknik Informatika dengan fokus peminatan pada <strong>Sistem Cerdas (Artificial Intelligence)</strong>. Saya memiliki pengalaman dalam membangun aplikasi Web dan Mobile, sekaligus mengeksplorasi implementasi model AI.
              </p>
              <p>
                Fokus dan ketertarikan utama saya terletak pada <strong>Deep Learning</strong>, khususnya <i>Computer Vision</i> (seperti klasifikasi citra medis menggunakan CNN) serta pemahaman dasar pada model ANN dan NLP. Saya selalu tertarik untuk terus belajar dan menerapkan teknologi cerdas ke dalam aplikasi digital yang bermanfaat.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10">
              <button
                onClick={() => setIsCvOpen(true)}
                className="group relative overflow-hidden bg-brand-accent text-white font-hanken text-xs sm:text-sm font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all active:scale-95 cursor-pointer shadow-[0_4px_16px_rgba(181,87,59,0.25)] hover:shadow-[0_8px_24px_rgba(181,87,59,0.35)] flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">download</span>
                Unduh CV
              </button>
              <button
                onClick={() => setIsProcessOpen(true)}
                className="bg-brand-bg text-brand-text border border-brand-border font-hanken text-xs sm:text-sm font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full hover:bg-brand-surface hover:border-brand-text/20 transition-all active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">auto_awesome_motion</span>
                Lihat Proses
              </button>
            </div>

            {/* Spotify Player */}
            {spotifyEmbedUrl && (
              <div className="animate-fade-in w-full max-w-[400px]">
                <span className="font-hanken text-[10px] uppercase tracking-widest text-brand-text-muted font-bold mb-2.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Sekarang Diputar
                </span>
                <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-brand-border/60 bg-brand-surface h-[80px]">
                  <iframe 
                    title="Spotify Track Embed"
                    src={spotifyEmbedUrl} 
                    width="100%" 
                    height="80" 
                    frameBorder="0" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                    className="rounded-2xl"
                  />
                </div>
              </div>
            )}
          </Reveal>

          {/* Image Column */}
          <Reveal variants={slideInRight} className="col-span-1 md:col-span-5 order-1 md:order-2 relative mb-4 md:mb-0">
            <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden shadow-[0_16px_40px_rgba(15,23,42,0.16)] border border-brand-border">
              <img
                src={profileImg.src}
                alt="Ahmat Setiadi Profile"
                loading="eager"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-text/20 via-transparent to-transparent" />
            </div>

            {/* Floating Role Card */}
            <div className="absolute -bottom-4 left-2 sm:-left-6 bg-brand-bg/95 backdrop-blur-md border border-brand-border/70 rounded-2xl px-4 py-3 shadow-[0_10px_28px_rgba(15,23,42,0.14)] flex items-center gap-3 z-10">
              <div className="w-9 h-9 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0">
                <span className="material-symbols-outlined text-lg">school</span>
              </div>
              <div>
                <p className="font-hanken text-[10px] uppercase tracking-widest text-brand-text-muted font-bold leading-none">
                  Teknik Informatika
                </p>
                <p className="font-hanken text-xs font-semibold text-brand-text mt-1">
                  Ahmat Setiadi
                </p>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-16 h-16 bg-brand-accent/15 rounded-full blur-xl -z-10 pointer-events-none" />
            <div className="absolute top-1/3 -right-3 w-6 h-6 border border-brand-border/70 rounded-full -z-10 pointer-events-none" />
          </Reveal>
        </section>

        {/* Section Divider */}
        <div className="flex items-center gap-3 mb-16 sm:mb-20">
          <span className="h-px flex-grow bg-brand-border/60" />
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/50" />
          <span className="h-px flex-grow bg-brand-border/60" />
        </div>

        {/* Timeline & Skills Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Experience Timeline */}
          <Reveal variants={slideInLeft} className="col-span-1 md:col-span-7">
            <h2 className="font-garamond text-2xl sm:text-4xl text-brand-text font-bold mb-8 sm:mb-10">
              Pengalaman & Pendidikan
            </h2>

            <div className="relative pl-3 sm:pl-4">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-accent/60 via-brand-border to-transparent" />
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="relative mb-10 sm:mb-12 pl-8 sm:pl-12 group last:mb-0">
                  <div className="absolute left-[3px] top-1.5 w-3.5 h-3.5 rounded-full bg-brand-bg border-2 border-brand-accent z-10 group-hover:bg-brand-accent group-hover:scale-125 transition-all duration-300" />
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-2 mb-2">
                    <h3 className="font-hanken text-base sm:text-lg font-bold text-brand-text">
                      {exp.role}
                    </h3>
                    <span className="font-hanken text-[10px] sm:text-[11px] font-bold tracking-widest text-brand-text-muted bg-brand-surface px-2.5 py-0.5 rounded-full w-fit border border-brand-border/60">
                      {exp.period}
                    </span>
                  </div>
                  <p className="font-hanken text-xs sm:text-base text-brand-text-muted leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Skills Cloud */}
          <Reveal variants={slideInRight} className="col-span-1 md:col-span-5 mt-4 md:mt-0">
            <h2 className="font-garamond text-2xl sm:text-4xl text-brand-text font-bold mb-8 sm:mb-10">
              Keahlian
            </h2>

            <div className="bg-brand-surface rounded-[20px] p-5 sm:p-8 border border-brand-border shadow-[0_8px_28px_rgba(15,23,42,0.06)]">
              <p className="font-hanken text-xs sm:text-sm text-brand-text-muted mb-6 italic font-medium">
                Keahlian diurutkan berdasarkan tingkat penguasaan.
              </p>

              {/* Tag Skill Rendering */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {SKILLS.map((skill) => {
                  let badgeStyles = 'text-xs text-brand-text-muted-alt bg-brand-text-muted-alt/10 border-brand-text-muted-alt/20 hover:bg-brand-text-muted-alt';

                  if (skill.level === 'expert') {
                    badgeStyles = 'text-xs sm:text-sm text-brand-accent bg-brand-accent/10 border-brand-accent/30 font-bold hover:bg-brand-accent';
                  } else if (skill.level === 'advanced') {
                    badgeStyles = 'text-xs sm:text-sm text-brand-text bg-brand-text/10 border-brand-text/20 font-semibold hover:bg-brand-text';
                  }

                  return (
                    <span
                      key={skill.name}
                      className={`font-hanken px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border transition-all duration-200 cursor-default hover:text-white ${badgeStyles}`}
                    >
                      {skill.name}
                    </span>
                  );
                })}
              </div>

              {/* Skill Legend */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6 pt-6 border-t border-brand-border/50">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-accent" />
                  <span className="font-hanken text-[10px] text-brand-text-muted font-bold">Fokus Utama</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-text/40" />
                  <span className="font-hanken text-[10px] text-brand-text-muted font-bold">Mahir</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-text-muted-alt/40" />
                  <span className="font-hanken text-[10px] text-brand-text-muted font-bold">Dasar / Eksplorasi</span>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Modals */}
        <CvModal
          isOpen={isCvOpen}
          onClose={() => setIsCvOpen(false)}
          onContactClick={() => router.push('/contact')}
        />
        <ProcessModal
          isOpen={isProcessOpen}
          onClose={() => setIsProcessOpen(false)}
        />
      </div>
    </PageWrapper>
  );
};