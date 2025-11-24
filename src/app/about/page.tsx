'use client';

import Image from "next/image";
import CursorRipple from "@/app/components/CursorRipple";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#FFF7EF] text-[#4A403B]">
      <CursorRipple />

      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 sm:px-8 lg:px-0 py-20">
        <motion.h1
          className="text-4xl sm:text-5xl font-semibold text-[#1E1A19] mb-8 text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          About me
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          <Image
            src="/selfie.jpeg"
            alt="Sameer Sondhi portrait"
            width={150}
            height={150}
            className="mb-8 rounded-full border-4 border-[#E3D5C5] shadow-[0_18px_45px_rgba(58,45,42,0.18)] bg-[#FFF7EF]"
          />
        </motion.div>

        <motion.div
          className="max-w-3xl space-y-5 text-base sm:text-lg leading-relaxed text-center sm:text-left"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
        >
          <p>
            Hey, I’m <span className="font-medium text-[#1E1A19]">Sameer</span> — a
            frontend developer who loves building warm, modern websites for
            founders, small teams, and indie creators.
          </p>
          <p>
            I focus on crafting experience-driven marketing sites and landing
            pages using <span className="font-medium">Next.js, React, TailwindCSS</span>,
            and subtle motion. I care a lot about how a product feels: clear
            hierarchy, smooth interactions, and layouts that feel inviting rather
            than overwhelming.
          </p>
          <p>
            Before leaning into frontend, I worked across IT, product, and
            dev/QA — so I’m comfortable collaborating with designers, engineers,
            and ops folks to turn fuzzy ideas into shippable, maintainable
            interfaces.
          </p>
          <p>
            Outside of the editor, you’ll usually find me exploring local food
            spots, sketching site concepts, or thinking about how to make
            founder-led brands feel more human on the web.
          </p>
        </motion.div>
      </div>
    </div>
  );
}