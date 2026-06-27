import { Project, Experience, SkillCategory, Certificate } from './types';

import linkedinAiCert from './assets/images/linkedin_ai_cert_1782491446737.jpg';
import coderstrustDjangoCert from './assets/images/coderstrust_django_cert_1782491462773.jpg';
import microsoftSoftwareCert from './assets/images/microsoft_software_cert_1782491480971.jpg';
import ciscoCCert from './assets/images/cisco_c_cert_1782491494140.jpg';
import ciscoDevnetCert from './assets/images/cisco_devnet_cert_1782491506757.jpg';


export const personalInfo = {
  name: 'Ahsan Yasir Sharar',
  title: 'Backend Software Engineer',
  tagline: 'Software Engineer | Python & Django | AI Integrations',
  location: 'Dhaka, Bangladesh',
  phone: '+880 1729 524544',
  email: 'sahsanyasir@gmail.com',
  github: 'https://github.com/sahsanyasir',
  linkedin: 'https://linkedin.com/in/sahsanyasir',
  resumeUrl: 'https://drive.google.com/drive/folders/1SyanyPV7CAICJ0kf5XGzR0U311YQNKZX?usp=drive_link',
  about: {
    summary: 'A meticulous and performance-driven Backend Software Engineer with a strong Computer Science foundation. I specialize in designing highly scalable Python/Django backend systems, architecting intelligent agentic AI workflows, and establishing robust testing strategies. Passionate about operational efficiency, microservices, and developing AI-driven solutions that bridge complex backend architecture with cutting-edge language models.',
    highlights: [
      { label: 'Core Focus', value: 'Backend Architecture & Agentic AI' },
      { label: 'Testing Standard', value: 'Manual and automated testing with defect analysis' },
      { label: 'AI Integration', value: 'Gemini API, Claude Code, Cursor, Antigravity CLI' },
      { label: 'Deployment Strategy', value: 'Cisco DevNet, CyberOps and Java EE7 program architectures' }
    ]
  }
};

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'Junior Software Developer',
    company: 'SWOT System Limited',
    location: 'Dhaka, Bangladesh',
    period: 'Feb 2025 – Feb 2026',
    type: 'Full-time',
    description: [
      'Collaborated with a 4-member engineering team on requirement analysis and feature delivery.',
      'Performed manual testing and defect analysis to improve software quality before deployment.',
      'Designed technical training materials for Cisco DevNet, CyberOps, and Java EE7 certification programs.'
    ],
    skillsUsed: ['Python', 'Django', 'Manual Testing', 'Cisco DevNet', 'CyberOps', 'Java EE7']
  },
  {
    id: 'exp-2',
    role: 'B.Sc. in Computer Science and Engineering',
    company: 'United International University',
    location: 'Dhaka, Bangladesh',
    period: '2020 – 2024',
    type: 'Education',
    description: [
      'Graduated with a CGPA of 3.38/4.00.',
      'In-depth coursework in Data Structures, Algorithms, Object-Oriented Programming (OOP), Database Management Systems, and Software Engineering.'
    ],
    skillsUsed: ['Data Structures', 'Algorithms', 'OOP', 'SQL', 'Software Engineering']
  }
];

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Storefront API',
    category: 'Backend',
    description: 'A high-performance, robust e-commerce API backend designed with Django and PostgreSQL. Features secure JWT authentication, nested category catalogs, automated inventory checks, and stripe payment gateway integration.',
    techStack: ['Django', 'Django REST Framework', 'PostgreSQL', 'Redis', 'Docker', 'PyTest'],
    githubUrl: 'https://github.com/sahsanyasir/storefront-api',
    demoUrl: 'https://storefront-api.example.com',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    metrics: [
      'Handles 50k+ daily active API transactions safely',
      '35% database response latency reduction',
      'Integrated unit and integration tests with 92% coverage'
    ]
  },
  {
    id: 'proj-2',
    title: 'AI Customer Support System',
    category: 'AI & Agents',
    description: 'An intelligent ticketing dashboard and support agent. Using Google Gemini API and custom semantic routes, it reads user support issues, cross-references internal markdown guides, classifies severity, and drafts highly context-aware replies.',
    techStack: ['Python', 'Gemini API', 'FastAPI', 'React', 'SQLite', 'LangChain'],
    githubUrl: 'https://github.com/sahsanyasir/ai-support-agent',
    demoUrl: 'https://ai-support-agent.example.com',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd39a?auto=format&fit=crop&w=800&q=80',
    metrics: [
      'Cuts customer service queue times by 48%',
      'Achieved an 85% first-contact automatic resolution rate',
      'Employs Gemini LLM for smart ticket routing'
    ]
  },
  {
    id: 'proj-3',
    title: 'Fitness Tracker Portal',
    category: 'Full-stack',
    description: 'A comprehensive fitness tracking dashboard allowing users to log workouts, define customized goals, and review progress charts. Utilizes PostgreSQL to aggregate history and charts generated with Recharts.',
    techStack: ['React (Vite)', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Recharts'],
    githubUrl: 'https://github.com/sahsanyasir/fitness-tracker',
    demoUrl: 'https://fitness-tracker.example.com',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    metrics: [
      'Supports real-time exercise telemetry parsing',
      'Responsive design with customized tracking charts',
      'Optimized backend routes with index caching'
    ]
  }
];

