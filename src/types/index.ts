export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  category: 'ai' | 'web' | 'mobile' | 'data';
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: 'programming' | 'frameworks' | 'ai' | 'tools' | 'databases';
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  gpa?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  url?: string;
}

export interface Contact {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  twitter?: string;
}