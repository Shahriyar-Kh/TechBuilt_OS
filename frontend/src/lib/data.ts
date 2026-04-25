import frontendImg from "@/assets/course-frontend.jpg";
import backendImg from "@/assets/course-backend.jpg";
import fullstackImg from "@/assets/course-fullstack.jpg";
import pythonImg from "@/assets/course-python.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";

export type Course = {
  slug: string;
  title: string;
  tagline: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  lessons: number;
  price: string;
  description: string;
  outcomes: string[];
  modules: { title: string; lessons: string[] }[];
  icon: string;
  color: string;
};

export const courses: Course[] = [
  {
    slug: "html",
    title: "HTML Mastery",
    tagline: "The foundation of every website",
    level: "Beginner",
    duration: "3 weeks",
    lessons: 22,
    price: "$49",
    description: "Master semantic HTML5, accessibility, forms, and modern document structure used by professional teams.",
    outcomes: ["Build accessible web pages", "Master semantic structure", "SEO-ready markup", "Forms & validation"],
    modules: [
      { title: "HTML Foundations", lessons: ["Intro & setup", "Tags & attributes", "Document structure"] },
      { title: "Semantic HTML5", lessons: ["Sectioning elements", "Accessibility (ARIA)", "SEO best practices"] },
      { title: "Forms & Media", lessons: ["Inputs & validation", "Audio, video, canvas", "Iframes & embeds"] },
    ],
    icon: "📄", color: "from-orange-500 to-rose-500",
  },
  {
    slug: "css",
    title: "Modern CSS",
    tagline: "Design beautiful interfaces",
    level: "Beginner",
    duration: "4 weeks",
    lessons: 28,
    price: "$59",
    description: "From flexbox to grid, animations, and responsive design — write production-grade CSS for any project.",
    outcomes: ["Flexbox & Grid mastery", "Responsive design", "Animations & transitions", "Modern selectors"],
    modules: [
      { title: "Core CSS", lessons: ["Selectors & cascade", "Box model", "Typography"] },
      { title: "Layout Systems", lessons: ["Flexbox deep dive", "CSS Grid", "Responsive design"] },
      { title: "Advanced", lessons: ["Animations", "Custom properties", "Modern features"] },
    ],
    icon: "🎨", color: "from-sky-500 to-indigo-500",
  },
  {
    slug: "javascript",
    title: "JavaScript Pro",
    tagline: "The language of the web",
    level: "Intermediate",
    duration: "8 weeks",
    lessons: 64,
    price: "$129",
    description: "Master modern JavaScript (ES6+), async programming, DOM manipulation, and prepare for any framework.",
    outcomes: ["ES6+ syntax mastery", "Async/await & promises", "DOM & events", "OOP & functional patterns"],
    modules: [
      { title: "Fundamentals", lessons: ["Variables & types", "Functions", "Control flow"] },
      { title: "Advanced JS", lessons: ["Closures & scope", "Promises & async", "Modules"] },
      { title: "Browser APIs", lessons: ["DOM manipulation", "Fetch & APIs", "Storage"] },
    ],
    icon: "⚡", color: "from-amber-500 to-yellow-500",
  },
  {
    slug: "bootstrap",
    title: "Bootstrap 5",
    tagline: "Ship beautiful UIs in days",
    level: "Beginner",
    duration: "2 weeks",
    lessons: 18,
    price: "$39",
    description: "Use the world's most popular CSS framework to build responsive sites quickly and professionally.",
    outcomes: ["Grid & utilities", "Components mastery", "Customizing themes", "Real project build"],
    modules: [
      { title: "Bootstrap Basics", lessons: ["Setup & grid", "Utilities", "Components"] },
      { title: "Customization", lessons: ["Sass variables", "Theming", "Production build"] },
    ],
    icon: "🅱", color: "from-purple-500 to-fuchsia-500",
  },
  {
    slug: "react",
    title: "React.js Engineer",
    tagline: "Build modern interfaces",
    level: "Intermediate",
    duration: "10 weeks",
    lessons: 78,
    price: "$179",
    description: "Become a professional React developer. Hooks, state management, routing, performance and real-world apps.",
    outcomes: ["Hooks & components", "State management", "React Router", "Performance optimization"],
    modules: [
      { title: "React Core", lessons: ["JSX & components", "Props & state", "Hooks"] },
      { title: "Architecture", lessons: ["Routing", "Context & state", "Forms"] },
      { title: "Production", lessons: ["Performance", "Testing", "Deployment"] },
    ],
    icon: "⚛", color: "from-cyan-500 to-blue-500",
  },
  {
    slug: "vue",
    title: "Vue.js Developer",
    tagline: "Progressive framework",
    level: "Intermediate",
    duration: "8 weeks",
    lessons: 60,
    price: "$159",
    description: "Master Vue 3 Composition API, Pinia state management, and build production-grade SPAs.",
    outcomes: ["Composition API", "Pinia & routing", "Component design", "Real apps"],
    modules: [
      { title: "Vue Fundamentals", lessons: ["Templates", "Reactivity", "Components"] },
      { title: "Composition API", lessons: ["Setup & refs", "Composables", "Lifecycle"] },
    ],
    icon: "💚", color: "from-emerald-500 to-teal-500",
  },
  {
    slug: "python",
    title: "Python Programming",
    tagline: "Versatile & powerful",
    level: "Beginner",
    duration: "8 weeks",
    lessons: 56,
    price: "$129",
    description: "Learn Python from zero to pro. Data structures, OOP, file handling, and prepare for backend or data science.",
    outcomes: ["Pythonic syntax", "OOP principles", "File & APIs", "Project building"],
    modules: [
      { title: "Python Basics", lessons: ["Setup", "Data types", "Control flow"] },
      { title: "OOP & Modules", lessons: ["Classes", "Inheritance", "Modules & packages"] },
    ],
    icon: "🐍", color: "from-blue-500 to-yellow-400",
  },
  {
    slug: "django",
    title: "Django Backend",
    tagline: "Scalable web backends",
    level: "Advanced",
    duration: "10 weeks",
    lessons: 72,
    price: "$199",
    description: "Build production-ready APIs and web apps with Django and Django REST Framework. Auth, ORM, deployment.",
    outcomes: ["MVT architecture", "ORM & migrations", "REST APIs", "Deployment"],
    modules: [
      { title: "Django Core", lessons: ["Models & ORM", "Views & templates", "Forms & auth"] },
      { title: "DRF & APIs", lessons: ["Serializers", "ViewSets", "Authentication"] },
      { title: "Production", lessons: ["Testing", "Docker", "Deployment"] },
    ],
    icon: "🟢", color: "from-green-600 to-emerald-700",
  },
];

