import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { experiences } from '../../data/portfolio';

interface ExperienceProps {
  darkMode: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  return (
    <section className={`min-h-screen py-20 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className={`text-lg max-w-3xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            My professional journey in cloud infrastructure, DevOps automation, and scalable system design.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${
            darkMode ? 'bg-gray-700' : 'bg-gray-300'
          } hidden md:block`}></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="relative">
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 ${
                  darkMode 
                    ? 'bg-gray-900 border-blue-500' 
                    : 'bg-white border-blue-600'
                } hidden md:block`}></div>

                <div className="md:ml-20">
                  <div className={`p-8 rounded-xl transition-all duration-300 hover:transform hover:scale-105 ${
                    darkMode 
                      ? 'bg-gray-800 border border-gray-700 hover:bg-gray-750' 
                      : 'bg-gray-50 border border-gray-200 hover:bg-white hover:shadow-lg'
                  }`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className={`text-2xl font-bold mb-2 ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {experience.title}
                        </h3>
                        <div className="flex items-center gap-4 mb-2">
                          <span className={`text-lg font-semibold ${
                            darkMode ? 'text-blue-400' : 'text-blue-600'
                          }`}>
                            {experience.company}
                          </span>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              {experience.location}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                        <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {experience.duration}
                        </span>
                      </div>
                    </div>

                    <p className={`text-lg mb-6 leading-relaxed ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {experience.description}
                    </p>

                    <div className="mb-6">
                      <h4 className={`text-lg font-semibold mb-3 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-3">
                            <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                              darkMode ? 'bg-blue-400' : 'bg-blue-600'
                            }`}></div>
                            <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className={`text-lg font-semibold mb-3 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 text-sm font-medium rounded-full transition-colors duration-200 ${
                              darkMode 
                                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                                : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="mailto:djelassioussema@gmail.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <span>Let's Work Together</span>
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};