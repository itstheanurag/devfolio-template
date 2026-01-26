export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  featured: boolean;
  image?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  slug: string;
}

export interface Publication {
  id: string;
  title: string;
  conference: string;
  year: string;
  link?: string;
  description?: string;
}

export interface GearItem {
  category: string;
  items: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ChatMessage {
  role: "user" | "model";
  text: string;
  timestamp: number;
}
