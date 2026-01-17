import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className={`glass-card rounded-full px-6 py-3 flex items-center gap-6 transition-all ${isScrolled ? 'bg-black/80' : 'bg-transparent border-transparent'}`}>
          <a href="#bento" onClick={scrollToSection('bento')} className="hover:text-accent transition-colors text-sm font-medium">{t.nav.home}</a>
          <a href="#work" onClick={scrollToSection('work')} className="hover:text-accent transition-colors text-sm font-medium">{t.nav.work}</a>
          <a href="#about" onClick={scrollToSection('about')} className="hover:text-accent transition-colors text-sm font-medium">{t.nav.about}</a>
          <a href="#contact" onClick={scrollToSection('contact')} className="hover:text-accent transition-colors text-sm font-medium">{t.nav.contact}</a>

          {/* Language Toggle */}
          <div className="w-[1px] h-4 bg-white/20 mx-2"></div>
          <button
            onClick={toggleLanguage}
            className="text-xs font-mono font-bold px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-accent transition-all uppercase"
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;