export const API_CONFIG = {
  integrations: {
    github: {
      enabled: true,
      username: "itstheanurag",
      token: process.env.GITHUB_TOKEN,
    },
    leetcode: {
      enabled: true,
      username: "itstheanurag",
    },
  },

  blogs: {
    enabled: true,

    medium: {
      enabled: false,
      username: "itstheanurag",
    },

    devto: {
      enabled: false,
      username: "itstheanurag",
    },

    mdx: {
      enabled: true,
      contentPath: "content/blog",
    },
  },

  projects: {
    enabled: true,
    source: "github", // "github" | "local"
    contentPath: "content/projects",
  },

  experience: {
    enabled: true,
    source: "local", // "local" | "linkedin" | "peerlist"
    contentPath: "content/experience",
  },

  socials: {
    enabled: true,

    github: {
      enabled: true,
      username: "itstheanurag",
      url: "https://github.com/itstheanurag",
    },

    linkedin: {
      enabled: true,
      username: "itstheanurag",
      url: "https://linkedin.com/in/itstheanurag",
    },

    twitter: {
      enabled: false,
      username: "itstheanurag",
      url: "https://twitter.com/itstheanurag",
    },

    peerlist: {
      enabled: true,
      username: "itstheanurag",
      url: "https://peerlist.io/itstheanurag",
    },

    youtube: {
      enabled: false,
      username: "itstheanurag",
      url: "https://youtube.com/itstheanurag",
    },

    email: {
      enabled: true,
      address: "gaurav@example.com",
    },
  },
} as const;
