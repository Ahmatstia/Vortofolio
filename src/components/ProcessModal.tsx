import React from 'react';

interface ProcessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProcessModal: React.FC<ProcessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const steps = [
    {
      number: '01',
      title: 'Architectural Discovery',
      description: 'Understanding core business motives, target audience ergonomics, and defining precise technical boundaries.'
    },
    {
      number: '02',
      title: 'Editorial Typography & Design',
      description: 'Crafting bespoke visual hierarchies using high-contrast serif headlines, tactile warm neutrals, and crisp spacing.'
    },
    {
      number: '03',
      title: 'Tactile Engineering',
      description: 'Building robust React & Next.js architectures with fluid WebGL graphics, micro-interactions, and instant state handling.'
    },
    {
      number: '04',
      title: 'Performance & Delivery',
      description: 'Conducting Lighthouse audits, sub-second cold starts, accessibility checks, and automated Cloud Run deployments.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#FFFFFF] w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-[0_12px_40px_rgba(15, 23, 42,0.2)] relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#F8FAFC] hover:bg-[#2563EB] hover:text-white transition-colors flex items-center justify-center text-[#0F172A] cursor-pointer"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        <span className="font-hanken text-xs uppercase tracking-widest text-[#2563EB] font-bold block mb-1">
          METHODOLOGY
        </span>
        <h2 className="font-garamond text-3xl font-bold text-[#0F172A] mb-6">
          Development Process
        </h2>

        <div className="space-y-6 mb-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#F8FAFC] p-5 rounded-xl border border-[#E2E8F0] flex gap-4 items-start"
            >
              <span className="font-garamond text-3xl font-bold text-[#2563EB]">
                {step.number}
              </span>
              <div>
                <h3 className="font-garamond text-xl font-bold text-[#0F172A] mb-1">
                  {step.title}
                </h3>
                <p className="font-hanken text-sm text-[#475569]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-full bg-[#2563EB] text-white font-hanken text-sm font-semibold py-3 rounded-full hover:bg-[#1D4ED8] transition-all cursor-pointer"
        >
          Close Process Overview
        </button>
      </div>
    </div>
  );
};
