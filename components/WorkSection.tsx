import React from 'react';
import { PROJECTS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import ProjectCard from './ProjectCard';

const WorkSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="work" className="mb-32">
      <div className="flex items-end justify-between mb-12">
        <h2 className="text-4xl font-bold text-white">{t.work.title} <span className="text-secondary text-2xl font-normal ml-2">{t.work.subtitle}</span></h2>
        <div className="hidden md:block w-32 h-[1px] bg-white/20 mb-4"></div>
      </div>

      <div className="flex flex-col gap-12">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default WorkSection;