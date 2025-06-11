import { Project, Skill, Experience, Education, Contact, Certification } from '../types';

export const personalInfo = {
  name: "Vijay Sheru",
  title: "AI Engineer & Full Stack Developer",
  subtitle: "Building intelligent solutions with cutting-edge technology",
  bio: "AI Engineer with a Master’s in Artificial Intelligence from the University of North Texas and proven industry experience at Infosys. Specialized in LLMs, NLP, and MLOps, with a track record of delivering GPT-powered platforms, AI agents, and robust backend systems. Passionate about building practical, scalable AI products that solve real business problems.",
  email: "vijaysherr222@gmail.com",
  resumeUrl: "/resume.pdf"
};

// --- SKILLS (including certified/endorsed skills) ---
export const skills: Skill[] = [
  // Programming Languages
  { name: "Python", level: 95, category: "programming" },
  { name: "Java", level: 90, category: "programming" },
  { name: "SQL", level: 80, category: "programming" },
  { name: "Bash", level: 70, category: "programming" },

  // AI/ML
  { name: "Machine Learning", level: 92, category: "ai" }, // Certified
  { name: "Deep Learning", level: 90, category: "ai" },    // Certified
  { name: "Supervised/Unsupervised Learning", level: 90, category: "ai" },
  { name: "Large Language Models (LLMs)", level: 90, category: "ai" },
  { name: "Transformers", level: 85, category: "ai" },
  { name: "Generative AI", level: 85, category: "ai" },
  { name: "NLP", level: 85, category: "ai" },
  { name: "Computer Vision", level: 80, category: "ai" },
  { name: "Reinforcement Learning", level: 75, category: "ai" },
  { name: "Retrieval-Augmented Generation (RAG)", level: 80, category: "ai" },
  { name: "Prompt Engineering", level: 85, category: "ai" },

  // Frameworks & Libraries
  { name: "PyTorch", level: 90, category: "frameworks" },       // Certified
  { name: "TensorFlow", level: 85, category: "frameworks" },    // Certified
  { name: "Scikit-learn", level: 85, category: "frameworks" },
  { name: "Hugging Face", level: 85, category: "frameworks" },
  { name: "LangChain", level: 80, category: "frameworks" },
  { name: "OpenCV", level: 75, category: "frameworks" },
  { name: "NLTK", level: 75, category: "frameworks" },
  { name: "SpaCy", level: 70, category: "frameworks" },

  // Tools
  { name: "MLflow", level: 80, category: "tools" },
  { name: "FastAPI", level: 85, category: "tools" },
  { name: "Flask", level: 80, category: "tools" },
  { name: "Docker", level: 85, category: "tools" },             // Certified (AWS/Infosys)
  { name: "Kubernetes", level: 75, category: "tools" },
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Jupyter", level: 85, category: "tools" },
  { name: "Streamlit", level: 85, category: "tools" },
  { name: "VSCode", level: 90, category: "tools" },
  { name: "Google Colab", level: 85, category: "tools" },
  { name: "Tableau", level: 75, category: "tools" },
  { name: "PowerBI", level: 65, category: "tools" },

  // Databases
  { name: "PostgreSQL", level: 75, category: "databases" },
  { name: "ChromaDB", level: 70, category: "databases" },

  // Data Science & Analytics
  { name: "Pandas", level: 90, category: "tools" },
  { name: "NumPy", level: 85, category: "tools" },
  { name: "Matplotlib", level: 80, category: "tools" },
  { name: "Seaborn", level: 75, category: "tools" },
  { name: "Plotly", level: 75, category: "tools" },

  // DevOps & Cloud
  { name: "AWS (S3, EC2, Lambda, SageMaker)", level: 70, category: "tools" }, // Certified
  { name: "Heroku", level: 70, category: "tools" },
  { name: "GCP", level: 65, category: "tools" },
  { name: "CI/CD", level: 70, category: "tools" },                            // Certified (Infosys)
];

