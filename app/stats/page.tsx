import React from "react";
import { PLATFORM_STATS, HEATMAP_DATA, API_CONFIG } from "@/data";
import CornerBorder from "@/components/ui/corner-border";
import {
  SiLeetcode,
  SiGithub,
  SiGitlab,
  SiCodeforces,
  SiGeeksforgeeks,
} from "react-icons/si";
import { getLeetCodeStats, getGithubContributions } from "@/utils/api";

const IconMap: Record<string, React.ReactNode> = {
  Code2: <SiLeetcode className="text-[#fbbf24]" size={24} />,
  Github: <SiGithub className="text-[#10b981]" size={24} />,
  Gitlab: <SiGitlab className="text-[#f97316]" size={24} />,
  Terminal: <SiCodeforces className="text-[#3b82f6]" size={24} />,
  Cpu: <SiGeeksforgeeks className="text-[#22c55e]" size={24} />,
};

export default async function StatsPage() {
  const [leetCodeStats, githubContributions] = await Promise.all([
    getLeetCodeStats(),
    getGithubContributions(),
  ]);

  // Use real data if available, otherwise fallback to mock data
  const contributionData =
    githubContributions.length > 0 ? githubContributions : HEATMAP_DATA;

  // Filter stats based on API_CONFIG
  const enabledStats = PLATFORM_STATS.filter((stat) => {
    const config = API_CONFIG[stat.id as keyof typeof API_CONFIG];
    return config ? config.enabled : true;
  });

  // Merge API stats with local stats
  const displayStats = enabledStats.map((stat) => {
    if (stat.id === "leetcode" && leetCodeStats) {
      return leetCodeStats;
    }
    return stat;
  });

  return (
    <div className="space-y-12 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-zinc-100">Stats</h1>
        <p className="text-zinc-400 max-w-2xl">
          A quantitative look at my coding activity across various platforms.
        </p>
      </div>

      {/* Heatmap Section */}
      <section>
        <h2 className="text-xl font-bold text-zinc-200 mb-6">
          contribution_graph
        </h2>
        <CornerBorder className="w-full overflow-x-auto">
          <div className="grid grid-rows-7 grid-flow-col gap-1 w-max p-4">
            {contributionData.map((day, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-xs flex-shrink-0 transition-colors duration-300 ${
                  day.level === 0
                    ? "bg-zinc-800"
                    : day.level === 1
                      ? "bg-emerald-900"
                      : day.level === 2
                        ? "bg-emerald-700"
                        : day.level === 3
                          ? "bg-emerald-500"
                          : "bg-emerald-300"
                }`}
                title={`${day.date}: ${day.count} contributions`}
              />
            ))}
          </div>
        </CornerBorder>
      </section>

      {/* Platform Stats Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayStats.map((platform) => (
          <CornerBorder key={platform.id} className="h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                {IconMap[platform.icon]}
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-100">
                  {platform.platform}
                </h3>
                <a
                  href={platform.link}
                  className="text-sm text-zinc-500 hover:text-primary transition-colors"
                >
                  @{platform.username}
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {platform.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
                    {stat.label}
                  </p>
                  <p className="text-lg font-mono font-bold text-zinc-300">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </CornerBorder>
        ))}
      </section>
    </div>
  );
}
