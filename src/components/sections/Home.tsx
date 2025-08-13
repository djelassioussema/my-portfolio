import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Section } from '../../types';

interface HomeProps {
  darkMode: boolean;
  onSectionChange: (section: Section) => void;
}

export const Home: React.FC<HomeProps> = ({ darkMode, onSectionChange }) => {
  return (
    <section className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -inset-10 opacity-20 ${
          darkMode 
            ? 'bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-teal-500/20' 
            : 'bg-gradient-to-br from-blue-100 via-purple-100 to-teal-100'
        } blur-3xl animate-pulse`}></div>
        
        {/* Floating Elements */}
        <div className={`absolute top-1/4 left-1/4 w-2 h-2 rounded-full animate-bounce ${
          darkMode ? 'bg-blue-400' : 'bg-blue-500'
        }`} style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className={`absolute top-1/3 right-1/3 w-1 h-1 rounded-full animate-bounce ${
          darkMode ? 'bg-purple-400' : 'bg-purple-500'
        }`} style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-3 h-3 rounded-full animate-bounce ${
          darkMode ? 'bg-teal-400' : 'bg-teal-500'
        }`} style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className={`text-5xl md:text-7xl font-bold tracking-tight ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                Oussema
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl font-medium ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Cloud & DevOps Engineer
            </p>
          </div>

          <p className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Passionate about building scalable, automated infrastructure solutions 
            and optimizing deployment pipelines for modern cloud-native applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => onSectionChange('about')}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Learn More About Me
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/oussema-jelassi/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${
                  darkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-blue-400' 
                    : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
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
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:djelassioussema@gmail.com"
                className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${
                  darkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-teal-400' 
                    : 'bg-gray-100 text-gray-600 hover:bg-teal-50 hover:text-teal-600'
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
            darkMode ? 'border-gray-600' : 'border-gray-400'
          }`}>
            <div className={`w-1 h-3 rounded-full mt-2 animate-pulse ${
              darkMode ? 'bg-gray-500' : 'bg-gray-600'
            }`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};