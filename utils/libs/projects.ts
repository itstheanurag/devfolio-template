import { API_CONFIG, PROJECTS } from "@/data";
import { Project } from "@/types";
import { getGithubProjects } from "./github";
import { getLocalProjects } from "./mdx";
import { APIConfig } from "@/schema/config";

const config = API_CONFIG as unknown as APIConfig;

export async function getProjects(): Promise<Project[]> {
  if (!config.projects.enabled) return [];

  const { source, contentPath } = config.projects;

  if (source === "github") {
    const githubProjects = await getGithubProjects();
    return githubProjects;
  }

  if (source === "local" && contentPath) {
    const localProjects = await getLocalProjects(contentPath);
    return localProjects.length > 0 ? localProjects : PROJECTS;
  }

  return PROJECTS;
}
