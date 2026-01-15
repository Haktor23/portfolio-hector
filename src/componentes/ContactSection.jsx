import React from 'react';

function ContactSection({ copyToClipboard }) {
  return (
    <div className="contact-section">
      <div className="email-info">
        <p className="email-tag">Email:</p>
        <p className="email">hectorbmprof@gmail.com</p>
        <div className="copiar" onClick={() => copyToClipboard('hectorbmprof@gmail.com')}></div>
      </div>
      <div className="rrss-info">
        <a href="https://github.com/Haktor23" target="_blank" rel="noopener noreferrer">
          <div className="github" />
        </a>
        <a href="https://www.linkedin.com/in/hector-burgos-mart%C3%AD-39ab182b0/" target="_blank" rel="noopener noreferrer">
          <div className="linkedin" />
        </a>
      </div>
    </div>
  );
}

export default ContactSection;
