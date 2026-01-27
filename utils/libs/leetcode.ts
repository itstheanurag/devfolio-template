import { API_CONFIG } from "@/data";
import { PlatformStat } from "@/types";

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
