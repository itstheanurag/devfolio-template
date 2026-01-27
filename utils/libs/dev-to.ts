import { API_CONFIG } from "@/data";
import { BlogPost } from "@/types";

/**
 * Fetches blog posts from Dev.to API.
 */
export async function getDevToPosts(): Promise<BlogPost[]> {
  if (!API_CONFIG.blogs.devto.enabled) return [];

  const { username } = API_CONFIG.blogs.devto;

  try {
    const response = await fetch(
      `https://dev.to/api/articles?username=${username}`,
      { next: { revalidate: 3600 } },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch Dev.to posts");
    }

    const posts = await response.json();

    return posts.map(
      (post: any): BlogPost => ({
        id: post.id.toString(),
        title: post.title ?? "",
        summary: post.description ?? "",
        date: post.published_at
          ? new Date(post.published_at).toISOString()
          : "",
        readTime: `${post.reading_time_minutes ?? 1} min read`,
        slug: post.slug,
        url: post.url,
        coverImage: post.cover_image,
        tags: post.tag_list ?? [],
        author: post.user?.name,
        source: "devto",
      }),
    );
  } catch (error) {
    console.error("Dev.to API Error:", error);
    return [];
  }
}
