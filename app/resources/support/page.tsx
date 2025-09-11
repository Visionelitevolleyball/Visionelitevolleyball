"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CONTACT, EXTERNAL_LINKS } from "@/lib/constants";
import SEO from "@/app/components/shared/seo";
import { FileDown, Info, Check, Shield, Camera, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function SupportPage() {
  const [accepted, setAccepted] = useState(false);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "Volleyball Fraser Valley Support & FAQ",
    "description": "Support resources, forms, waivers, and frequently asked questions for Volleyball Fraser Valley programs."
  };

  return (
    <div className="relative">
      <SEO 
        title="Support & FAQ"
        description="Volleyball Fraser Valley support resources - download forms, waivers, photo consent, FAQ, and get help with registration and program questions."
        keywords="volleyball support resources, program FAQ, volleyball forms download, waiver forms, photo consent volleyball"
        canonicalUrl="https://www.volleyballvolleyballfraservalley.ca/resources/support"
        jsonLd={jsonLd}
      />
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-background dark:to-gray-950" />
      </div>

      {/* Animated grid pattern */}
      <motion.div
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Hero */}
      <section className="relative pt-10 sm:pt-12 pb-6">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex mb-4">
            <Badge className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 text-blue-900 dark:text-blue-200 border-blue-200 dark:border-blue-800">
              Athlete Support
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-3">
            <span className="block text-gray-900 dark:text-gray-100">2025 Volleyball Fraser Valley</span>
            <span className={cn("block mt-2","bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600","dark:from-amber-200 dark:via-yellow-400 dark:to-amber-600","bg-clip-text text-transparent","bg-[length:200%_100%]","animate-gradient")}>Athlete Subsidy Program</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Volleyball Fraser Valley is committed to supporting young athletes in our community. Get funding for Vision Volleyball Club, League and Camps.
          </p>
        </div>
      </section>

      {/* Subsidy Info */}
      <section className="relative pb-10">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2 p-6 rounded-2xl border bg-white dark:bg-gray-900/60 border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Info className="h-5 w-5 text-primary" /> Key Information</h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>Assistance up to $500 per calendar year per athlete</li>
              <li>Covers program registration fees only</li>
              <li>Athletes must be 18 or under</li>
              <li>Not retroactive - register before applying</li>
              <li>Applications reviewed monthly (submit by 15th)</li>
              <li>Minimum 3 weeks processing time</li>
            </ul>
            <div className="mt-4 text-sm text-amber-600 dark:text-amber-300">
              Note: KidSport and Jumpstart do not fund our programs as we are not associated with Volleyball BC.
            </div>
          </div>

          <div className="p-6 rounded-2xl border bg-white dark:bg-gray-900/60 border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold mb-3">Application Process</h3>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                <div className="flex items-center justify-between gap-3">
                  <span>Download Application Form</span>
                  <Button
                    onClick={() => window.open(CONTACT.subsidyFormUrl, "_blank")}
                    className={cn(
                      "group relative bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90",
                      "text-black font-semibold px-4 h-10",
                      "hover:shadow-lg hover:scale-105",
                      "transition-all duration-300",
                      "cursor-pointer overflow-hidden",
                      "before:absolute before:w-[0.4rem] before:h-[20rem] before:top-0 before:translate-x-[-10rem]",
                      "hover:before:translate-x-[22rem] before:duration-[0.8s] before:-skew-x-[10deg]",
                      "before:transition-all before:bg-white before:blur-[10px] before:opacity-60"
                    )}
                  >
                    <span className="relative flex items-center gap-2">
                      Download PDF <FileDown className="h-4 w-4" />
                    </span>
                  </Button>
                </div>
              </li>
              <li>Gather Required Documents: Proof of total household income (CRA Notice of Assessment) and proof of social assistance or foster parent status</li>
              <li>Submit Your Application: Email to <a className="text-primary" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            </ol>
            <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">Questions? Email <a className="text-primary" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div>
          </div>
        </div>
      </section>

      {/* Waiver */}
      <section className="relative pb-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl border bg-white dark:bg-gray-900/60 border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Liability Waiver & Media Consent</h2>
            </div>

            <div className="p-4 rounded-xl bg-secondary/10 dark:bg-secondary/20 text-sm text-gray-700 dark:text-gray-300 mb-4">
              RELEASE OF LIABILITY, WAIVER OF CLAIMS, ASSUMPTION OF RISKS AND INDEMNITY AGREEMENT
            </div>

            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2 text-gray-700 dark:text-gray-300 mb-4">
              <li className="flex items-start gap-2"><Check className="h-4 w-4 text-primary mt-0.5" /> Acknowledges inherent risks in sports participation</li>
              <li className="flex items-start gap-2"><Check className="h-4 w-4 text-primary mt-0.5" /> Releases Volleyball Fraser Valley from liability</li>
              <li className="flex items-start gap-2"><Camera className="h-4 w-4 text-primary mt-0.5" /> Includes photo/video consent for promotional use</li>
              <li className="flex items-start gap-2"><Check className="h-4 w-4 text-primary mt-0.5" /> Required for all program participants</li>
              <li className="flex items-start gap-2"><Check className="h-4 w-4 text-primary mt-0.5" /> NO unauthorized filming permitted at training sessions</li>
            </ul>

            <div className="flex items-center gap-3">
              <input id="accept" type="checkbox" className="h-5 w-5" checked={accepted} onChange={(e) => setAccepted(e.target.checked)} />
              <label htmlFor="accept" className="text-gray-700 dark:text-gray-300">I have read and accept the waiver conditions</label>
            </div>

            <div className="mt-4">
              <Button
                disabled={!accepted}
                onClick={() => window.open(EXTERNAL_LINKS.register, "_blank")}
                className={cn(
                  "group relative bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90",
                  "text-black font-semibold px-6 h-12",
                  "hover:shadow-lg hover:scale-105",
                  "transition-all duration-300",
                  "cursor-pointer overflow-hidden",
                  "before:absolute before:w-[0.4rem] before:h-[20rem] before:top-0 before:translate-x-[-10rem]",
                  "hover:before:translate-x-[22rem] before:duration-[0.8s] before:-skew-x-[10deg]",
                  "before:transition-all before:bg-white before:blur-[10px] before:opacity-60"
                )}
              >
                <span className="relative flex items-center gap-2">
                  Continue to Registration <ArrowRight className="h-5 w-5" />
                </span>
              </Button>
            </div>

            <div className="mt-6">
              <Accordion type="single" collapsible>
                <AccordionItem value="waiver-full" className="border-0">
                  <AccordionTrigger className="px-0">Full Waiver Text</AccordionTrigger>
                  <AccordionContent className="px-0 text-gray-700 dark:text-gray-300 space-y-3">
                    <p><strong>Assumption of Risks:</strong> I am aware that participation in sports, offered by or associated with Volleyball Fraser Valley (&quot;FVV&quot;) and its affiliate programs, exposes my child to inherent risks. By engaging my child in these activities, I freely accept and fully assume all inherent risks, dangers, and hazards, including the possibility of personal injury, death, property damage, or loss.</p>
                    <p><strong>Release of Liability:</strong> In consideration of FVV and its affiliates providing my child with the opportunity to participate in their activities, I agree to waive any and all claims that I have or may in the future have against FVV and its affiliates, directors, officers, employees, agents, representatives, assigns and successors, and to release them from any and all liability for any loss, damage, injury or expense that I or my child may suffer due to any cause whatsoever, including negligence, breach of contract, breach of statutory duty of care, and/or breach of the Occupiers Liability Act.</p>
                    <p><strong>Indemnity:</strong> I agree to hold harmless and indemnify FVV and its affiliates from any and all liability for any property damage or personal injury to any third party resulting from my child’s participation.</p>
                    <p><strong>Personal Information:</strong> I consent to FVV collecting and using personal information for the purpose of administering programs. I also authorize FVV to take photographs and/or video of my child for promotional use without charge. Unauthorized filming by parents or spectators is strictly prohibited at training sessions.</p>
                    <p>By completing this registration, I confirm that I have read and accept the above conditions.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="text-sm text-gray-600 dark:text-gray-400 mt-6">
            Contact: <a className="text-primary" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> • {CONTACT.phone}
          </div>
        </div>
      </section>
    </div>
  );
}
