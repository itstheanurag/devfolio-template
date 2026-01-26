import React from "react";
import { Experience } from "@/types";
import CornerBorder from "@/components/ui/corner-border";

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <CornerBorder className="w-full">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
        <div>
          <h3 className="text-xl font-bold text-white">{experience.role}</h3>
          <span className="text-primary font-mono text-sm">
            {experience.company}
          </span>
        </div>
        <span className="text-sm font-mono text-zinc-500 bg-zinc-900 px-2 py-1 border border-zinc-800 rounded-sm whitespace-nowrap">
          {experience.period}
        </span>
      </div>

      <p className="text-zinc-400 leading-relaxed">{experience.description}</p>
    </CornerBorder>
  );
};

export default ExperienceItem;
