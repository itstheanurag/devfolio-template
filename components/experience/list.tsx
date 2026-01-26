import CornerBorder from "@/components/ui/corner-border";
import { EXPERIENCE } from "@/data";
import { Experience } from "@/types";

const ExperienceList = () => (
  <div className="space-y-12">
    <div className="space-y-4 border-b border-dashed border-zinc-800 pb-8">
      <h1 className="text-3xl font-bold text-white">Experience</h1>
      <p className="text-zinc-400">My professional journey and track record.</p>
    </div>
    <div className="space-y-6">
      {EXPERIENCE.map((exp: Experience) => (
        <CornerBorder key={exp.id} className="w-full">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
            <div>
              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
              <span className="text-primary font-mono text-sm">
                {exp.company}
              </span>
            </div>
            <span className="text-sm font-mono text-zinc-500 bg-zinc-900 px-2 py-1 border border-zinc-800 rounded-sm whitespace-nowrap">
              {exp.period}
            </span>
          </div>
          <p className="text-zinc-400 leading-relaxed mt-4">
            {exp.description}
          </p>
        </CornerBorder>
      ))}
    </div>
  </div>
);

export default ExperienceList;
