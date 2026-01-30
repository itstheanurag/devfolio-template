import CornerBorder from "@/components/ui/corner-border";
import { BiGitBranch } from "react-icons/bi";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { getGithubContributions } from "@/utils/libs";
import { cn } from "@/utils/cn";

const ActivitySection = async () => {
  const contributionData = await getGithubContributions();

  const totalContributions = contributionData.reduce(
    (acc, day) => acc + day.count,
    0,
  );

  // ---- Group days into weeks (7 days per column)
  const weeks: (typeof contributionData)[] = [];
  let currentWeek: typeof contributionData = [];

  contributionData.forEach((day) => {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });

  if (currentWeek.length) {
    weeks.push(currentWeek);
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <section>
      <div className="flex justify-between items-end mb-4">
        <h2 className="text-lg font-bold flex items-center gap-2 text-foreground/90">
          <BiGitBranch className="text-foreground/50" />
          Contribution Activity
        </h2>

        <Link
          href="/stats"
          className="text-sm text-foreground/50 hover:text-primary flex items-center gap-1 group"
        >
          View full stats
          <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <CornerBorder>
        <div className="space-y-3">
          {/* Header */}
          <div className="flex justify-between text-sm">
            <span className="text-foreground/80">
              <span className="text-primary font-bold">
                {totalContributions.toLocaleString()}
              </span>{" "}
              contributions
            </span>
            <span className="text-foreground/50 font-mono text-xs">
              Last year
            </span>
          </div>

          {/* Month labels */}
          <div className="flex text-xs text-foreground/50 pl-6">
            {weeks.map((week, index) => {
              const firstDay = week[0];
              if (!firstDay) return <div key={index} className="w-4" />;

              const date = new Date(firstDay.date);
              const showMonth = date.getDate() <= 7;

              return (
                <div key={index} className="w-4 text-left">
                  {showMonth
                    ? date.toLocaleString("en-US", { month: "short" })
                    : ""}
                </div>
              );
            })}
          </div>

          {/* Heatmap */}
          <div className="flex gap-px overflow-x-scroll">
            {/* Weekday labels */}
            <div className="flex flex-col gap-1 text-xs text-foreground/50 pr-2">
              {["Mon", "", "Wed", "", "Fri", "", ""].map((day, i) => (
                <div key={i} className="h-3 leading-3">
                  {day}
                </div>
              ))}
            </div>

            {/* Contribution grid */}
            <div className="flex gap-1">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {week.map((day, dayIndex) => (
                    <div
                      key={`${weekIndex}-${dayIndex}`}
                      className={cn(
                        "w-3 h-3 rounded-xs transition-colors duration-300",
                        day.level === 0
                          ? "bg-surface"
                          : day.level === 1
                            ? "bg-primary/20"
                            : day.level === 2
                              ? "bg-primary/40"
                              : day.level === 3
                                ? "bg-primary/70"
                                : "bg-primary",
                        day.date === today &&
                          "ring-1 ring-primary ring-offset-1 ring-offset-background",
                      )}
                      title={`${day.date}: ${day.count} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </CornerBorder>
    </section>
  );
};

export default ActivitySection;
