export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
  images: string[];
  category: 'Backend' | 'AI & Agents' | 'Full-stack';
  metrics?: string[];
  projectVideoUrl?: string;
  featured?: boolean;       
  kaggleUrl?: string;       
}
export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Contract' | 'Internship' | 'Education';
  description: string[];
  skillsUsed: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; iconName?: string }[];
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Certificate {
  id: string;
  title: string;
  distributor: string;
  year: string;
  imageUrl: string;
  credentialUrl?: string;
}

