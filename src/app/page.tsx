"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CursorRipple from "@/app/components/CursorRipple"; // optional now

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF7EF] text-[#241814]">
      <CursorRipple />

      <main className="mx-auto flex max-w-5xl flex-col gap-24 px-6 pb-16 pt-16 sm:px-8 lg:px-0 sm:pt-24">
        {/* HERO */}
        <section className="grid gap-10 md:grid-cols-[1.1fr,0.9fr] md:items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#A47C57]">
              Portfolio of Sameer Sondhi
            </p>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-[#1C130F]">
              Frontend developer crafting{" "}
              <span className="relative inline-block">
                warm, modern web experiences
                <span className="absolute inset-x-0 bottom-1 h-2 rounded-full bg-[#F2DFCC]" />
              </span>
              .
            </h1>
            <p className="mt-6 max-w-xl text-sm sm:text-base leading-relaxed text-[#4A3830]">
              I design and build responsive marketing sites, landing pages, and
              product UIs with{" "}
              <span className="font-medium">Next.js, React, and Tailwind</span>.
              My focus is clean layouts, thoughtful motion, and interfaces that
              feel trustworthy and easy to use.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/projects"
                className="inline-flex items-center justify-center rounded-full bg-[#C2764A] px-6 py-3 text-sm font-medium text-[#FFF7EF] shadow-sm transition hover:bg-[#9F5D35]"
              >
                View my work
              </a>
              <a
                href="mailto:sameer.sondhi@outlook.com?subject=Project%20or%20role%20inquiry"
                className="inline-flex items-center justify-center rounded-full border border-[#DCC4AF] bg-[#FFF7EF]/80 px-6 py-3 text-sm font-medium text-[#3A241A] backdrop-blur-sm hover:bg-[#F6E6D8]"
              >
                Get in touch
              </a>
            </div>
          </motion.div>

          {/* Portrait + taglines */}
          <motion.div
            className="flex flex-col items-center md:items-end"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-[#EBD7C4]" />
              <div className="relative rounded-3xl border border-[#E0C8B2] bg-white/80 p-5 shadow-[0_18px_45px_rgba(36,19,15,0.15)] backdrop-blur-sm">
                <Image
                  src="/selfie.jpeg"
                  alt="Portrait of Sameer Sondhi"
                  width={120}
                  height={120}
                  className="mx-auto rounded-full border-2 border-[#F2DFCC] object-cover"
                />
                <p className="mt-4 text-center text-sm font-semibold text-[#1C130F]">
                  Sameer Sondhi
                </p>
                <p className="mt-1 text-center text-xs text-[#7A5A46]">
                  Frontend Developer & Interface Designer
                </p>
                <div className="mt-4 space-y-1 text-xs text-[#4A3830]">
                  <p>• Next.js & React frontends</p>
                  <p>• Conversion-focused landing pages</p>
                  <p>• Motion & micro-interactions</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* WHAT I DO */}
        <motion.section
          id="services"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1C130F]">
            What I do
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-[#4A3830]">
            I partner with founders, small teams, and product folks to turn
            ideas into clean, responsive web experiences—with a focus on clarity,
            polish, and performance.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <ServiceCard
              title="Landing pages"
              body="Conversion-minded hero sections, flows, and layouts built to clearly explain your product and guide visitors to action."
            />
            <ServiceCard
              title="Product UI"
              body="Marketing and app-facing interfaces designed for readability, hierarchy, and ease of use on all screen sizes."
            />
            <ServiceCard
              title="Frontend builds"
              body="Next.js + Tailwind implementations with smooth motion, reusable components, and maintainable structure."
            />
          </div>
        </motion.section>

        {/* FEATURED PROJECTS */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1C130F]">
            Selected projects
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-[#4A3830]">
            A few examples of the kind of interfaces I like to build. Each one
            focuses on clean typography, clear messaging, and calm interactions.
          </p>

          <div className="space-y-4">
            <ProjectCard
              name="Pulseboard"
              tag="SaaS dashboard landing page"
              description="Soft, layered hero for a B2B analytics tool. Focused on clarity, social proof, and a strong primary call-to-action."
              href="/projects/pulseboard"
            />
            <ProjectCard
              name="NimbusPay"
              tag="Fintech product site"
              description="Calm fintech aesthetic with trust-building layout, feature highlights, and responsive pricing sections."
              href="/projects/nimbuspay"
            />
            <ProjectCard
              name="Mylo"
              tag="AI assistant homepage"
              description="Playful yet focused AI tool landing page with bold hierarchy, motion-driven hero, and simple onboarding flow."
              href="/projects/mylo"
            />
          </div>

          <a
            href="/projects"
            className="inline-flex items-center text-sm font-medium text-[#8B5A3A] underline-offset-4 hover:underline"
          >
            View all projects →
          </a>
        </motion.section>

        {/* ABOUT */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid gap-8 md:grid-cols-[1.1fr,0.9fr]"
        >
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1C130F]">
              A bit about me
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#4A3830]">
              I’m a frontend developer with a background in economics and a
              strong interest in product thinking. I enjoy working on interfaces
              that feel considered—where layout, typography, and motion all
              reinforce the story a product is trying to tell.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#4A3830]">
              Recent work includes concept landing pages for SaaS tools,
              fintech products, and AI utilities. I like collaborating with
              founders, designers, and marketers who care about the details.
            </p>
          </div>

          <div className="space-y-3 rounded-2xl border border-[#E0C8B2] bg-white/70 p-5 shadow-sm backdrop-blur-sm">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A47C57]">
              Tools & stack
            </h3>
            <div className="flex flex-wrap gap-2 text-xs font-medium text-[#3A241A]">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Framer Motion",
                "Figma",
                "Vercel",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[#F4E4D4] px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="border-t border-[#E4D1C2] pt-10"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1C130F]">
            Let’s build something great.
          </h2>
          <p className="mt-3 max-w-xl text-sm sm:text-base text-[#4A3830]">
            I’m open to frontend roles (React/Next.js) and select freelance
            projects—especially landing pages and product marketing sites.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="mailto:sameer.sondhi@outlook.com?subject=Project%20or%20role%20inquiry"
              className="inline-flex items-center justify-center rounded-full bg-[#C2764A] px-6 py-3 text-sm font-medium text-[#FFF7EF] shadow-sm transition hover:bg-[#9F5D35]"
            >
              Email me
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-[#8B5A3A] underline-offset-4 hover:underline"
            >
              Connect on LinkedIn
            </a>
          </div>
        </motion.section>

        
      </main>
    </div>
  );
}

type ServiceCardProps = {
  title: string;
  body: string;
};

function ServiceCard({ title, body }: ServiceCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-[#E4D1C2] bg-white/70 p-5 shadow-sm backdrop-blur-sm">
      <h3 className="text-sm sm:text-base font-semibold text-[#1C130F]">
        {title}
      </h3>
      <p className="mt-2 text-xs sm:text-sm text-[#4A3830]">{body}</p>
    </div>
  );
}

type ProjectCardProps = {
  name: string;
  tag: string;
  description: string;
  href?: string;
};

function ProjectCard({ name, tag, description, href }: ProjectCardProps) {
  const Wrapper: React.ElementType = href ? "a" : "div";

  return (
    <Wrapper
      href={href}
      className="flex flex-col gap-3 rounded-2xl border border-[#E4D1C2] bg-white/70 p-5 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div>
        <h3 className="text-sm sm:text-base font-semibold text-[#1C130F]">
          {name}
        </h3>
        <p className="text-[0.65rem] sm:text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[#A47C57]">
          {tag}
        </p>
      </div>
      <p className="text-xs sm:text-sm text-[#4A3830]">{description}</p>
      {href && (
        <span className="text-xs font-medium text-[#8B5A3A]">
          View details →
        </span>
      )}
    </Wrapper>
  );
}