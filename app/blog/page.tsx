"use client";

import React from "react";
import { BLOG_POSTS } from "@/data";
import CornerBorder from "@/components/ui/corner-border";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function BlogPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-zinc-100">Blog</h1>
        <p className="text-zinc-400 max-w-2xl">
          Thoughts on software engineering, distributed systems, and modern web
          development.
        </p>
      </div>

      <div className="grid gap-6">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group block"
          >
            <CornerBorder className="h-full hover:bg-zinc-900/30 transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="space-y-2 flex-1">
                  <h3 className="text-xl font-bold text-zinc-100 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {post.summary}
                  </p>
                </div>

                <div className="flex flex-col items-end gap-2 text-sm font-mono text-zinc-500 whitespace-nowrap">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-primary font-bold text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                Read Article <BsArrowRight />
              </div>
            </CornerBorder>
          </Link>
        ))}
      </div>
    </div>
  );
}
