"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CONTACT } from "@/lib/constants";
import SEO from "@/app/components/shared/seo";

export default function PoliciesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Volleyball Fraser Valley Policies",
    "description": "Program policies including registration, refunds, cancellations, and code of conduct for Volleyball Fraser Valley programs."
  };

  return (
    <div className="relative">
      <SEO 
        title="Program Policies"
        description="Volleyball Fraser Valley program policies - registration, refunds, cancellations, weather policy, code of conduct, and safety guidelines for all participants."
        keywords="volleyball policies volleyball fraser valley, registration policy, refund policy volleyball, code of conduct sports, youth volleyball rules"
        canonicalUrl="https://www.volleyballfraservalley.ca/resources/policies"
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
              Policies & Forms
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-3">
            <span className="block text-gray-900 dark:text-gray-100">Read Before You Register</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Refund Policy, Terms of Service, and Privacy Policy
          </p>
        </div>
      </section>

      {/* Accordion Policies */}
      <section className="relative pb-16">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="multiple" className="space-y-2">
            <AccordionItem value="refund" className="border rounded-lg px-4">
              <AccordionTrigger className="py-4 text-left text-lg font-semibold">Refund Policy</AccordionTrigger>
              <AccordionContent className="text-gray-700 dark:text-gray-300 space-y-4">
                <div className="p-3 rounded-md bg-secondary/10 dark:bg-secondary/20 text-sm">Administration Fee: All refunds subject to $20.00 administration fee.</div>
                <div>
                  <h3 className="font-bold mb-2">Premier League Refunds</h3>
                  <p className="mb-2 font-medium">Valid Withdrawal Reasons:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Could not place athlete on a team</li>
                    <li>Transfer out of area (at organization&apos;s discretion)</li>
                    <li>No teams practicing on available evenings</li>
                  </ul>
                  <p className="mt-3 mb-2 font-medium">Timeline:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>2+ weeks before start: Full refund (less $20) OR full credit</li>
                    <li>Within 1 week: 50% refund (less $20) OR full credit</li>
                    <li>After start: No refund, pro-rated credit may apply</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Camps Refunds</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>2+ weeks before: Full refund (less $20) OR full credit</li>
                    <li>Within 2 weeks: 50% refund (less $20) OR full credit</li>
                    <li>After start: No refund, pro-rated credit possible</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Club Teams</h3>
                  <p>No refunds after team commitments (first practice in December). Injured athletes: Remaining payments cancelled, merchandise fees still apply.</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Adult League</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Refunds only if unable to place in tier</li>
                    <li>No refunds after schedule posted</li>
                    <li>Teams folding can use sub list</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Medical Withdrawals</h3>
                  <p>Pro-rated credit for documented medical issues.</p>
                </div>
                <div className="text-sm">All requests: Email <a className="text-primary" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tos" className="border rounded-lg px-4">
              <AccordionTrigger className="py-4 text-left text-lg font-semibold">Terms of Service</AccordionTrigger>
              <AccordionContent className="text-gray-700 dark:text-gray-300 space-y-4">
                <p><strong>Acceptance:</strong> By using our services, you agree to these terms.</p>
                <p><strong>Eligibility:</strong> 18+ or parental consent required.</p>
                <p><strong>Code of Conduct:</strong> Respectful behavior is required; violations may result in suspension.</p>
                <p><strong>Payments:</strong> Due upon registration at posted rates.</p>
                <p><strong>Privacy:</strong> Consent to data collection per Privacy Policy.</p>
                <p><strong>Intellectual Property:</strong> All content is property of Volleyball Fraser Valley.</p>
                <p><strong>Assumption of Risk:</strong> Participation involves inherent sports risks.</p>
                <p><strong>Modifications:</strong> Terms may be updated with notice.</p>
                <p><strong>Governing Law:</strong> Province of British Columbia, Canada.</p>
                <p><strong>Contact:</strong> <a className="text-primary" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> | {CONTACT.phone}</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="privacy" className="border rounded-lg px-4">
              <AccordionTrigger className="py-4 text-left text-lg font-semibold">Privacy Policy</AccordionTrigger>
              <AccordionContent className="text-gray-700 dark:text-gray-300 space-y-4">
                <div>
                  <h3 className="font-bold mb-2">Information Collected</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Contact details for players and families</li>
                    <li>Team rosters, schedules, statistics</li>
                    <li>Communication via platform</li>
                    <li>Payment information for transactions</li>
                    <li>Device information for security</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Information Use</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Provide and maintain services</li>
                    <li>Send program updates and notifications</li>
                    <li>Ensure security and prevent fraud</li>
                    <li>Meet legal obligations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Information Sharing</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Service providers for operations</li>
                    <li>Within league community as appropriate</li>
                    <li>Law enforcement as required</li>
                    <li>Sport governing bodies when necessary</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Your Rights</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Unsubscribe from promotional emails</li>
                    <li>Access and update account information</li>
                    <li>Contact for privacy concerns</li>
                  </ul>
                </div>
                <p className="text-sm">Powered by SportsEngine (NBCUniversal Privacy Policy applies)</p>
                <p className="text-sm">Contact: <a className="text-primary" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> | {CONTACT.phone}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-center mt-10 text-sm text-gray-600 dark:text-gray-400">
            Need help? Email <a className="text-primary" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
