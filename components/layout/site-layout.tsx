"use client";

import React from "react";
import Link from "next/link";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { SOCIALS } from "@/data";
import Navbar from "@/components/navbar";

const IconMap: Record<string, React.ReactNode> = {
  Github: <BsGithub size={18} />,
  Twitter: <BsTwitter size={18} />,
  Linkedin: <FaLinkedinIn size={18} />,
};

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background flex justify-center selection:bg-primary/20">
      {/* Background decoration */}
      <div
        className="fixed inset-0 pointer-events-none z-[-1]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #27272a 1px, transparent 0)",
          backgroundSize: "40px 40px",
          opacity: 0.2,
        }}
      />

      {/* Main frame */}
      <div className="w-full max-w-6xl min-h-screen flex flex-col border-x border-dashed border-zinc-800 relative bg-zinc-900/10">
        {/* Decorative patterns */}
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-24 h-24 hidden xl:flex items-center justify-center opacity-20 pointer-events-none z-50">
          <div className="font-mono text-zinc-500 text-xs leading-[10px]"></div>
        </div>

        <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-24 h-24 hidden xl:flex items-center justify-center opacity-20 pointer-events-none z-50">
          <div className="font-mono text-zinc-500 text-xs leading-[10px] text-right"></div>
        </div>

        {/* Header */}
        <Navbar />

        {/* Main */}
        <main className="flex-1 w-full p-6 md:p-12 max-w-5xl mx-auto">
          {children}
        </main>

        {/* Footer */}
        <footer className="p-8 border-t border-dashed border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500 bg-zinc-950/30">
          <div className="font-mono">
            © {new Date().getFullYear()} Built with Next.js & Tailwind
          </div>

          <div className="flex gap-6">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label={social.name}
              >
                {IconMap[social.icon]}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SiteLayout;