// --- PROJECTS ---
export const projects: Project[] = [
  {
    id: 'launchhire',
    title: 'LaunchHire – AI Job Application Platform',
    description: 'AI-powered job platform: resume tailoring, job matching, mock interviews, automated applications using GPT-4, FAISS, ElevenLabs, FastAPI.',
    longDescription: 'Developed a full-stack AI-powered platform combining resume tailoring, job matching, mock interviews, and automated job applications. Features autonomous agents for resume generation, interview simulation, job ranking, and personalized feedback, plus a secure resume vault, semantic job filtering, and Playwright+Twilio autofill.',
    technologies: ['GPT-4', 'FastAPI', 'FAISS', 'LangChain', 'React', 'ElevenLabs', 'D-ID', 'Playwright', 'Twilio', 'ChromaDB'],
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    demoUrl: '',
    githubUrl: '',
    category: 'ai',
    featured: true,
  },
  {
    id: 'fraud-detection',
    title: 'Credit Card Fraud Detection (PyTorch, XGBoost)',
    description: 'Deep learning pipeline for detecting fraudulent credit card transactions with high precision.',
    longDescription: 'Developed a modular PyTorch pipeline for fraud detection, boosted accuracy with XGBoost ensembles, achieved AUC 0.96 and Precision 0.88, reduced false positives by 22% using SHAP analysis.',
    technologies: ['PyTorch', 'XGBoost', 'SHAP', 'Ensemble Learning', 'Python'],
    imageUrl: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73',
    demoUrl: '',
    githubUrl: '',
    category: 'ai',
    featured: false,
  },
  {
    id: 'art-vision-transfer',
    title: 'Art Vision Transfer (Neural Style Transfer)',
    description: 'Real-time Neural Style Transfer system using deep learning and MobileNetV2.',
    longDescription: 'Neural style transfer system with MobileNetV2 for edge devices, live camera preview via Flask+OpenCV, fine-tuned loss for artistic preservation.',
    technologies: ['PyTorch', 'MobileNetV2', 'Flask', 'OpenCV', 'Deep Learning'],
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    demoUrl: '',
    githubUrl: '',
    category: 'ai',
    featured: false,
  },
  {
    id: 'ai-response-humanization',
    title: 'AI Response & Humanization System',
    description: 'Multi-LLM response engine with prompt-tuned rewriting and AI detection.',
    longDescription: 'Multi-LLM engine using Hugging Face APIs, dual-layer Sapling detection, and a Streamlit UI for tone-aware rewriting and humanization.',
    technologies: ['HuggingFace', 'Mistral-7B', 'Falcon-7B', 'Sapling API', 'Streamlit', 'Python'],
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    demoUrl: '',
    githubUrl: '',
    category: 'ai',
    featured: false,
  },
  {
    id: 'cold-email-generator',
    title: 'Cold Email Generator with Prompt Chaining',
    description: 'AI-powered cold email system using LangChain prompt chaining and persona injection.',
    longDescription: 'AI-driven cold email generator using LangChain, Streamlit, and FastAPI for personalized sales/networking outreach.',
    technologies: ['LangChain', 'FastAPI', 'Streamlit', 'HuggingFace', 'Python'],
    imageUrl: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5',
    demoUrl: '',
    githubUrl: '',
    category: 'ai',
    featured: false,
  },
  {
    id: 'mythos-krishna',
    title: 'MythOS – Krishna LLM Agent',
    description: 'Spiritual chatbot powered by RAG, ChromaDB, and LangChain.',
    longDescription: 'Krishna LLM chatbot with RAG, ChromaDB, LangChain, PDF/CSV knowledge upload, and Coqui TTS-powered voice.',
    technologies: ['RAG', 'ChromaDB', 'LangChain', 'Streamlit', 'Coqui TTS', 'Python'],
    imageUrl: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
    demoUrl: '',
    githubUrl: '',
    category: 'ai',
    featured: false,
  },
];

// --- EXPERIENCE ---
export const experiences: Experience[] = [
  {
    id: 'infosys',
    title: 'Systems Engineer',
    company: 'Infosys',
    duration: 'Nov 2021 – Jul 2023',
    description: [
      "Designed and deployed scalable APIs with performance optimization, reducing server response time by 50%.",
      "Improved messaging and alerting systems, leading to a 40% increase in user engagement and a 25% boost in operational efficiency.",
      "Built RESTful backend infrastructure supporting analytics and predictive AI modules.",
      "Developed and maintained robust unit and integration test suites (JUnit, PyTest).",
      "Led Agile delivery: sprint planning, code reviews, daily standups, and demos for cross-functional teams.",
      "Drove experimentation and iterative development, increasing engineering throughput by 30% and reducing time-to-market by 25% for AI-enabling tools.",
      "Designed modular backend architectures for future intelligent automation features.",
      "Implemented CI/CD pipelines and containerized deployments using Docker.",
    ],
    technologies: [
      'Python', 'Java', 'REST API', 'JUnit', 'Docker', 'Agile', 'CI/CD', 'Microservices', 'Cloud', 'MLOps'
    ],
  },
];

// --- EDUCATION ---
export const education: Education[] = [
  {
    id: 'unt-masters',
    degree: "Master’s in Artificial Intelligence",
    institution: 'University of North Texas, Denton, TX',
    year: 'Aug 2023 – May 2025',
    gpa: '3.3',
  },
];

// --- CERTIFICATIONS (including skill credentials) ---
export const certifications: Certification[] = [
  {
    id: 'coursera-ml-specialization',
    name: 'Machine Learning Specialization',
    issuer: 'Coursera',
    year: '2024', // Adjust year to when you completed
    url: '', // Add link if you have a Coursera certificate URL
  },
  {
    id: 'coursera-mlops',
    name: 'Machine Learning Operations (MLOps)',
    issuer: 'Coursera',
    year: '2025', // Adjust year to when you completed
    url: '',
  },
  {
    id: 'aws-cloud-practitioner',
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2022', // Adjust year if needed
    url: '',
  },
  {
    id: 'infosys-java',
    name: 'Internal Java Developer',
    issuer: 'Infosys',
    year: '2022', // Adjust year if needed
    url: '',
  },
  {
    id: 'infosys-agile',
    name: 'Infosys Internal Agile Certification',
    issuer: 'Infosys',
    year: '2022', // Adjust year if needed
    url: '',
  },
];


// --- CONTACT ---
export const contact: Contact = {
  email: "vijaysherr222@gmail.com",
  phone: "+1 940-535-4790",
  location: "Denton, Texas, USA",
  github: "https://github.com/vijaysheru",
  linkedin: "https://linkedin.com/in/vijaysheru",
  twitter: "https://x.com/VijaySherr"
};
