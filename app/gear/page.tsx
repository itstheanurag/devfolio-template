"use client";

import React from "react";
import { GEAR } from "@/data";
import CornerBorder from "@/components/ui/corner-border";

export default function GearPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-zinc-100">Gear</h1>
        <p className="text-zinc-400 max-w-2xl">
          Tools, hardware, and software I use to get work done.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {GEAR.map((category) => (
          <CornerBorder key={category.category} className="h-full">
            <h3 className="text-xl font-bold text-primary mb-4 border-b border-dashed border-zinc-800 pb-2">
              {category.category}
            </h3>
            <ul className="space-y-3">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-zinc-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                  {item}
                </li>
              ))}
            </ul>
          </CornerBorder>
        ))}
      </div>
    </div>
  );
}
