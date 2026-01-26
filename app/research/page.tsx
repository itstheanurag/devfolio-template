"use client";

import React from "react";
import { PUBLICATIONS } from "@/data";
import CornerBorder from "@/components/ui/corner-border";
import { BiLinkExternal } from "react-icons/bi";

export default function ResearchPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-zinc-100">Research</h1>
        <p className="text-zinc-400 max-w-2xl">
          Academic publications and conference papers.
        </p>
      </div>

      <div className="space-y-6">
        {PUBLICATIONS.map((pub) => (
          <CornerBorder key={pub.id} className="w-full">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-xl font-bold text-zinc-100 leading-tight">
                  {pub.title}
                </h3>
                <span className="text-sm font-mono text-zinc-500 bg-zinc-900 px-2 py-1 border border-zinc-800 rounded-sm whitespace-nowrap">
                  {pub.year}
                </span>
              </div>

              <div className="text-primary font-mono text-sm">
                {pub.conference}
              </div>

              <p className="text-zinc-400 leading-relaxed mt-2">
                {pub.description}
              </p>

              {pub.link && (
                <a
                  href={pub.link}
                  className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors mt-2 w-fit"
                >
                  <BiLinkExternal /> View Publication
                </a>
              )}
            </div>
          </CornerBorder>
        ))}
      </div>
    </div>
  );
}
