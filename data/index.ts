import {
  Project,
  Experience,
  SocialLink,
  BlogPost,
  Publication,
  GearItem,
  ContributionDay,
  PlatformStat,
} from "@/types";

export const HERO_DATA = {
  name: "Alex Dev",
  role: "Senior Full-Stack Engineer",
  tagline: "Building scalable interfaces and robust backend systems.",
  about:
    "I'm a software engineer focused on building high-quality, accessible, and performant web applications. I prefer shipping code over tweaking pixels, but I appreciate a good dashed border.",
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Nebula Stream",
    description:
      "A real-time data visualization dashboard for distributed systems monitoring. Built with high performance in mind using WebSockets and Canvas API.",
    techStack: ["React", "TypeScript", "Go", "WebSockets"],
    link: "#",
    github: "#",
    featured: true,
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    id: "2",
    title: "Hyper Text Editor",
    description:
      "A minimal, keyboard-first markdown editor for the web. Supports Vim keybindings and local-first storage.",
    techStack: ["Next.js", "Rust (WASM)", "Tailwind"],
    link: "#",
    github: "#",
    featured: true,
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    id: "3",
    title: "Gemini CLI",
    description:
      "A command-line interface wrapper for the Google Gemini API, allowing developers to pipe stdout directly into an LLM for analysis.",
    techStack: ["Node.js", "Google GenAI SDK"],
    github: "#",
    featured: false,
  },
  {
    id: "4",
    title: "Voxel Engine",
    description: "An experimental voxel rendering engine built with WebGPU.",
    techStack: ["WebGPU", "TypeScript"],
    featured: false,
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    company: "TechFlow Systems",
    role: "Senior Frontend Engineer",
    period: "2022 - Present",
    description:
      "Leading the frontend infrastructure team. Improved build times by 40% and migrated the core product to a micro-frontend architecture.",
  },
  {
    id: "2",
    company: "StartUp Inc",
    role: "Full Stack Developer",
    period: "2019 - 2022",
    description:
      "Early employee. Built the MVP from scratch using React and Node.js. Scaled the platform to 100k+ active users.",
  },
  {
    id: "3",
    company: "OpenSource Collective",
    role: "Contributor",
    period: "2018 - 2019",
    description:
      "Active maintainer for several popular UI libraries in the React ecosystem.",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Understanding React Server Components",
    summary:
      "A deep dive into how RSCs change the data fetching paradigm and how to migrate existing apps.",
    date: "Oct 12, 2024",
    readTime: "8 min read",
    slug: "react-server-components",
  },
  {
    id: "2",
    title: "Rust for JavaScript Developers",
    summary:
      "Bridging the gap between the event loop and the borrow checker. Why you should learn Rust in 2024.",
    date: "Sep 28, 2024",
    readTime: "12 min read",
    slug: "rust-for-js-devs",
  },
  {
    id: "3",
    title: "Effective Terminal Workflows",
    summary:
      "Configuring tmux, neovim, and zsh for maximum productivity without mouse usage.",
    date: "Aug 15, 2024",
    readTime: "6 min read",
    slug: "terminal-workflows",
  },
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "1",
    title: "Optimizing State Synchronization in Distributed Web Clients",
    conference: "IEEE Web Systems Conference",
    year: "2023",
    link: "#",
    description:
      "Proposed a hybrid approach using CRDTs and Last-Write-Wins for collaborative editing tools.",
  },
  {
    id: "2",
    title: "Performance Analysis of WASM vs JS in Image Processing",
    conference: "Journal of Web Engineering",
    year: "2021",
    link: "#",
    description:
      "Comparative study showing 4x performance gains in specific matrix operations using Rust-generated WASM.",
  },
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

export const SOCIALS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com", icon: "Github" },
  { name: "Twitter", url: "https://twitter.com", icon: "Twitter" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
];

// Mock data generator for Heatmap
const generateHeatmapData = (): ContributionDay[] => {
  const days = 365;
  const data: ContributionDay[] = [];
  const now = new Date();

  for (let i = 0; i < days; i++) {
    const date = new Date(now);
    date.setDate(date.getDate() - (days - i));

    // Random contribution level biased towards 0-2 for realism, occasional 3-4
    const rand = Math.random();
    let level: 0 | 1 | 2 | 3 | 4 = 0;
    if (rand > 0.9) level = 4;
    else if (rand > 0.75) level = 3;
    else if (rand > 0.5) level = 2;
    else if (rand > 0.2) level = 1;

    data.push({
      date: date.toISOString().split("T")[0],
      count: level === 0 ? 0 : Math.floor(Math.random() * 10) + 1,
      level,
    });
  }
  return data;
};

export const HEATMAP_DATA = generateHeatmapData();

export const PLATFORM_STATS: PlatformStat[] = [
  {
    id: "leetcode",
    platform: "LeetCode",
    username: "alexdev",
    link: "https://leetcode.com",
    color: "#fbbf24", // amber-400
    icon: "Code2",
    stats: [
      { label: "Ranking", value: "Top 5%" },
      { label: "Solved", value: 450 },
      { label: "Easy", value: 120 },
      { label: "Medium", value: 280 },
      { label: "Hard", value: 50 },
    ],
  },
  {
    id: "github",
    platform: "GitHub",
    username: "alexdev",
    link: "https://github.com",
    color: "#10b981", // emerald-500
    icon: "Github",
    stats: [
      { label: "Followers", value: "1.2k" },
      { label: "Stars", value: "3.4k" },
      { label: "Contributions", value: "2,450" },
      { label: "Pull Requests", value: 140 },
    ],
  },
  {
    id: "gitlab",
    platform: "GitLab",
    username: "alexdev",
    link: "https://gitlab.com",
    color: "#f97316", // orange-500
    icon: "Gitlab",
    stats: [
      { label: "Commits", value: "1,200+" },
      { label: "Projects", value: 25 },
      { label: "CI/CD Pipelines", value: 450 },
    ],
  },
  {
    id: "codeforces",
    platform: "CodeForces",
    username: "alex_algo",
    link: "https://codeforces.com",
    color: "#3b82f6", // blue-500
    icon: "Terminal",
    stats: [
      { label: "Rating", value: 1850 },
      { label: "Rank", value: "Candidate Master" },
      { label: "Contests", value: 45 },
    ],
  },
  {
    id: "gfg",
    platform: "GeeksForGeeks",
    username: "alexdev",
    link: "https://geeksforgeeks.org",
    color: "#22c55e", // green-500
    icon: "Cpu",
    stats: [
      { label: "Coding Score", value: 1250 },
      { label: "Problems Solved", value: 300 },
      { label: "Institute Rank", value: 12 },
    ],
  },
];

export const SYSTEM_PROMPT = `
You are an AI assistant living inside the portfolio website of Alex Dev.
Your goal is to answer questions about Alex's professional background, skills, and projects based on the provided context.
Keep your answers concise, professional, yet slightly witty and technical.
Do not make up facts. If you don't know something based on the context, say you don't have access to that information in the current build.

Context:
Name: ${HERO_DATA.name}
Role: ${HERO_DATA.role}
Bio: ${HERO_DATA.about}
Experience: ${JSON.stringify(EXPERIENCE)}
Projects: ${JSON.stringify(PROJECTS)}
Blog Posts: ${JSON.stringify(BLOG_POSTS)}
Research/Publications: ${JSON.stringify(PUBLICATIONS)}
Gear: ${JSON.stringify(GEAR)}
Platform Stats: ${JSON.stringify(PLATFORM_STATS)}
`;
