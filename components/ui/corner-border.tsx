import { cn } from "@/utils/cn";
import React from "react";

interface CornerBorderProps {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
}

const CornerBorder: React.FC<CornerBorderProps> = ({
  children,
  className,
  active = false,
}) => {
  return (
    <div className={cn("relative group", className)}>
      {/* Dashed Border Container */}
      <div
        className={cn(
          "relative z-10 h-full w-full border border-dashed border-zinc-800 bg-background/50 backdrop-blur-sm transition-colors duration-300",
          active
            ? "border-zinc-600 bg-zinc-900/50"
            : "hover:border-zinc-700 hover:bg-zinc-900/30",
        )}
      >
        {/* Corner Accents */}

        {/* Top Left */}
        <div className="absolute -top-px -left-px h-3 w-3 pointer-events-none">
          <div
            className={cn(
              "absolute top-0 left-0 h-full w-px bg-zinc-500 transition-[background-color,height] duration-300",
              active ? "bg-primary h-4" : "group-hover:bg-zinc-300",
            )}
          />
          <div
            className={cn(
              "absolute top-0 left-0 w-full h-px bg-zinc-500 transition-[background-color,width] duration-300",
              active ? "bg-primary w-4" : "group-hover:bg-zinc-300",
            )}
          />
        </div>

        {/* Top Right */}
        <div className="absolute -top-px -right-px h-3 w-3 pointer-events-none">
          <div
            className={cn(
              "absolute top-0 right-0 h-full w-px bg-zinc-500 transition-[background-color,height] duration-300",
              active ? "bg-primary h-4" : "group-hover:bg-zinc-300",
            )}
          />
          <div
            className={cn(
              "absolute top-0 right-0 w-full h-px bg-zinc-500 transition-[background-color,width] duration-300",
              active ? "bg-primary w-4" : "group-hover:bg-zinc-300",
            )}
          />
        </div>

        {/* Bottom Left */}
        <div className="absolute -bottom-px -left-px h-3 w-3 pointer-events-none">
          <div
            className={cn(
              "absolute bottom-0 left-0 h-full w-px bg-zinc-500 transition-[background-color,height] duration-300",
              active ? "bg-primary h-4" : "group-hover:bg-zinc-300",
            )}
          />
          <div
            className={cn(
              "absolute bottom-0 left-0 w-full h-px bg-zinc-500 transition-[background-color,width] duration-300",
              active ? "bg-primary w-4" : "group-hover:bg-zinc-300",
            )}
          />
        </div>

        {/* Bottom Right */}
        <div className="absolute -bottom-px -right-px h-3 w-3 pointer-events-none">
          <div
            className={cn(
              "absolute bottom-0 right-0 h-full w-px bg-zinc-500 transition-[background-color,height] duration-300",
              active ? "bg-primary h-4" : "group-hover:bg-zinc-300",
            )}
          />
          <div
            className={cn(
              "absolute bottom-0 right-0 w-full h-px bg-zinc-500 transition-[background-color,width] duration-300",
              active ? "bg-primary w-4" : "group-hover:bg-zinc-300",
            )}
          />
        </div>

        {/* Content */}
        <div className="h-full p-6">{children}</div>
      </div>
    </div>
  );
};

export default CornerBorder;
