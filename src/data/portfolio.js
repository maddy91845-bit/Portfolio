// ─────────────────────────────────────────────────────────────
// EDIT ME: this is the single source of truth for dummy content.
// Replace values here with your real info — every section reads
// from these objects, so you never have to hunt through JSX.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'M Madhavan',
  firstName: 'M',
  roles: 'Software Engineer | AI/ML Enthusiast | Full-Stack Developer',
  tagline:
    'I enjoy turning ideas into reliable software and exploring the intersection of intelligent systems, backend engineering, and modern web technologies.',
  email: 'maddy91845@gmail.com',
  github: 'https://github.com/Maddy91845',
  linkedin: 'https://linkedin.com/in/madhavan-m-835113315',
  location: 'India',
  // 👉 HOW TO REPLACE THE PHOTO:
  // 1. Put your photo at  /public/profile.jpg  (square, ideally 800x800+)
  // 2. Keep the path below as '/profile.jpg' — no code changes needed.
  // 3. A decorative SVG fallback shows if the file is missing.
  photo: './profile.jpg',
  resumeLabel: 'Explore My Work',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const heroBadges = ['React', 'Java', 'Python', 'Spring Boot', 'AI/ML', 'Docker']

export const about = {
  heading: 'Engineer by craft, explorer by habit.',
  paragraphs: [
    "I completed my B.E. in Computer Science and Engineering (Artificial Intelligence & Machine Learning) from PSG College of Technology and currently work as a Software Engineer at a multinational company.",
    "I have hands-on experience in hackathons and real-time application development, where I enjoy solving practical problems, building scalable solutions, and turning ideas into working software. My interests span software engineering, backend development, artificial intelligence, APIs, databases, and modern application development."
  ],
  quickFacts: [
    { label: 'Education', value: 'B.E. Computer Science & Engineering (AI & ML)' },
    { label: 'Current Focus', value: 'Software Engineering & AI' },
    { label: 'Location', value: 'India' },
    { label: 'Interests', value: 'Backend Development · AI/ML · System Design · Web Development' },
  ],
  stats: [
    { value: '7+', label: 'Projects built' },
    { value: '5', label: 'Years of learning' },
    { value: '15+', label: 'Technologies explored' },
  ],
}

export const journey = [
  {
    year: '2022',
    title: 'The Beginning',
    text: 'Started exploring programming and computer science fundamentals.',
    icon: '◍',
    highlight: false,
  },
  {
    year: '2023',
    title: 'Building & Experimenting',
    text: 'Built academic projects, explored web development, databases, APIs, and software engineering concepts.',
    icon: '⬡',
    highlight: false,
  },
  {
    year: '2024',
    title: 'AI & Machine Learning',
    text: 'Started working with machine learning, data processing, and intelligent applications.',
    icon: '✦',
    highlight: true,
  },
  {
    year: '2025',
    title: 'Real-World Engineering',
    text: 'Worked on larger projects involving backend systems, APIs, authentication, databases, and cloud technologies.',
    icon: '⬣',
    highlight: true,
  },
  {
    year: '2026',
    title: 'Professional Journey',
    text: 'Started my professional career and began working on production-oriented software systems.',
    icon: '▲',
    highlight: true,
    current: true,
  },
]

export const skillGroups = [
  { category: 'Languages', items: ['Java', 'Python', 'JavaScript', 'SQL'] },
  { category: 'Frontend', items: ['React', 'Tailwind CSS', 'HTML', 'CSS'] },
  { category: 'Backend', items: ['Spring Boot', 'Node.js', 'REST APIs'] },
  { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'DuckDB'] },
  { category: 'AI / ML', items: ['Machine Learning', 'Deep Learning', 'NLP', 'RAG', 'Explainable AI'] },
  { category: 'DevOps / Tools', items: ['Git', 'GitHub', 'Docker', 'Linux', 'AWS'] },
]

export const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce platform designed to provide users with a seamless product browsing, shopping cart, and checkout experience.',
    technologies: ['React', 'Node.js', 'MongoDB', 'REST API'],
    features: ['User authentication', 'Product management', 'Shopping cart', 'Order management', 'Responsive UI'],
    github: 'https://github.com/yourusername/ecommerce-platform',
    demo: '#projects',
  },
  {
    title: 'Recipe & Ingredient Finder',
    description:
      'An intelligent recipe discovery application that helps users find recipes based on available ingredients.',
    technologies: ['React', 'Python', 'API Integration', 'Machine Learning'],
    features: ['Ingredient-based search', 'Recipe recommendations', 'Filtering', 'Responsive interface'],
    github: 'https://github.com/yourusername/recipe-finder',
    demo: '#projects',
  },
  {
    title: 'Trip Collaboration Platform',
    description:
      'A collaborative travel planning application that allows users to organize trips, discover destinations, and coordinate travel plans.',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    features: ['Trip planning', 'Collaborative itinerary', 'Tourist destination discovery', 'User profiles'],
    github: 'https://github.com/yourusername/trip-collab',
    demo: '#projects',
  },
  {
    title: 'FinTech Trading System',
    description:
      'A backend-oriented trading platform designed to demonstrate account management, order processing, authentication, validation, and financial transaction workflows.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'MyBatis', 'JWT', 'Docker', 'Kafka'],
    features: [
      'JWT authentication',
      'Order management',
      'Idempotency',
      'Account management',
      'Position tracking',
      'Kafka-based messaging',
      'REST APIs',
    ],
    github: 'https://github.com/yourusername/fintech-trading',
    demo: '#projects',
  },
  {
    title: 'TALL AI – Data Management System',
    description:
      'An AI-powered data management platform focused on organizing, processing, and interacting with structured data.',
    technologies: ['Python', 'AI/ML', 'React', 'SQL'],
    features: ['Data management', 'Intelligent search', 'Data visualization', 'AI-assisted workflows'],
    github: 'https://github.com/yourusername/tall-ai',
    demo: '#projects',
  },
  {
    title: 'Social Network – GraphQL',
    description:
      'A social networking application demonstrating GraphQL-based data communication and relationship-driven data modeling.',
    technologies: ['React', 'GraphQL', 'Node.js', 'MongoDB'],
    features: ['User profiles', 'Posts', 'Connections', 'GraphQL queries and mutations'],
    github: 'https://github.com/yourusername/social-graphql',
    demo: '#projects',
  },
  {
    title: 'Video RAG',
    description:
      'An AI application that allows users to interact with video content using Retrieval-Augmented Generation.',
    technologies: ['Python', 'LLM', 'RAG', 'Vector Database', 'AI/ML'],
    features: [
      'Video processing',
      'Semantic search',
      'Question answering',
      'Context retrieval',
      'AI-generated responses',
    ],
    github: 'https://github.com/yourusername/video-rag',
    demo: '#projects',
  },
]

export const contact = {
  heading: "LET'S BUILD SOMETHING",
  text: "Have an idea, opportunity, or interesting problem to solve? I'd love to hear from you.",
  email: 'maddy91845@gmail.com',
  github: 'github.com/Maddy91845',
  githubUrl: 'https://github.com/Maddy91845',
  linkedin: 'linkedin.com/in/madhavan-m-835113315',
  linkedinUrl: 'https://linkedin.com/in/madhavan-m-835113315',
  location: 'India',
}
