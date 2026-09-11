export const NAV_LINKS = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Profiles',   href: '#profiles' },
  { label: 'Contact',    href: '#contact' },
]

export const PROJECTS = [
  {
    id: 1,
    date: '2K25',
    category: 'Desktop Application · Electron',
    title: 'MC Carrier Extractor',
    description:
      'A desktop application (Electron + React) that scrapes FMCSA SAFER carrier data across MC number ranges to generate qualified dispatch leads - worker-pool concurrency, adaptive backoff, CSV export, and a custom "Dispatch Console" design system. Packaged as a protected commercial Windows tool.',
    tags: ['Electron', 'React', 'Node.js', 'Worker Threads', 'Web Scraping', 'CSV', 'electron-builder'],
    liveUrl: null,
    backendUrl: null,
    githubUrl: null,
    isPrivate: true,
    isPropriety: true,
  },
  {
    id: 2,
    date: 'DEC-2K24',
    category: 'E-Commerce Platform',
    title: 'Luxe Bags',
    description:
      'A full-stack MERN e-commerce application with Google OAuth login, JWT authentication, Cloudinary media management, and MongoDB Atlas - separate client/server architecture deployed independently.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary', 'Google OAuth'],
    liveUrl: 'https://e-commerce-full-stack-lime.vercel.app/',
    backendUrl: 'https://e-commerce-full-stack-production-3182.up.railway.app',
    githubUrl: null,
    isPrivate: true,
  },
  {
    id: 3,
    date: 'AUG-2K26',
    category: 'Cloud Security / Full-Stack',
    title: 'Encrypted Cloud Storage',
    description:
      'A web-based encrypted cloud storage platform built with the MERN stack, focused on secure file upload/storage architecture, deployed as a full production app.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Encryption', 'File Upload'],
    liveUrl: 'https://final-year-project-three-mu.vercel.app/',
    backendUrl: 'https://finalyearproject-production-8ccd.up.railway.app',
    githubUrl: null,
    isPrivate: true,
    isFYP: true,
  },
  {
    id: 4,
    date: 'SEP-2K26',
    category: 'Frontend / 3D Web',
    title: 'This Portfolio',
    description:
      'This site - Three.js particle hero, GSAP-driven scroll motion, Tailwind CSS theming, and serverless contact form. Built and deployed with Vercel.',
    tags: ['React', 'Three.js', 'GSAP', 'Tailwind CSS', 'Vite', 'Vercel'],
    liveUrl: null,
    backendUrl: null,
    githubUrl: 'https://github.com/SarmadShafiq123/Sarmad-Portfolio',
    isPrivate: false,
  },
]

export const SKILLS = [
  { name: 'C++',              category: 'Languages' },
  { name: 'JavaScript',       category: 'Languages' },
  { name: 'React.js',         category: 'Web' },
  { name: 'Node.js',          category: 'Web' },
  { name: 'Express.js',       category: 'Web' },
  { name: 'Tailwind CSS',     category: 'Web' },
  { name: 'Electron.js',      category: 'Desktop' },
  { name: 'electron-builder', category: 'Desktop' },
  { name: 'MongoDB',          category: 'Databases' },
  { name: 'MongoDB Atlas',    category: 'Databases' },
  { name: 'Git',              category: 'Tools' },
  { name: 'GitHub',           category: 'Tools' },
  { name: 'Vercel',           category: 'Tools' },
  { name: 'Railway',          category: 'Tools' },
  { name: 'Cloudinary',       category: 'Tools' },
  { name: 'Postman',          category: 'Tools' },
  { name: 'Kiro',             category: 'Tools' },
  { name: 'Antigravity',      category: 'Tools' },
  { name: 'VS Code',          category: 'Tools' },
]

export const SKILL_CATEGORIES = ['All', 'Languages', 'Web', 'Desktop', 'Databases', 'Tools']

export const PROFILES = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'sarmad-shafiq',
    url: 'https://linkedin.com/in/sarmad-shafiq',
    description: 'Professional network, work history & endorsements.',
    icon: 'linkedin',
  },
  {
    id: 'github',
    label: 'GitHub',
    handle: '@SarmadShafiq123',
    url: 'https://github.com/SarmadShafiq123',
    description: 'Code repos, projects, and open-source contributions.',
    icon: 'github',
  },
]

export const EXPERIENCE = [
  {
    id: '01',
    role: 'Independent Full-Stack & Desktop App Developer',
    company: 'Self-employed',
    period: 'Dec 2024 – Present',
    bullets: [
      'Design and ship full MERN-stack products end-to-end: architecture, backend APIs, frontend, deployment.',
      'Build and package cross-functional Electron desktop applications (data scraping/automation tools, business utilities) alongside standard web products.',
    ],
  },
]
