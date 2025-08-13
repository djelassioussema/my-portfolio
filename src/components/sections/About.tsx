import React from 'react';
import { Code, Cloud, Zap, Award } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  const highlights = [
    {
      icon: <Cloud size={24} />,
      title: 'Cloud Architecture',
      description: 'Expert in AWS, GCP, and Azure with extensive experience in scalable cloud infrastructures and migrations.'
    },
    {
      icon: <Code size={24} />,
      title: 'DevOps & Automation',
      description: 'Specializing in CI/CD pipelines, Infrastructure as Code, and deployment automation using modern tools.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Container Orchestration',
      description: 'Advanced Kubernetes and Docker expertise for microservices architecture and scalable deployments.'
    },
    {
      icon: <Award size={24} />,
      title: 'Performance Engineering',
      description: 'Leading stress testing, scalability optimization, and reliability engineering for enterprise systems.'
    }
  ];

  return (
    <section className={`min-h-screen py-20 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm a passionate Cloud & DevOps Engineer with extensive experience in building 
              and managing scalable infrastructure solutions. My journey began with software 
              development and evolved into deep expertise in cloud technologies, automation, 
              and DevOps practices that enable teams to deliver reliable software at scale.
            </p>
            
            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Currently working at Infovista on cutting-edge SaaS platforms, I specialize in 
              designing CI/CD pipelines, managing Kubernetes clusters, and implementing 
              Infrastructure as Code. My experience spans across major cloud providers and 
              modern DevOps tools, always focusing on automation, reliability, and performance.
            </p>

            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I hold a Cloud Computing Engineering degree and have successfully led multiple 
              enterprise-scale projects, from RF planning solutions to anti-money laundering 
              systems, always delivering measurable improvements in deployment speed, 
              system reliability, and cost optimization.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {['Kubernetes', 'AWS', 'GCP', 'Terraform', 'Docker', 'GitHub Actions', 'Python', 'Helm'].map((tech) => (
                <span
                  key={tech}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    darkMode 
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
                    ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' 
                    : 'bg-gray-50 hover:bg-white border border-gray-200 hover:shadow-lg'
                }`}
              >
                <div className={`inline-flex p-3 rounded-lg mb-4 ${
                  darkMode ? 'bg-blue-600/20' : 'bg-blue-100'
                }`}>
                  <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>
                    {highlight.icon}
                  </span>
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {highlight.title}
                </h3>
                <p className={`leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Languages */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className={`p-8 rounded-xl ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'
          }`}>
            <h3 className={`text-2xl font-semibold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Education
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className={`font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Cloud Computing Engineering Degree
                </h4>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  The Private Higher School of Engineering and Technology
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  2019 - 2022 • Tunisia
                </p>
              </div>
              <div>
                <h4 className={`font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Software Development Bachelor
                </h4>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Higher Institute of Technological Studies
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  2016 - 2019 • Tunisia
                </p>
              </div>
            </div>
          </div>

          <div className={`p-8 rounded-xl ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'
          }`}>
            <h3 className={`text-2xl font-semibold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Languages
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Arabic
                </span>
                <span className={`text-sm ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Native
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  French
                </span>
                <span className={`text-sm ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Fluent
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  English
                </span>
                <span className={`text-sm ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Fluent
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};