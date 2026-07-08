import { Project, Experience, SkillCategory, Certificate } from './types';

// Certificate images are loaded dynamically from the public/Certificates directory

export const personalInfo = {
  name: 'Ahsan Yasir Sharar',
  title: 'Backend Software Engineer',
  tagline: 'Software Engineer | Python & Django | AI Integrations',
  location: 'Dhaka, Bangladesh',
  phone: '+880 1729 524544',
  email: 'sahsanyasir@gmail.com',
  github: 'https://github.com/ays19',
  linkedin: 'https://www.linkedin.com/in/yasirsharar/',
  resumeUrl: 'https://drive.google.com/drive/folders/1SyanyPV7CAICJ0kf5XGzR0U311YQNKZX?usp=drive_link',
  about: {
    summary: 'A backend-focused Python developer with a Computer Science foundation. I build production-grade REST APIs with Django, integrate LLM-powered features using Gemini and Claude APIs, and implement automated testing pipelines. Passionate about writing clean, maintainable code and shipping reliable software.',
    highlights: [
      { label: 'Core Focus', value: 'Backend Architecture & Agentic AI' },
      { label: 'Testing Standard', value: 'Manual and automated testing with defect analysis' },
      { label: 'AI & Dev Tools', value: 'Gemini API, Antigravity CLI, Claude Code, Cursor'},
      { label: 'Deployment Strategy', value: 'Railway, Docker, GitHub Actions' }
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
      'Prepared technical documentation and designed training materials for Cisco DevNet, CyberOps, and Java EE7 certification programs.'
    ],
    skillsUsed: ['Python', 'Manual Testing', 'Cisco DevNet', 'Documentation', 'Git']
  }
];

