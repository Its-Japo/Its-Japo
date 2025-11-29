// ============================================
// PORTFOLIO DATA CONFIGURATION
// Edit this file to customize your portfolio
// ============================================

// Project images - Document Manager
import gdLoginImg from "../assets/projects/gdLogin.png";
import gdFileTreeImg from "../assets/projects/gdFileTree.jpeg";
import gdFileViewerImg from "../assets/projects/gdFileViewer.jpeg";
import gdSearchCriteriaImg from "../assets/projects/gdSearchCriteria.jpeg";
import gdSearchResultImg from "../assets/projects/gdSearchResult.jpeg";
// Project images - BioMark
import mcMarkImg from "../assets/projects/mcMark.png";
import mcRegisterImg from "../assets/projects/mcRegister.png";
// Project images - AI Business Classifier
import rsAiAgentImg from "../assets/projects/rsAiAgent.png";

export const personalInfo = {
  name: "Joaquin Puente",
  title: "Full Stack Software Engineer",
  tagline: "The real currency should be coffee",
  email: "joaquin.puenteg@outlook.com",
  location: "Guatemala City, Guatemala",
  timezone: "UTC-6",
  avatar: "", // Add your avatar URL or leave empty for initials
  resumeUrl: "", // Add link to your resume PDF
  social: {
    linkedin: "https://www.linkedin.com/in/joaquin-puente/",
    github: "https://github.com/Its-Japo", // Update with your GitHub
  },
};

export const aboutMe = {
  bio: `I'm a passionate Full Stack Software Engineer currently working at Paggo.
  I specialize in building scalable web applications and have a strong interest in Cloud Computing,
  AI, Machine Learning, LLMs, Cybersecurity, and Mathematics.

  I'm always eager to learn new technologies and currently exploring autonomous agent development.
  Open to collaborations, mentorship opportunities, freelance work, and exciting new challenges.`,
  highlights: [
    "Full Stack Development",
    "Cloud Architecture",
    "AI & Machine Learning",
    "Secure System Design",
  ],
};

export const techStack = {
  frontend: {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "JavaScript", icon: "js" },
      { name: "TypeScript", icon: "ts" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Angular", icon: "angular" },
      { name: "Vue.js", icon: "vue" },
      { name: "Figma", icon: "figma" },
    ],
  },
  backend: {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "Python", icon: "python" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Java", icon: "java" },
      { name: "Spring Boot", icon: "spring" },
      { name: "Rust", icon: "rust" },
      { name: "Go", icon: "go" },
      { name: "GraphQL", icon: "graphql" },
    ],
  },
  database: {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "postgres" },
      { name: "MySQL", icon: "mysql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Redis", icon: "redis" },
      { name: "SQLite", icon: "sqlite" },
    ],
  },
  cloud: {
    title: "Cloud & Infrastructure",
    skills: [
      { name: "AWS", icon: "aws" },
      { name: "Google Cloud", icon: "gcp" },
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "Terraform", icon: "terraform" },
    ],
  },
  tools: {
    title: "Development Tools",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Bitbucket", icon: "bitbucket" },
      { name: "Neovim", icon: "neovim" },
      { name: "Linux", icon: "linux"}
    ],
  },
};

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string; // Path to project screenshot
  images?: string[]; // Additional screenshots for detail view
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "aiBusinessClassifier",
    title: "Ai Business Classifier",
    description: "Autonomous AI agent to investigate businesses and accept/deny service",
    longDescription: `Developed an AI autonomous agent that investigates the submitted images and web
    pressence to automate the desition making process originally made by the risks and monitoring deparment
    to allow or deny service to each business.`,
    technologies: ["Python", "MySQL", "OpenAI", "Google Cloud"],
    image: rsAiAgentImg,
    images: [],
    liveUrl: "",
    githubUrl: "https://github.com/Its-Japo/project",
    featured: true,
  },
  {
    id: "documentManager",
    title: "Document Manager",
    description: "Full stack solution for document management",
    longDescription: `Developed a fill stack application for document management
    for advanced search using personalized fields with dynamic datatypes. The application
    allowed users to collect documents, save them in a file tree and adjust search indexes.
    The project also allowed users to configure a role based permission system with fully
    customizable permisssions defined by the user.`,
    technologies: ["PostgreSQL", "Rust", "Angular", "AWS"],
    image: gdLoginImg,
    images: [gdSearchCriteriaImg, gdSearchResultImg, gdFileTreeImg, gdFileViewerImg],
    liveUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    id: "fpMarker",
    title: "Fingerprint Marking App",
    description: "Web application for employees to mark assistance with fingerprint",
    longDescription: `Developed a web application connected to HID fingerprint reader for
    employees to mark down their entrance and exit times. Fully packed to work right out
    of the box on every store and connected directly to the database. The project also counts
    with `,
    technologies: ["Next.js", "Java", "Spring Boot", "MySQL"],
    image: mcMarkImg,
    images: [mcRegisterImg],
    liveUrl: "",
    githubUrl: "",
    featured: true,
  },
];

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string; // Use "Present" for current job
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Paggoapp",
    position: "Full Stack Software Engineer",
    location: "Guatemala City, Guatemala",
    startDate: "2023",
    endDate: "Present",
    description:
      "Building and maintaining scalable financial technology solutions for the Guatemalan market.",
    achievements: [
      "Developed and deployed microservices architecture serving thousands of daily users",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Led technical design sessions and code reviews for the engineering team",
      "Optimized database queries improving application performance by 40%",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
    logo: "",
  },
  // Add more experiences as needed
  {
    id: "exp-2",
    company: "Previous Company",
    position: "Software Developer",
    location: "Guatemala City, Guatemala",
    startDate: "2021",
    endDate: "2023",
    description:
      "Worked on web application development and maintenance for various clients.",
    achievements: [
      "Built responsive web applications using modern frontend frameworks",
      "Collaborated with design team to implement pixel-perfect UI components",
      "Participated in agile development processes and sprint planning",
    ],
    technologies: ["JavaScript", "React", "Python", "MySQL"],
    logo: "",
  },
];

// ============================================
// CERTIFICATES CONFIGURATION
// Add your PDF certificates to public/certificates/
// ============================================

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  description?: string;
  file: string; // Path to PDF file in public/certificates/
  thumbnail?: string; // Optional thumbnail image
  credentialUrl?: string; // Optional link to verify credential
}

// Add your certificates here
// Place PDF files in: public/certificates/
export const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "AWS Cloud Architect",
    issuer: "Amazon Web Services",
    date: "2025",
    description: "Cloud architecture and design certification",
    file: "/certificates/AWSCloudArchitect.pdf",
  },
  {
    id: "cert-2",
    title: "Project Management",
    issuer: "Google",
    date: "2025",
    description: "Project management certification",
    file: "/certificates/ProjectManagement.pdf",
  },
];

// EmailJS Configuration
// Sign up at https://www.emailjs.com/ and fill in these values
export const emailjsConfig = {
  serviceId: "service_n29pife",
  templateId: "template_h8sk9bz",
  publicKey: "KOcnU4aJgY1qD0yJs",
};

export const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];
