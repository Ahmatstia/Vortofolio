import React from 'react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose, onContactClick }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#F5F1EA] w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl p-6 sm:p-8 border border-[#D9D3C7] shadow-[0_12px_40px_rgba(43,33,26,0.2)] relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#E8E3DB] hover:bg-[#B5573B] hover:text-white transition-colors flex items-center justify-center text-[#2B211A] cursor-pointer"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Header */}
        <div className="border-b border-[#D9D3C7] pb-6 mb-6">
          <span className="font-hanken text-xs uppercase tracking-widest text-[#B5573B] font-bold block mb-1">
            CURRICULUM VITAE
          </span>
          <h2 className="font-garamond text-3xl font-bold text-[#2B211A]">ahmtstia</h2>
          <p className="font-hanken text-sm text-[#55423d]">
            Fullstack Developer & Creative Technologist • San Francisco, CA
          </p>
        </div>

        {/* Summary */}
        <div className="mb-6">
          <h3 className="font-hanken text-xs uppercase tracking-wider text-[#B5573B] font-bold mb-2">
            Executive Summary
          </h3>
          <p className="font-hanken text-sm text-[#55423d] leading-relaxed">
            Fullstack engineer with 8+ years of experience engineering high-throughput React/Next.js and WebGL web applications. Specialized in editorial design systems, micro-interactions, and mobile architecture.
          </p>
        </div>

        {/* Key Achievements */}
        <div className="mb-6">
          <h3 className="font-hanken text-xs uppercase tracking-wider text-[#B5573B] font-bold mb-3">
            Key Accomplishments
          </h3>
          <ul className="space-y-2 text-sm text-[#55423d] font-hanken">
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-[#B5573B] text-base mt-0.5">check_circle</span>
              Architected MOMA web application redesign boosting visitor engagement by 42%.
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-[#B5573B] text-base mt-0.5">check_circle</span>
              Built FinTech React Native banking suite serving 120,000+ active daily users.
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-[#B5573B] text-base mt-0.5">check_circle</span>
              Maintained 100/100 Lighthouse performance scores across all client production deployments.
            </li>
          </ul>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h3 className="font-hanken text-xs uppercase tracking-wider text-[#B5573B] font-bold mb-2">
            Education
          </h3>
          <div className="flex justify-between items-baseline font-hanken text-sm">
            <span className="font-bold text-[#2B211A]">B.S. in Computer Science & Interaction Design</span>
            <span className="text-xs text-[#65584f]">UC Berkeley • 2011 — 2015</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#D9D3C7]">
          <a
            href="data:text/plain;charset=utf-8,ahmtstia%20-%20Fullstack%20Developer%20CV"
            download="ahmtstia_CV.txt"
            className="flex-1 bg-[#B5573B] text-white font-hanken text-sm font-semibold py-3 rounded-full flex items-center justify-center gap-2 hover:bg-[#963f26] transition-all text-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">download</span>
            Download Full PDF/CV
          </a>
          <button
            onClick={() => {
              onClose();
              onContactClick();
            }}
            className="flex-1 bg-[#E8E3DB] text-[#2B211A] font-hanken text-sm font-semibold py-3 rounded-full border border-[#D9D3C7] hover:bg-[#D9D3C7] transition-all text-center cursor-pointer"
          >
            Hire ahmtstia
          </button>
        </div>
      </div>
    </div>
  );
};
