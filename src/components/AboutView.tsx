'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ABOUT_IMAGE, EXPERIENCES, SKILLS } from '../data/portfolioData';
import { CvModal } from './CvModal';
import { ProcessModal } from './ProcessModal';

export const AboutView: React.FC = () => {
  const router = useRouter();
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [isProcessOpen, setIsProcessOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 sm:pt-16 pb-28">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16 sm:mb-20 items-center">
        {/* Text Column */}
        <div className="col-span-1 md:col-span-7 order-2 md:order-1 flex flex-col justify-center">
          <span className="font-hanken text-xs uppercase tracking-widest text-[#B5573B] font-bold block mb-3">
            BIOGRAPHY
          </span>
          <h1 className="font-garamond text-4xl sm:text-6xl lg:text-7xl text-[#2B211A] font-bold mb-6 leading-[1.1]">
            The Person<br />
            Behind The Code
          </h1>
          <p className="font-hanken text-base sm:text-lg text-[#55423d] max-w-2xl mb-8 leading-relaxed">
            I believe that exceptional digital experiences are born from a deep understanding of human behavior, married with rigorous technical execution. My approach is rooted in minimalism, prioritizing clarity and tactile feedback over superficial decoration.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setIsCvOpen(true)}
              className="bg-[#B5573B] text-white font-hanken text-sm font-semibold px-7 py-3.5 rounded-md hover:bg-[#963f26] transition-all active:scale-95 cursor-pointer shadow-sm"
            >
              Download CV
            </button>
            <button
              onClick={() => setIsProcessOpen(true)}
              className="bg-[#F5F1EA] text-[#2B211A] border border-[#D9D3C7] font-hanken text-sm font-semibold px-7 py-3.5 rounded-md hover:bg-[#E8E3DB] transition-all active:scale-95 cursor-pointer"
            >
              View Process
            </button>
          </div>
        </div>

        {/* Image Column */}
        <div className="col-span-1 md:col-span-5 order-1 md:order-2 relative mb-6 md:mb-0">
          <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(43,33,26,0.12)] border border-[#D9D3C7]">
            <img
              src={ABOUT_IMAGE}
              alt="ahmtstia"
              loading="eager"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Terracotta Accent Elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-[#B5573B] rounded-full opacity-50 -z-10 pointer-events-none" />
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#B5573B] opacity-20 rounded-full blur-xl -z-10 pointer-events-none" />
        </div>
      </section>

      {/* Divider */}
      <hr className="border-[#D9D3C7] mb-16 sm:mb-20 w-full" />

      {/* Timeline & Skills Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
        {/* Experience Timeline */}
        <div className="col-span-1 md:col-span-7">
          <h2 className="font-garamond text-3xl sm:text-4xl text-[#2B211A] font-bold mb-10">
            Experience
          </h2>

          <div className="relative timeline-line pl-4">
            {EXPERIENCES.map((exp, index) => (
              <div key={exp.id} className="relative mb-12 pl-12 group last:mb-0">
                <div className="absolute left-[3px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#F5F1EA] border-2 border-[#B5573B] z-10 group-hover:bg-[#B5573B] transition-colors duration-300" />
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                  <h3 className="font-hanken text-lg font-bold text-[#2B211A]">
                    {exp.role}
                  </h3>
                  <span className="font-hanken text-[11px] font-bold tracking-widest text-[#55423d] bg-[#E8E3DB] px-3 py-1 rounded-full w-fit border border-[#D9D3C7]/60">
                    {exp.period}
                  </span>
                </div>
                <p className="font-hanken text-sm sm:text-base text-[#55423d] leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Cloud */}
        <div className="col-span-1 md:col-span-5 mt-6 md:mt-0">
          <h2 className="font-garamond text-3xl sm:text-4xl text-[#2B211A] font-bold mb-10">
            Toolkit
          </h2>

          <div className="bg-[#E8E3DB] rounded-2xl p-6 sm:p-8 border border-[#D9D3C7] shadow-[0_4px_20px_rgba(43,33,26,0.06)]">
            <p className="font-hanken text-sm text-[#55423d] mb-6 italic font-medium">
              Proficiencies graded by visual weight.
            </p>

            <div className="flex flex-wrap gap-3">
              {SKILLS.map((skill) => {
                if (skill.level === 'expert') {
                  return (
                    <span
                      key={skill.name}
                      className="font-hanken text-sm sm:text-base text-[#B5573B] bg-[#B5573B]/10 px-4 py-2 rounded-full font-bold border border-[#B5573B]/30 hover:bg-[#B5573B] hover:text-white transition-all cursor-default"
                    >
                      {skill.name}
                    </span>
                  );
                }
                if (skill.level === 'advanced') {
                  return (
                    <span
                      key={skill.name}
                      className="font-hanken text-xs sm:text-sm text-[#2B211A] bg-[#2B211A]/10 px-3.5 py-1.5 rounded-full font-semibold border border-[#2B211A]/20 hover:bg-[#2B211A] hover:text-white transition-all cursor-default"
                    >
                      {skill.name}
                    </span>
                  );
                }
                return (
                  <span
                    key={skill.name}
                    className="font-hanken text-xs text-[#65584f] bg-[#65584f]/10 px-3 py-1 rounded-full font-medium border border-[#65584f]/20 hover:bg-[#65584f] hover:text-white transition-all cursor-default"
                  >
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
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
  );
};
