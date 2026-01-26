import CornerBorder from "@/components/ui/corner-border";
import HeroBanner from "./hero-banner";
import HeroProfile from "./hero-profile";

const HeroSection = () => (
  <section className="relative animate-fade-in">
    <CornerBorder className="w-full">
      <HeroBanner />
      <HeroProfile />
    </CornerBorder>
  </section>
);

export default HeroSection;
