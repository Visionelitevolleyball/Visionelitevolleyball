import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/app/components/shared/navbar";
import { ProgramFinderBar } from "@/app/components/shared/program-finder-bar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Volleyball Fraser Valley",
  description: "Premier volleyball training and development in Fraser Valley",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <ProgramFinderBar />
        <main className="pt-[136px] lg:pt-[188px] bg-white">
          {children}
        </main>
      </body>
    </html>
  );
}
