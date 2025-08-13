import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-indigo-50 via-white to-purple-50'
    }`}>
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -inset-10 opacity-30 ${
          darkMode ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20' : 'bg-gradient-to-r from-indigo-200 to-purple-200'
        } blur-3xl animate-pulse`}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Oussema Jelassi
            </span>
          </h1>
          
          <p className={`text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Cloud & DevOps Engineer passionate about building scalable, 
            automated infrastructure solutions and optimizing deployment pipelines.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToNext()}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
            >
              View My Work
              <ArrowDown size={20} />
            </button>
            
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/oussema-jelassi/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${
                  darkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${
                  darkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:djelassioussema@gmail.com"
                className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${
                  darkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            darkMode ? 'border-gray-400' : 'border-gray-400'
          }`}>
            <div className={`w-1 h-3 rounded-full mt-2 animate-pulse ${
              darkMode ? 'bg-gray-400' : 'bg-gray-600'
            }`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};