import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/oussema-jelassi/', label: 'LinkedIn' },
    { icon: <Github size={20} />, href: 'https://github.com', label: 'GitHub' },
    { icon: <Mail size={20} />, href: 'mailto:djelassioussema@gmail.com', label: 'Email' }
  ];

  return (
    <footer className={`py-12 border-t ${
      darkMode 
        ? 'bg-gray-900 border-gray-800' 
        : 'bg-white border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${
                  darkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="text-center">
            <p className={`flex items-center gap-2 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              © {currentYear} Oussema Jelassi. Made with 
              <Heart size={16} className="text-red-500" /> 
              and lots of coffee.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};