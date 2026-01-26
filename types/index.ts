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

export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4; // 0 is empty, 4 is most active
}

export interface PlatformStat {
  id: string;
  platform: string;
  username: string;
  link: string;
  stats: { label: string; value: string | number }[];
  color: string; // Hex code for brand color
  icon: string; // Lucide icon name
}
