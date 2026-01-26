"use client";

import React from "react";
import { EXPERIENCE } from "@/data";
import ExperienceItem from "@/components/experience-item";

export default function ExperiencePage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-zinc-100">Experience</h1>
        <p className="text-zinc-400 max-w-2xl">
          My professional journey in software engineering.
        </p>
      </div>

      <div className="space-y-6">
        {EXPERIENCE.map((item) => (
          <ExperienceItem key={item.id} experience={item} />
        ))}
      </div>
    </div>
  );
}
