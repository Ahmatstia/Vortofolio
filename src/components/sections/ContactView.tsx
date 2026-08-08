'use client';

import React, { useState } from 'react';
import { ContactFormData } from '@/types';
import { PageWrapper, Reveal, slideInLeft } from '@/components/ui/animations';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 800);
  };

  return (
    <PageWrapper>
    <div className="flex-grow px-4 sm:px-8 mt-6 sm:mt-12 max-w-3xl mx-auto w-full pb-28">
      {/* Header Section */}
      <Reveal variants={slideInLeft}>
      <section className="mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 w-fit mb-3">
          <span className="w-8 h-px bg-brand-accent" />
          <span className="font-hanken text-xs uppercase tracking-widest text-brand-accent font-bold">
            HUBUNGI SAYA
          </span>
        </div>
        <h1 className="font-garamond text-4xl sm:text-6xl text-brand-text font-bold mb-4 tracking-tight">
          Mari Bangun <span className="italic font-normal text-brand-text-muted-alt">Sesuatu</span>
        </h1>
        <p className="font-hanken text-base sm:text-lg text-brand-text-muted leading-relaxed max-w-xl">
          Baik Anda memiliki proyek spesifik atau sekadar ingin menjajaki kemungkinan, saya siap berkolaborasi. Kirimkan pesan di bawah ini dan saya akan segera membalasnya.
        </p>
      </section>
      </Reveal>

      {/* Form Section */}
      <Reveal delay={0.1}>
      <section className="mb-14 bg-brand-surface rounded-[24px] p-6 sm:p-10 border border-brand-border/60 shadow-[0_12px_36px_rgba(15,23,42,0.08)] relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-accent/8 rounded-full blur-2xl pointer-events-none" />

        {submitted ? (
          <div className="text-center py-8 relative z-10">
            <div className="w-16 h-16 rounded-full bg-brand-accent/10 text-brand-accent mx-auto flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-3xl">check_circle</span>
            </div>
            <h3 className="font-garamond text-2xl font-bold text-brand-text mb-2">
              Pesan Terkirim
            </h3>
            <p className="font-hanken text-sm text-brand-text-muted mb-6">
              Terima kasih telah menghubungi! Saya akan membalas email Anda dalam waktu maksimal 24 jam.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-brand-accent text-white font-hanken text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-full hover:bg-brand-accent-hover transition-all cursor-pointer"
            >
              Kirim Pesan Lagi
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            <div className="relative">
              <label
                htmlFor="name"
                className={`absolute left-0 transition-all duration-200 font-hanken pointer-events-none ${
                  focusedField === 'name' || formData.name
                    ? '-top-4 text-[10px] uppercase tracking-widest font-bold text-brand-accent'
                    : 'top-3 text-base text-brand-text-muted/60'
                }`}
              >
                Nama Anda
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                required
                className="block w-full bg-transparent border-0 border-b-2 border-brand-border text-brand-text font-hanken text-base py-3 px-0 focus:ring-0 focus:border-brand-accent transition-colors duration-300 outline-none"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="email"
                className={`absolute left-0 transition-all duration-200 font-hanken pointer-events-none ${
                  focusedField === 'email' || formData.email
                    ? '-top-4 text-[10px] uppercase tracking-widest font-bold text-brand-accent'
                    : 'top-3 text-base text-brand-text-muted/60'
                }`}
              >
                Email Anda
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                required
                className="block w-full bg-transparent border-0 border-b-2 border-brand-border text-brand-text font-hanken text-base py-3 px-0 focus:ring-0 focus:border-brand-accent transition-colors duration-300 outline-none"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="message"
                className={`absolute left-0 transition-all duration-200 font-hanken pointer-events-none ${
                  focusedField === 'message' || formData.message
                    ? '-top-4 text-[10px] uppercase tracking-widest font-bold text-brand-accent'
                    : 'top-3 text-base text-brand-text-muted/60'
                }`}
              >
                Bagaimana kita bisa bekerja sama?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                required
                className="block w-full bg-transparent border-0 border-b-2 border-brand-border text-brand-text font-hanken text-base py-3 px-0 focus:ring-0 focus:border-brand-accent transition-colors duration-300 outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full overflow-hidden bg-brand-accent text-white font-hanken text-sm font-semibold py-4 rounded-full shadow-[0_6px_20px_rgba(181,87,59,0.3)] hover:shadow-[0_10px_28px_rgba(181,87,59,0.4)] transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer disabled:opacity-70"
            >
              {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
              {!isSubmitting && (
                <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover:translate-x-1">
                  send
                </span>
              )}
            </button>
          </form>
        )}
      </section>
      </Reveal>

      {/* Social Links */}
      <Reveal delay={0.2}>
      <section className="mb-14 text-center">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px flex-grow bg-brand-border/60" />
          <p className="font-hanken text-xs text-brand-text-muted uppercase tracking-widest font-bold whitespace-nowrap">
            ATAU HUBUNGI LANGSUNG
          </p>
          <span className="h-px flex-grow bg-brand-border/60" />
        </div>
        <div className="flex justify-center gap-4">
          {[
            { href: 'mailto:ahmtstia@example.com', icon: 'mail', title: 'Email ahmtstia' },
            { href: 'https://linkedin.com', icon: 'work', title: 'LinkedIn Profile' },
            { href: 'https://github.com', icon: 'code', title: 'GitHub Repositories' },
            { href: 'https://twitter.com', icon: 'chat', title: 'Chat & Socials' },
          ].map(({ href, icon, title }) => (
            <a
              key={icon}
              href={href}
              title={title}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="w-12 h-12 rounded-full border border-brand-border bg-brand-bg flex items-center justify-center text-brand-text-muted hover:border-brand-accent hover:text-white hover:bg-brand-accent transition-all duration-300 active:scale-90 shadow-sm hover:shadow-[0_6px_16px_rgba(181,87,59,0.3)]"
            >
              <span className="material-symbols-outlined text-xl">{icon}</span>
            </a>
          ))}
        </div>
      </section>
      </Reveal>

      <Reveal delay={0.3}>
      <footer className="text-center pt-4">
        <p className="font-garamond italic text-brand-text-muted/80 text-base sm:text-lg">
          Merancang pengalaman digital dengan sepenuh hati.
        </p>
      </footer>
      </Reveal>
    </div>
    </PageWrapper>
  );
};