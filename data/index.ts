import { Experience, Publication, GearItem, SocialLink } from "@/types";
import { API_CONFIG } from "./config";
import { APIConfig } from "@/schema/config";

const config = API_CONFIG as unknown as APIConfig;

export * from "./config";
export * from "./projects";

export const SITE_CONFIG = {
  title: "Gaurav Kumar | Software Engineer",
  description:
    "Software Engineer focused on backend systems, distributed architecture, and building reliable products.",
  url: "https://gauravkumar.dev",
  socialImage: "/og.png",
  email: config.socials.email.address,
};

export const NAV_ITEMS = [
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Stats", href: "/stats" },
  { label: "Blog", href: "/blog" },
];

export const TECH_STACK = {
  frontend: {
    title: "Frontend",
    items: [
      "React / Next.js",
      "TypeScript",
      "Tailwind CSS",
      "WebGL / Three.js",
    ],
  },
  backend: {
    title: "Backend",
    items: ["Node.js", "Go", "PostgreSQL", "Redis"],
  },
  tools: {
    title: "Tools",
    items: ["Docker", "AWS / GCP", "Git", "Figma"],
  },
  ai: {
    title: "AI / ML",
    items: ["Google Gemini API", "TensorFlow.js", "LangChain"],
  },
};

export const HERO_DATA = {
  name: "Gaurav Kumar",
  role: "Software developer",
  tagline: "Building scalable interfaces and robust backend systems.",
  about:
    "I'm a software engineer focused on building high-quality, accessible, and performant web applications. I prefer shipping code over tweaking pixels, but I appreciate a good dashed border.",
};

export const EXPERIENCE: Experience[] = [
  {
    id: "cognitiveclouds-mahalo",
    company: "CognitiveClouds / Mahalo",
    role: "Associate Software Engineer",
    period: "Nov 2022 – Aug 2025",
    description:
      "Developed backend services using NestJS, TypeScript, and PostgreSQL. Built and maintained APIs across CognitiveClouds and its parent company Mahalo. Owned critical backend modules and collaborated closely with frontend and QA teams for smooth releases. Improved service performance through query optimization and caching strategies.",
  },
  {
    id: "functionup",
    company: "FunctionUp",
    role: "Teaching Assistant",
    period: "Mar 2022 – Oct 2022",
    description:
      "Mentored students in backend development fundamentals. Taught Node.js, JavaScript, and DSA concepts. Supported learners in building REST APIs and full-stack projects.",
  },
];

export const PUBLICATIONS: Publication[] = [
  // Add your publications here or remove this section if not applicable
  // Example:
  // {
  //   id: "1",
  //   title: "Your Paper Title",
  //   conference: "Conference Name",
  //   year: "2024",
  //   link: "https://doi.org/...",
  //   description: "Brief description of your research.",
  // },
];

export const GEAR: GearItem[] = [
  {
    category: "Workstation",
    items: [
      'MacBook Pro 14" (M3 Max, 64GB)',
      'Dell Ultrasharp 32" 4K Monitor',
      "Herman Miller Aeron",
    ],
  },
  {
    category: "Peripherals",
    items: [
      "Keychron Q1 Pro (Banana Switches)",
      "Logitech MX Master 3S",
      "Apple Magic Trackpad",
    ],
  },
  {
    category: "Audio",
    items: [
      "Sony WH-1000XM5",
      "Shure MV7 Microphone",
      "Audient EVO 4 Interface",
    ],
  },
  {
    category: "Software",
    items: ["VS Code (Neovim extension)", "iTerm2", "Raycast", "Figma"],
  },
];

export const SOCIAL_LINKS: SocialLink[] = Object.entries(config.socials)
  .filter(
    ([key, value]) =>
      key !== "email" &&
      typeof value === "object" &&
      value !== null &&
      "enabled" in value &&
      value.enabled,
  )
  .map(([key, value]) => {
    const val = value as { username?: string; url?: string };
    return {
      name: key.charAt(0).toUpperCase() + key.slice(1),
      url: val.url || "#",
      icon: key.charAt(0).toUpperCase() + key.slice(1), // Matches IconMap keys
    };
  });
