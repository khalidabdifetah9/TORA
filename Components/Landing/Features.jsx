"use client";

import { motion } from "framer-motion";

const features = [
  {
    word: "Heavy Duty",
    title: "Commercial Level steel",
    text: "Imported industrial steel built to handle heavy bench presses, squats, and hard daily training.",
    offset: "md:ml-0",
  },
  {
    word: "Versatile",
    title: "10+ Workouts in one",
    text: "Multi angle bench adjustments for incline, decline, and flat lifts your entire gym in a single setup.",
    offset: "md:ml-[30%]",
  },
  {
    word: "Space Smart",
    title: "Fits any room",
    text: "Engineered for maximum stability without taking over your living area. Easy to position and store.",
    offset: "md:ml-[10%]",
  },
  {
    word: "Local",
    title: "Fast delivery & support",
    text: "Direct setup help, quick local delivery across Addis Ababa, and gear ready to train on day one.",
    offset: "md:ml-[40%]",
  },
];

const ease = [0.22, 1, 0.36, 1];

const row = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const word = {
  hidden: { clipPath: "inset(0 100% 0 0)", x: -24, opacity: 0 },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease },
  },
};

const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease } },
};

const line = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1.2, ease } },
};

export default function Features() {
  return (
    <section className="min-h-screen bg-[#0a0a0a] px-6 py-16 text-white md:px-17.5 md:py-25">
      <p className="mb-16 flex items-center gap-3 text-xl">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
        </span>
        Why us
      </p>

      <div className="flex flex-col gap-12">
        {features.map((item) => (
          <motion.div
            key={item.word}
            variants={row}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className={`group w-full md:w-1/2 ${item.offset}`}
          >
            <div className="flex flex-col gap-4 pb-8 md:flex-row md:gap-0">
              <motion.h3
                variants={word}
                className="text-4xl font-normal uppercase md:w-1/3 md:pt-4 md:text-5xl"
              >
                {item.word}
              </motion.h3>

              <motion.div variants={fadeUp} className="md:w-2/3">
                <p className="mb-2 font-poppins text-sm uppercase tracking-[0.2em]">
                  {item.title}
                </p>
                <p className="font-poppins text-lg leading-relaxed text-white/70">
                  {item.text}
                </p>
              </motion.div>
            </div>

            {/* Line turns red on hover */}
            <motion.div
              variants={line}
              className="h-px origin-left bg-white/40 transition-colors duration-300 group-hover:bg-[#de322d]"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}