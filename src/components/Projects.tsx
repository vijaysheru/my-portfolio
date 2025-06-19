import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const projects = [
  {
    id: 'launchhire',
    title: 'LaunchHire – AI Job Application Platform',
    description:
      'Full-stack AI-powered platform for resume tailoring, job matching, and avatar-based mock interviews using GPT-4, FAISS, ElevenLabs, and FastAPI.',
    longDescription:
      'Built a full-stack AI-powered job platform with GPT-4, FAISS, and LangChain. Integrated resume tailoring, job scraping, interview simulations, and smart job applications. Added voice-video feedback using ElevenLabs + D-ID, and a Playwright-based autofill bot with Twilio fallback.',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    demoUrl: '', // Add live demo link later
    githubUrl: '',
    technologies: ['GPT-4', 'FastAPI', 'FAISS', 'LangChain', 'React', 'ElevenLabs', 'D-ID', 'Playwright', 'Twilio'],
    featured: true,
  },
  {
    id: 'fraud-detection',
    title: 'Credit Card Fraud Detection',
    description:
      'PyTorch + XGBoost pipeline to detect credit card fraud with 0.96 AUC using SHAP analysis and ensemble learning.',
    longDescription:
      'Built a deep learning pipeline using PyTorch with XGBoost ensemble and RL-based threshold tuning. Achieved AUC 0.96, reduced false positives by 22%, and improved explainability with SHAP-based feature impact insights.',
    imageUrl: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73',
    demoUrl: '',
    githubUrl: '',
    technologies: ['PyTorch', 'XGBoost', 'SHAP', 'Python'],
    featured: false,
  },
  {
    id: 'art-style-transfer',
    title: 'Art Vision Transfer (Style Transfer)',
    description:
      'Real-time style transfer with MobileNetV2 and Flask + OpenCV preview for edge deployment.',
    longDescription:
      'Implemented neural style transfer with MobileNetV2 replacing VGG19 for lightweight performance. Built a Flask + OpenCV app for live artistic image transformation. Optimized content/style loss for better visual preservation.',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    demoUrl: '',
    githubUrl: '',
    technologies: ['PyTorch', 'MobileNetV2', 'Flask', 'OpenCV'],
    featured: false,
  },
  {
    id: 'ai-humanizer',
    title: 'AI Response Humanization System',
    description:
      'Multi-LLM engine with prompt rewriting, human tone transformation, and AI detection evasion.',
    longDescription:
      'Built with Mistral-7B, Falcon-7B, Hugging Face APIs, and Sapling detection layers. Supports humanized rewriting (formal, conversational, narrative) in real time with scoring logic and load balancing.',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    demoUrl: '',
    githubUrl: '',
    technologies: ['Mistral-7B', 'Falcon-7B', 'Streamlit', 'HuggingFace', 'Python'],
    featured: false,
  },
  {
    id: 'cold-email-gen',
    title: 'Cold Email Generator with LangChain',
    description:
      'AI-powered outreach email generator using LangChain, persona injection, and FastAPI.',
    longDescription:
      'Built with LangChain’s prompt chaining, Hugging Face LLMs, and FastAPI backend. Enabled personalized tone, modular templates, and deployed using Streamlit UI with export features.',
    imageUrl: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5',
    demoUrl: '',
    githubUrl: '',
    technologies: ['LangChain', 'FastAPI', 'Streamlit', 'Python'],
    featured: false,
  },
  {
    id: 'mythos-krishna',
    title: 'MythOS – Krishna LLM Agent',
    description:
      'RAG-based spiritual chatbot using ChromaDB, LangChain, and Coqui TTS for voice Q&A.',
    longDescription:
      'Built a spiritual AI chatbot with ChromaDB + LangChain vector search using Bhagavad Gita. Supports user document upload, contextual memory, and real-time voice interaction via Coqui TTS.',
    imageUrl: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
    demoUrl: '',
    githubUrl: '',
    technologies: ['RAG', 'LangChain', 'ChromaDB', 'Coqui TTS', 'Streamlit'],
    featured: false,
  },
];

const Projects = () => {
  const { theme, colorScheme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

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
    <section id="projects" className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            AI/ML Projects
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r ${
            colorScheme === 'blue' ? 'from-blue-600 to-blue-700' :
            colorScheme === 'purple' ? 'from-purple-600 to-purple-700' :
            colorScheme === 'green' ? 'from-green-600 to-green-700' :
            'from-orange-600 to-orange-700'
          } mx-auto mb-8`} />
          <p className={`text-lg max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            A showcase of my work in applied AI, LLMs, and autonomous intelligent systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
              }`}
            >
              {/* Image */}
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

              {/* Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>

                <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {selectedProject === project.id ? project.longDescription : project.description}
                </p>

                <button
                  onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                  className={`text-sm font-medium mb-4 ${
                    colorScheme === 'blue' ? 'text-blue-600 hover:text-blue-700' :
                    colorScheme === 'purple' ? 'text-purple-600 hover:text-purple-700' :
                    colorScheme === 'green' ? 'text-green-600 hover:text-green-700' :
                    'text-orange-600 hover:text-orange-700'
                  }`}
                >
                  {selectedProject === project.id ? 'Show Less' : 'Read More'}
                </button>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className={`px-3 py-1 text-xs font-medium rounded-full ${
                      theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex space-x-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${getLinkButtonClasses()} text-white px-4 py-2 rounded-lg font-medium flex items-center justify-center space-x-2`}
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
                      className={`border-2 py-2 px-4 rounded-lg font-medium flex items-center space-x-2 ${
                        theme === 'dark' ? 'border-gray-600 text-gray-300 hover:bg-gray-800' :
                        'border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Github size={16} />
                      <span>View Code</span>
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
