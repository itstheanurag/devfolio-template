// components/home/blog-preview-section.tsx
import CornerBorder from "@/components/ui/corner-border";
import { BLOG_POSTS } from "@/data";
import Link from "next/link";
import { BiBookOpen } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

const BlogPreviewSection = () => (
  <section>
    <div className="flex justify-between items-end mb-8">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <BiBookOpen className="text-primary" />
        Latest Insights
      </h2>
      <Link
        href="/blog"
        className="text-sm text-zinc-500 hover:text-primary flex items-center gap-1 group"
      >
        Read all
        <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {BLOG_POSTS.slice(0, 3).map((post) => (
        <CornerBorder key={post.id} className="h-full">
          <div className="flex flex-col h-full space-y-3">
            <span className="text-xs font-mono text-zinc-500">{post.date}</span>
            <h3 className="text-lg font-bold text-zinc-200 group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3">
              {post.summary}
            </p>
          </div>
        </CornerBorder>
      ))}
    </div>
  </section>
);

export default BlogPreviewSection;
