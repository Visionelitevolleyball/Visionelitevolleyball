"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SEO from "@/app/components/shared/seo";
import {
  Phone,
  Mail,
  MapPin,
  Clock as ClockIcon,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function GetInTouchPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Fraser Valley Volleyball",
    "description": "Get in touch with Fraser Valley Volleyball. Contact us for program inquiries, registration help, or general questions.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Fraser Valley Volleyball",
      "telephone": "403-510-1784",
      "email": "info@fraservalleyvolleyball.ca"
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      setError("Network error. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative">
      <SEO 
        title="Get In Touch"
        description="Contact Fraser Valley Volleyball - Call 403-510-1784 or send us a message. Get help with program registration, volleyball training questions, and more."
        keywords="contact fraser valley volleyball, volleyball contact surrey, volleyball inquiries langley, contact vision elite academy, volleyball registration help"
        canonicalUrl="https://www.fraservalleyvolleyball.ca/contact/get-in-touch"
        jsonLd={jsonLd}
      />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-background dark:to-gray-950" />
      </div>
      <motion.div
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
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
              Contact Us
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-3">
            <span className="block text-gray-900 dark:text-gray-100">
              WE&apos;RE HERE TO
            </span>
            <span
              className={cn(
                "block mt-2",
                "bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600",
                "dark:from-amber-200 dark:via-yellow-400 dark:to-amber-600",
                "bg-clip-text text-transparent",
                "bg-[length:200%_100%]",
                "animate-gradient"
              )}
            >
              HELP
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Questions about programs, registration, or coaching? Reach out and
            our team will get back within 1–2 business days.
          </p>
        </div>
      </section>

      {/* Contact and Form */}
      <section className="relative pb-12">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Info Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" /> 403-510-1784
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />{" "}
                info@volleyballfraser.ca
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" /> Fraser Valley, BC
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-primary" /> Mon–Fri:
                9:00am–5:00pm
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-4">Send us a message</h3>
            {submitted ? (
              <div className="text-green-600 dark:text-green-400 font-medium">
                Thanks! Your message has been received.
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                {error && (
                  <div className="text-red-600 dark:text-red-400 text-sm p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    {error}
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className={cn(
                      "w-full px-3 py-2 rounded-lg",
                      "bg-card border border-border text-foreground",
                      "focus:outline-none focus:ring-2 focus:ring-primary"
                    )}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    required
                    className={cn(
                      "w-full px-3 py-2 rounded-lg",
                      "bg-card border border-border text-foreground",
                      "focus:outline-none focus:ring-2 focus:ring-primary"
                    )}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    required
                    rows={6}
                    className={cn(
                      "w-full px-3 py-2 rounded-lg",
                      "bg-card border border-border text-foreground",
                      "focus:outline-none focus:ring-2 focus:ring-primary"
                    )}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={submitting}
                  className={cn(
                    "group relative bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90",
                    "text-black font-semibold px-6 h-12",
                    "hover:shadow-lg hover:scale-105",
                    "transition-all duration-300",
                    "cursor-pointer overflow-hidden"
                  )}
                >
                  <span className="relative flex items-center gap-2">
                    {submitting ? "Sending..." : "Send Message"}
                    <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
