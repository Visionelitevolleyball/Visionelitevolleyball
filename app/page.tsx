import { HeroSection } from "./components/hero-section";
import { FeatureCarousel } from "./components/feature-carousel";
import { PathwaySection } from "./components/pathway-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { VideosSection } from "./components/videos-section";
import { BlogSection } from "./components/blog-section";
import { TerritoriesSection } from "./components/territories-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureCarousel />
      <PathwaySection />
      <TestimonialsSection />
      <VideosSection />
      <BlogSection />
      <TerritoriesSection />
    </div>
  );
}
