// Portfolio Data Configuration for Sainath
// Edit this file to easily update your information, projects, skills, education, and links.

export const personalInfo = {
  name: "Sainath",
  preferredName: "Sainath",
  title: "Computer Science Undergraduate | Full-Stack & AI Enthusiast",
  roleTagline: "B.Tech CSE @ UVCE Bengaluru • Class of 2027",
  bio: "I'm a passionate Computer Science undergraduate with a strong foundation in Full-Stack Web Development, Artificial Intelligence, Data Structures & Algorithms, and Information Security. I love architecting robust, scalable software that solves meaningful real-world challenges.",
  avatar: "/profile.jpg", // Profile photo located in /public/profile.jpg
  resumeUrl: "/resume.pdf", // Direct link to your hosted resume PDF
  resumeDownloadName: "Sainath_Resume.pdf",
  email: "sainath4525@gmail.com",
  phone: "+91 7780668735",
  phoneRaw: "7780668735",
  location: "Bengaluru, Karnataka, India",
  college: "University of Visvesvaraya College of Engineering (UVCE), Bengaluru",
  cgpa: "8.72",
  socials: {
    github: "https://github.com/Sainath4525",
    linkedin: "https://www.linkedin.com/in/sainath-kumbar",
    email: "mailto:sainath4525@gmail.com",
    whatsapp: "https://wa.me/917780668735",
  },
  stats: [
    { label: "B.Tech CGPA", value: "8.72", detail: "UVCE Bengaluru" },
    { label: "Class XII (PCMB)", value: "95.33%", detail: "Shahu Maharaj PU College" },
    { label: "Class X (SSLC)", value: "88.16%", detail: "Sangolli Rayanna High School" },
    { label: "Core Skills", value: "15+", detail: "Full-Stack, AI & Systems" },
  ],
  languages: [
    { name: "English", level: "Professional Working", flag: "🇬🇧" },
    { name: "Kannada", level: "Native / Fluent", flag: "🇮🇳" },
    { name: "Telugu", level: "Native / Fluent", flag: "🇮🇳" },
    { name: "Hindi", level: "Fluent", flag: "🇮🇳" },
  ],
};

export const educationTimeline = [
  {
    institution: "University of Visvesvaraya College of Engineering (UVCE)",
    location: "Bengaluru, Karnataka",
    degree: "B.Tech in Computer Science and Engineering",
    duration: "2023 – 2027",
    score: "CGPA: 8.72",
    badge: "Current / Ongoing",
    highlights: [
      "Focused on Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, and AI.",
      "Actively developing end-to-end full-stack applications and AI-driven platforms.",
      "Maintained top-tier academic standing with 8.72 CGPA.",
    ],
  },
  {
    institution: "Shahu Maharaj PU College",
    location: "Bidar, Karnataka",
    degree: "Class XII (Pre-University Course - PCMB)",
    duration: "2021 – 2023",
    score: "95.33%",
    badge: "Distinction",
    highlights: [
      "Physics, Chemistry, Mathematics, Biology stream.",
      "Demonstrated academic excellence scoring 95.33% in board examinations.",
      "Built strong foundational analytical, mathematical, and problem-solving skills.",
    ],
  },
  {
    institution: "Sangolli Rayanna High School",
    location: "Bidar, Karnataka",
    degree: "Class X (SSLC / Secondary School)",
    duration: "Graduated 2021",
    score: "88.16%",
    badge: "First Class with Distinction",
    highlights: [
      "Secondary school education with high academic achievement (88.16%).",
      "Participated actively in mathematics, science olympiads, and school technical activities.",
    ],
  },
];

