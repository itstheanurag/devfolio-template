import CornerBorder from "@/components/ui/corner-border";
import Heatmap from "@/components/ui/heatmap";
import Link from "next/link";
import { BsArrowRight, BsGithub } from "react-icons/bs";

const ActivitySection = () => (
  <section>
    <div className="flex justify-between items-end mb-4">
      <h2 className="text-lg font-bold flex items-center gap-2 text-zinc-200">
        <BsGithub className="text-zinc-400" />
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
            <span className="text-primary font-bold">2,450</span> contributions
          </span>
          <span className="text-zinc-500 font-mono text-xs">
            Sep 2023 – Present
          </span>
        </div>
        <Heatmap />
      </div>
    </CornerBorder>
  </section>
);

export default ActivitySection;
