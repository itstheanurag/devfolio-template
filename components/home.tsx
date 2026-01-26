import HeroSection from "@/components/home/hero/hero-section";
import ActivitySection from "@/components/home/activity-section";
import ExperienceSection from "@/components/home/experience-section";
import TechStackSection from "@/components/home/tech-stack-section";
import BlogPreviewSection from "@/components/home/blog-preview-section";
import FeaturedProjectsSection from "@/components/home/featured-projects";

const Home = () => (
  <div className="flex flex-col">
    <div className="pb-12 border-b border-dashed border-zinc-800 -mx-6 md:-mx-12 px-6 md:px-12">
      <HeroSection />
    </div>

    <div className="py-12 border-b border-dashed border-zinc-800 -mx-6 md:-mx-12 px-6 md:px-12">
      <ActivitySection />
    </div>

    <div className="py-12 border-b border-dashed border-zinc-800 -mx-6 md:-mx-12 px-6 md:px-12">
      <FeaturedProjectsSection />
    </div>

    <div className="py-12 border-b border-dashed border-zinc-800 -mx-6 md:-mx-12 px-6 md:px-12">
      <ExperienceSection />
    </div>

    <div className="py-12 border-b border-dashed border-zinc-800 -mx-6 md:-mx-12 px-6 md:px-12">
      <TechStackSection />
    </div>

    <div className="pt-12 -mx-6 md:-mx-12 px-6 md:px-12">
      <BlogPreviewSection />
    </div>
  </div>
);

export default Home;
