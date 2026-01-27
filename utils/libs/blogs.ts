import { API_CONFIG } from "@/data";
import { BlogPost } from "@/types";
import { getDevToPosts } from "./dev-to";
import { getMediumPosts } from "./medium";
import { getLocalBlog } from "./mdx";
import { APIConfig } from "@/schema/config";

const config = API_CONFIG as unknown as APIConfig;

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!config.blogs.enabled) return [];

  const posts: BlogPost[] = [];

  // 1. Local (MDX)
  if (config.blogs.mdx.enabled) {
    const localPosts = await getLocalBlog<BlogPost>(
      config.blogs.mdx.contentPath,
    );
    posts.push(...localPosts.map((p) => ({ ...p, source: "mdx" as const })));
  }

  // 2. Medium
  if (config.blogs.medium.enabled) {
    const mediumPosts = await getMediumPosts();
    posts.push(...mediumPosts);
  }

  // 3. Dev.to
  if (config.blogs.devto.enabled) {
    const devToPosts = await getDevToPosts();
    posts.push(...devToPosts);
  }

  // Deduplicate and Sort by date (descending)
  return posts
    .filter((v, i, a) => a.findIndex((t) => t.slug === v.slug) === i)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

