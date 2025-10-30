"use client";

import React from "react";
import SmartButton from "./Button";
import { Phone } from "@phosphor-icons/react";
import Image from "next/image";
import { motion } from "framer-motion";

const Herobanner = () => {
  return (
    <section className="lg:h-screen bg-[#003432] flex items-center pt-20 lg:mt-0">
      <div className="mx-auto max-w-350 px-6 lg:px-8 py-12 w-full">
        <div className="grid md:grid-cols-2 gap-4 items-center">
          {/* ==== LEFT TEXT ==== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-xl font-semibold text-[#738C8B]">
              Hello there, I&apos;m{" "}
              <span
                className="text-[#E2FF76] font-normal"
                style={{ fontFamily: "var(--font-instrument-serif)" }}
              >
                IDEMETO
              </span>{" "}
              EMEDIONG.
            </p>

            <div className="py-5">
              <p
                className="text-5xl lg:text-7xl leading-tight text-white"
                style={{ fontFamily: "var(--font-instrument-serif)" }}
              >
                Software Developer / Frontend Engineer
              </p>
            </div>

            <p className="text-xl text-[#738C8B] font-medium max-w-lg">
              I design websites that crush performance goals making both your
              users and investors happy.
            </p>

            <div className="py-10">
              <SmartButton
                label="Schedule a call"
                icon={<Phone size={20} weight="duotone" />}
                onClick={() => alert("Let's connect!")}
              />
            </div>
          </motion.div>

          {/* ==== RIGHT IMAGE ==== */}
          <motion.div
            className="relative flex justify-center md:justify-end"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 1.5, -1.5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
              className="relative w-3/4 md:w-4/5 lg:w-[90%] xl:w-[80%] scale-105"
            >
              <div className="absolute inset-0 blur-3xl opacity-30 bg-emerald-500/40 rounded-full" />
              <Image
                src="/assets/waza-anime-removebg-preview.png"
                alt="Animated developer illustration"
                width={800}
                height={800}
                priority
                className="relative z-10 w-full h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Herobanner;
