"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const headline = "Train smarter with a dedicated workout guide";

const cards = [
  {
    number: "01",
    title: "Push day",
    muscles: "Chest · Shoulders · Triceps",
    image: "/Benches/bench_one.avif",
  },
  {
    number: "02",
    title: "Pull day",
    muscles: "Back · Biceps · Rear delts",
    image: "/Benches/bench_two.avif",
  },
];

const includes = [
  "Step-by-step exercises",
  "Sets and reps for every level",
  "Built for home training",
];

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const headlineVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const word = {
  hidden: { clipPath: "inset(0 100% 0 0)", x: -24, opacity: 0 },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease },
  },
};

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease } },
};

const card = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 1.1, ease },
  },
};

const line = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1.4, ease } },
};

export default function WorkoutGuide() {
  const words = headline.split(" ");

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="bg-[#0a0a0a] px-6 py-16 text-white md:px-17.5 md:py-25"
    >
      <motion.p
        variants={fadeUp}
        className="mb-10 flex items-center gap-3 text-xl"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
        </span>
        Workout Guide
      </motion.p>

      <motion.h2
        variants={headlineVariants}
        className="mb-8 max-w-5xl text-5xl font-semibold uppercase leading-none md:text-7xl"
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
        className="mb-16 max-w-130 font-poppins text-lg leading-snug text-white/75"
      >
        Every purchase comes with a workout guide that splits your training into
        push and pull days, so you always know what to do next.
      </motion.p>

      <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2">
        {cards.map((item) => (
          <motion.div
            key={item.title}
            variants={card}
            className="group relative h-[70vh] overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
              <div className="flex items-center justify-between font-poppins text-sm uppercase tracking-[0.2em]">
                <span>{item.number}</span>
                <span className="text-white/70">Guide</span>
              </div>

              <div>
                <h3 className="mb-3 text-5xl font-semibold uppercase leading-none md:text-6xl">
                  {item.title}
                </h3>
                <p className="mb-6 font-poppins text-base text-white/75">
                  {item.muscles}
                </p>

                <div className="mb-4 h-px w-full bg-white/40 transition-colors duration-300 group-hover:bg-[#d4d4d4]" />

                <p className="flex items-center justify-between font-poppins text-sm uppercase tracking-[0.2em]">
                  Explore guide
                  <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2 group-hover:text-[#d4d4d4]">
                    →
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative grid grid-cols-1 gap-6 pt-8 md:grid-cols-3">
        <motion.div
          variants={line}
          className="absolute left-0 top-0 h-px w-full origin-left bg-white/40"
        />

        {includes.map((text) => (
          <motion.p
            key={text}
            variants={fadeUp}
            className="font-poppins text-sm uppercase tracking-[0.2em] text-white/70"
          >
            {text}
          </motion.p>
        ))}
      </div>
    </motion.section>
  );
}