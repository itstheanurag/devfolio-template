import ProjectCard from "@/components/project-card";
import { PROJECTS } from "@/data/data";
import { Project } from "@/types";

const Projects: React.FC = () => (
  <div className="space-y-12">
    <div className="space-y-4 border-b border-dashed border-zinc-800 pb-8">
      <h1 className="text-3xl font-bold text-white">Projects</h1>
      <p className="text-zinc-400">
        A collection of open source libraries, experiments, and production
        applications.
      </p>
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      {PROJECTS.map((project: Project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </div>
);

export default Projects;