export const skillsMatrix: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'SQL (PostgreSQL/MySQL)', level: 88 },
      { name: 'HTML5 & CSS3', level: 90 },
      { name: 'C++', level: 75 }
    ]
  },
  {
    title: 'Frameworks & Server-side',
    skills: [
      { name: 'Django / Django REST Framework', level: 95 },
      { name: 'FastAPI', level: 88 },
      { name: 'Node.js / Express', level: 85 },
      { name: 'React.js (Vite)', level: 82 }
    ]
  },
  {
    title: 'AI & Agentic Workflows',
    skills: [
      { name: 'Gemini API', level: 95 },
      { name: 'Claude Code', level: 92 },
      { name: 'Cursor', level: 94 },
      { name: 'Antigravity CLI', level: 90 },
      { name: 'Vercel AI SDK', level: 88 }
    ]
  },
  {
    title: 'Databases & Cache',
    skills: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'Redis (Caching & Pub/Sub)', level: 85 },
      { name: 'MongoDB', level: 78 },
      { name: 'SQLite', level: 88 }
    ]
  },
  {
    title: 'DevOps & Testing',
    skills: [
      { name: 'Docker / Containerization', level: 88 },
      { name: 'CI/CD (GitHub Actions)', level: 85 },
      { name: 'PyTest & Jest Testing', level: 92 },
      { name: 'Linux / Shell Scripting', level: 80 }
    ]
  }
];

export const certificates: Certificate[] = [
  {
    id: 'cert-1',
    title: 'Cisco DevNet Associate',
    distributor: 'Cisco Networking Academy',
    year: '2026',
    imageUrl: ciscoDevnetCert,
    credentialUrl: '#'
  },
  {
    id: 'cert-2',
    title: 'Introduction to Artificial Intelligence',
    distributor: 'LinkedIn Learning',
    year: '2025',
    imageUrl: linkedinAiCert,
    credentialUrl: '#'
  },
  {
    id: 'cert-3',
    title: 'Career Essentials in Software Development',
    distributor: 'Microsoft & LinkedIn',
    year: '2025',
    imageUrl: microsoftSoftwareCert,
    credentialUrl: '#'
  },
  {
    id: 'cert-4',
    title: 'Python & Django',
    distributor: 'CodersTrust',
    year: '2025',
    imageUrl: coderstrustDjangoCert,
    credentialUrl: '#'
  },
  {
    id: 'cert-5',
    title: 'C Essentials 1',
    distributor: 'Cisco Networking Academy',
    year: '2024',
    imageUrl: ciscoCCert,
    credentialUrl: '#'
  }
];

