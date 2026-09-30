export const RESUME_URL = '/resume/Hamsiny-C-Resume.pdf'; // replace the PDF in frontend/public/resume/

export const LINKS = {
  github: 'https://github.com/Hamsiny-C',
  linkedin: 'https://www.linkedin.com/in/hamsiny-c-9b03a2349',
  leetcode: 'https://leetcode.com/u/GEWCJhefXN/',
  email: 'hamsinyparimala2007@gmail.com',
  phone: '+91 88385 71642',
};

export const NAV = [['Home', '#hero'], ['About', '#about'], ['Experience', '#experience'], ['Projects', '#projects'], ['Skills', '#skills'], ['Contact', '#contact']];

export const STACK = ['Java', 'Spring Boot', 'React', 'MySQL', 'REST APIs', 'Docker', 'AWS', 'Git/GitHub'];

export const SKILLS = {
  Languages: ['Java', 'Python', 'C', 'SQL'],
  Backend: ['Spring', 'Spring Boot', 'Spring MVC', 'REST APIs', 'Spring Data JPA', 'Hibernate', 'Spring Security', 'JWT'],
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Web Design'],
  Database: ['MySQL', 'Oracle Database', 'SQLite', 'H2'],
  'DevOps & Cloud': ['Docker', 'AWS', 'EC2', 'ECR', 'S3', 'Git', 'GitHub', 'Vercel', 'Render'],
  Tools: ['Maven', 'Postman', 'Eclipse IDE', 'VS Code'],
  'Core Concepts': ['Object-Oriented Programming', 'REST APIs', 'Backend Development', 'Full Stack Development', 'Database Design', 'API Integration', 'Problem Solving'],
};

export const VOICE = {
  dev: "I built DevCareer OS as a platform for managing different parts of a developer's career journey. It includes authentication, DSA tracking, skills, projects, certifications, job applications and interview preparation. The backend is built with Java and Spring Boot, while React handles the frontend and MySQL stores the data.",
  hami: 'HamsiDevIntel Pro is a developer intelligence platform. It analyzes GitHub profiles, evaluates resumes for ATS readiness and gives career recommendations. I built the backend REST APIs with Java and Spring Boot, stored the data in MySQL, and built a responsive frontend with HTML, CSS and JavaScript.',
  trace: 'TraceForge is a change-aware incident analysis platform. The idea is to connect application incidents with recent code changes and analyze which changed files could be related to the incident. The platform combines deployment information, Git changes, application metrics and logs to provide file-level evidence and ranking.',
  e1: 'During this internship at BigSiBucks Innovation, I designed and developed a fully responsive Smart Booking App with HTML, CSS and JavaScript, refined the interface through debugging and cross-browser testing, and deployed it to production on Vercel.',
  e2: 'During this internship at Astonish InfoTech, I engineered the backend REST APIs for HamsiDevIntel Pro using Java and Spring Boot, integrated MySQL with secure authentication, built the frontend, and deployed it live on Render.',
  task: 'Task Manager Application is a backend-driven task management system built with Java and Spring Boot. It supports full CRUD operations through REST API endpoints, with MySQL for storage.',
  analytics: 'Digital Productivity and Internet Analytics System is a desktop productivity tracker built with Python, Tkinter and SQLite. It monitors internet usage and screen time, and produces analytics dashboards and automated reports using Matplotlib.',
};

export const EXPERIENCE = [
  { company: 'BigSiBucks Innovation Private Limited', role: 'Full Stack Development Intern', date: 'Dec 2025 — May 2026 · Chennai, Tamil Nadu', project: 'Smart Booking App',
    tech: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    desc: 'A fully responsive booking application that works across desktop and mobile devices.',
    contributions: ['Designed and developed the responsive Smart Booking App', 'Improved UI consistency and booking usability through debugging and layout refinement', 'Ran cross-browser testing', 'Deployed to production on Vercel'],
    live: 'https://smart-booking-app-jade.vercel.app', voice: 'e1' },
  { company: 'Astonish InfoTech Pvt. Ltd.', role: 'Full Stack Developer Intern', date: 'Jun 2026 — Jul 2026 · Trichy, Tamil Nadu', project: 'HamsiDevIntel Pro',
    tech: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'REST APIs'],
    desc: 'Developer intelligence platform for GitHub profile analysis, ATS resume evaluation and career recommendations.',
    contributions: ['Engineered backend REST APIs using Java and Spring Boot', 'Integrated MySQL with secure user authentication and role-based access control', 'Built responsive frontend interfaces with HTML, CSS and JavaScript', 'Tested and debugged manually before live deployment on Render'],
    github: 'https://github.com/Hamsiny-C/HamsiDevIntel-Pro-', live: 'https://hamsidevintel.onrender.com', voice: 'e2' },
];