export type Specialization = {
  slug: string;
  title: string;
  tagline: string;
  duration: string;
  courses: number;
  price: string;
  description: string;
  image: string;
  outcomes: string[];
  curriculum: string[];
  career: string[];
};

export const specializations: Specialization[] = [
  {
    slug: "frontend-web-development",
    title: "Frontend Web Development",
    tagline: "Become a job-ready frontend engineer",
    duration: "5 months",
    courses: 5,
    price: "$499",
    description: "A complete frontend specialization covering HTML, CSS, JavaScript, Bootstrap and React. Build a portfolio of real projects.",
    image: frontendImg,
    outcomes: [
      "Build responsive, accessible UIs",
      "Master React.js & component architecture",
      "Deploy production sites",
      "Portfolio of 5+ projects",
    ],
    curriculum: ["HTML Mastery", "Modern CSS", "JavaScript Pro", "Bootstrap 5", "React.js Engineer"],
    career: ["Frontend Developer", "UI Engineer", "React Developer", "Web Developer"],
  },
  {
    slug: "backend-web-development",
    title: "Backend Web Development",
    tagline: "Engineer scalable backends",
    duration: "4 months",
    courses: 3,
    price: "$449",
    description: "Master Python, Django and REST API design. Build secure, scalable backends ready for production.",
    image: backendImg,
    outcomes: [
      "Design & build REST APIs",
      "Database modelling & ORM",
      "Authentication & security",
      "Deploy with Docker & CI/CD",
    ],
    curriculum: ["Python Programming", "Django Backend", "Database & DevOps Essentials"],
    career: ["Backend Developer", "API Engineer", "Python Developer", "Django Engineer"],
  },
  {
    slug: "full-stack-web-development",
    title: "Full Stack Web Development",
    tagline: "End-to-end product engineer",
    duration: "8 months",
    courses: 7,
    price: "$799",
    description: "The complete journey from HTML to deployed full-stack apps with React + Django. Become a full product engineer.",
    image: fullstackImg,
    outcomes: [
      "Ship complete web products",
      "Frontend + Backend mastery",
      "Auth, payments & deployment",
      "Capstone real-world project",
    ],
    curriculum: ["HTML & CSS", "JavaScript Pro", "React.js Engineer", "Python Programming", "Django Backend", "REST APIs", "Capstone Project"],
    career: ["Full Stack Developer", "Product Engineer", "Software Engineer", "Tech Lead"],
  },
  {
    slug: "python-programming",
    title: "Python Programming",
    tagline: "From zero to Python professional",
    duration: "3 months",
    courses: 3,
    price: "$329",
    description: "Master Python deeply — fundamentals, OOP, data structures, automation and prepare for any Python career path.",
    image: pythonImg,
    outcomes: [
      "Write Pythonic, clean code",
      "OOP & advanced patterns",
      "Automation scripts",
      "Data manipulation",
    ],
    curriculum: ["Python Foundations", "Advanced Python", "Automation & Projects"],
    career: ["Python Developer", "Automation Engineer", "Data Analyst", "Backend Engineer"],
  },
];

