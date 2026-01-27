import React from "react";
import { Experience } from "@/types";
import { BsArrowRight } from "react-icons/bs";
import CornerBorder from "@/components/ui/corner-border";
import { cn } from "@/utils/cn";

interface ExperienceItemProps {
  experience: Experience;
  isClickable?: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  experience,
  isClickable,
}) => {
  return (
    <CornerBorder
      className={cn(
        "w-full transition-colors",
        isClickable && "hover:bg-surface",
      )}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
        <div>
          <h3 className="text-xl font-semibold text-foreground">
            {experience.role}
          </h3>
          <span className="text-primary font-mono text-sm">
            {experience.company}
          </span>
        </div>
        <span className="text-sm font-mono text-foreground/40 bg-surface px-2 py-1 border border-border rounded-sm whitespace-nowrap">
          {experience.period}
        </span>
      </div>

      <p className="text-foreground/60 leading-relaxed line-clamp-2">
        {experience.description}
      </p>

      {isClickable && (
        <div className="mt-2 flex items-center gap-2 text-sm font-semibold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
          View Details <BsArrowRight />
        </div>
      )}
    </CornerBorder>
  );
};

export default ExperienceItem;
