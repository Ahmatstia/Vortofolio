import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface ProcessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProcessModal: React.FC<ProcessModalProps> = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  const steps = [
    {
      number: '01',
      title: 'Analisis & Riset Kebutuhan',
      description: 'Memahami batasan masalah, mengumpulkan data (dataset citra/teks jika memakai AI), serta merencanakan arsitektur sistem web/mobile.'
    },
    {
      number: '02',
      title: 'Perancangan Sistem & UI/UX',
      description: 'Membuat alur pengguna (user flow), wireframe, serta merancang struktur basis data dan skema API yang responsif.'
    },
    {
      number: '03',
      title: 'Eksperimen & Pelatihan Model AI',
      description: 'Melakukan pra-pemrosesan data, membangun arsitektur model (seperti CNN untuk klasifikasi citra), dan melakukan evaluasi performa model.'
    },
    {
      number: '04',
      title: 'Pengembangan & Integrasi',
      description: 'Mengimplementasikan antarmuka Web/Mobile dan menghubungkannya dengan backend serta model AI agar dapat diakses pengguna dengan lancar.'
    }
  ];

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-brand-bg w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl p-6 sm:p-8 border border-brand-border shadow-[0_12px_40px_rgba(15,23,42,0.2)] relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-brand-surface hover:bg-brand-accent hover:text-white transition-colors flex items-center justify-center text-brand-text cursor-pointer"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        <span className="font-hanken text-xs uppercase tracking-widest text-brand-accent font-bold block mb-1">
          METODOLOGI
        </span>
        <h2 className="font-garamond text-3xl font-bold text-brand-text mb-6">
          Alur Pengembangan Sistem
        </h2>

        <div className="space-y-6 mb-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-brand-surface p-5 rounded-xl border border-brand-border flex gap-4 items-start"
            >
              <span className="font-garamond text-3xl font-bold text-brand-accent">
                {step.number}
              </span>
              <div>
                <h3 className="font-garamond text-xl font-bold text-brand-text mb-1">
                  {step.title}
                </h3>
                <p className="font-hanken text-sm text-brand-text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-full bg-brand-accent text-white font-hanken text-sm font-semibold py-3 rounded-full hover:bg-brand-accent-hover transition-all cursor-pointer"
        >
          Tutup Ringkasan
        </button>
      </div>
    </div>,
    document.body
  );
};