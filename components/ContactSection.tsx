import React, { useState } from 'react';
import { PROFILE } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative rounded-3xl overflow-hidden bg-[#0d0d0d] border border-white/5 p-8 md:p-16 text-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent animate-spin-slow"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t.contact.title} <span className="text-accent italic">{t.contact.title_accent}</span>.</h2>
        <p className="text-secondary text-lg mb-10">
          {t.contact.text}
        </p>
        <a href={`mailto:${PROFILE.email}`} className="inline-block bg-white text-black font-bold px-8 py-4 rounded-full hover:bg-accent transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]">
          {t.contact.cta}
        </a>

        {/* Email Copy Section */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="text-secondary font-mono text-sm">{PROFILE.email}</span>
          <button
            onClick={copyEmail}
            className="group relative px-4 py-2 rounded-lg border border-white/10 hover:border-accent/50 bg-white/5 hover:bg-accent/10 transition-all"
          >
            {copied ? (
              <i className="fa-solid fa-check text-green-400 text-sm"></i>
            ) : (
              <i className="fa-solid fa-copy text-secondary group-hover:text-accent text-sm"></i>
            )}
          </button>
        </div>
      </div>

      <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary font-mono">
        <p>&copy; {new Date().getFullYear()} {PROFILE.name}.</p>
        <p>{t.contact.copyright} <i className="fa-solid fa-heart text-red-500 mx-1"></i></p>
      </div>
    </section>
  );
};

export default ContactSection;