import CornerBorder from "@/components/ui/corner-border";
import Link from "next/link";
import { BiTerminal } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { getExperience } from "@/utils/libs";

const ExperienceSection = async () => {
  const experiences = await getExperience();

  return (
    <section>
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <BiTerminal className="text-primary" />
          Work Experience
        </h2>
        <Link
          href="/experience"
          className="text-sm text-foreground/40 hover:text-primary flex items-center gap-1 group"
        >
          View full timeline
          <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="space-y-6">
        {experiences.slice(0, 2).map((exp) => (
          <CornerBorder key={exp.id} className="w-full">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  {exp.role}
                </h3>
                <span className="text-primary font-mono text-sm">
                  {exp.company}
                </span>
              </div>
              <span className="text-sm font-mono text-foreground/40 bg-surface px-2 py-1 border border-border rounded-sm whitespace-nowrap">
                {exp.period}
              </span>
            </div>

            <p className="text-foreground/60 leading-relaxed mt-4 line-clamp-2">
              {exp.description}
            </p>
          </CornerBorder>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
