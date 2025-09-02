import { HeroSection } from "./components/hero-section"
import { FeatureCarousel } from "./components/feature-carousel"
import { PathwaySection } from "./components/pathway-section"
import { TestimonialsSection } from "./components/testimonials-section"
import { VideosSection } from "./components/videos-section"

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureCarousel />
      <PathwaySection />
      <TestimonialsSection />
      <VideosSection />
    </div>
  )
}