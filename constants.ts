
import { Project, Skill, SocialLink, Language } from './types';

export const PROFILE = {
  name: "Hector",
  email: "hectorbmprof@gmail.com",
};

export const TRANSLATIONS = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      work: "Proyectos",
      contact: "Contacto"
    },
    hero: {
      greeting: `Hola, soy ${PROFILE.name}`,
      role_prefix: "Desarrollador",
      role_suffix: "Full Stack & IA",
      description: "Creando soluciones web completas e integrando inteligencia artificial para automatizar y optimizar procesos.",
      status: "Abierto a conversaciones interesantes",
      tech_stack: "Arsenal Técnico",
      location: "Base de operaciones",
      focus_label: "Enfoque",
      focus_value: "Desarrollo de Calidad",
      contact_me: "Contáctame"
    },
    about: {
      title: "Sobre Mí",
      subtitle: "Mi Trayectoria",
      bio_p1: "Soy Técnico en Desarrollo de Aplicaciones Web con especialización en Inteligencia Artificial y Big Data. Apasionado por la programación y la capacidad de la IA para transformar cómo vivimos y trabajamos.",
      bio_p2: "Desarrollo soluciones Full Stack con frameworks frontend como Vue, Angular y React, combinando backend robusto con Node.js y Spring Boot mediante arquitecturas API REST. Además, trabajo en proyectos de IA aplicando Machine Learning, agentes inteligentes e inteligencia artificial generativa. Mi objetivo es crear experiencias digitales completas, desde la base de datos hasta interfaces modernas e intuitivas.",
      stats: {
        exp: "Años de Exp.",
        projects: "Proyectos",
        commits: "Commits"
      }
    },
    work: {
      title: "Proyectos",
      subtitle: "Seleccionados"
    },
    contact: {
      title: "Vamos a construir algo",
      title_accent: "increíble",
      text: "Si crees que puedo aportar valor a tu proyecto o equipo, estaré encantado de conversar. Siempre abierto a nuevas oportunidades y colaboraciones.",
      cta: "Iniciar Conversación",
      copyright: "Diseñado con"
    },
    time: {
      format: 'es-ES'
    }
  },
  en: {
    nav: {
      home: "Home",
      work: "Work",
      about: "About",
      contact: "Contact"
    },
    hero: {
      greeting: `Hi, I'm ${PROFILE.name}`,
      role_prefix: "Full Stack",
      role_suffix: "Developer & AI",
      description: "Creating complete web solutions and integrating artificial intelligence to automate and optimize processes.",
      status: "Open to interesting conversations",
      tech_stack: "Tech Stack",
      location: "Base of operations",
      focus_label: "Focus",
      focus_value: "Quality Development",
      contact_me: "Contact Me"
    },
    about: {
      title: "About Me",
      subtitle: "My Journey",
      bio_p1: "I am a Full Stack Developer passionate about the intersection of robust software design and artificial intelligence. My goal is to create digital experiences that not only work perfectly but also feel intuitive and modern.",
      bio_p2: "With experience in both the Java ecosystem (Spring Boot) and the modern JavaScript stack (React, Next.js) plus Python for AI, I have the ability to take a product from database conception to the final pixel-perfect interface.",
      stats: {
        exp: "Years Exp.",
        projects: "Projects",
        commits: "Commits"
      }
    },
    work: {
      title: "Selected",
      subtitle: "Projects"
    },
    contact: {
      title: "Let's build something",
      title_accent: "amazing",
      text: "Have an innovative idea or need a developer who understands both design and code? I'm just a message away.",
      cta: "Start Conversation",
      copyright: "Designed with"
    },
    time: {
      format: 'en-US'
    }
  }
};

export const SYSTEM_PROMPT = `Eres el asistente virtual del portafolio de ${PROFILE.name}.
Tu objetivo es responder preguntas sobre la experiencia, habilidades y proyectos de ${PROFILE.name} de manera profesional pero amigable.`;

