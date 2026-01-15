
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkSection from './components/WorkSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import BackgroundEffects from './components/BackgroundEffects';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark text-slate-200 selection:bg-accent selection:text-black">
      
      <BackgroundEffects />
      <Navbar />

      <main className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <Hero />
        <AboutSection />
        <WorkSection />
        <ContactSection />
      </main>

    </div>
  );
};

export default App;
