import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

// Certifications data from your resume
const certifications = [
  {
    id: 'coursera-ml-specialization',
    name: 'Machine Learning Specialization',
    issuer: 'Coursera',
    year: '2024',
    url: '', // Add your certificate URL if you want
  },
  {
    id: 'coursera-mlops',
    name: 'Machine Learning Operations (MLOps)',
    issuer: 'Coursera',
    year: '2024',
    url: '',
  },
  {
    id: 'aws-cloud-practitioner',
    name: 'AWS Cloud Practitioner',
    issuer: 'AWS',
    year: '2022',
    url: '',
  },
  {
    id: 'infosys-java',
    name: 'Internal Java Developer',
    issuer: 'Infosys',
    year: '2022',
    url: '',
  },
  {
    id: 'infosys-agile',
    name: 'Infosys Internal Agile Certification',
    issuer: 'Infosys',
    year: '2022',
    url: '',
  },
];

const Certifications = () => {
  const { theme, colorScheme } = useTheme();

  const getAccentColor = () => {
    const colors = {
      blue: 'text-blue-600',
      purple: 'text-purple-600',
      green: 'text-green-600',
      orange: 'text-orange-600',
    };
    return colors[colorScheme as keyof typeof colors] || colors.blue;
  };

  const getIconBgColor = () => {
    const colors = {
      blue: 'bg-blue-100',
      purple: 'bg-purple-100',
      green: 'bg-green-100',
      orange: 'bg-orange-100',
    };
    return colors[colorScheme as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="certifications" className={`py-20 ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Certifications
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r ${
            colorScheme === 'blue' ? 'from-blue-600 to-blue-700' :
            colorScheme === 'purple' ? 'from-purple-600 to-purple-700' :
            colorScheme === 'green' ? 'from-green-600 to-green-700' :
            'from-orange-600 to-orange-700'
          } mx-auto mb-8`} />
          <p className={`text-lg max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Professional certifications and achievements in AI, machine learning, and technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className={`p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start space-x-4">
                {/* Certificate Icon */}
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  getIconBgColor()
                } ${theme === 'dark' ? 'bg-opacity-20' : ''}`}>
                  <Award className={`w-6 h-6 ${getAccentColor()}`} />
                </div>

                {/* Certificate Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {cert.name}
                      </h3>
                      <p className={`text-base font-medium mb-2 ${getAccentColor()}`}>
                        {cert.issuer}
                      </p>
                      <div className={`flex items-center text-sm ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <Calendar size={16} className="mr-2" />
                        {cert.year}
                      </div>
                    </div>

                    {/* View Certificate Link */}
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`ml-4 p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                          theme === 'dark' 
                            ? 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700' 
                            : 'bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                        }`}
                        aria-label="View Certificate"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;