export const education: Experience[] = [
  {
    id: 'edu-1',
    role: 'B.Sc. in Computer Science and Engineering',
    company: 'United International University',
    location: 'Dhaka, Bangladesh',
    period: '2020 – 2024',
    type: 'Education',
    description: [
      'Graduated with a CGPA of 3.38/4.00.',
      'In-depth coursework in Data Structures, Algorithms, Object-Oriented Programming (OOP), Database Management Systems, and Software Engineering.',
      'Awarded 1st Runner-up in Microprocessor and Microcontroller Project at UIU Project Show 2022.',
      'Received academic excellence scholarship multiple times throughout the undergraduate program.',
      'Thesis: Cultivating The Future: IoT-Based Plant Disease Detection — developed a CNN model for real-time plant disease detection achieving 92% validation accuracy, deployed on AWS with Raspberry Pi for hardware integration.'
    ],
    skillsUsed: ['Data Structures', 'Algorithms', 'OOP', 'SQL', 'Software Engineering', 'Software Testing & Quality Assurance', 'Machine Learning', 'TensorFlow']
  }
];

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Storefront — Production-Grade E-Commerce REST API',
    category: 'Backend',
    description: 'A high-performance, robust e-commerce API backend designed with Django and PostgreSQL. Features secure JWT authentication, nested category catalogs, UUID-based cart IDs, and atomic order transactions.',
    techStack: ['Django', 'Django REST Framework', 'PostgreSQL', 'Redis', 'Docker', 'PyTest'],
    githubUrl: 'https://github.com/ays19/storefront',
    demoUrl: 'https://sharar-prod.up.railway.app/store/',
    projectVideoUrl: 'https://www.youtube.com/watch?v=W3Roy7Ab0rI&t=18s',
    images: [
      import.meta.env.BASE_URL + 'Project/Storefront_ss/11.png',
      import.meta.env.BASE_URL + 'Project/Storefront_ss/12.png',
      import.meta.env.BASE_URL + 'Project/Storefront_ss/13.png',
      import.meta.env.BASE_URL + 'Project/Storefront_ss/14.png',
      import.meta.env.BASE_URL + 'Project/Storefront_ss/15.png',
      import.meta.env.BASE_URL + 'Project/Storefront_ss/16.png',
      import.meta.env.BASE_URL + 'Project/Storefront_ss/17.png',
      import.meta.env.BASE_URL + 'Project/Storefront_ss/18.png',
      import.meta.env.BASE_URL + 'Project/Storefront_ss/19.png',
      import.meta.env.BASE_URL + 'Project/Storefront_ss/20.png',
      import.meta.env.BASE_URL + 'Project/Storefront_ss/21.png',
      import.meta.env.BASE_URL + 'Project/Storefront_ss/22.png',
      import.meta.env.BASE_URL + 'Project/Storefront_ss/23.png',
      import.meta.env.BASE_URL + 'Project/Storefront_ss/24.png',
      import.meta.env.BASE_URL + 'Project/Storefront_ss/25.png',
      import.meta.env.BASE_URL + 'Project/Storefront_ss/26.png',
      import.meta.env.BASE_URL + 'Project/Storefront_ss/27.png',
      import.meta.env.BASE_URL + 'Project/Storefront_ss/28.png',
      import.meta.env.BASE_URL + 'Project/Storefront_ss/29.png',
      import.meta.env.BASE_URL + 'Project/Storefront_ss/30.png',
    ],
    metrics: [
      'Reduced database queries from 1,002 to 3 via ORM optimization',
      '35% database response latency reduction',
      'Integrated unit and integration tests with 92% coverage'
    ]
  },
  {
    id: 'proj-2',
    title: 'AI Customer Support System',
    category: 'AI & Agents',
    description: 'An intelligent ticketing dashboard and support agent. Using Google Gemini API and custom semantic routes, it reads user support issues, cross-references internal markdown guides, classifies severity, and drafts highly context-aware replies.',
    techStack: ['Express', 'Gemini API', 'Better-Auth', 'React', 'TypeScript', 'Vanilla CSS', 'PostgreSQL'],
    githubUrl: 'https://github.com/ays19/AI-Helpdesk---Ticketing-System',
    demoUrl: 'https://ai-powered-helpdesk-and-ticketing-system.up.railway.app/',
    projectVideoUrl: 'https://www.youtube.com/watch?v=rSMxxQLQCcU',
    images: [import.meta.env.BASE_URL + 'Project/Helpdesk/1.png',
      import.meta.env.BASE_URL + 'Project/Helpdesk/2.png',
      import.meta.env.BASE_URL + 'Project/Helpdesk/3.png',
      import.meta.env.BASE_URL + 'Project/Helpdesk/4.png',
      import.meta.env.BASE_URL + 'Project/Helpdesk/5.png',
      import.meta.env.BASE_URL + 'Project/Helpdesk/6.png',
      import.meta.env.BASE_URL + 'Project/Helpdesk/7.png',
      import.meta.env.BASE_URL + 'Project/Helpdesk/8.png',
      import.meta.env.BASE_URL + 'Project/Helpdesk/9.png',
      import.meta.env.BASE_URL + 'Project/Helpdesk/10.jpg',],
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
    githubUrl: 'https://github.com/ays19/FITNESS-TRACKER',
    demoUrl: '',
    projectVideoUrl: '',
    images: [import.meta.env.BASE_URL + 'Project/Fitness/1.png',
      import.meta.env.BASE_URL + 'Project/Fitness/2.png',
      import.meta.env.BASE_URL + 'Project/Fitness/3.png',],
    metrics: [
      'Supports real-time exercise telemetry parsing',
      'Responsive design with customized tracking charts',
      'Optimized backend routes with index caching'
    ]
  },
  {
    id: 'proj-4',
    title: 'E-Commerce Web',
    category: 'Full-stack',
    description: 'A Django-based e-commerce platform with user authentication, product catalog, cart management, and order processing built on Django\'s MVT architecture.',
    techStack: ['Python', 'Django', 'SQLite', 'HTML', 'CSS','Bootstrap'],
    githubUrl: 'https://github.com/ays19/E-Commerce-Project',
    demoUrl: '',
    projectVideoUrl: '',
    images: [import.meta.env.BASE_URL + 'ecommerce.png'],
    metrics: [
      'Built user registration, login, and profile management using Django\'s built-in auth system,',
      'Structured project with modular Django apps (product, user_account) and integrated Bootstrap frontend templates'
    ]
  },
  {
    id: 'proj-5',
    title: 'Authentication System',
    category: 'Backend',
    description: 'A Django-based custom authentication system implementing user registration, login, logout, and session management from scratch.',
    techStack: ['Python', 'Django', 'SQLite', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/ays19/AUTHENTICATION',
    demoUrl: '',
    projectVideoUrl: '',
    images: [import.meta.env.BASE_URL + 'authentication.png'],
    metrics: [
      'Implemented custom user registration and login flows using Django\'s auth framework',
      'Built session-based authentication with form validation and error handling',
      'Structured as a standalone reusable Django app'
    ]
  }
];

