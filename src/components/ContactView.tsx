'use client';

import React, { useState } from 'react';
import { ContactFormData } from '../types';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <div className="flex-grow px-4 sm:px-8 mt-6 sm:mt-12 max-w-3xl mx-auto w-full pb-28">
      {/* Header Section */}
      <section className="mb-10 sm:mb-14">
        <span className="font-hanken text-xs uppercase tracking-widest text-[#2563EB] font-bold block mb-2">
          GET IN TOUCH
        </span>
        <h1 className="font-garamond text-4xl sm:text-6xl text-[#0F172A] font-bold mb-4">
          Let's Build Something
        </h1>
        <p className="font-hanken text-base sm:text-lg text-[#475569] leading-relaxed">
          Whether you have a specific project in mind or just want to explore possibilities, I'm ready to collaborate. Drop a message below and I'll get back to you soon.
        </p>
      </section>

      {/* Form Section */}
      <section className="mb-14 bg-[#FFFFFF] rounded-xl p-6 sm:p-10 ambient-shadow border border-[#E2E8F0]/60">
        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#2563EB]/10 text-[#2563EB] mx-auto flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-3xl">check_circle</span>
            </div>
            <h3 className="font-garamond text-2xl font-bold text-[#0F172A] mb-2">
              Message Sent
            </h3>
            <p className="font-hanken text-sm text-[#475569] mb-6">
              Thank you for reaching out! ahmtstia will respond to your email within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-[#2563EB] text-white font-hanken text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-full hover:bg-[#1D4ED8] transition-all cursor-pointer"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Field */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Your Name"
                className="minimal-input block w-full bg-transparent border-0 border-b border-[#E2E8F0] text-[#0F172A] font-hanken text-base py-3 px-0 focus:ring-0 transition-colors duration-300 placeholder:text-[#475569]/60"
              />
              <label htmlFor="name" className="sr-only">
                Your Name
              </label>
            </div>

            {/* Email Field */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                placeholder="Your Email"
                className="minimal-input block w-full bg-transparent border-0 border-b border-[#E2E8F0] text-[#0F172A] font-hanken text-base py-3 px-0 focus:ring-0 transition-colors duration-300 placeholder:text-[#475569]/60"
              />
              <label htmlFor="email" className="sr-only">
                Your Email
              </label>
            </div>

            {/* Message Field */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                placeholder="How can we work together?"
                className="minimal-input block w-full bg-transparent border-0 border-b border-[#E2E8F0] text-[#0F172A] font-hanken text-base py-3 px-0 focus:ring-0 transition-colors duration-300 placeholder:text-[#475569]/60 resize-none"
              />
              <label htmlFor="message" className="sr-only">
                Message
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#2563EB] text-white font-hanken text-sm font-semibold py-4 rounded-full ambient-shadow-hover transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer hover:bg-[#1D4ED8]"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <span className="material-symbols-outlined text-[20px]">send</span>
            </button>
          </form>
        )}
      </section>

      {/* Social Links Section */}
      <section className="mb-14 text-center">
        <p className="font-hanken text-xs text-[#475569] mb-6 uppercase tracking-widest font-bold">
          OR CONNECT DIRECTLY
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="mailto:ahmtstia@example.com"
            title="Email ahmtstia"
            className="w-12 h-12 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-center text-[#475569] hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-[#FFFFFF] transition-all duration-300 active:scale-90 shadow-sm"
          >
            <span className="material-symbols-outlined text-xl">mail</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="w-12 h-12 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-center text-[#475569] hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-[#FFFFFF] transition-all duration-300 active:scale-90 shadow-sm"
          >
            <span className="material-symbols-outlined text-xl">work</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Repositories"
            className="w-12 h-12 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-center text-[#475569] hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-[#FFFFFF] transition-all duration-300 active:scale-90 shadow-sm"
          >
            <span className="material-symbols-outlined text-xl">code</span>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Chat & Socials"
            className="w-12 h-12 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-center text-[#475569] hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-[#FFFFFF] transition-all duration-300 active:scale-90 shadow-sm"
          >
            <span className="material-symbols-outlined text-xl">chat</span>
          </a>
        </div>
      </section>

      {/* Footer Tagline */}
      <footer className="text-center pt-4">
        <p className="font-garamond italic text-[#475569]/80 text-base sm:text-lg">
          Crafting digital experiences with care.
        </p>
      </footer>
    </div>
  );
};
