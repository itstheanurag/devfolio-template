import React from "react";
import ExperienceItem from "@/components/experience-item";
import { getExperience } from "@/utils/libs";
import Link from "next/link";

export default async function ExperiencePage() {
  const experiences = await getExperience();

  return (
    <div className="space-y-8 animate-fade-in text-foreground">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Experience</h1>
        <p className="text-foreground/60 max-w-2xl">
          My professional journey in software engineering.
        </p>
      </div>

      <div className="space-y-6">
        {experiences.map((item) => {
          const slug = (item as any).slug;
          if (slug) {
            return (
              <Link
                key={item.id}
                href={`/experience/${slug}`}
                className="block group"
              >
                <ExperienceItem experience={item} isClickable />
              </Link>
            );
          }
          return <ExperienceItem key={item.id} experience={item} />;
        })}
      </div>
    </div>
  );
}
