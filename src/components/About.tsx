import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Cloud Infrastructure',
      description: 'Expert in AWS, GCP, and Azure with extensive experience in scalable cloud architectures.'
    },
    {
      icon: <Palette size={24} />,
      title: 'DevOps & Automation',
      description: 'Specializing in CI/CD pipelines, Infrastructure as Code, and deployment automation.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Container Orchestration',
      description: 'Advanced Kubernetes and Docker expertise for microservices and scalable deployments.'
    }
  ];

  return (
    <section id="about" className={`py-20 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm a passionate Cloud & DevOps Engineer with extensive experience in building 
              and managing scalable infrastructure solutions. My journey began with software 
              development and evolved into a deep expertise in cloud technologies, automation, 
              and DevOps practices that enable teams to deliver reliable software at scale.
            </p>
            
            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Currently working at Infovista on cutting-edge SaaS platforms, I specialize in 
              designing CI/CD pipelines, managing Kubernetes clusters, and implementing 
              Infrastructure as Code. My experience spans across major cloud providers and 
              modern DevOps tools, always focusing on automation and reliability.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {['Kubernetes', 'AWS', 'GCP', 'Terraform', 'Docker', 'GitHub Actions'].map((tech) => (
                <span
                  key={tech}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    darkMode 
                      ? 'bg-gray-700 text-gray-300' 
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all duration-300 hover:transform hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-700 hover:bg-gray-600' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className={`inline-flex p-3 rounded-lg mb-4 ${
                  darkMode ? 'bg-indigo-600' : 'bg-indigo-100'
                }`}>
                  <span className={darkMode ? 'text-white' : 'text-indigo-600'}>
                    {highlight.icon}
                  </span>
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {highlight.title}
                </h3>
                <p className={`${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};