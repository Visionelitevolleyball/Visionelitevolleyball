import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/app/components/shared/navbar";
import { ProgramFinderBar } from "@/app/components/shared/program-finder-bar";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/app/components/scroll-to-top";
import { Footer } from "@/app/components/shared/footer";
import { NewsletterPopup } from "@/app/components/newsletter-popup";
import { GoogleAnalytics } from "@/app/components/analytics/google-analytics";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Volleyball Fraser Valley | Vision Elite Academy",
    template: "%s | Vision Elite Academy"
  },
  description: "Premier youth volleyball training in Surrey, Langley & Abbotsford. Elite camps, leagues & club teams for grades 3-9. Join Vision Elite Academy today!",
  keywords: ["volleyball fraser valley", "volleyball fraser valley club", "volleyball training surrey", "volleyball camps langley", "volleyball programs abbotsford", "vision elite academy", "youth volleyball", "volleyball academy"],
  authors: [{ name: "Vision Elite Academy" }],
  creator: "Vision Elite Academy",
  publisher: "Vision Elite Academy",
  metadataBase: new URL("https://www.volleyballfraservalley.ca"),
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.volleyballfraservalley.ca",
    siteName: "Volleyball Fraser Valley",
    title: "Volleyball Fraser Valley | Vision Elite Academy",
    description: "Premier youth volleyball training in Surrey, Langley & Abbotsford. Elite camps, leagues & club teams for grades 3-9.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Volleyball Fraser Valley - Vision Elite Academy"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Volleyball Fraser Valley | Vision Elite Academy",
    description: "Premier youth volleyball training in Surrey, Langley & Abbotsford. Elite camps, leagues & club teams for grades 3-9.",
    images: ["/og-image.jpg"],
    creator: "@fraservalleyvb"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: "https://www.volleyballfraservalley.ca"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#ECBA58" />
        <meta name="geo.region" content="CA-BC" />
        <meta name="geo.placename" content="Fraser Valley" />
        <meta name="geo.position" content="49.1044;-122.6598" />
        <meta name="ICBM" content="49.1044, -122.6598" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        <SpeedInsights />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <ProgramFinderBar />
          <main className="pt-[136px] lg:pt-[188px] bg-background">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
          <NewsletterPopup />
        </ThemeProvider>
      </body>
    </html>
  );
}
