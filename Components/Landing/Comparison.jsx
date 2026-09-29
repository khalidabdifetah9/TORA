"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const costs = [
  {
    label: "Gym membership",
    note: "Pay every month, forever",
    price: "$3,000",
    width: "100%",
    color: "bg-[#de322d]",
  },
  {
    label: "Home gym",
    note: "Pay once, own it for life",
    price: "$800",
    width: "27%",
    color: "bg-white",
  },
];

export default function Comparison() {
  return (
    <section className="grid min-h-screen grid-cols-1 gap-10 bg-[#0a0a0a] px-6 text-white md:grid-cols-2 md:gap-16 md:px-17.5">
      <div className="pt-16 md:pt-25">
        <p className="mb-10 flex items-center gap-3 text-xl">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
          </span>
          Comparison
        </p>

        <h2 className="mb-12 font-semibold uppercase text-5xl leading-tight md:text-6xl">
          One time investment
        </h2>

        <p className="mb-14 max-w-130 font-poppins text-lg leading-snug text-white/90">
          Skip the recurring monthly gym fees and costly club renewals. A single
          upfront purchase gives you lifetime access to a complete home gym
        </p>

        <div className="max-w-130 border-t border-white/20 pt-8">
          <p className="mb-6 font-poppins text-sm uppercase tracking-widest text-white/60">
            Total cost over 5 years
          </p>

          <div className="flex flex-col gap-6">
            {costs.map((item, i) => (
              <div key={item.label}>
                <div className="mb-2 flex items-end justify-between font-poppins">
                  <div>
                    <p className="text-lg font-semibold">{item.label}</p>
                    <p className="text-sm text-white/60">{item.note}</p>
                  </div>
                  <p className="text-3xl font-semibold">{item.price}</p>
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
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 font-poppins text-lg">
            <span className="font-semibold text-[#de322d]">You save $2,200</span>
            <span className="text-white/60"> and it keeps paying off after that.</span>
          </p>
        </div>
      </div>

      <div className="relative h-screen w-full">
        <Image
          src="/Landing_img/tu.png"
          alt="Interface design preview"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}