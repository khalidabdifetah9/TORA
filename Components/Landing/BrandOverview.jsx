"use client";

import { motion } from "framer-motion";

const headline =
  "Over the years, we've equipped hundreds of home lifters across addis ababa delivering commercial grade gear";

const stats = [
  { number: "100+", label: "Active Customer" },
  { number: "4+", label: "Years in business" },
  { number: "10+", label: "Workouts From One Bench" },
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

const line = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1.4, ease } },
};

export default function BrandOverview() {
  const words = headline.split(" ");

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex min-h-screen flex-col justify-end bg-[#0a0a0a] px-6 py-16 text-white md:px-[70px] md:py-[100px]"
    >
      <motion.p
        variants={fadeUp}
        className="mb-10 flex items-center gap-3 text-xl"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
        </span>
        Brand Overview
      </motion.p>

      <motion.h2
        variants={headlineVariants}
        className="mb-20 text-[clamp(2.2rem,6vw,5.5rem)] font-semibold uppercase leading-none"
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

      <div className="mb-16 flex flex-wrap gap-12">
        <motion.p
          variants={fadeUp}
          className="max-w-[500px] font-poppins text-base leading-snug text-white/75"
        >
          ወንዳወንድ Home Gym was founded with a simple vision: to give every lifter
          access to professional grade equipment without the hassle of a crowded
          gym. What started as a effort to source reliable gear has grown into a
          premier supplier of multi functional home fitness stations.
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="max-w-[500px] font-poppins text-base leading-snug text-white/75"
        >
          Tired of waiting 45 minutes for that guy to finish scrolling TikTok on
          the flat bench? Get your own bench from ወንዳወንድ Home
          Gym and actually get your workout done in the comfort of your own
          home.
        </motion.p>
      </div>

      <div className="relative flex flex-wrap gap-10 pt-8 md:gap-20">
        <motion.div
          variants={line}
          className="absolute left-0 top-0 h-px w-full origin-left bg-white/40"
        />

        {stats.map((item) => (
          <motion.div key={item.label} variants={fadeUp}>
            <h3 className="mb-1 font-poppins text-4xl font-semibold">
              {item.number}
            </h3>
            <span className="font-poppins text-sm text-white/60">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
