"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const lines = ["One Bench", "ነፍ Workout"];

const links = [
  { label: "Place Order", href: "/order" },
  { label: "Products", href: "/products" },
];

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
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
  visible: { scaleX: 1, transition: { duration: 1.2, ease } },
};

const imageWipe = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 1.3, ease },
  },
};

export default function Hero() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="visible"
      className="relative flex min-h-screen overflow-hidden bg-[#0a0a0a] text-white"
    >
      <div className="flex w-[45%] shrink-0 flex-col bg-[#0a0a0a] px-6 pb-10 pt-10 md:w-[36%] md:px-17.5">
        <div className="h-[42vh]" />

        <motion.div
          variants={line}
          className="mb-5 h-px origin-left bg-white/50"
        />

        <motion.p
          variants={fadeUp}
          className="mb-14 flex items-center gap-3 text-xl"
        >
         
          Home Gym Gear
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="font-poppins text-sm font-light tracking-[0.15em]"
        >
          ICONIC WORKS
        </motion.p>
        <motion.span
          variants={line}
          className="mb-6 mt-3 block h-px w-5 origin-left bg-white/60"
        />

        <ul className="border-l border-white/50 pl-10 font-poppins text-[15px] leading-6">
          {links.map((item, i) => (
            <motion.li
              key={item.label}
              variants={fadeUp}
              className={`relative before:absolute before:-left-10 before:top-[0.7em] before:h-px before:w-3 before:bg-white/60 before:content-[''] ${
                i !== links.length - 1 ? "mb-6" : ""
              }`}
            >
              <Link
                href={item.href}
                className="group flex items-center gap-3 transition-colors duration-300 hover:text-[#de322d]"
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        <div className="mt-auto pt-10">
          <motion.div
            variants={line}
            className="mb-5 h-px origin-left bg-white/50"
          />
          <motion.p
            variants={fadeUp}
            className="max-w-[220px] font-poppins text-[11px] font-light leading-[1.8] tracking-[0.15em] text-white/70"
          >
            BUILD YOUR GYM ONCE. TRAIN FOR LIFE.
          </motion.p>
        </div>
      </div>

      <motion.div
        variants={imageWipe}
        className="relative flex-1 overflow-hidden"
      >
        <Image
          src="/Landing_Img/fa.png"
          alt="Portrait"
          fill
          priority
          className="scale-120 object-cover object-[60%_center]"
        />
      </motion.div>

      <motion.h1
        variants={headlineVariants}
        className="absolute left-6 top-10 z-20 text-[15vw] font-extrabold uppercase leading-[0.95] text-white mix-blend-difference md:left-17.5 md:text-[6vw]"
      >
        {lines.map((text) => (
          <span key={text} className="block">
            {text.split(" ").map((w, i) => (
              <motion.span
                key={i}
                variants={word}
                className="mr-[0.25em] inline-block align-top"
              >
                {w}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.h1>

      <motion.div
        variants={fadeUp}
        className="absolute right-6 top-10 z-30 md:right-17.5"
      >
        <Link href="/" aria-label="Home">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={56}
            height={56}
            className="h-12 w-12 object-contain md:h-14 md:w-14"
          />
        </Link>
      </motion.div>
    </motion.section>
  );
}