export const testimonials = [
  {
    name: "Sara Mendez",
    role: "Frontend Developer @ Stripe",
    text: "TechBuilt OS completely changed my career trajectory. The curriculum is razor-sharp and the mentors actually care. I landed my dream job 4 months in.",
    image: t1, rating: 5,
  },
  {
    name: "James Carter",
    role: "Full Stack Engineer @ Shopify",
    text: "The Full Stack specialization is the best money I've ever spent on education. Real projects, real feedback, real results.",
    image: t2, rating: 5,
  },
  {
    name: "Aisha Rahman",
    role: "Python Developer @ Atlassian",
    text: "Coming from a non-tech background, I was nervous. The structured roadmap and supportive community made everything click.",
    image: t3, rating: 5,
  },
];

export const blogPosts = [
  {
    slug: "frontend-roadmap-2025",
    title: "The Complete Frontend Developer Roadmap for 2025",
    excerpt: "Everything you need to learn — in order — to become a hireable frontend developer this year.",
    image: blog1, category: "Roadmap", date: "Apr 12, 2025", readTime: "9 min",
  },
  {
    slug: "react-vs-vue",
    title: "React vs Vue: Which Should You Learn First in 2025?",
    excerpt: "A practical, no-hype comparison to help you choose the right framework for your career goals.",
    image: blog2, category: "Frameworks", date: "Apr 5, 2025", readTime: "7 min",
  },
  {
    slug: "django-production",
    title: "Deploying Django to Production: The Definitive Guide",
    excerpt: "From settings split to Docker, gunicorn, NGINX, CI/CD — the full production playbook.",
    image: blog3, category: "Backend", date: "Mar 28, 2025", readTime: "12 min",
  },
];

export const faqs = [
  { q: "Do I need prior coding experience?", a: "No. Our beginner courses and the Frontend & Python specializations are designed for absolute beginners. We start from zero." },
  { q: "How are the courses delivered?", a: "100% online with on-demand video lessons, live mentor sessions, hands-on projects, and a private community." },
  { q: "Will I get a certificate?", a: "Yes. Every completed course and specialization includes a verified certificate you can share on LinkedIn." },
  { q: "Is there job support?", a: "Specialization students get resume reviews, mock interviews, and access to our hiring partner network." },
  { q: "What's the refund policy?", a: "14-day no-questions-asked refund on all courses and specializations." },
  { q: "Can I pay in installments?", a: "Yes. Specializations support 3 and 6-month installment plans at checkout." },
];

export const roadmaps = [
  {
    title: "Frontend Developer",
    color: "from-indigo-500 to-blue-500",
    steps: [
      { title: "HTML & Semantic Web", weeks: "Weeks 1–3", desc: "Master document structure, accessibility, and SEO-ready markup." },
      { title: "Modern CSS & Layout", weeks: "Weeks 4–7", desc: "Flexbox, Grid, animations, and responsive design systems." },
      { title: "JavaScript Programming", weeks: "Weeks 8–15", desc: "ES6+, async/await, DOM, and modern JS patterns." },
      { title: "React.js Framework", weeks: "Weeks 16–25", desc: "Hooks, routing, state management, performance, deployment." },
      { title: "Portfolio & Job Ready", weeks: "Weeks 26–28", desc: "Build portfolio, resume, mock interviews, apply." },
    ],
  },
  {
    title: "Backend Developer",
    color: "from-emerald-500 to-teal-500",
    steps: [
      { title: "Python Foundations", weeks: "Weeks 1–8", desc: "Syntax, data structures, OOP, file handling." },
      { title: "Databases & SQL", weeks: "Weeks 9–11", desc: "Relational modelling, queries, migrations." },
      { title: "Django & DRF", weeks: "Weeks 12–20", desc: "MVT, ORM, REST APIs, authentication." },
      { title: "DevOps & Deployment", weeks: "Weeks 21–24", desc: "Docker, CI/CD, cloud hosting." },
    ],
  },
];
