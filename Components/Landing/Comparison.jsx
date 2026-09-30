"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const headline = "One time investment";

const costs = [
  {
    label: "Gym membership",
    note: "Pay every Year, forever",
    price: "~50,00ETB",
    width: "100%",
    color: "bg-[#de322d]",
  },
  {
    label: "Home gym",
    note: "Pay once, own it for life",
    price: "~25,000ETB",
    width: "27%",
    color: "bg-white",
  },
];

const ease = [0.22, 1, 0.36, 1];

// The text column plays its children one after another
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
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

// The line above the costs draws itself from left to right
const line = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1.2, ease } },
};

// The image is wiped open from left to right
const imageWipe = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 1.3, ease },
  },
};

export default function Comparison() {
  const words = headline.split(" ");

  return (
    <section className="grid grid-cols-1 gap-12 bg-[#0a0a0a] px-6 pb-16 text-white md:min-h-screen md:grid-cols-2 md:gap-16 md:px-17.5 md:pb-0">
      {/* Left: text */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="pt-16 md:pt-25"
      >
        <motion.p
          variants={fadeUp}
          className="mb-8 flex items-center gap-3 text-xl md:mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
          </span>
          Comparison
        </motion.p>

        <motion.h2
          variants={headlineVariants}
          className="mb-8 text-4xl font-semibold uppercase leading-tight sm:text-5xl md:mb-12 md:text-6xl"
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

        <motion.p
          variants={fadeUp}
          className="mb-10 max-w-130 font-poppins text-base leading-snug text-white/90 md:mb-14 md:text-lg"
        >
          Skip the recurring monthly gym fees and costly club renewals. A single
          upfront purchase gives you lifetime access to a complete home gym
        </motion.p>

        <motion.div variants={fadeUp} className="relative max-w-130 pt-8">
          <motion.div
            variants={line}
            className="absolute left-0 top-0 h-px w-full origin-left bg-white/20"
          />

          <p className="mb-6 font-poppins text-xs uppercase tracking-widest text-white/60 md:text-sm">
            Total cost over 5 years
          </p>

          <div className="flex flex-col gap-6">
            {costs.map((item, i) => (
              <div key={item.label}>
                <div className="mb-2 flex items-end justify-between gap-4 font-poppins">
                  <div>
                    <p className="text-base font-semibold md:text-lg">
                      {item.label}
                    </p>
                    <p className="text-sm text-white/60">{item.note}</p>
                  </div>
                  <p className="text-2xl font-semibold md:text-3xl">
                    {item.price}
                  </p>
                </div>

                <div className="h-2 w-full bg-white/10">
                  <motion.div
                    className={`h-full ${item.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: item.width }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 1.2,
                      delay: i * 0.3,
                      ease,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 font-poppins text-base md:text-lg">
            <span className="font-semibold text-[#de322d]">
              You save ~25,000ETB
            </span>
            <span className="text-white/60">
              {" "}
              and it keeps paying off after that.
            </span>
          </p>
        </motion.div>
      </motion.div>

      {/* Right: image, wiped open from left to right */}
      <motion.div
        variants={imageWipe}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative h-[60vh] w-full overflow-hidden md:h-screen"
      >
        <Image
          src="/Landing_img/Side_Img.avif"
          alt="Home gym equipment"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </motion.div>
    </section>
  );
}