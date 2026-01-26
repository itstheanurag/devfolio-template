import React from "react";
import { HEATMAP_DATA } from "@/data";

const Heatmap: React.FC = () => {
  // We need to render 52 weeks (columns) x 7 days (rows)
  // We'll slice the last 364 days to make a perfect grid
  const data = HEATMAP_DATA.slice(-364);

  // Group by weeks
  const weeks = [];
  for (let i = 0; i < data.length; i += 7) {
    weeks.push(data.slice(i, i + 7));
  }

  const getLevelColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-primary/30";
      case 2:
        return "bg-primary/50";
      case 3:
        return "bg-primary/70";
      case 4:
        return "bg-primary";
      default:
        return "bg-zinc-800/50";
    }
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Scroll wrapper for mobile */}
      <div className="overflow-x-auto pb-2 scrollbar-hide">
        <div className="flex gap-0.75 min-w-max">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-0.75">
              {week.map((day, dayIndex) => (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  className={`w-2.5 h-2.5 rounded-px ${getLevelColor(day.level)} hover:ring-1 hover:ring-zinc-400 transition-all`}
                  title={`${day.date}: ${day.count} contributions`}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end items-center gap-2 mt-2 text-xs text-zinc-500 font-mono">
        <span>Less</span>
        <div className="flex gap-1">
          <div className="w-2.5 h-2.5 bg-zinc-800/50 rounded-[1px]"></div>
          <div className="w-2.5 h-2.5 bg-primary/30 rounded-[1px]"></div>
          <div className="w-2.5 h-2.5 bg-primary/50 rounded-[1px]"></div>
          <div className="w-2.5 h-2.5 bg-primary/70 rounded-[1px]"></div>
          <div className="w-2.5 h-2.5 bg-primary rounded-[1px]"></div>
        </div>
        <span>More</span>
      </div>
    </div>
  );
};

export default Heatmap;
