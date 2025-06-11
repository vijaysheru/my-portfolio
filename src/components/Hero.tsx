import React from 'react';
import { Download, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useTheme } from '../hooks/useTheme';

const Hero = () => {
  const { theme, colorScheme } = useTheme();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const getColorClasses = () => {
    const schemes = {
      blue: 'from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800',
      purple: 'from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800',
      green: 'from-green-600 to-green-700 hover:from-green-700 hover:to-green-800',
      orange: 'from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800',
    };
    return schemes[colorScheme as keyof typeof schemes] || schemes.blue;
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-300
        bg-white dark:bg-gray-900`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <img
              src="/profile.jpg"
              alt="Vijay Sheru"
              className="w-32 h-32 mx-auto rounded-full object-cover shadow-xl border-4
                border-white dark:border-gray-800 transition-transform duration-300 transform hover:scale-105"
              style={{ background: theme === 'dark' ? '#1a202c' : '#f3f4f6' }}
            />
          </div>

          {/* Main Content */}
          <div className="animate-fade-in-up">
            <h1
              className={`text-5xl md:text-7xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              {personalInfo.name}
            </h1>
            <h2
              className={`text-2xl md:text-3xl font-light mb-6 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {personalInfo.title}
            </h2>
            <p
              className={`text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              {personalInfo.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={() => scrollToSection('#contact')}
                className={`bg-gradient-to-r ${getColorClasses()} text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2`}
              >
                <span>Get In Touch</span>
                <ArrowRight size={20} />
              </button>

              <a
                href={personalInfo.resumeUrl}
                download
                className={`border-2 px-8 py-4 rounded-lg font-semibold text-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 ${
                  theme === 'dark'
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Download size={20} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/vijaysheru"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/vijaysheru"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div
          className={`w-6 h-10 border-2 rounded-full ${
            theme === 'dark' ? 'border-gray-600' : 'border-gray-400'
          } flex justify-center`}
        >
          <div
            className={`w-1 h-3 ${
              theme === 'dark' ? 'bg-gray-600' : 'bg-gray-400'
            } rounded-full mt-2 animate-pulse`}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
