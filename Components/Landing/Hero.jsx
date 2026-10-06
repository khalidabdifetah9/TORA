"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const lines = ["One Bench", "26+ Workout"];

const info = ["Home Gym Gear", "Lifetime Access", "One Time Purchase"];

const links = [
  { label: "Contact Us", href: "/contact_us", main: true },
  { label: "Products", href: "/products", main: false },
];

const ease = [0.22, 1, 0.36, 1];

const section = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.35 } },
};

const imageWipe = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 1.4, ease },
  },
};

const imageZoom = {
  hidden: { scale: 1.3 },
  visible: { scale: 1, transition: { duration: 2.4, ease } },
};

const content = {
  hidden: {},
  visible: { transition: { delayChildren: 0.3, staggerChildren: 0.15 } },
};

const headlineVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const rise = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.9, ease } },
};

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease } },
};

const line = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1.4, ease } },
};

export default function Hero() {
  const [ready, setReady] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current?.complete) setReady(true);

    const timer = setTimeout(() => setReady(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      variants={section}
      initial="hidden"
      animate={ready ? "visible" : "hidden"}
      className="relative h-svh w-full overflow-hidden bg-[#0a0a0a] text-white"
    >
      {/* Background image */}
      <motion.div
        variants={imageWipe}
        className="absolute inset-0 overflow-hidden"
      >
        <motion.div variants={imageZoom} className="absolute inset-0">
          <Image
            ref={imageRef}
            src="/Landing_Img/hero_img.avif"
            alt="Home gym"
            fill
            priority
            sizes="100vw"
            onLoad={() => setReady(true)}
            onError={() => setReady(true)}
            className="object-cover object-[60%_center] md:object-center"
          />
        </motion.div>

        {/* Heavy bottom fade for legible text, soft left fade on desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-black/60 via-transparent to-transparent lg:block" />
      </motion.div>

      {/* Content */}
      <motion.div
        variants={content}
        className="absolute inset-0 flex flex-col justify-end px-6 pb-6 pt-24 md:px-17.5 md:pb-10"
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          {/* Headline: each line rises out of a mask */}
          <motion.h1
            variants={headlineVariants}
            className="text-[10.5vw] font-black uppercase leading-[0.92] tracking-tight sm:text-[9vw] lg:text-[7.2vw]"
          >
            {lines.map((text) => (
              <span key={text} className="block overflow-hidden pb-[0.08em]">
                <motion.span variants={rise} className="block">
                  {text}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          {/* Paragraph + buttons */}
          <div className="flex w-full max-w-md flex-col gap-6 lg:pb-3">
            <motion.p
              variants={fadeUp}
              className="font-poppins text-sm leading-relaxed text-white/75 md:text-base"
            >
              Build your gym once. Train for life. Everything you need for a
              complete home workout, in one place.
            </motion.p>

            <div className="flex flex-col gap-3 sm:flex-row">
              {links.map((item) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  className="sm:flex-1"
                >
                  <Link
                    href={item.href}
                    className={`group relative flex items-center justify-center overflow-hidden border px-8 py-4 font-poppins text-xs uppercase tracking-[0.15em] transition-colors duration-500 ${
                      item.main
                        ? "border-[#d4d4d4] bg-[#d4d4d4] text-black hover:text-[#d4d4d4]"
                        : "border-white/40 text-white hover:border-[#d4d4d4] hover:text-black"
                    }`}
                  >
                    {/* sliding fill */}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-0 -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0 ${
                        item.main ? "bg-[#0a0a0a]" : "bg-[#d4d4d4]"
                      }`}
                    />
                    <span className="relative">{item.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Hairline */}
        <motion.div
          variants={line}
          className="mb-5 mt-8 h-px origin-left bg-white/30 md:mb-6 md:mt-10"
        />

        {/* Info bar */}
        <motion.ul
          variants={fadeUp}
          className="grid grid-cols-3 font-poppins text-[10px] font-light uppercase leading-snug tracking-[0.15em] text-white/70 sm:text-[11px]"
        >
          {info.map((text, i) => (
            <li
              key={text}
              className={`${
                i > 0 ? "border-l border-white/20 pl-3 sm:pl-6" : "pr-3"
              }`}
            >
              {text}
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.section>
  );
}