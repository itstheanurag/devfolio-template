import React from "react";
import ProjectCard from "@/components/project-card";
import { getProjects } from "@/utils/libs";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="space-y-8 animate-fade-in text-foreground">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-foreground/60 max-w-2xl">
          A collection of projects I've worked on, ranging from web applications
          to distributed systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
