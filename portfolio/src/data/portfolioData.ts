// ============================================
// PORTFOLIO DATA CONFIGURATION
// Edit this file to customize your portfolio
// ============================================

// Profile picture
import itsJapo from "../assets/me.png"
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
// Project images - Current Budget Manager
import cbm0 from "../assets/projects/cbm_00.png";
import cbm1 from "../assets/projects/cbm_01.png";
import cbm2 from "../assets/projects/cbm_02.png";
import cbm3 from "../assets/projects/cbm_03.png";
import cbm4 from "../assets/projects/cbm_04.png";
import cbm5 from "../assets/projects/cbm_05.png";
import cbm6 from "../assets/projects/cbm_06.png";

// Work logos
import paggoLogo from "../assets/work_logos/paggo.png";
import calzadoRoyLogo from "../assets/work_logos/Logo-Calzado-Roy-Blanco.webp";



export const personalInfo = {
  name: "Joaquin Puente",
  profession: "Full Stack Software Engineer",
  title: "Computer Scientist & Mathematician",
  tagline: "The real currency should be coffee",
  email: "joaquin.puenteg@outlook.com",
  location: "Guatemala City, Guatemala",
  timezone: "UTC-6",
  avatar: itsJapo,// Add your avatar URL or leave empty for initials
  resumeUrl: "/resume/JoaquinPuente_Resume.pdf", // Served from public/resume/
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
      { name: "DynamoDB", icon: "dynamodb" },
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
    githubUrl: "",
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
    id: "currentBM",
    title: "Current - Budget Manager",
    description: "Web application for users to track expenses with currency convertion",
    longDescription: `Developed a web utility for users to track in a very organized and
    meticulous way their expenses. Setting un email alerts, budget limits, dashboard for tracking
    categories and setting up different accounts`,
    technologies: ["Next.js", "Vue.js", "AWS", "DynamoDB"],
    image: cbm0,
    images: [cbm1, cbm2, cbm3, cbm4, cbm5, cbm6],
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
    featured: false,
  },

];

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
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
    startDate: "2025",
    endDate: "Present",
    description:
      "Building and improving the suite of digital products paggo offers to their clients",
    achievements: [
      "Implemented AI agents and products to optimize back office workflows originally done manually",
      "Implementation of security features for the mobile application.",
      "Participated in agile development processes and sprint planning",
    ],
    technologies: ["React", "Node.js", "Express", "MySQL", "Docker", "AWS", "Linux"],
    logo: paggoLogo,
  },
  {
    id: "exp-2",
    company: "Calzado Roy",
    position: "Full Stack Software Developer",
    location: "Guatemala City, Guatemala",
    startDate: "2024",
    endDate: "2025",
    description:
      "Developed back office software to optimize all departments every day tasks",
    achievements: [
      "Developed and deployed services while keeping everything operational",
      "Developed fully functional full stack applications with various stacks",
      "Client support experience by providing IT support to all 74 stores",
    ],
    technologies: ["Javascript", "Typescript", "Angular", "NextJS", "Node.js", "Express", "Java", "Spring Boot", "Oracle", "Linux"],
    logo: calzadoRoyLogo,
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
    id: "AWSCloudArchitect",
    title: "AWS Cloud Architect",
    issuer: "Amazon Web Services",
    date: "2025",
    description: "Cloud architecture and design certification",
    file: "/certificates/AWSCloudArchitect.pdf",
  },
  {
    id: "GoogleProjectManager",
    title: "Project Management",
    issuer: "Google",
    date: "2025",
    description: "Project management certification",
    file: "/certificates/ProjectManagement.pdf",
  },
  {
    id: "Udemy1",
    title: "MEAN Full-Stack Developer",
    issuer: "Udemy",
    date: "2024",
    description: "Full Stack software development using the MEAN Stack",
    file: "/certificates/MEANStackDeveloper.pdf",
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
