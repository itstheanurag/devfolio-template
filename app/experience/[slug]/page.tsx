import { getExperience } from "@/utils/libs";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

export async function generateStaticParams() {
  const experiences = await getExperience();

  return experiences
    .filter((e) => (e as any).slug)
    .map((e) => ({
      slug: (e as any).slug,
    }));
}

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const experiences = await getExperience();
  const experience = experiences.find((e) => (e as any).slug === slug);

  if (!experience) {
    notFound();
  }

  const content = ((experience as any).content ||
    (experience as any).summary ||
    experience.description ||
    "") as string;

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in text-foreground">
      {/* Back link */}
      <Link
        href="/experience"
        className="inline-flex items-center gap-2 text-sm text-foreground/40 hover:text-primary transition-colors group"
      >
        <BsArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        Back to Experience
      </Link>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-2">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              {experience.role || (experience as any).title}
            </h1>
            <p className="text-primary font-mono text-xl">
              {experience.company || "Experience"}
            </p>
          </div>

          {(experience.period || (experience as any).date) && (
            <span className="text-sm font-mono text-foreground/40 bg-surface px-2 py-1 border border-border rounded-sm whitespace-nowrap h-fit">
              {experience.period || (experience as any).date}
            </span>
          )}
        </div>

        {(experience as any).tags?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {(experience as any).tags.map((tag: string) => (
              <span
                key={tag}
                className="text-[10px] uppercase px-1.5 py-0.5 bg-surface border border-border rounded opacity-60 text-foreground/60"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
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
                className="text-primary underline underline-offset-4 hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
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
