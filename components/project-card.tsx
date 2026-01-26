import React from "react";
import { Project } from "../types";
import CornerBorder from "@/components/ui/corner-border";
import { DiGithubBadge } from "react-icons/di";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <CornerBorder className="h-full">
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-bold text-zinc-100">{project.title}</h3>
          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                className="text-zinc-500 hover:text-primary transition-colors"
              >
                <DiGithubBadge size={18} />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                className="text-zinc-500 hover:text-primary transition-colors"
              >
                <BsArrowRight size={18} />
              </a>
            )}
          </div>
        </div>

        {project.image && (
          <div className="mb-4 overflow-hidden border border-zinc-800 opacity-80 hover:opacity-100 transition-opacity">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={200}
              className="w-full h-40 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              loading="lazy"
              placeholder="blur"
              blurDataURL={project.image}
            />
          </div>
        )}

        <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </CornerBorder>
  );
};

export default ProjectCard;