export const skillCategories = [
  {
    category: "Programming Languages",
    icon: "Code2",
    description: "Core languages for systems, algorithms, and applications",
    skills: [
      { name: "Java", level: "Advanced", icon: "Coffee", color: "from-amber-500 to-orange-600" },
      { name: "C", level: "Proficient", icon: "Cpu", color: "from-blue-600 to-indigo-700" },
      { name: "C++", level: "Proficient", icon: "Binary", color: "from-indigo-500 to-purple-600" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "FileCode", color: "from-yellow-400 to-amber-500" },
      { name: "Python", level: "Proficient", icon: "Terminal", color: "from-emerald-500 to-teal-600" },
    ],
  },
  {
    category: "Core Computer Science",
    icon: "BrainCircuit",
    description: "Foundational CS pillars & algorithmic theory",
    skills: [
      { name: "Data Structures & Algorithms (DSA)", level: "Advanced", icon: "Workflow", color: "from-violet-500 to-purple-700" },
      { name: "Object-Oriented Programming (OOPs)", level: "Advanced", icon: "Boxes", color: "from-cyan-500 to-blue-600" },
      { name: "Database Management Systems (DBMS)", level: "Advanced", icon: "Database", color: "from-teal-500 to-emerald-600" },
      { name: "Operating Systems (OS)", level: "Proficient", icon: "Server", color: "from-blue-500 to-indigo-600" },
      { name: "Computer Networks (CN)", level: "Proficient", icon: "Network", color: "from-fuchsia-500 to-pink-600" },
    ],
  },
  {
    category: "Web Development",
    icon: "Globe",
    description: "Modern full-stack web technologies & responsive UI",
    skills: [
      { name: "React.js", level: "Advanced", icon: "Atom", color: "from-cyan-400 to-blue-600" },
      { name: "Tailwind CSS", level: "Advanced", icon: "Sparkles", color: "from-teal-400 to-cyan-600" },
      { name: "HTML5 & CSS3", level: "Advanced", icon: "Layout", color: "from-orange-500 to-red-600" },
      { name: "JavaScript", level: "Advanced", icon: "FileCode", color: "from-yellow-400 to-amber-500" },
      { name: "Node.js", level: "Proficient", icon: "Server", color: "from-emerald-500 to-green-700" },
      { name: "Express.js", level: "Proficient", icon: "Zap", color: "from-gray-500 to-slate-700" },
      { name: "RESTful APIs", level: "Advanced", icon: "Repeat", color: "from-indigo-500 to-purple-600" },
    ],
  },
  {
    category: "Tools & Cloud",
    icon: "Wrench",
    description: "Developer workflows, cloud infrastructure, and toolchains",
    skills: [
      { name: "Git", level: "Advanced", icon: "GitBranch", color: "from-orange-500 to-amber-600" },
      { name: "GitHub", level: "Advanced", icon: "Github", color: "from-purple-500 to-slate-800" },
      { name: "VS Code", level: "Advanced", icon: "Code", color: "from-blue-500 to-indigo-600" },
      { name: "Jupyter Notebook", level: "Proficient", icon: "BookOpen", color: "from-orange-400 to-amber-600" },
      { name: "AWS (Amazon Web Services)", level: "Intermediate", icon: "Cloud", color: "from-amber-500 to-yellow-600" },
    ],
  },
  {
    category: "Databases & AI/ML",
    icon: "Database",
    description: "Data storage, AI APIs, and computer vision libraries",
    skills: [
      { name: "MongoDB Atlas", level: "Advanced", icon: "Database", color: "from-emerald-500 to-green-600" },
      { name: "MySQL", level: "Proficient", icon: "Table", color: "from-blue-600 to-cyan-700" },
      { name: "Google Gemini AI", level: "Proficient", icon: "Bot", color: "from-violet-500 to-indigo-600" },
      { name: "OpenCV", level: "Proficient", icon: "Eye", color: "from-red-500 to-rose-600" },
      { name: "NumPy", level: "Proficient", icon: "Calculator", color: "from-blue-400 to-indigo-500" },
    ],
  },
];

