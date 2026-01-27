import { getBlogPosts } from "@/utils/libs";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

export async function generateStaticParams() {
  const posts = await getBlogPosts();

  return posts
    .filter((p) => !p.url)
    .map((post) => ({
      slug: post.slug,
    }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = await getBlogPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post || post.url) {
    notFound();
  }

  const content = ((post as any).content || post.summary || "") as string;

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in text-foreground">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-foreground/40 hover:text-primary transition-colors group"
      >
        <BsArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        Back to Blog
      </Link>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm font-mono text-foreground/40">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
      </div>

      {/* Content */}
      <div className="prose prose-invert prose-zinc max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkBreaks]}
          components={{
            h1: ({ children }) => (
              <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-2xl font-semibold mt-6 mb-3">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-xl font-semibold mt-5 mb-2">{children}</h3>
            ),
            p: ({ children }) => (
              <p className="leading-relaxed text-foreground/80">{children}</p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc pl-6 space-y-2">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal pl-6 space-y-2">{children}</ol>
            ),
            li: ({ children }) => <li>{children}</li>,
            strong: ({ children }) => (
              <strong className="text-foreground">{children}</strong>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:opacity-80"
              >
                {children}
              </a>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-2 border-border pl-4 italic text-foreground/70">
                {children}
              </blockquote>
            ),
          }}
        >
          {content.trim()}
        </ReactMarkdown>
      </div>
    </div>
  );
}
