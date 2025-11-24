'use client';

import Image from "next/image";
import CursorRipple from "@/app/components/CursorRipple";
import { motion } from "framer-motion";

type Project = {
  title: string;
  tag: string;
  description: string;
  image?: string;
  href?: string;
};

const projects: Project[] = [
  {
    title: "Pulseboard",
    tag: "SaaS analytics dashboard landing",
    description:
      "A soft-contrast, card-based marketing page for a product analytics tool, with a hero that showcases live metrics and a clear value-focused story.",
    image: "/projects/pulseboard.png",
  },
  {
    title: "NimbusPay",
    tag: "Fintech product site",
    description:
      "A calm, trust-first site for a payments product — focused on clean typography, clear pricing, and sections that build credibility and reduce friction.",
    image: "/projects/nimbuspay.png",
  },
  {
    title: "Mylo",
    tag: "AI assistant homepage",
    description:
      "A playful yet focused landing page for an AI productivity companion, with bold hero hierarchy and subtle motion to highlight key flows.",
    image: "/projects/mylo.png",
  },
  {
    title: "Aegis",
    tag: "Security / compliance site concept",
    description:
      "A structured, confident layout for a security-focused brand, combining strong headings, trust badges, and feature blocks designed for clarity.",
    image: "/projects/aegis.png",
  },
  {
    title: "BrightMind",
    tag: "Tutoring studio website",
    description:
      "A welcoming site for a 1:1 tutor, highlighting services, testimonials, and scheduling CTAs in a friendly, approachable visual language.",
    image: "/projects/brightmind.png",
  },
  {
    title: "LucidDocs",
    tag: "Documentation & knowledge hub",
    description:
      "A documentation-centric interface that emphasizes readability, content hierarchy, and navigation patterns that scale as knowledge grows.",
    image: "/projects/luciddocs.png",
  },
  {
    title: "StackPilot",
    tag: "GTM planning tool (concept)",
    description:
      "A concept site for a go-to-market planning tool, combining product storytelling, feature sections, and founder-focused messaging for B2B SaaS.",
    image: "/projects/stackpilot.png",
  },
  {
    title: "Studio+",
    tag: "Creative studio landing page",
    description:
      "A polished studio homepage highlighting services, process, and selected work — designed as a model for client-facing portfolio sites.",
    image: "/projects/studioplus.png",
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-[#FFF7EF] text-[#4A403B]">
      <CursorRipple />

      <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-0 py-20">
        <motion.h1
          className="text-4xl sm:text-5xl font-semibold text-[#1E1A19] mb-6 text-center sm:text-left"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Projects
        </motion.h1>

        <motion.p
          className="max-w-2xl text-sm sm:text-base text-[#4A403B] mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          A selection of landing pages, product sites, and conceptual interfaces
          crafted to show how I think about layout, hierarchy, and interaction
          for founder-led brands and SaaS products.
        </motion.p>

        <div className="flex flex-col gap-8">
          {projects.map((proj, index) => (
            <motion.article
              key={proj.title}
              className="flex flex-col gap-4 rounded-2xl border border-[#E3D5C5] bg-white/80 p-5 shadow-[0_18px_45px_rgba(58,45,42,0.10)] backdrop-blur-sm md:flex-row md:items-stretch"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
            >
              {/* Thumbnail */}
              <div className="relative h-40 w-full overflow-hidden rounded-xl bg-[#F5E5D2] md:h-auto md:max-w-[220px] border border-[#4A403B]">
                {proj.image ? (
                  <Image
                    src={proj.image}
                    alt={`${proj.title} preview`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-xs text-[#8B735C]">
                    Preview coming soon
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 space-y-2">
                <h2 className="text-lg sm:text-xl font-semibold text-[#1E1A19]">
                  {proj.title}
                </h2>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#8B735C]">
                  {proj.tag}
                </p>
                <p className="text-sm sm:text-base text-[#4A403B] leading-relaxed">
                  {proj.description}
                </p>

                {proj.href && (
                  <a
                    href={proj.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex text-sm font-medium text-[#C27A4A] underline-offset-4 hover:underline mt-3"
                  >
                    View live site
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}