export const PROJECTS = [
  { name: 'DevCareer OS', sub: 'Developer Career Management Platform',
    desc: 'A full-stack platform designed to help developers manage their career journey from one place.',
    problem: 'Career data is scattered across notes, spreadsheets and tabs. This keeps it in one secure place.',
    tech: ['Java', 'Spring Boot', 'React', 'MySQL', 'Spring Security', 'JWT', 'Docker', 'AWS'],
    features: ['User authentication', 'Developer profile', 'DSA tracking', 'Skills progress', 'Projects portfolio', 'Certifications', 'Job applications', 'Interview preparation', 'Secure JWT authentication', 'Docker and AWS deployment'],
    github: 'https://github.com/Hamsiny-C/DeveloperCareerPlatform', voice: 'dev' },
  { name: 'HamsiDevIntel Pro', sub: 'Developer Intelligence Platform',
    desc: 'A full-stack platform with modular REST APIs for GitHub profile analysis, ATS resume evaluation and career recommendations.',
    problem: 'Gives developers structured insight into how their GitHub profile and resume come across.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'REST APIs', 'Git', 'GitHub'],
    features: ['GitHub profile analysis', 'ATS resume evaluation', 'Career recommendations', 'Secure user authentication', 'Role-based access control', 'Relational MySQL schema'],
    github: 'https://github.com/Hamsiny-C/HamsiDevIntel-Pro-', live: 'https://hamsidevintel.onrender.com', voice: 'hami' },
  { name: 'TraceForge', sub: 'Change-Aware Application Performance & Incident Analysis Platform',
    desc: 'A software platform that connects application incidents with recent source-code changes and provides file-level evidence for investigation.',
    problem: 'When something breaks after a release, finding which change caused it is slow guesswork.',
    flow: ['Deployment', 'Git Commit', 'Changed Source Files', 'Metrics + Logs', 'Incident', 'Change Analysis', 'File-Level Evidence', 'File Ranking'],
    tech: ['Java', 'Spring Boot', 'React', 'MySQL', 'Spring Security', 'REST', 'WebSocket', 'Docker', 'AWS'],
    features: ['Application monitoring', 'Incident detection', 'Deployment tracking', 'Git change tracking', 'Changed-file analysis', 'Metrics and log analysis', 'File-level evidence', 'File scoring', 'Changed-file ranking', 'Incident explanation'],
    voice: 'trace' }, // no live link: not deployed
  { name: 'Task Manager Application', sub: 'Backend Task Management System · May 2025',
    desc: 'A backend-driven task management system built with object-oriented programming and Spring Boot best practices.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'REST APIs'],
    features: ['Full CRUD operations', 'RESTful API endpoints', 'MySQL database integration'], voice: 'task' },
  { name: 'Digital Productivity & Internet Analytics System', sub: 'Desktop Productivity Tracker · Jan 2025',
    desc: 'A desktop tracker that monitors internet usage and screen time, with analytics dashboards and automated reporting.',
    tech: ['Python', 'Tkinter', 'SQLite', 'Matplotlib'],
    features: ['Internet usage monitoring', 'Screen time tracking', 'Analytics dashboards', 'Automated reporting'], voice: 'analytics' },
];

export const CERTS = [
  ['Oracle Cloud Infrastructure Certified Foundations Associate', 'Oracle', 'Apr 2025'],
  ['Introduction to GitHub', 'Microsoft Learn', 'Jul 2025'],
  ['Python for Data Science', 'NPTEL', 'Jan 2025'],
  ['Model Context Protocol (MCP): Advanced Topics', '', ''],
  ['Learn Programming with Java - An Interactive Way', 'Infosys', '2026'],
  ['Java Programming for Beginners', 'Simplilearn SkillUP', '2025'],
  ['MongoDB Certification', 'MongoDB', '2026'],
]; // add a 4th item (url) to show a "View Certificate" link

export const ACHIEVEMENTS = [
  ['IEI Debugging Event', '2nd Place'], ['Smart India Hackathon (SIH)', 'Shortlisted for Internal Hackathon'], ['Smartathon 2026', 'Shortlisted, Round 2'],
  ['Adobe Hackathon', 'Selected for Round 2'], ['CodeChef', '2-Star Coder'], ['LeetCode', '50-Day Badge'], ['LeetCode', '100-Day Badge'],
  ['Unstop Tech Fair 2025', 'Software Development Intern'], ['ICSIE National Conference', 'Research Paper · Mar 2025'], ['Generative AI Workshop', 'Jun 2026'],
];
