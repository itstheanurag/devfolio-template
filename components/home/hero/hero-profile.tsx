import { HERO_DATA } from "@/data";
import Link from "next/link";
import { BiDownload, BiLink, BiMailSend, BiMapPin } from "react-icons/bi";
import Image from "next/image";

const HeroProfile = () => {
  return (
    <div className="px-6 pb-8 md:px-10 relative">
      {/* Avatar + Meta */}
      <div className="flex flex-col md:flex-row gap-6 md:items-end -mt-16 mb-8">
        {/* Avatar */}
        <div className="relative group/avatar">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl border-4 border-zinc-950 bg-zinc-800 overflow-hidden shadow-2xl relative z-10">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
              alt="Profile"
              fill
              className="object-cover grayscale group-hover/avatar:grayscale-0 transition-all duration-500"
              priority
            />
          </div>

          {/* Decorative border */}
          <div className="absolute -bottom-2 -right-2 w-full h-full border border-dashed border-zinc-600 rounded-xl -z-0" />
        </div>

        {/* Name + Info */}
        <div className="flex-1 space-y-2 mb-2 pt-2">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              {HERO_DATA.name}
            </h1>
            <p className="text-primary font-mono text-sm md:text-base mt-1">
              {HERO_DATA.role}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500">
            <span className="flex items-center gap-1.5 hover:text-zinc-300 transition-colors cursor-default">
              <BiMapPin size={14} /> San Francisco, CA
            </span>

            <a
              href="#"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <BiLink size={14} /> alex.dev
            </a>

            <a
              href="mailto:hello@example.com"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <BiMailSend size={14} /> hello@alex.dev
            </a>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-4 md:mt-0">
          <Link href="/projects">
            <button className="px-5 py-2.5 bg-zinc-100 text-zinc-950 font-bold text-sm hover:bg-white transition-colors relative group overflow-hidden">
              <span className="relative z-10">View Work</span>
              <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </Link>

          <button className="px-5 py-2.5 border border-zinc-700 text-zinc-300 font-bold text-sm hover:text-white hover:border-zinc-500 transition-colors flex items-center gap-2">
            <BiDownload size={16} /> Resume
          </button>
        </div>
      </div>

      {/* Bio */}
      <div className="max-w-3xl space-y-4 border-t border-dashed border-zinc-800 pt-6">
        <h2 className="text-xl md:text-2xl font-light text-zinc-200 leading-relaxed">
          {HERO_DATA.tagline}
        </h2>
        <p className="text-zinc-400 leading-relaxed max-w-2xl">
          {HERO_DATA.about}
        </p>
      </div>
    </div>
  );
};

export default HeroProfile;
