import React, { useState } from 'react';
import Header from '../componentes/Header';
import Profile from '../componentes/Profile';
import SkillsSection from '../componentes/SkillsSection';
import ProjectsSection from '../componentes/ProjectsSection';
import ContactSection from '../componentes/ContactSection';

function View() {
  const [activeSection, setActiveSection] = useState('');

  const handleSectionClick = (section) => {
    if (activeSection === section) {
      setActiveSection('');
    } else {
      setActiveSection(section);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Email copiado al portapapeles');
      })
      .catch((err) => {
        console.error('Error al copiar al portapapeles: ', err);
      });
  };

  return (
    <div className="portfolio">
      <Header />
      <Profile />

      <div className="portfolio-experiment">
        <div className="opciones">
          <a
            className={`btn btn-1 ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={() => handleSectionClick('skills')}
          >
            <span className="text">Habilidades</span>
          </a>
          <a
            className={`btn btn-1 ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => handleSectionClick('projects')}
          >
            <span className="text">Proyectos</span>
          </a>
          <a
            className={`btn btn-1 ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => handleSectionClick('contact')}
          >
            <span className="text">Contacto</span>
          </a>
        </div>
      </div>

      {activeSection === 'skills' && <SkillsSection />}
      {activeSection === 'projects' && <ProjectsSection />}
      {activeSection === 'contact' && <ContactSection copyToClipboard={copyToClipboard} />}
    </div>
  );
}

export default View;
