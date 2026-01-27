import Parser from "rss-parser";
import { BlogPost } from "@/types";
import { API_CONFIG } from "@/data";

const parser = new Parser({
  customFields: {
    item: [
      ["content:encoded", "content"],
      ["content:encodedSnippet", "contentSnippet"],
    ],
  },
});

export async function getMediumPosts(): Promise<BlogPost[]> {
  if (!API_CONFIG.blogs.medium.enabled) return [];

  const { username } = API_CONFIG.blogs.medium;

  try {
    const feed = await parser.parseURL(`https://medium.com/feed/@${username}`);

    return feed.items.map((item): BlogPost => {
      const slug = item.link?.split("/").pop()?.split("?")[0] ?? "";

      const wordCount =
        item.contentSnippet?.split(/\s+/).length ??
        item.content?.split(/\s+/).length ??
        0;

      return {
        id: item.guid || item.link || slug,
        title: item.title ?? "",
        summary:
          item.contentSnippet?.slice(0, 180) ??
          item.content?.slice(0, 180) ??
          "",
        date: item.pubDate ? new Date(item.pubDate).toISOString() : "",
        readTime: `${Math.max(1, Math.ceil(wordCount / 200))} min read`,
        slug,

        // extended fields
        url: item.link,
        tags: item.categories ?? [],
        author: item.creator ?? feed.title,
        source: "medium",
      };
    });
  } catch (error) {
    console.error("Failed to fetch Medium posts:", error);
    return [];
  }
}
