import React from "react";
import { Project } from "../types";
import CornerBorder from "@/components/ui/corner-border";
import { DiGithubBadge } from "react-icons/di";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <CornerBorder className="h-full">
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
          <div className="flex gap-3">
            {project.github && (
              <Link
                href={project.github}
                className="text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiGithubBadge size={18} />
              </Link>
            )}
            {project.link && (
              <Link
                href={project.link}
                className="text-foreground/40 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsArrowRight size={18} />
              </Link>
            )}
          </div>
        </div>

        {project.image && (
          <div className="mb-4 overflow-hidden border border-border">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={200}
              className="w-full h-40 object-cover hover:grayscale-0 transition-all duration-500"
              loading="lazy"
            />
          </div>
        )}

        <p className="text-foreground/60 text-sm leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 bg-surface border border-border text-foreground/40 rounded-sm"
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
