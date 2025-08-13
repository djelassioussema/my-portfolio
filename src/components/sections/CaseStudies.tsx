import React from 'react';
import { ArrowRight, TrendingUp, Users, Clock, Award } from 'lucide-react';
import { caseStudies } from '../../data/portfolio';

interface CaseStudiesProps {
  darkMode: boolean;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ darkMode }) => {
  const getMetricIcon = (label: string) => {
    if (label.toLowerCase().includes('time') || label.toLowerCase().includes('speed')) return <Clock size={16} />;
    if (label.toLowerCase().includes('team') || label.toLowerCase().includes('satisfaction')) return <Users size={16} />;
    if (label.toLowerCase().includes('uptime') || label.toLowerCase().includes('reliability')) return <Award size={16} />;
    return <TrendingUp size={16} />;
  };

  return (
    <section className={`min-h-screen py-20 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Case Studies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className={`text-lg max-w-3xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Deep dives into my most impactful projects, showcasing the challenges, solutions, and measurable results.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`group transition-all duration-500 ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
              }`}>
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 0 ? '' : 'lg:col-start-2'}`}>
                  <div>
                    <h3 className={`text-3xl font-bold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {study.title}
                    </h3>
                    <p className={`text-lg font-medium mb-4 ${
                      darkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {study.subtitle}
                    </p>
                    <p className={`text-lg leading-relaxed ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {study.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className={`text-lg font-semibold mb-3 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 text-sm font-medium rounded-full transition-colors duration-200 ${
                            darkMode 
                              ? 'bg-gray-800 text-gray-300 border border-gray-700' 
                              : 'bg-blue-50 text-blue-700 border border-blue-200'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    {study.metrics.map((metric, metricIndex) => (
                      <div
                        key={metricIndex}
                        className={`p-4 rounded-lg transition-all duration-300 hover:transform hover:scale-105 ${
                          darkMode 
                            ? 'bg-gray-800 border border-gray-700' 
                            : 'bg-gray-50 border border-gray-200'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>
                            {getMetricIcon(metric.label)}
                          </span>
                          <span className={`text-sm font-medium ${
                            darkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            {metric.label}
                          </span>
                        </div>
                        <div className={`text-2xl font-bold ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className={`group/btn inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300`}>
                    Read Full Case Study
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>

                {/* Image */}
                <div className={`relative ${index % 2 === 0 ? '' : 'lg:col-start-1'}`}>
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    {/* Floating Metrics */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className={`p-4 rounded-lg backdrop-blur-sm ${
                        darkMode ? 'bg-gray-900/80' : 'bg-white/80'
                      }`}>
                        <div className="grid grid-cols-2 gap-4">
                          {study.metrics.slice(0, 2).map((metric, metricIndex) => (
                            <div key={metricIndex} className="text-center">
                              <div className={`text-lg font-bold ${
                                darkMode ? 'text-white' : 'text-gray-900'
                              }`}>
                                {metric.value}
                              </div>
                              <div className={`text-xs ${
                                darkMode ? 'text-gray-300' : 'text-gray-600'
                              }`}>
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className={`absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20 ${
                    darkMode ? 'bg-blue-500' : 'bg-blue-200'
                  } blur-xl`}></div>
                  <div className={`absolute -bottom-4 -left-4 w-32 h-32 rounded-full opacity-20 ${
                    darkMode ? 'bg-purple-500' : 'bg-purple-200'
                  } blur-xl`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className={`p-8 rounded-xl ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'
          }`}>
            <h3 className={`text-2xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to Start Your Next Project?
            </h3>
            <p className={`text-lg mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Let's discuss how I can help you achieve similar results with your infrastructure and DevOps challenges.
            </p>
            <a
              href="mailto:djelassioussema@gmail.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};