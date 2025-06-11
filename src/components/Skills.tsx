import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../hooks/useTheme';

// --- SKILLS DATA BASED ON YOUR RESUME ---
const skills = [
  // Programming Languages
  { name: 'Python', level: 95, category: 'programming' },
  { name: 'Java', level: 90, category: 'programming' },
  { name: 'SQL', level: 80, category: 'programming' },
  { name: 'Bash', level: 70, category: 'programming' },

  // AI & ML
  { name: 'Supervised/Unsupervised Learning', level: 90, category: 'ai' },
  { name: 'Deep Learning', level: 90, category: 'ai' },
  { name: 'Large Language Models (LLMs)', level: 90, category: 'ai' },
  { name: 'Transformers', level: 85, category: 'ai' },
  { name: 'Generative AI', level: 85, category: 'ai' },
  { name: 'NLP', level: 85, category: 'ai' },
  { name: 'Computer Vision', level: 80, category: 'ai' },
  { name: 'Reinforcement Learning', level: 75, category: 'ai' },
  { name: 'Retrieval-Augmented Generation (RAG)', level: 80, category: 'ai' },
  { name: 'Prompt Engineering', level: 85, category: 'ai' },

  // Frameworks & Libraries
  { name: 'PyTorch', level: 90, category: 'frameworks' },
  { name: 'TensorFlow', level: 85, category: 'frameworks' },
  { name: 'Scikit-learn', level: 85, category: 'frameworks' },
  { name: 'Hugging Face', level: 85, category: 'frameworks' },
  { name: 'LangChain', level: 80, category: 'frameworks' },
  { name: 'OpenCV', level: 75, category: 'frameworks' },
  { name: 'NLTK', level: 75, category: 'frameworks' },
  { name: 'SpaCy', level: 70, category: 'frameworks' },

  // Tools
  { name: 'MLflow', level: 80, category: 'tools' },
  { name: 'FastAPI', level: 85, category: 'tools' },
  { name: 'Flask', level: 80, category: 'tools' },
  { name: 'Docker', level: 85, category: 'tools' },
  { name: 'Kubernetes', level: 75, category: 'tools' },
  { name: 'Git/GitHub', level: 90, category: 'tools' },
  { name: 'Jupyter', level: 85, category: 'tools' },
  { name: 'Streamlit', level: 85, category: 'tools' },
  { name: 'VSCode', level: 90, category: 'tools' },
  { name: 'Google Colab', level: 85, category: 'tools' },
  { name: 'Tableau', level: 75, category: 'tools' },
  { name: 'PowerBI', level: 65, category: 'tools' },

  // Databases
  { name: 'PostgreSQL', level: 75, category: 'databases' },
  { name: 'ChromaDB', level: 70, category: 'databases' },

  // Data Science & Analytics
  { name: 'Pandas', level: 90, category: 'tools' },
  { name: 'NumPy', level: 85, category: 'tools' },
  { name: 'Matplotlib', level: 80, category: 'tools' },
  { name: 'Seaborn', level: 75, category: 'tools' },
  { name: 'Plotly', level: 75, category: 'tools' },

  // DevOps & Cloud
  { name: 'AWS (S3, EC2, Lambda, SageMaker)', level: 70, category: 'tools' },
  { name: 'Heroku', level: 70, category: 'tools' },
  { name: 'GCP', level: 65, category: 'tools' },
  { name: 'CI/CD', level: 70, category: 'tools' },
];

const Skills = () => {
  const { theme, colorScheme } = useTheme();
  const [filter, setFilter] = useState('all');
  const [animatedSkills, setAnimatedSkills] = useState<string[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const categories = ['all', 'programming', 'ai', 'frameworks', 'tools', 'databases'];
  const categoryLabels = {
    all: 'All Skills',
    programming: 'Programming',
    ai: 'AI & ML',
    frameworks: 'Frameworks',
    tools: 'Tools',
    databases: 'Databases',
  };

  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              filteredSkills.forEach((skill, index) => {
                setTimeout(() => {
                  setAnimatedSkills(prev => [...prev, skill.name]);
                }, index * 100);
              });
            }, 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [filteredSkills]);

  const getProgressColor = () => {
    const colors = {
      blue: 'bg-blue-600',
      purple: 'bg-purple-600',
      green: 'bg-green-600',
      orange: 'bg-orange-600',
    };
    return colors[colorScheme as keyof typeof colors] || colors.blue;
  };

  const getFilterButtonClasses = (category: string) => {
    const isActive = filter === category;
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
    <section 
      ref={sectionRef}
      id="skills" 
      className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Skills & Expertise
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
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setFilter(category);
                setAnimatedSkills([]);
              }}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${getFilterButtonClasses(category)}`}
            >
              {categoryLabels[category as keyof typeof categoryLabels]}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className={`text-lg font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {skill.name}
                </h3>
                <span className={`text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {skill.level}%
                </span>
              </div>
              
              <div className={`w-full bg-gray-200 rounded-full h-3 ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
              }`}>
                <div
                  className={`h-3 rounded-full transition-all duration-1000 ease-out ${getProgressColor()}`}
                  style={{
                    width: animatedSkills.includes(skill.name) ? `${skill.level}%` : '0%',
                  }}
                />
              </div>
              
              <div className={`mt-2 text-xs ${
                theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
              }`}>
                {skill.category.charAt(0).toUpperCase() + skill.category.slice(1)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
