"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const headline = "Your Entire Gym. Right at Home.";

const buttons = [
  { label: "Order Product", href: "/order", main: true },
  { label: "View Products", href: "/products", main: false },
];

const ease = [0.22, 1, 0.36, 1];

// The section plays the image first, then the text
const section = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

// The image is wiped open from left to right
const imageWipe = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 1.4, ease },
  },
};

// The image slowly settles from zoomed in to normal
const imageZoom = {
  hidden: { scale: 1.3 },
  visible: { scale: 1, transition: { duration: 2.4, ease } },
};

// The text block plays its children one after another
const textBlock = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

// The headline plays its words one after another
const headlineVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

// Each word is revealed from left to right
const word = {
  hidden: { clipPath: "inset(0 100% 0 0)", x: -24, opacity: 0 },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease },
  },
};

// Simple fade up for everything else
const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease } },
};

export default function CTA() {
  const words = headline.split(" ");

  return (
    <motion.section
      variants={section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative h-svh w-full overflow-hidden bg-[#0a0a0a] text-white"
    >
      {/* Full screen image */}
      <motion.div
        variants={imageWipe}
        className="absolute inset-0 overflow-hidden"
      >
        <motion.div variants={imageZoom} className="absolute inset-0">
          <Image
            src="/Benches/bench_three.png"
            alt="Home gym"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/60" />
      </motion.div>

      <motion.div
        variants={textBlock}
        className="absolute left-6 top-20 z-10 md:left-17.5 md:top-25"
      >
        <motion.p
          variants={fadeUp}
          className="mb-6 flex items-center gap-3 text-xl md:mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
          </span>
          Get Started
        </motion.p>

        <motion.h2
          variants={headlineVariants}
          className="max-w-4xl text-[11vw] font-semibold uppercase leading-none sm:text-[8vw] lg:text-[6vw]"
        >
          {words.map((w, i) => (
            <motion.span
              key={i}
              variants={word}
              className="mr-[0.25em] inline-block align-top"
            >
              {w}
            </motion.span>
          ))}
        </motion.h2>
      </motion.div>

      <motion.div
        variants={textBlock}
        className="absolute bottom-8 left-6 right-6 z-10 flex flex-col gap-3 sm:left-auto sm:w-auto sm:flex-row md:bottom-10 md:right-17.5"
      >
        {buttons.map((item) => (
          <motion.div key={item.label} variants={fadeUp}>
            <Link
              href={item.href}
              className={`group flex items-center justify-between gap-10 border px-6 py-4 font-poppins text-xs uppercase tracking-[0.15em] transition-colors duration-300 md:py-5 md:text-sm ${
                item.main
                  ? "border-[#de322d] bg-[#de322d] hover:bg-transparent"
                  : "border-white/40 bg-black/20 backdrop-blur-md hover:border-[#de322d] hover:text-[#de322d]"
              }`}
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}