export const SKILLS: Skill[] = [
  { name: "HTML / CSS", icon: "fa-brands fa-html5", level: 98, category: "frontend" },
  { name: "Vue.js", icon: "fa-brands fa-vuejs", level: 90, category: "frontend" },
  { name: "Angular", icon: "fa-brands fa-angular", level: 85, category: "frontend" },
  { name: "React", icon: "fa-brands fa-react", level: 95, category: "frontend" },
  { name: "Next.js", icon: "fa-solid fa-n", level: 95, category: "frontend" },
  { name: "TypeScript", icon: "fa-brands fa-js", level: 90, category: "frontend" },
  { name: "Spring Boot", icon: "fa-brands fa-java", level: 85, category: "backend" },
  { name: "Node.js", icon: "fa-brands fa-node", level: 85, category: "backend" },
  { name: "Python / AI", icon: "fa-brands fa-python", level: 90, category: "backend" },
  { name: "AWS", icon: "fa-brands fa-aws", level: 80, category: "tools" },
  { name: "Azure", icon: "fa-brands fa-microsoft", level: 80, category: "tools" },
  { name: "Tailwind CSS", icon: "fa-solid fa-wind", level: 95, category: "frontend" },
  { name: "TensorFlow / PyTorch", icon: "fa-solid fa-brain", level: 80, category: "backend" },
  { name: "PostgreSQL", icon: "fa-solid fa-database", level: 85, category: "backend" },
  { name: "Docker", icon: "fa-brands fa-docker", level: 75, category: "tools" },
  { name: "n8n", icon: "fa-solid fa-diagram-project", level: 85, category: "tools" },
  { name: "LangChain / LLMs", icon: "fa-solid fa-robot", level: 85, category: "tools" },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Sistema de Reservas Inteligente con NFC",
    description: {
      es: "Plataforma automatizada de reservas de pistas de pádel para municipios pequeños. Sistema completo con autenticación, pasarela de pago integrada y acceso mediante NFC desde dispositivo móvil, eliminando la necesidad de personal para control de acceso durante horarios reservados.",
      en: "Automated padel court booking platform for small municipalities. Complete system with authentication, integrated payment gateway and NFC mobile access, eliminating the need for staff to control access during reserved hours."
    },
    tags: ["React", "NFC", "Stripe", "Node.js", "Auth", "IoT"],
    link: "#",
    github: "#",
    images: [
      "/images/projects/Padel1.png",
      "/images/projects/Padel2.png",
      "/images/projects/Padel4.png",
      "/images/projects/Padel5.png",
    ]
  },
  {
    id: 2,
    title: "Monitorización de Calidad del Aire",
    description: {
      es: "Sistema integral para monitorizar la calidad del aire en Valencia usando Computer Vision (YOLO, Real-ESRGAN) sobre cámaras de tráfico, Azure Data Factory para ETL en arquitectura lakehouse (Databricks), modelos de ML predictivo en Power BI, y chatbot RAG con Elasticsearch y Ollama.",
      en: "Comprehensive air quality monitoring system in Valencia using Computer Vision (YOLO, Real-ESRGAN) on traffic cameras, Azure Data Factory for ETL in lakehouse architecture (Databricks), predictive ML models in Power BI, and RAG chatbot with Elasticsearch and Ollama."
    },
    tags: ["Python", "Azure", "YOLO", "Machine Learning", "Big Data", "RAG"],
    link: "https://www.youtube.com/watch?v=Cgiwk8_g-iM",
    github: "#",
    images: [
      "https://www.youtube.com/watch?v=Cgiwk8_g-iM"
    ]
  },
  {
    id: 3,
    title: "Sistema de Gestión Ganadera",
    description: {
      es: "Sistema de control y gestión integral de ganado con CRUD completo de animales, seguimiento de estados activo/inactivo, gestión de genealogía (crías por madre), y diseño responsive optimizado para uso en campo desde dispositivos móviles. Backend robusto con Spring Boot y frontend en Angular.",
      en: "Comprehensive livestock management and control system with full animal CRUD, active/inactive status tracking, genealogy management (offspring per mother), and responsive design optimized for field use on mobile devices. Robust backend with Spring Boot and Angular frontend."
    },
    tags: ["Angular", "Spring Boot", "Java", "TypeScript", "REST API", "MySQL"],
    link: "#",
    github: "#",
    images: [
      "/images/projects/Gan1.png",
      "/images/projects/Gan2.png",
      "/images/projects/Gan3.png",
      "/images/projects/Gan4.png"
    ]
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/Haktor23/", icon: "fa-brands fa-github" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/hectorburgosmarti/", icon: "fa-brands fa-linkedin" },
];
