'use client';

import { motion } from "framer-motion";
import CursorRipple from "../components/CursorRipple";

export default function ApproachPage() {
  return (
    <div className="bg-[#FFF8ED] text-[#4A403B] min-h-screen px-6 sm:px-16 py-24">
        <CursorRipple />
      <motion.h1
        className="text-4xl sm:text-5xl font-semibold text-[#1E1A19] mb-12 text-center"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Approach
      </motion.h1>

      <motion.div
        className="max-w-3xl mx-auto space-y-12 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        {/* WHY FRONTEND */}
        <section className="bg-white/70 border border-[#E0CDB7] rounded-2xl p-6 shadow-sm backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-[#1E1A19] mb-3">
            Why Frontend?
          </h2>
          <p className="text-sm sm:text-base text-[#4A403B]">
            I’ve always been drawn to the intersection of design and engineering.
            Frontend is where ideas become experiences. It’s the layer where
            clarity, emotion, and usability meet — and where the smallest
            interaction can completely upgrade how someone feels using a product.
          </p>
        </section>

        {/* FRAMEWORKS & TOOLS */}
        <section className="bg-white/70 border border-[#E0CDB7] rounded-2xl p-6 shadow-sm backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-[#1E1A19] mb-3">
            Frameworks & Tools
          </h2>
          <p className="text-sm sm:text-base text-[#4A403B]">
            I work with React, Next.js, TailwindCSS, and Framer Motion to build
            interfaces that feel modern, intentional, and smooth. I care deeply
            about design fidelity — faithfully translating Figma or visual
            concepts into pixel-perfect implementation while keeping performance
            and accessibility in mind.
          </p>
        </section>

        {/* MY APPROACH */}
        <section className="bg-white/70 border border-[#E0CDB7] rounded-2xl p-6 shadow-sm backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-[#1E1A19] mb-3">
            My Approach
          </h2>
          <p className="text-sm sm:text-base text-[#4A403B]">
            I build with intention — clean structure, modular components, and a
            visual system that feels cohesive. I believe great UI should feel
            warm, intuitive, and welcoming. I use subtle motion, soft layering,
            and thoughtful spacing to create websites that feel alive but never
            overwhelming.
          </p>
        </section>
      </motion.div>
    </div>
  );
}