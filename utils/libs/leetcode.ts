import { API_CONFIG } from "@/data";
import { PlatformStat } from "@/types";

interface LeetCodeStatsResponse {
  status: string;
  message?: string;
  ranking?: number;
  totalSolved?: number;
  easySolved?: number;
  mediumSolved?: number;
  hardSolved?: number;
}

/**
 * Fetches LeetCode stats (using a public proxy or unofficial API).
 * Note: Direct LeetCode API requires GraphQL and CORS handling.
 * We'll use a popular open-source proxy for this template.
 * Returns null if the API fails or is unavailable.
 */
export async function getLeetCodeStats(): Promise<PlatformStat | null> {
  if (!API_CONFIG.integrations.leetcode.enabled) return null;

  const { username } = API_CONFIG.integrations.leetcode;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

    const response = await fetch(
      `https://leetcode-stats-api.herokuapp.com/${username}`,
      { next: { revalidate: 3600 }, signal: controller.signal },
    );

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.warn(`LeetCode API returned ${response.status}`);
      return null;
    }

    const data: LeetCodeStatsResponse = await response.json();

    if (data.status === "error" || !data.totalSolved) {
      console.warn("LeetCode API returned error status");
      return null;
    }

    return {
      id: "leetcode",
      platform: "LeetCode",
      username: username,
      link: `https://leetcode.com/${username}`,
      color: "#fbbf24",
      icon: "Code2",
      stats: [
        { label: "Ranking", value: data.ranking ?? "N/A" },
        { label: "Solved", value: data.totalSolved ?? 0 },
        { label: "Easy", value: data.easySolved ?? 0 },
        { label: "Medium", value: data.mediumSolved ?? 0 },
        { label: "Hard", value: data.hardSolved ?? 0 },
      ],
    };
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      console.warn("LeetCode API request timed out");
    } else {
      console.error("LeetCode API Error:", error);
    }
    return null;
  }
}
