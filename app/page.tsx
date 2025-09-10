'use client'

import { HeroSection } from "./components/hero-section";
import { FeatureCarousel } from "./components/feature-carousel";
import { PathwaySection } from "./components/pathway-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { VideosSection } from "./components/videos-section";
import { BlogSection } from "./components/blog-section";
import { TerritoriesSection } from "./components/territories-section";
import SEO from "./components/shared/seo";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "Fraser Valley Volleyball",
    "description": "Premier youth volleyball training programs in Surrey, Langley, and Abbotsford",
    "url": "https://www.fraservalleyvolleyball.ca",
    "telephone": "403-510-1784",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "BC",
      "addressCountry": "CA",
      "addressLocality": "Fraser Valley"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.1044,
      "longitude": -122.6598
    },
    "sameAs": [
      "https://www.instagram.com/fraservalleyvolleyball",
      "https://www.facebook.com/fraservalleyvolleyball"
    ]
  };

  return (
    <div>
      <SEO 
        title="Fraser Valley Volleyball"
        description="Premier youth volleyball training in Surrey, Langley & Abbotsford. Elite camps, leagues & club teams for grades 3-9. Join Vision Elite Academy today!"
        canonicalUrl="https://www.fraservalleyvolleyball.ca"
        jsonLd={jsonLd}
      />
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
