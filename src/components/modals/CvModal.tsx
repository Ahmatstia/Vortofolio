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
      <div className="bg-brand-bg w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl p-6 sm:p-8 border border-brand-border shadow-[0_12px_40px_rgba(15,23,42,0.2)] relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-brand-surface hover:bg-brand-accent hover:text-white transition-colors flex items-center justify-center text-brand-text cursor-pointer"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Header */}
        <div className="border-b border-brand-border pb-6 mb-6">
          <span className="font-hanken text-xs uppercase tracking-widest text-brand-accent font-bold block mb-1">
            CURRICULUM VITAE
          </span>
          <h2 className="font-garamond text-3xl font-bold text-brand-text">Ahmat Setiadi</h2>
          <p className="font-hanken text-sm text-brand-text-muted">
            Informatics Engineering Student • Intelligent Systems / AI
          </p>
        </div>

        {/* Summary */}
        <div className="mb-6">
          <h3 className="font-hanken text-xs uppercase tracking-wider text-brand-accent font-bold mb-2">
            Ringkasan Profil
          </h3>
          <p className="font-hanken text-sm text-brand-text-muted leading-relaxed">
            Mahasiswa Teknik Informatika yang berfokus pada peminatan Sistem Cerdas (Artificial Intelligence). Memilki pengalaman praktis dalam pengembangan aplikasi Web dan Mobile, serta ketertarikan mendalam pada penerapannya dengan model Deep Learning dan Computer Vision.
          </p>
        </div>

        {/* Key Achievements / Projects */}
        <div className="mb-6">
          <h3 className="font-hanken text-xs uppercase tracking-wider text-brand-accent font-bold mb-3">
            Fokus & Pencapaian Utama
          </h3>
          <ul className="space-y-2 text-sm text-brand-text-muted font-hanken">
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-brand-accent text-base mt-0.5">check_circle</span>
              Mengembangkan penelitian/skripsi klasifikasi citra medis untuk deteksi katarak dan mata normal menggunakan algoritma Convolutional Neural Network (CNN).
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-brand-accent text-base mt-0.5">check_circle</span>
              Memahami dan mengeksplorasi arsitektur AI seperti Artificial Neural Networks (ANN), Natural Language Processing (NLP), serta Deep Learning.
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-brand-accent text-base mt-0.5">check_circle</span>
              Pengalaman membangun antarmuka dan logika aplikasi berbasis Web dan Mobile yang fungsional dan responsif.
            </li>
          </ul>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h3 className="font-hanken text-xs uppercase tracking-wider text-brand-accent font-bold mb-2">
            Pendidikan
          </h3>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline font-hanken text-sm gap-1 sm:gap-0">
            <div>
              <span className="font-bold text-brand-text block">S1 Teknik Informatika</span>
              <span className="text-xs text-brand-text-muted">Peminatan Sistem Cerdas (AI)</span>
            </div>
            <span className="text-xs text-brand-text-muted-alt">Aktif</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-brand-border">
          <a
            href="/cv.pdf"
            download="CV_Ahmat_Setiadi.pdf"
            className="flex-1 bg-brand-accent text-white font-hanken text-sm font-semibold py-3 rounded-full flex items-center justify-center gap-2 hover:bg-brand-accent-hover transition-all text-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">download</span>
            Unduh CV (PDF)
          </a>
          <button
            onClick={() => {
              onClose();
              onContactClick();
            }}
            className="flex-1 bg-brand-surface text-brand-text font-hanken text-sm font-semibold py-3 rounded-full border border-brand-border hover:bg-brand-border transition-all text-center cursor-pointer"
          >
            Hubungi Ahmat
          </button>
        </div>
      </div>
    </div>
  );
};