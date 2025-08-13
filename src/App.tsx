import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { CaseStudies } from './components/sections/CaseStudies';
import { Contact } from './components/sections/Contact';
import { Section } from './types';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Check for saved theme preference or default to light mode
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  // Update localStorage when theme changes
  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSectionChange = (section: Section) => {
    if (section === activeSection) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSection(section);
      setIsTransitioning(false);
    }, 150);
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home darkMode={darkMode} onSectionChange={handleSectionChange} />;
      case 'about':
        return <About darkMode={darkMode} />;
      case 'experience':
        return <Experience darkMode={darkMode} />;
      case 'projects':
        return <Projects darkMode={darkMode} />;
      case 'case-studies':
        return <CaseStudies darkMode={darkMode} />;
      case 'contact':
        return <Contact darkMode={darkMode} />;
      default:
        return <Home darkMode={darkMode} onSectionChange={handleSectionChange} />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <Navigation 
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      
      <main className={`transition-all duration-300 ${
        isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
      }`}>
        {renderActiveSection()}
      </main>
    </div>
  );
}

export default App;