import React, { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const experiences = [
  {
    id: 'infosys',
    title: 'Systems Engineer',
    company: 'Infosys',
    duration: 'Nov 2021 – Jul 2023',
    description: [
      "Designed and deployed scalable APIs with integrated performance optimization, reducing server response time by 50% and improving system reliability.",
      "Improved messaging and alerting systems using RESTful API patterns and clean code practices, leading to a 40% increase in user engagement and a 25% boost in operational efficiency.",
      "Collaborated on backend infrastructure with potential for AI model integration, setting up foundational services used in data-driven and predictive modules.",
      "Developed unit testing frameworks in JUnit to reduce code defects by 30% and accelerate software release cycles.",
      "Contributed to Agile AI-solution delivery processes, leading sprint planning, grooming, daily stand-ups, and demo sessions.",
      "Drove experimentation and iterative development, increasing engineering throughput by 30% and reducing time-to-market by 25% for AI-enabling backend tools.",
      "Led a team in designing a modular firmware architecture to support future intelligent features, improving memory usage by 30% and enhancing system stability.",
      "Contributed to the development of scalable backend systems and AI-ready infrastructure used in analytics, automation, and future ML model integration.",
    ],
    technologies: [
      'Python', 'Java', 'REST API', 'JUnit', 'Docker', 'CI/CD', 'Agile', 'Microservices', 'Cloud (AWS)','ChatGPT','SQL','Postman','Kafka'
    ],
  },
];

const education = [
  {
    id: 'unt-masters',
    degree: "Master’s in Artificial Intelligence",
    institution: 'University of North Texas, Denton, TX',
    year: 'Aug 2023 – May 2025',
    gpa: '3.3',
  },
];

const Experience = () => {
  const { theme, colorScheme } = useTheme();
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  const getAccentColor = () => {
    const colors = {
      blue: 'text-blue-600',
      purple: 'text-purple-600',
      green: 'text-green-600',
      orange: 'text-orange-600',
    };
    return colors[colorScheme as keyof typeof colors] || colors.blue;
  };

  const getTabClasses = (tab: string) => {
    const isActive = activeTab === tab;
    if (isActive) {
      const activeColors = {
        blue: 'bg-blue-600 text-white',
        purple: 'bg-purple-600 text-white',
        green: 'bg-green-600 text-white',
        orange: 'bg-orange-600 text-white',
      };
      return activeColors[colorScheme as keyof typeof activeColors] || activeColors.blue;
    }
    return theme === 'dark' 
      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
      : 'bg-gray-100 text-gray-700 hover:bg-gray-200';
  };

  return (
    <section id="experience" className={`py-20 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Experience & Education
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r ${
            colorScheme === 'blue' ? 'from-blue-600 to-blue-700' :
            colorScheme === 'purple' ? 'from-purple-600 to-purple-700' :
            colorScheme === 'green' ? 'from-green-600 to-green-700' :
            'from-orange-600 to-orange-700'
          } mx-auto mb-8`} />
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className={`flex rounded-lg p-1 ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
          }`}>
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${getTabClasses('experience')}`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${getTabClasses('education')}`}
            >
              Education
            </button>
          </div>
        </div>

        {/* Experience Timeline */}
        {activeTab === 'experience' && (
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
              }`} />

              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative flex items-start mb-12">
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 w-4 h-4 rounded-full border-4 ${
                    colorScheme === 'blue' ? 'bg-blue-600 border-blue-200' :
                    colorScheme === 'purple' ? 'bg-purple-600 border-purple-200' :
                    colorScheme === 'green' ? 'bg-green-600 border-green-200' :
                    'bg-orange-600 border-orange-200'
                  } ${theme === 'dark' ? 'border-opacity-20' : ''}`} />

                  {/* Content */}
                  <div className="ml-20 flex-1">
                    <div className={`p-6 rounded-lg shadow-lg ${
                      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                    }`}>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className={`text-xl font-bold ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}>
                            {exp.title}
                          </h3>
                          <p className={`text-lg font-medium ${getAccentColor()}`}>
                            {exp.company}
                          </p>
                        </div>
                        <div className={`flex items-center text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <Calendar size={16} className="mr-2" />
                          {exp.duration}
                        </div>
                      </div>

                      {/* Description */}
                      <div className={`mb-4 ${
                        expandedExperience === exp.id ? '' : 'line-clamp-3'
                      }`}>
                        <ul className="space-y-2">
                          {exp.description.map((desc, idx) => (
                            <li key={idx} className={`flex items-start ${
                              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              <span className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                                colorScheme === 'blue' ? 'bg-blue-600' :
                                colorScheme === 'purple' ? 'bg-purple-600' :
                                colorScheme === 'green' ? 'bg-green-600' :
                                'bg-orange-600'
                              }`} />
                              {desc}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        onClick={() => setExpandedExperience(
                          expandedExperience === exp.id ? null : exp.id
                        )}
                        className={`flex items-center text-sm font-medium mb-4 ${getAccentColor()} hover:underline`}
                      >
                        {expandedExperience === exp.id ? (
                          <>
                            <ChevronUp size={16} className="mr-1" />
                            Show Less
                          </>
                        ) : (
                          <>
                            <ChevronDown size={16} className="mr-1" />
                            Show More
                          </>
                        )}
                      </button>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 text-xs font-medium rounded-full ${
                              theme === 'dark' 
                                ? 'bg-gray-900 text-gray-300' 
                                : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {activeTab === 'education' && (
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {education.map((edu, index) => (
                <div
                  key={edu.id}
                  className={`p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {edu.degree}
                      </h3>
                      <p className={`text-lg ${getAccentColor()} mb-2`}>
                        {edu.institution}
                      </p>
                      <div className="flex items-center space-x-4">
                        <div className={`flex items-center text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <Calendar size={16} className="mr-2" />
                          {edu.year}
                        </div>
                        {edu.gpa && (
                          <div className={`text-sm ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            GPA: {edu.gpa}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
