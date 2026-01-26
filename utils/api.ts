import { API_CONFIG } from "@/data";
import { Project, BlogPost, PlatformStat, ContributionDay } from "@/types";

/**
 * Fetches GitHub contribution data via a public proxy.
 */
export async function getGithubContributions(): Promise<ContributionDay[]> {
  if (!API_CONFIG.github.enabled) return [];

  const { username } = API_CONFIG.github;

  try {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      { next: { revalidate: 86400 } }, // Cache for 24 hours
    );

    if (!response.ok) throw new Error("Failed to fetch GitHub contributions");

    const data = await response.json();

    // Transform data to match our ContributionDay interface
    // API returns { contributions: [ { date, count, level }, ... ] }
    return data.contributions.map((day: any) => ({
      date: day.date,
      count: day.count,
      level: day.level, // Level is 0-4, which matches our component
    }));
  } catch (error) {
    console.error("GitHub Contributions API Error:", error);
    return [];
  }
}

/**
 * Fetches pinned repositories from GitHub.
 * Uses the public GitHub API. Rate limits apply if no token is provided.
 */
export async function getGithubProjects(): Promise<Project[]> {
  if (!API_CONFIG.github.enabled) return [];

  const { username, token } = API_CONFIG.github;
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
  };

  if (token) {
    headers.Authorization = `token ${token}`;
  }

  try {
    // Fetch pinned repos via a trick or just fetch sorted repos for now
    // Since pinned repos requires GraphQL or scraping, we'll fetch top starred repos
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      { headers, next: { revalidate: 3600 } },
    );

    if (!response.ok) throw new Error("Failed to fetch GitHub repos");

    const repos = await response.json();

    return repos.map((repo: any) => ({
      id: repo.id.toString(),
      title: repo.name,
      description: repo.description,
      techStack: [repo.language].filter(Boolean), // GitHub only gives primary language in simple list
      link: repo.homepage || repo.html_url,
      github: repo.html_url,
      featured: false, // We can logic this out later
      image: `https://opengraph.githubassets.com/1/${username}/${repo.name}`, // Dynamic OG image
    }));
  } catch (error) {
    console.error("GitHub API Error:", error);
    return [];
  }
}

/**
 * Fetches blog posts from Dev.to API.
 */
export async function getDevToPosts(): Promise<BlogPost[]> {
  if (!API_CONFIG.devto.enabled) return [];

  const { username } = API_CONFIG.devto;

  try {
    const response = await fetch(
      `https://dev.to/api/articles?username=${username}`,
      { next: { revalidate: 3600 } },
    );

    if (!response.ok) throw new Error("Failed to fetch Dev.to posts");

    const posts = await response.json();

    return posts.map((post: any) => ({
      id: post.id.toString(),
      title: post.title,
      summary: post.description,
      date: new Date(post.published_at).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      readTime: `${post.reading_time_minutes} min read`,
      slug: post.slug,
      image: post.cover_image,
    }));
  } catch (error) {
    console.error("Dev.to API Error:", error);
    return [];
  }
}

/**
 * Fetches LeetCode stats (using a public proxy or unofficial API).
 * Note: Direct LeetCode API requires GraphQL and CORS handling.
 * We'll use a popular open-source proxy for this template.
 */
export async function getLeetCodeStats(): Promise<PlatformStat | null> {
  if (!API_CONFIG.leetcode.enabled) return null;

  const { username } = API_CONFIG.leetcode;

  try {
    const response = await fetch(
      `https://leetcode-stats-api.herokuapp.com/${username}`,
      { next: { revalidate: 3600 } },
    );

    const data = await response.json();
    if (data.status === "error") return null;

    return {
      id: "leetcode",
      platform: "LeetCode",
      username: username,
      link: `https://leetcode.com/${username}`,
      color: "#fbbf24",
      icon: "Code2",
      stats: [
        { label: "Ranking", value: data.ranking },
        { label: "Solved", value: data.totalSolved },
        { label: "Easy", value: data.easySolved },
        { label: "Medium", value: data.mediumSolved },
        { label: "Hard", value: data.hardSolved },
      ],
    };
  } catch (error) {
    console.error("LeetCode API Error:", error);
    return null;
  }
}
