import React from 'react';
import { Brain, DatabaseZap, Rocket, Cpu, Code2, Cloud, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useTheme } from '../hooks/useTheme';

const About = () => {
  const { theme, colorScheme } = useTheme();

  // --- Update highlights according to your resume ---
  const highlights = [
    {
      icon: Brain,
      title: 'AI Engineering & LLMs',
      description: 'Proven expertise in building and deploying AI systems, GPT-powered tools, and LLM applications.',
    },
    {
      icon: Cpu,
      title: 'MLOps & Model Deployment',
      description: 'Hands-on with MLflow, FastAPI, Docker, and scalable model pipelines for real-world use.',
    },
    {
      icon: Code2,
      title: 'Software Engineering',
      description: '2+ years at Infosys designing robust APIs, backend systems, and automation tools.',
    },
    {
      icon: Rocket,
      title: 'Innovation & Impact',
      description: 'Launched real AI products—from fraud detection to autonomous job platforms—focused on user value.',
    },
  ];

  // --- Updated What I Do ---
  const whatIDo = [
    'Develop end-to-end AI and machine learning solutions (LLMs, NLP, RAG, Deep Learning)',
    'Design & deploy scalable APIs and full-stack applications with FastAPI, React, and cloud platforms',
    'Integrate, automate, and optimize MLOps pipelines for robust production AI',
    'Mentor teams, lead agile projects, and drive AI innovation from concept to launch',
  ];

  const getIconColor = () => {
    const colors = {
      blue: 'text-blue-600',
      purple: 'text-purple-600',
      green: 'text-green-600',
      orange: 'text-orange-600',
    };
    return colors[colorScheme as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="about" className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r ${
            colorScheme === 'blue' ? 'from-blue-600 to-blue-700' :
            colorScheme === 'purple' ? 'from-purple-600 to-purple-700' :
            colorScheme === 'green' ? 'from-green-600 to-green-700' :
            'from-orange-600 to-orange-700'
          } mx-auto mb-8`} />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {/* You can personalize this further if you wish */}
              AI Engineer and Software Developer with a Master’s in Artificial Intelligence from UNT and 2+ years of industry experience at Infosys. I build and deploy real-world AI solutions—specializing in LLMs, NLP, MLOps, and scalable backend systems. My work blends hands-on engineering with a passion for impactful automation and robust, production-ready code.
            </p>

            <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              I thrive at the intersection of research and deployment: from building fraud detection with deep learning and launching AI job platforms, to optimizing model pipelines and leading agile teams. I’m driven by curiosity, lifelong learning, and the desire to solve meaningful problems with AI and code.
            </p>

            <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
              <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                What I Do
              </h3>
              <ul className="space-y-2">
                {whatIDo.map((item, index) => (
                  <li key={index} className={`flex items-start space-x-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span className={`w-2 h-2 rounded-full mt-3 flex-shrink-0 ${
                      colorScheme === 'blue' ? 'bg-blue-600' :
                      colorScheme === 'purple' ? 'bg-purple-600' :
                      colorScheme === 'green' ? 'bg-green-600' :
                      'bg-orange-600'
                    }`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ${
                    theme === 'dark' ? 'bg-gray-900' : 'bg-white'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    colorScheme === 'blue' ? 'bg-blue-100' :
                    colorScheme === 'purple' ? 'bg-purple-100' :
                    colorScheme === 'green' ? 'bg-green-100' :
                    'bg-orange-100'
                  } ${theme === 'dark' ? 'bg-opacity-20' : ''}`}>
                    <Icon className={`w-6 h-6 ${getIconColor()}`} />
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {highlight.title}
                  </h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
