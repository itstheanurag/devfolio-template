import ProjectCard from "@/components/project-card";
import CornerBorder from "@/components/ui/corner-border";
import { PROJECTS, HERO_DATA, BLOG_POSTS } from "@/data/data";
import { BlogPost } from "@/types";
import Link from "next/link";
import { BiBookOpen, BiCode, BiDownload } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

const Home = () => (
  <div className="space-y-24">
    <section className="space-y-8 animate-fade-in">
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-primary font-mono mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Open to work
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
          {HERO_DATA.tagline}
        </h1>
        <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
          {HERO_DATA.about}
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <Link href="/projects">
          <button className="group relative px-6 py-3 bg-zinc-100 text-zinc-950 font-medium hover:bg-white transition-colors">
            View Projects
            <div className="absolute inset-0 border border-dashed border-zinc-500 translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
          </button>
        </Link>
        <button className="flex items-center gap-2 px-6 py-3 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors">
          <BiDownload size={18} />q<span>Resume</span>
        </button>
      </div>
    </section>

    {/* Featured Projects Preview */}
    <section>
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <BiCode className="text-primary" />
          Featured Work
        </h2>
        <Link
          href="/projects"
          className="text-sm text-zinc-500 hover:text-primary flex items-center gap-1 group"
        >
          View all{" "}
          <BsArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.filter((p) => p.featured)
          .slice(0, 2)
          .map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </div>
    </section>

    {/* Latest Insights (Blog) */}
    <section>
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <BiBookOpen className="text-primary" />
          Latest Insights
        </h2>
        <Link
          href="/blog"
          className="text-sm text-zinc-500 hover:text-primary flex items-center gap-1 group"
        >
          Read all{" "}
          <BsArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {BLOG_POSTS.slice(0, 3).map((post: BlogPost) => (
          <CornerBorder key={post.id} className="h-full">
            <div className="flex flex-col h-full space-y-3">
              <span className="text-xs font-mono text-zinc-500">
                {post.date}
              </span>
              <h3 className="text-lg font-bold text-zinc-200 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3">
                {post.summary}
              </p>
            </div>
          </CornerBorder>
        ))}
      </div>
    </section>
  </div>
);

export default Home;
