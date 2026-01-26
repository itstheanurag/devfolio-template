"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";

import { NAV_ITEMS } from "@/data";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-6 md:p-10 gap-6 border-b border-dashed border-zinc-800/50 backdrop-blur-md sticky top-0 z-40 bg-background/90">
      <Link
        href="/"
        className="text-xl font-mono font-bold tracking-tight text-white group"
      >
        <span className="text-primary mr-1">&gt;</span>
        <span className="group-hover:underline decoration-dashed underline-offset-4">
          dev_folio
        </span>
        <span className="animate-blink">_</span>
      </Link>

      <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:gap-8 text-sm font-medium">
        {NAV_ITEMS.map((item) => {
          const active =
            pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "relative transition-colors duration-200 hover:text-primary",
                active ? "text-primary" : "text-zinc-400",
              )}
            >
              {item.label}
            </Link>
          );
        })}

        <a
          href="mailto:hello@example.com"
          className="text-zinc-400 hover:text-primary transition-colors"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
