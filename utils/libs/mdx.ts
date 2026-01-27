import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost, Experience, Project } from "@/types";

/**
 * Specialized parser for local blog posts.
 */
export async function getLocalBlog(contentPath: string): Promise<BlogPost[]> {
  const fullPath = path.join(process.cwd(), contentPath);
  if (!fs.existsSync(fullPath)) return [];

  const files = fs.readdirSync(fullPath);

  return files
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(fullPath, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContent);

      const id = file.replace(/\.mdx?$/, "");
      return {
        id,
        slug: data.slug || id,
        title: data.title || id,
        summary: data.summary || data.description || "",
        date: data.date
          ? new Date(data.date).toISOString()
          : new Date().toISOString(),
        readTime: data.readTime || "5 min read",
        tags: data.tags || [],
        content,
        ...data,
      } as BlogPost;
    });
}

/**
 * Specialized parser for local experience.
 */
export async function getLocalExperience(
  contentPath: string,
): Promise<Experience[]> {
  const fullPath = path.join(process.cwd(), contentPath);
  if (!fs.existsSync(fullPath)) return [];

  const files = fs.readdirSync(fullPath);

  return files
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(fullPath, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContent);

      const id = file.replace(/\.mdx?$/, "");
      return {
        id,
        slug: data.slug || id,
        company: data.company || "",
        role: data.role || data.title || "",
        period: data.period || "",
        description: data.description || data.summary || "",
        content,
        ...data,
      } as Experience;
    });
}

/**
 * Specialized parser for local projects.
 */
export async function getLocalProjects(
  contentPath: string,
): Promise<Project[]> {
  const fullPath = path.join(process.cwd(), contentPath);
  if (!fs.existsSync(fullPath)) return [];

  const files = fs.readdirSync(fullPath);

  return files
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(fullPath, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContent);

      const id = file.replace(/\.mdx?$/, "");
      return {
        id,
        slug: data.slug || id,
        title: data.title || "",
        description: data.description || data.summary || "",
        techStack: data.techStack || [],
        featured: data.featured || false,
        content,
        ...data,
      } as Project;
    });
}
