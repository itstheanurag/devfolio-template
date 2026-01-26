import HeroSection from "@/components/home/hero/hero-section";
import ActivitySection from "@/components/home/activity-section";
import ExperienceSection from "@/components/home/experience-section";
import TechStackSection from "@/components/home/tech-stack-section";
import BlogPreviewSection from "@/components/home/blog-preview-section";
import FeaturedProjectsSection from "@/components/home/featured-projects";

const Home = () => (
  <div className="space-y-24">
    <HeroSection />
    <ActivitySection />
    <FeaturedProjectsSection />
    <ExperienceSection />
    <TechStackSection />
    <BlogPreviewSection />
  </div>
);

export default Home;