export const projects = [
  {
    id: "agrohire",
    title: "AgroHire",
    subtitle: "AI-Powered Farm Equipment Rental Platform",
    tagline: "Empowering farmers with smart machinery rental, geospatial discovery & Gemini AI recommendations",
    category: "Full-Stack & AI",
    badge: "Featured MERN Project",
    period: "2024",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "JWT Auth",
      "Google Gemini AI",
      "OpenWeather API",
      "Geospatial Search",
    ],
    description:
      "A full-scale MERN-based equipment rental marketplace built with secure JWT-authenticated REST APIs. It enables farmers to discover, book, and manage agricultural machinery via interactive location-based search and real-time availability tracking.",
    extendedDetails: [
      "Integrated a Google Gemini AI-driven recommendation engine that suggests optimal farm machinery based on crop type, soil conditions, field acreage, and weather forecasts.",
      "Engineered geospatial discovery using coordinates to match farmers with the nearest available equipment, drastically cutting transportation costs.",
      "Integrated OpenWeather API for real-time weather alerts and dynamic pricing algorithms during peak harvesting windows.",
      "Implemented role-based access control (Farmers, Equipment Owners, Admins) with secure JWT and encrypted payload exchange.",
      "Built with a responsive, multilingual user interface to guarantee high usability across regional agricultural communities.",
    ],
    metrics: [
      { label: "Architecture", value: "MERN Stack + Gemini AI" },
      { label: "Security", value: "JWT + Bcrypt Auth" },
      { label: "APIs", value: "RESTful + Weather + AI" },
      { label: "Design", value: "Mobile-First Glassmorphic" },
    ],
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    accentColor: "#10b981",
    githubUrl: "https://github.com/Sainath4525/Farm-Equipment-RentalSystem",
    liveUrl: "#interactive-demo",
    featured: true,
  },
  {
    id: "steganography-platform",
    title: "Multi-Modal Steganography Platform",
    subtitle: "Secure Multimedia Data Hiding System",
    tagline: "Military-grade AES-256 cryptographic embedding across Images, Text, Audio, and Video",
    category: "Security & Computer Vision",
    badge: "Cybersecurity & Research",
    period: "2024",
    techStack: [
      "Flask",
      "React.js",
      "OpenCV",
      "NumPy",
      "AES-256",
      "SHA-256",
      "JavaScript",
      "Python",
      "Cryptographic APIs",
    ],
    description:
      "A web-based multi-modal steganography platform with a scalable Flask REST API architecture, enabling secure data embedding and extraction across images, text, audio, and video formats with imperceptible alterations.",
    extendedDetails: [
      "Implemented AES-256 encryption with SHA-256 key derivation to encrypt confidential payloads prior to multimedia embedding.",
      "Engineered pseudo-random pixel and sample dispersion embedding seeded by secure user passwords to defend against statistical steganographic detection (Chi-Square & Histogram analysis).",
      "Validated imperceptibility and media fidelity using rigorous quantitative image quality metrics: Peak Signal-to-Noise Ratio (PSNR > 45dB), Structural Similarity Index (SSIM > 0.99), and Signal-to-Noise Ratio (SNR).",
      "Delivered a seamless React frontend communicating with high-performance OpenCV and NumPy processing pipelines via Flask endpoints.",
    ],
    metrics: [
      { label: "Encryption", value: "AES-256 + SHA-256" },
      { label: "Fidelity", value: "PSNR > 45dB, SSIM > 0.99" },
      { label: "Modalities", value: "Image, Text, Audio, Video" },
      { label: "Engine", value: "Flask + OpenCV + NumPy" },
    ],
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    accentColor: "#8b5cf6",
    githubUrl: "https://github.com/Sainath4525/Steganography",
    liveUrl: "#interactive-demo",
    featured: true,
  },
];

export const certifications = [
  {
    title: "AI Fundamentals",
    issuer: "IBM",
    category: "Artificial Intelligence",
    date: "2024",
    icon: "Bot",
    description: "Core machine learning principles, neural network fundamentals, generative AI foundations, and ethical AI development frameworks.",
    badgeColor: "from-blue-500 to-indigo-600",
    verified: true,
  },
  {
    title: "AWS and Technical Skills",
    issuer: "Campus Champ",
    category: "Cloud & Infrastructure",
    date: "2024",
    icon: "Cloud",
    description: "Amazon Web Services cloud architecture, compute instances (EC2), storage (S3), IAM security, and essential technical system proficiencies.",
    badgeColor: "from-amber-500 to-orange-600",
    verified: true,
  },
  {
    title: "HTML, CSS Fundamentals",
    issuer: "DevTown",
    category: "Web Development",
    date: "2023",
    icon: "Code",
    description: "Semantic HTML5 architecture, modern responsive CSS layouts, Flexbox, CSS Grid, media queries, and cross-browser styling standards.",
    badgeColor: "from-cyan-500 to-blue-600",
    verified: true,
  },
  {
    title: "Soft Skills & Leadership",
    issuer: "Campus Champ",
    category: "Professional Growth",
    date: "2024",
    icon: "Award",
    description: "Technical communication, team leadership, cross-functional collaboration, Agile mindsets, and effective problem articulation.",
    badgeColor: "from-emerald-500 to-teal-600",
    verified: true,
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];
