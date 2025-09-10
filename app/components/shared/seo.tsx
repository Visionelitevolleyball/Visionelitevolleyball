'use client'

import { useEffect } from 'react'

interface SEOProps {
  title: string
  description?: string
  keywords?: string
  ogImage?: string
  ogType?: string
  canonicalUrl?: string
  jsonLd?: object
}

export default function SEO({
  title,
  description = 'Fraser Valley Volleyball - Premier youth volleyball training programs in Surrey, Langley, and Abbotsford. Elite coaching, camps, leagues, and club teams for grades 3-9.',
  keywords = 'fraser valley volleyball, fraser valley volleyball club, volleyball training surrey, volleyball camps langley, volleyball programs abbotsford, elite vision academy volleyball',
  ogImage = 'https://www.fraservalleyvolleyball.ca/og-image.jpg',
  ogType = 'website',
  canonicalUrl,
  jsonLd
}: SEOProps) {
  const fullTitle = `${title} | Vision Elite Academy`
  
  useEffect(() => {
    document.title = fullTitle
    
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta')
    metaDescription.setAttribute('name', 'description')
    metaDescription.setAttribute('content', description)
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription)
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta')
    metaKeywords.setAttribute('name', 'keywords')
    metaKeywords.setAttribute('content', keywords)
    if (!document.querySelector('meta[name="keywords"]')) {
      document.head.appendChild(metaKeywords)
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta')
    ogTitle.setAttribute('property', 'og:title')
    ogTitle.setAttribute('content', fullTitle)
    if (!document.querySelector('meta[property="og:title"]')) {
      document.head.appendChild(ogTitle)
    }
    
    const ogDesc = document.querySelector('meta[property="og:description"]') || document.createElement('meta')
    ogDesc.setAttribute('property', 'og:description')
    ogDesc.setAttribute('content', description)
    if (!document.querySelector('meta[property="og:description"]')) {
      document.head.appendChild(ogDesc)
    }
    
    const ogImg = document.querySelector('meta[property="og:image"]') || document.createElement('meta')
    ogImg.setAttribute('property', 'og:image')
    ogImg.setAttribute('content', ogImage)
    if (!document.querySelector('meta[property="og:image"]')) {
      document.head.appendChild(ogImg)
    }
    
    const ogTypeTag = document.querySelector('meta[property="og:type"]') || document.createElement('meta')
    ogTypeTag.setAttribute('property', 'og:type')
    ogTypeTag.setAttribute('content', ogType)
    if (!document.querySelector('meta[property="og:type"]')) {
      document.head.appendChild(ogTypeTag)
    }
    
    const twitterCard = document.querySelector('meta[name="twitter:card"]') || document.createElement('meta')
    twitterCard.setAttribute('name', 'twitter:card')
    twitterCard.setAttribute('content', 'summary_large_image')
    if (!document.querySelector('meta[name="twitter:card"]')) {
      document.head.appendChild(twitterCard)
    }
    
    if (canonicalUrl) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
      if (!link) {
        link = document.createElement('link')
        link.rel = 'canonical'
        document.head.appendChild(link)
      }
      link.href = canonicalUrl
    }
    
    if (jsonLd) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.text = JSON.stringify(jsonLd)
      script.setAttribute('data-seo-jsonld', 'true')
      document.head.appendChild(script)
      
      return () => {
        const oldScript = document.querySelector('script[data-seo-jsonld="true"]')
        if (oldScript) {
          oldScript.remove()
        }
      }
    }
  }, [fullTitle, description, keywords, ogImage, ogType, canonicalUrl, jsonLd])
  
  return null
}