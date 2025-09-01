import { HeroSection } from "./components/hero-section"
import { FeatureCarousel } from "./components/feature-carousel"
import { PathwaySection } from "./components/pathway-section"

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureCarousel />
      <PathwaySection />
    </div>
  )
}