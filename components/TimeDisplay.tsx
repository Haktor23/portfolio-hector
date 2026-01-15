import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TimeDisplay: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const { language } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="font-mono text-secondary text-sm">
      {time.toLocaleTimeString(language === 'es' ? 'es-ES' : 'en-US', { hour: '2-digit', minute: '2-digit' })}
    </span>
  );
};

export default TimeDisplay;