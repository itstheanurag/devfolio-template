import { API_CONFIG } from "@/data";
import { Project, ContributionDay } from "@/types";

/**
 * Fetches GitHub contribution data via a public proxy.
 * Returns empty array if the API fails or is unavailable.
 */
export async function getGithubContributions(): Promise<ContributionDay[]> {
  if (!API_CONFIG.integrations.github.enabled) return [];

  const { username } = API_CONFIG.integrations.github;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      { next: { revalidate: 86400 }, signal: controller.signal },
    );

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.warn(`GitHub contributions API returned ${response.status}`);
      return [];
    }

    const data = await response.json();

    if (!data.contributions || !Array.isArray(data.contributions)) {
      console.warn("GitHub contributions API returned unexpected data format");
      return [];
    }

    const contributions: ContributionDay[] = data.contributions.map(
      (day: { date: string; count: number; level: number }) => ({
        date: day.date,
        count: day.count,
        level: Math.min(4, Math.max(0, day.level)) as 0 | 1 | 2 | 3 | 4,
      }),
    );

    return contributions;
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      console.warn("GitHub contributions API request timed out");
    } else {
      console.error("GitHub Contributions API Error:", error);
    }
    return [];
  }
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  homepage: string | null;
  fork: boolean;
  stargazers_count: number;
}

/**
 * Fetches pinned repositories from GitHub.
 * Uses the public GitHub API. Rate limits apply if no token is provided.
 * Returns empty array if the API fails.
 */
export async function getGithubProjects(): Promise<Project[]> {
  if (!API_CONFIG.integrations.github.enabled) return [];

  const { username, token } = API_CONFIG.integrations.github;
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
  };

  if (token) {
    headers.Authorization = `token ${token}`;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      { headers, next: { revalidate: 3600 }, signal: controller.signal },
    );

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.warn(`GitHub API returned ${response.status}`);
      return [];
    }

    const repos: GitHubRepo[] = await response.json();

    if (!Array.isArray(repos)) {
      console.warn("GitHub API returned unexpected data format");
      return [];
    }

    return repos.map((repo) => ({
      id: repo.id.toString(),
      title: repo.name,
      description: repo.description ?? "",
      techStack: repo.language ? [repo.language] : [],
      link: repo.homepage || repo.html_url,
      github: repo.html_url,
      featured:
        !repo.fork &&
        repo.stargazers_count >= 0 &&
        (repo.description?.length ?? 0) > 100,
      image: `https://opengraph.githubassets.com/1/${username}/${repo.name}`,
    }));
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      console.warn("GitHub API request timed out");
    } else {
      console.error("GitHub API Error:", error);
    }
    return [];
  }
}
