import { HERO_DATA, SITE_CONFIG } from "@/data";
import Link from "next/link";
import { BiDownload, BiLink, BiMailSend, BiMapPin } from "react-icons/bi";
import Image from "next/image";

const HeroProfile = () => {
  return (
    <div className="px-6 pb-8 md:px-10 relative text-foreground">
      {/* Avatar + Meta */}
      <div className="flex flex-col md:flex-row gap-6 md:items-end -mt-16 mb-8">
        {/* Avatar */}
        <div className="relative group/avatar">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl border-4 border-background bg-surface overflow-hidden shadow-2xl relative z-10">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
              alt="Profile"
              fill
              className="object-cover grayscale group-hover/avatar:grayscale-0 transition-all duration-500"
              priority
            />
          </div>

          {/* Decorative border */}
          <div className="absolute -bottom-2 -right-2 w-full h-full border border-dashed border-border rounded-xl -z-0" />
        </div>

        {/* Name + Info */}
        <div className="flex-1 space-y-2 mb-2 pt-2">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              {HERO_DATA.name}
            </h1>
            <p className="text-primary font-mono text-sm md:text-base mt-1">
              {HERO_DATA.role}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/40">
            <span className="flex items-center gap-1.5 cursor-default">
              <BiMapPin size={14} /> Global citizens
            </span>

            <a
              href={SITE_CONFIG.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <BiLink size={14} /> {SITE_CONFIG.url.replace(/^https?:\/\//, "")}
            </a>

            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <BiMailSend size={14} /> {SITE_CONFIG.email}
            </a>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-4 md:mt-0">
          <Link href="/projects">
            <button className="px-5 py-2.5 bg-foreground text-background font-bold text-sm hover:opacity-90 transition-opacity relative group overflow-hidden">
              <span className="relative z-10">View Work</span>
            </button>
          </Link>

          <button className="px-5 py-2.5 border border-border text-foreground/80 font-bold text-sm hover:text-primary hover:border-primary transition-colors flex items-center gap-2">
            <BiDownload size={16} /> Resume
          </button>
        </div>
      </div>

      {/* Bio */}
      <div className="max-w-3xl space-y-4 border-t border-dashed border-border pt-6">
        <h2 className="text-xl md:text-2xl font-light text-foreground/90 leading-relaxed">
          {HERO_DATA.tagline}
        </h2>
        <p className="text-foreground/60 leading-relaxed max-w-2xl">
          {HERO_DATA.about}
        </p>
      </div>
    </div>
  );
};

export default HeroProfile;
