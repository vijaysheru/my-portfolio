import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

// === PROJECTS DATA (from your resume) ===
const projects = [
  {
    id: 'launchhire',
    title: 'LaunchHire – AI Job Application Platform',
    description:
      'Full-stack AI-powered job application platform with resume tailoring, job matching, mock interviews, and automated job applications using GPT-4, FAISS, ElevenLabs, and FastAPI.',
    longDescription:
      'Developed a full-stack AI-powered platform that combines resume tailoring, job matching, mock interviews, and automated job applications. Implemented autonomous AI agents for resume generation, interview simulation, job ranking, and personalized feedback—with real-time voice + video playback. Built a secure resume vault, integrated job scraping and semantic filtering, and engineered a job apply agent using Playwright for browser autofill and Twilio SMS fallback.',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c', // Replace with your own or a relevant image
    demoUrl: '', // Add your live link if deployed
    githubUrl: '', // Add your GitHub repo if public
    technologies: ['GPT-4', 'FastAPI', 'FAISS', 'LangChain', 'React', 'ElevenLabs', 'D-ID', 'Playwright', 'Twilio', 'ChromaDB'],
    category: 'ai',
    featured: true,
  },
  {
    id: 'fraud-detection',
    title: 'Credit Card Fraud Detection (PyTorch, XGBoost)',
    description:
      'Deep learning pipeline for detecting fraudulent credit card transactions with high precision, integrating ensemble models and interpretability tools.',
    longDescription:
      'Developed a modular PyTorch pipeline to detect fraudulent credit card transactions, boosting accuracy with XGBoost ensembles and reinforcement learning threshold tuning. Achieved AUC 0.96 and Precision 0.88. Reduced false positives by 22% using SHAP analysis and engineered reproducible tensor workflows.',
    imageUrl: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73', // Replace with your own
    demoUrl: '', // Add live demo if any
    githubUrl: '', // Add repo if available
    technologies: ['PyTorch', 'XGBoost', 'SHAP', 'Ensemble Learning', 'Python'],
    category: 'ai',
    featured: false,
  },
  {
    id: 'art-vision-transfer',
    title: 'Art Vision Transfer (Neural Style Transfer)',
    description:
      'Real-time Neural Style Transfer system with deep learning and edge-optimized MobileNetV2 for live artistic image transformation.',
    longDescription:
      'Built a neural style transfer pipeline replacing VGG19 with MobileNetV2 for faster inference, optimized for edge devices. Developed a Flask + OpenCV app with live camera previews and fine-tuned style/content loss. Achieved high-quality style preservation and user interactivity.',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', // Replace as needed
    demoUrl: '', // Add live demo if any
    githubUrl: '', // Add repo if available
    technologies: ['PyTorch', 'MobileNetV2', 'Flask', 'OpenCV', 'Deep Learning'],
    category: 'ai',
    featured: false,
  },
  {
    id: 'ai-response-humanization',
    title: 'AI Response & Humanization System',
    description:
      'Multi-LLM response engine with prompt-tuned rewriting, humanization pipeline, and real-time AI detection/classification.',
    longDescription:
      'Built a multi-LLM response engine aggregating outputs from Mistral-7B and Falcon-7B via Hugging Face APIs, with dual-layer Sapling API-based AI detection. Developed a prompt-tuned rewriting system for humanization (formal/conversational/narrative) and an interactive Streamlit UI with dynamic flow controls and tone-aware rewriting.',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6', // Replace as needed
    demoUrl: '', // Add demo if public
    githubUrl: '', // Add repo if public
    technologies: ['HuggingFace', 'Mistral-7B', 'Falcon-7B', 'Sapling API', 'Streamlit', 'Python'],
    category: 'ai',
    featured: false,
  },
  {
    id: 'cold-email-generator',
    title: 'Cold Email Generator with Prompt Chaining',
    description:
      'AI-powered cold email system using LangChain prompt chaining and persona injection for personalized outreach and sales.',
    longDescription:
      'Engineered an AI-driven cold email generator using LangChain’s prompt chaining and persona injection, supporting context-aware templates and multi-turn input. Deployed as a Streamlit + FastAPI web app, with real-time generation and export for diverse outreach use cases.',
    imageUrl: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5', // Replace as needed
    demoUrl: '', // Add demo if any
    githubUrl: '', // Add repo if any
    technologies: ['LangChain', 'FastAPI', 'Streamlit', 'HuggingFace', 'Python'],
    category: 'ai',
    featured: false,
  },
  {
    id: 'mythos-krishna',
    title: 'MythOS – Krishna LLM Agent',
    description:
      'Spiritual chatbot powered by RAG, ChromaDB, and LangChain, enabling context-rich Q&A and voice interaction with Lord Krishna.',
    longDescription:
      'Built a RAG-based Krishna chatbot with ChromaDB and LangChain for contextual Q&A using Bhagavad Gita content, PDF/CSV upload, and natural voice with Coqui TTS. Launched as a Streamlit web app for personalized, immersive spiritual conversation.',
    imageUrl: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca', // Replace as needed
    demoUrl: '', // Add demo if any
    githubUrl: '', // Add repo if any
    technologies: ['RAG', 'ChromaDB', 'LangChain', 'Streamlit', 'Coqui TTS', 'Python'],
    category: 'ai',
    featured: false,
  },
];

const Projects = () => {
  const { theme, colorScheme } = useTheme();
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const categories = ['all', 'ai', 'web', 'data'];
  const categoryLabels = {
    all: 'All Projects',
    ai: 'AI & ML',
    web: 'Web Development',
    data: 'Data Science',
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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

  const getLinkButtonClasses = () => {
    const colors = {
      blue: 'bg-blue-600 hover:bg-blue-700',
      purple: 'bg-purple-600 hover:bg-purple-700',
      green: 'bg-green-600 hover:bg-green-700',
      orange: 'bg-orange-600 hover:bg-orange-700',
    };
    return colors[colorScheme as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="projects" className={`py-20 ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Featured Projects
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
            A showcase of my recent work in AI, web development, and data science
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 ${getFilterButtonClasses(category)}`}
            >
              <Filter size={16} />
              <span>{categoryLabels[category as keyof typeof categoryLabels]}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                {project.featured && (
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                    colorScheme === 'blue' ? 'bg-blue-600' :
                    colorScheme === 'purple' ? 'bg-purple-600' :
                    colorScheme === 'green' ? 'bg-green-600' :
                    'bg-orange-600'
                  } text-white`}>
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`text-sm mb-4 line-clamp-3 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {selectedProject === project.id 
                    ? project.longDescription 
                    : project.description
                  }
                </p>

                <button
                  onClick={() => setSelectedProject(
                    selectedProject === project.id ? null : project.id
                  )}
                  className={`text-sm font-medium mb-4 ${
                    colorScheme === 'blue' ? 'text-blue-600 hover:text-blue-700' :
                    colorScheme === 'purple' ? 'text-purple-600 hover:text-purple-700' :
                    colorScheme === 'green' ? 'text-green-600 hover:text-green-700' :
                    'text-orange-600 hover:text-orange-700'
                  } transition-colors duration-300`}
                >
                  {selectedProject === project.id ? 'Show Less' : 'Read More'}
                </button>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        theme === 'dark' 
                          ? 'bg-gray-800 text-gray-300' 
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 ${getLinkButtonClasses()} text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2`}
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        project.demoUrl ? 'w-auto px-4' : 'flex-1'
                      } border-2 py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                        theme === 'dark' 
                          ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
                          : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Github size={16} />
                      {!project.demoUrl && <span>View Code</span>}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
