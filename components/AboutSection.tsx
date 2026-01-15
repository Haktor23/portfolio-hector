
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { label: t.about.stats.exp, value: "2+" },
    { label: t.about.stats.projects, value: "30+" },
    { label: t.about.stats.commits, value: "2.5k+" }
  ];

  return (
    <section id="about" className="mb-32 pt-20">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-4xl font-bold text-white">{t.about.title}</h2>
        <div className="h-[1px] bg-white/20 flex-grow max-w-xs"></div>
        <span className="text-secondary text-sm font-mono uppercase tracking-widest">{t.about.subtitle}</span>
      </div>

      <div className="grid md:grid-cols-12 gap-12 items-center">
        {/* Bio Text */}
        <div className="md:col-span-7 space-y-6">
          <p className="text-lg text-slate-300 leading-relaxed border-l-2 border-accent/50 pl-6">
            {t.about.bio_p1}
          </p>
          <p className="text-lg text-slate-400 leading-relaxed">
            {t.about.bio_p2}
          </p>
          
          <div className="pt-6">
             <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm hover:bg-white/10 transition-colors">🚀 Full Stack Architecture</span>
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm hover:bg-white/10 transition-colors">🤖 AI Integration</span>
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm hover:bg-white/10 transition-colors">✨ UX/UI Design</span>
             </div>
          </div>
        </div>

        {/* Stats / Visual */}
        <div className="md:col-span-5">
          <div className="glass-card rounded-3xl p-8 relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-[50px] group-hover:bg-accent/30 transition-all"></div>
             
             <div className="relative z-10 grid grid-cols-1 gap-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <span className="text-secondary font-mono text-sm">{stat.label}</span>
                    <span className="text-3xl font-bold text-white font-sans">{stat.value}</span>
                  </div>
                ))}
             </div>

             <div className="mt-8 pt-6 border-t border-white/10 flex justify-center">
                <i className="fa-solid fa-code text-5xl text-white/5 group-hover:text-accent/20 transition-colors"></i>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
