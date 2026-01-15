import React from 'react';
import { PROFILE, SKILLS, SOCIALS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import TimeDisplay from './TimeDisplay';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="bento" className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-24 auto-rows-[minmax(180px,auto)] md:auto-rows-[180px]">

      {/* Card 1: Main Intro (Large) */}
      <div className="glass-card rounded-3xl p-6 md:p-8 md:col-span-2 md:row-span-2 flex flex-col justify-between group hover:border-accent/30 transition-all">
        <div className="flex justify-between items-start gap-2 flex-shrink-0">
          <div className="w-16 h-16 rounded-full bg-slate-800 overflow-hidden border-2 border-white/10 flex-shrink-0">
            <img
              src="https://api.dicebear.com/9.x/micah/svg?seed=Eliza&baseColor=f9c9b6&earrings=stud&earringsProbability=0&facialHairProbability=0&glasses=square&glassesColor=000000&glassesProbability=100&hair=fonze&hairColor=77311d&mouth=laughing"
              alt="Avatar"
              className="w-full h-full"
            />
          </div>
          <div className="px-2 sm:px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-[10px] sm:text-xs font-mono flex items-center gap-1.5 sm:gap-2 flex-shrink-0 max-w-[140px] sm:max-w-none">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse flex-shrink-0"></span>
            <span className="truncate">{t.hero.status}</span>
          </div>
        </div>
        <div>
          <h2 className="text-secondary font-mono text-sm mb-1">{t.hero.greeting}</h2>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight break-words">
            {t.hero.role_prefix} <br />
            <span className="text-accent break-words">{t.hero.role_suffix}</span>.
          </h1>
          <p className="mt-4 text-secondary text-sm max-w-sm">
            {t.hero.description}
          </p>
        </div>
      </div>

      {/* Card 2: Marquee Tech Stack (Wide & Seamless) */}
      <div className="glass-card rounded-3xl p-6 md:col-span-2 flex flex-col justify-center overflow-hidden group hover:border-accent/30 transition-all">
        <h3 className="text-xs font-bold uppercase tracking-widest text-secondary mb-4 flex items-center gap-2">
          <i className="fa-solid fa-microchip"></i> {t.hero.tech_stack}
        </h3>
        <div className="flex overflow-hidden group-hover:opacity-100 opacity-70 transition-opacity mask-linear-gradient">
          {/* Primera lista de skills */}
          <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8">
            {SKILLS.map((skill, i) => (
              <div key={i} className="flex items-center gap-2 text-xl font-bold text-slate-300">
                <i className={`${skill.icon} text-accent`}></i>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
          {/* Segunda lista de skills (Copia exacta para el loop) */}
          <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8" aria-hidden="true">
            {SKILLS.map((skill, i) => (
              <div key={`copy-${i}`} className="flex items-center gap-2 text-xl font-bold text-slate-300">
                <i className={`${skill.icon} text-accent`}></i>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card 3: Location / Map */}
      <div className="glass-card rounded-3xl p-0 md:col-span-1 md:row-span-2 relative overflow-hidden group hover:border-accent/30 transition-all">
        <div className="absolute inset-0 bg-slate-800/50 z-0">
          {/* Abstract Map Representation */}
          <div className="w-full h-full opacity-30" style={{ backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-accent rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full border-2 border-accent shadow-[0_0_20px_rgba(34,211,238,0.5)]"></div>
        </div>
        <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent z-10">
          <p className="text-white font-bold">Canals</p>
          <div className="flex justify-between items-end">
            <p className="text-secondary text-xs">{t.hero.location}</p>
            <TimeDisplay />
          </div>
        </div>
      </div>

      {/* Card 4: Socials */}
      <div className="glass-card rounded-3xl p-6 md:col-span-1 flex flex-col justify-center gap-4 hover:border-accent/30 transition-all">
        {SOCIALS.map(social => (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between group/link"
          >
            <span className="text-sm font-medium text-secondary group-hover/link:text-white transition-colors">{social.platform}</span>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-accent group-hover/link:text-black transition-all">
              <i className={`${social.icon} text-sm`}></i>
            </div>
          </a>
        ))}
      </div>

      {/* Card 5: Experience / Focus */}
      <div className="glass-card rounded-3xl p-6 md:col-span-1 bg-gradient-to-br from-emerald-900/20 to-transparent hover:border-emerald-500/30 transition-all flex flex-col justify-between">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-2">
          <i className="fa-solid fa-layer-group"></i>
        </div>
        <div>
          <p className="text-xs text-emerald-300 mb-1">{t.hero.focus_label}</p>
          <p className="text-sm font-bold text-white">{t.hero.focus_value}</p>
        </div>
      </div>

      {/* Card 6: "About" Teaser */}
      <div className="glass-card rounded-3xl p-6 md:col-span-1 md:col-start-3 md:row-start-2 flex items-center justify-center group hover:bg-white/5 transition-all cursor-pointer" onClick={scrollToContact}>
        <div className="text-center">
          <div className="text-4xl text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
            <i className="fa-solid fa-paper-plane"></i>
          </div>
          <p className="text-sm font-bold">{t.hero.contact_me}</p>
        </div>
      </div>

    </section>
  );
};

export default Hero;