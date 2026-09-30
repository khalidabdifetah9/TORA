"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Noto_Sans_Ethiopic } from "next/font/google";

// Only used for the Amharic words
const ethiopic = Noto_Sans_Ethiopic({ subsets: ["ethiopic"] });

const lines = ["አንድ Bench", "ነፍ Workout"];

const links = [
  { label: "Place Order", href: "/order", main: true },
  { label: "Products", href: "/products", main: false },
];

const ease = [0.22, 1, 0.36, 1];

// True if the word contains Amharic letters
const isAmharic = (text) => /[\u1200-\u137F]/.test(text);

// The section plays the image first, then the panel
const section = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.35 } },
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

// The blur panel rises from the bottom, then plays its children
const panel = {
  hidden: { y: "100%" },
  visible: {
    y: "0%",
    transition: {
      duration: 1.1,
      ease,
      delayChildren: 0.4,
      staggerChildren: 0.12,
    },
  },
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

// Lines draw themselves from left to right
const line = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1.2, ease } },
};

export default function Hero() {
  return (
    <motion.section
      variants={section}
      initial="hidden"
      animate="visible"
      className="relative h-svh w-full overflow-hidden bg-[#0a0a0a] text-white"
    >
      <motion.div
        variants={imageWipe}
        className="absolute inset-0 overflow-hidden"
      >
        <motion.div variants={imageZoom} className="absolute inset-0">
          <Image
            src="/Landing_Img/Hero_Img.avif"
            alt="Home gym"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[60%_center]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      <motion.div
        variants={panel}
        className="absolute inset-x-0 bottom-0 border-t border-white/20 bg-black/25 px-6 pb-6 pt-5 backdrop-blur-2xl md:px-17.5 md:pb-10 md:pt-6"
      >
        <motion.div
          variants={fadeUp}
          className="mb-4 flex items-center justify-between font-poppins text-[10px] font-light uppercase tracking-[0.15em] text-white/70 sm:text-[11px] md:mb-6"
        >
          <span>Home Gym Gear</span>
          <span>Lifetime Access</span>
          <span className="hidden sm:block">One Time Purchase</span>
        </motion.div>

        <motion.div
          variants={line}
          className="mb-5 h-px origin-left bg-white/30 md:mb-8"
        />

        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          {/* Big heading */}
          <motion.h1
            variants={headlineVariants}
            className="text-[12vw] font-extrabold uppercase leading-[0.95] sm:text-[9vw] lg:text-[6.5vw]"
          >
            {lines.map((text) => (
              <span key={text} className="block">
                {text.split(" ").map((w, i) => (
                  <motion.span
                    key={i}
                    variants={word}
                    className={`mr-[0.25em] inline-block align-top ${
                      isAmharic(w)
                        ? `${ethiopic.className} text-[1.15em] font-black leading-[0.85]`
                        : ""
                    }`}
                  >
                    {w}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>

          {/* Text and links */}
          <div>
            <motion.p
              variants={fadeUp}
              className="mb-5 max-w-sm font-poppins text-sm leading-snug text-white/80 md:mb-8 md:text-lg"
            >
              Build your gym once. Train for life. Everything you need for a
              complete home workout, in one place.
            </motion.p>

            <div className="flex flex-col gap-3 sm:flex-row">
              {links.map((item) => (
                <motion.div key={item.label} variants={fadeUp} className="flex-1">
                  <Link
                    href={item.href}
                    className={`group flex items-center justify-between border px-5 py-3.5 font-poppins text-xs uppercase tracking-[0.15em] transition-colors duration-300 md:py-4 md:text-sm ${
                      item.main
                        ? "border-[#de322d] bg-[#de322d] hover:bg-transparent"
                        : "border-white/40 hover:border-[#de322d] hover:text-[#de322d]"
                    }`}
                  >
                    {item.label}
                   
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}