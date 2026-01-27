import CornerBorder from "@/components/ui/corner-border";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { getBlogPosts } from "@/utils/libs";

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="space-y-8 animate-fade-in text-foreground">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="text-foreground/60 max-w-2xl">
          Thoughts on software engineering, distributed systems, and modern web
          development.
        </p>
      </div>

      <div className="grid gap-6">
        {posts.map((post) => {
          const isExternal = !!post.url;
          const Wrapper = isExternal ? "a" : Link;
          const wrapperProps = isExternal
            ? { href: post.url, target: "_blank", rel: "noopener noreferrer" }
            : { href: `/blog/${post.slug}` };

          return (
            <Wrapper
              key={post.id}
              {...(wrapperProps as any)}
              className="group block"
            >
              <CornerBorder className="h-full hover:bg-surface transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-bold text-foreground/90 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-foreground/60 leading-relaxed">
                      {post.summary}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2 text-sm font-mono text-foreground/40 whitespace-nowrap">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                    {post.source && (
                      <span className="text-[10px] uppercase px-1.5 py-0.5 bg-surface border border-border rounded opacity-60">
                        {post.source}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-primary font-bold text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                  Read Article {isExternal && "on " + post.source}{" "}
                  <BsArrowRight />
                </div>
              </CornerBorder>
            </Wrapper>
          );
        })}
      </div>
    </div>
  );
}