export const skillsMatrix: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python' },
      { name: 'JavaScript' },
      { name: 'SQL (PostgreSQL/MySQL)' },
      { name: 'HTML & CSS' },
      { name: 'C++' }
    ]
  },
  {
    title: 'Frameworks & Server-side',
    skills: [
      { name: 'Django' },
      { name: 'Django REST Framework' },
      { name: 'FastAPI' }
    ]
  },
  {
    title: 'AI & Agentic Workflows',
    skills: [
      { name: 'Gemini API' },
      { name: 'Claude Code' },
      { name: 'Cursor' },
      { name: 'Antigravity CLI' },
      { name: 'Vercel AI SDK' }
    ]
  },
  {
    title: 'Databases & Cache',
    skills: [
      { name: 'MySQL' },
      { name: 'Redis (Caching & Pub/Sub)' },
      { name: 'SQLite' }
    ]
  },
  {
    title: 'DevOps & Testing',
    skills: [
      { name: 'Docker / Containerization' },
      { name: 'CI/CD (GitHub Actions)' },
      { name: 'PyTest, Locust & End-to-End Playwright Testing' },
      { name: 'Linux / Shell Scripting' }
    ]
  }
];

export const certificates: Certificate[] = [
  {
    id: 'cert-1',
    title: 'AWS AI Practitioner Challenge',
    distributor: 'AWS + Udacity',
    year: '2026',
    imageUrl: 'Certificates/1.png',
    credentialUrl: '#'
  },
  {
    id: 'cert-2',
    title: 'Cisco DevNet Associate',
    distributor: 'Cisco Networking Academy',
    year: '2026',
    imageUrl: 'Certificates/2.png',
    credentialUrl: '#'
  },
  {
    id: 'cert-3',
    title: 'Python & Django',
    distributor: 'CodersTrust',
    year: '2025',
    imageUrl: 'Certificates/3.png',
    credentialUrl: '#'
  },
  {
    id: 'cert-4',
    title: '1st Runner-up in Microprocessor and Microcontroller Project',
    distributor: 'UIU Project-Show',
    year: '2022',
    imageUrl: 'Certificates/4.jpg',
    credentialUrl: '#'
  },
  {
    id: 'cert-5',
    title: 'AI for Career Development',
    distributor: 'CED Foundation',
    year: '2026',
    imageUrl: 'Certificates/5.png',
    credentialUrl: '#'
  },
  {
    id: 'cert-6',
    title: 'Career Essentials in Software Development',
    distributor: 'Microsoft & LinkedIn',
    year: '2025',
    imageUrl: 'Certificates/6.png',
    credentialUrl: '#'
  },
  {
    id: 'cert-7',
    title: 'Career Essentials in Generative AI',
    distributor: 'Microsoft & LinkedIn',
    year: '2025',
    imageUrl: 'Certificates/7.png',
    credentialUrl: '#'
  },
  {
    id: 'cert-8',
    title: 'Introduction to Artificial Intelligence',
    distributor: 'LinkedIn Learning',
    year: '2025',
    imageUrl: 'Certificates/8.png',
    credentialUrl: '#'
  },
  {
    id: 'cert-9',
    title: 'C Essentials 1',
    distributor: 'Cisco Networking Academy',
    year: '2025',
    imageUrl: 'Certificates/9.png',
    credentialUrl: '#'
  },
  {
    id: 'cert-10',
    title: 'Entrepreneurial Skills Assessment & Training',
    distributor: 'Nagorik Sheba Bangladesh',
    year: '2025',
    imageUrl: 'Certificates/10.jpg',
    credentialUrl: '#'
  },
  {
    id: 'cert-11',
    title: 'Engineering Summit',
    distributor: 'Youth for Better Future Society',
    year: '2023',
    imageUrl: 'Certificates/11.jpg',
    credentialUrl: '#'
  },
  {
    id: 'cert-12',
    title: 'Adobe Illustrator - Mastering the Fundamentals',
    distributor: 'Bosubrihi',
    year: '2024',
    imageUrl: 'Certificates/12.png',
    credentialUrl: '#'
  }
];

