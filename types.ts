
export type Language = 'es' | 'en';

export interface Project {
  id: number;
  title: string;
  description: {
    es: string;
    en: string;
  };
  tags: string[];
  link: string;
  github: string;
  images: string[];
}

export interface Skill {
  name: string;
  icon: string; // FontAwesome class
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'tools';
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
