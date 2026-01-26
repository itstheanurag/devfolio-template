import CornerBorder from "@/components/ui/corner-border";
import { HEATMAP_DATA } from "@/data";
import { BiGitBranch } from "react-icons/bi";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { getGithubContributions } from "@/utils/api";

const ActivitySection = async () => {
  const githubContributions = await getGithubContributions();
  const contributionData =
    githubContributions.length > 0 ? githubContributions : HEATMAP_DATA;

  const totalContributions = contributionData.reduce(
    (acc, day) => acc + day.count,
    0,
  );

  return (
    <section>
      <div className="flex justify-between items-end mb-4">
        <h2 className="text-lg font-bold flex items-center gap-2 text-zinc-200">
          <BiGitBranch className="text-zinc-400" />
          Contribution Activity
        </h2>
        <Link
          href="/stats"
          className="text-sm text-zinc-500 hover:text-primary flex items-center gap-1 group"
        >
          View full stats
          <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <CornerBorder>
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <span className="text-zinc-300">
              <span className="text-primary font-bold">
                {totalContributions.toLocaleString()}
              </span>{" "}
              contributions
            </span>
            <span className="text-zinc-500 font-mono text-xs">Last Year</span>
          </div>
          <div className="w-full overflow-x-auto">
            <div className="grid grid-rows-7 grid-flow-col gap-1 w-max">
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
          </div>
        </div>
      </CornerBorder>
    </section>
  );
};

export default ActivitySection;
