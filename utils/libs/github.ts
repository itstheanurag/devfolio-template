import { API_CONFIG } from "@/data";
import { Project, BlogPost, PlatformStat, ContributionDay } from "@/types";

/**
 * Fetches GitHub contribution data via a public proxy.
 */
export async function getGithubContributions(): Promise<ContributionDay[]> {
  if (!API_CONFIG.integrations.github.enabled) return [];

  const { username } = API_CONFIG.integrations.github;

  try {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      { next: { revalidate: 86400 } },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch GitHub contributions");
    }

    const data = await response.json();

    let contributions: ContributionDay[] = data.contributions.map(
      (day: any) => ({
        date: day.date,
        count: day.count,
        level: day.level,
      }),
    );

    return contributions;
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
  if (!API_CONFIG.integrations.github.enabled) return [];

  const { username, token } = API_CONFIG.integrations.github;
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
      techStack: [repo.language].filter(Boolean),
      link: repo.homepage || repo.html_url,
      github: repo.html_url,
      featured:
        !repo.fork &&
        repo.stargazers_count >= 0 &&
        repo.description?.length > 100,
      image: `https://opengraph.githubassets.com/1/${username}/${repo.name}`,
    }));
  } catch (error) {
    console.error("GitHub API Error:", error);
    return [];
  }
}
