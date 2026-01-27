import ProjectCard from "@/components/project-card";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FaCodepen } from "react-icons/fa";
import { getProjects } from "@/utils/libs";

const FeaturedProjectsSection = async () => {
  const projects = await getProjects();

  return (
    <section>
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <FaCodepen className="text-primary" />
          Featured Work
        </h2>
        <Link
          href="/projects"
          className="text-sm text-foreground/40 hover:text-primary flex items-center gap-1 group"
        >
          View all
          <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects
          .filter((p) => p.featured)
          .slice(0, 2)
          .map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
