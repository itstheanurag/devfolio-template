import React from "react";
import CornerBorder from "@/components/ui/corner-border";
import {
  SiLeetcode,
  SiGithub,
  SiGitlab,
  SiCodeforces,
  SiGeeksforgeeks,
} from "react-icons/si";
import { getLeetCodeStats, getGithubContributions } from "@/utils/libs";
import { API_CONFIG } from "@/data";
import { APIConfig } from "@/schema/config";

const config = API_CONFIG as unknown as APIConfig;

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

  const displayStats = [];
  if (leetCodeStats) displayStats.push(leetCodeStats);

  // Add other platforms if they were to be implemented...

  return (
    <div className="space-y-12 animate-fade-in text-foreground">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Stats</h1>
        <p className="text-foreground/60 max-w-2xl">
          A quantitative look at my coding activity across various platforms.
        </p>
      </div>

      {/* Heatmap Section */}
      {config.integrations.github.enabled && (
        <section>
          <h2 className="text-xl font-bold text-foreground/90 mb-6">
            contribution_graph
          </h2>
          <CornerBorder className="w-full overflow-x-auto">
            <div className="grid grid-rows-7 grid-flow-col gap-1 w-max p-4">
              {githubContributions.map((day, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-xs flex-shrink-0 transition-colors duration-300 ${
                    day.level === 0
                      ? "bg-surface"
                      : day.level === 1
                        ? "bg-primary/20"
                        : day.level === 2
                          ? "bg-primary/40"
                          : day.level === 3
                            ? "bg-primary/70"
                            : "bg-primary"
                  }`}
                  title={`${day.date}: ${day.count} contributions`}
                />
              ))}
            </div>
          </CornerBorder>
        </section>
      )}

      {/* Platform Stats Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayStats.map((platform) => (
          <CornerBorder key={platform.id} className="h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-surface rounded-lg border border-border">
                {IconMap[platform.icon]}
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  {platform.platform}
                </h3>
                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/40 hover:text-primary transition-colors"
                >
                  @{platform.username}
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {platform.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-xs text-foreground/40 uppercase tracking-wider mb-1">
                    {stat.label}
                  </p>
                  <p className="font-mono font-bold text-foreground/80">
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
