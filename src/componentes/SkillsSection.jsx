import React from 'react';

function SkillsSection() {
  return (
    <div className="skills-section">
      <h2>Tecnologías impartidas durante mi formación</h2>
      <div className="skills-logos">
        <div className="img-lenguajes">
          <div className="angular" />
          <div className="javascript" />
          <div className="java" />
          <div className="spring" />
          <div className="html" />
          <div className="css" />
        </div>
      </div>

      <h2>Estoy aprendiendo de manera autodidacta</h2>
      <div className="img-lenguajes">
        <div className="react" />
        <div className="python" />
      </div>

      <h2>Base de datos</h2>
      <div className="img-lenguajes">
        <div className="mysql" />
        <div className="oracledb" />
        <div className="firebase" />
        <div className="supabase" />
        <div className="dbeaver" />
      </div>

      <h2>Otras habilidades</h2>
      <div className="img-lenguajes">
        <div className="docker" />
        <div className="githubb" />
        <div className="git" />
        <div className="virtualbox" />
        <div className="photoshop"></div>
      </div>
    </div>
  );
}

export default SkillsSection;
