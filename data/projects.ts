import { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "hanma-ui",
    title: "Hanma UI",
    description:
      "Web interface for the Hanma ecosystem to browse snippets, read documentation, and manage profiles.",
    techStack: ["Vitejs", "TailwindCss", "TypeScript", "Nodejs", "Npm", "Git"],
    link: "https://hanma-a2n.pages.dev/",
    github: "https://github.com/itstheanurag/hanma",
    featured: true,
    // image: "/hanma-logo.png", // Uncomment and add image to public/ folder
  },
  {
    id: "scaffoldor",
    title: "Scaffoldor",
    description:
      "Template registry and CLI for sharing GitHub and GitLab templates without messy commit history.",
    techStack: ["Vitejs", "TailwindCss", "TypeScript", "Nodejs", "Npm", "Git"],
    link: "https://scaffoldor.vercel.app/",
    github: "https://github.com/itstheanurag/scaffoldor",
    featured: true,
  },
  {
    id: "keyway",
    title: "Keyway",
    description:
      "Privacy-first peer-to-peer file sharing using WebRTC with end-to-end encryption.",
    techStack: [
      "Nextjs",
      "TailwindCss",
      "WebRtc",
      "TypeScript",
      "Nodejs",
      "Npm",
      "Git",
    ],
    link: "https://keyway.onrender.com/",
    github: "https://github.com/itstheanurag/keyway",
    featured: true,
    // image: "/keyway.png", // Uncomment and add image to public/ folder
  },
  {
    id: "bits-and-pieces",
    title: "Bits & Pieces",
    description:
      "Collection of high-quality Next.js components with Tailwind CSS and Framer Motion.",
    techStack: ["Nextjs", "TailwindCss", "FramerMotion", "React"],
    link: "https://itstheanurag.github.io/bitsandpieces/",
    github: "https://github.com/itstheanurag/bitsandpieces",
    featured: true,
    // image: "/bitsandpieces.png", // Uncomment and add image to public/ folder
  },
  {
    id: "docusage",
    title: "Docusage",
    description:
      "Multi-purpose platform for forms, contracts, invoices, and code management.",
    techStack: ["Nextjs", "TypeScript", "ShadcnUI"],
    github: "https://github.com/itstheanurag/docusage",
    featured: false,
  },
];
