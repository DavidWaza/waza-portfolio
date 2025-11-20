"use client";

import { motion } from "framer-motion";
import { GithubLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#F6F6EF] via-[#F9FAF8] to-[#E9F3EF] py-24">
      <div className="absolute -top-32 -left-20 w-96 h-96 bg-[#E2FF76]/20 rounded-full blur-3xl opacity-60 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-120 h-120 bg-[#003432]/5 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10 px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-full scale-105 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#003432]/10" />
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-8 border-white shadow-xl hover:shadow-2xl transition-all duration-500">
              <Image
                src="/assets/waza.png"
                alt="Emediong Idemeto"
                fill
                priority
                sizes="100vw"
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[#003432] max-w-xl"
        >
          <p
            className="text-2xl mb-4 text-[#003432]/70"
            style={{ fontFamily: "var(--font-instrument-serif)" }}
          >
            About Me
          </p>

          <h2
            className="text-4xl sm:text-5xl font-semibold mb-6 leading-tights"
            style={{ fontFamily: "var(--font-instrument-serif)" }}
          >
            Passionate Frontend Developer & Visual Problem Solver
          </h2>

          <p className="text-[#738c8b] text-lg leading-relaxed mb-5">
            I’m{" "}
            <span className="text-[#003432] font-semibold">
              Emediong Idemeto
            </span>
            , a frontend engineer dedicated to building clean, modern, and
            human-centered web experiences. I specialize in translating design
            concepts into interactive and scalable products that delight users.
          </p>

          <p className="text-[#738c8b] text-lg leading-relaxed mb-10">
            When I’m not coding, I enjoy exploring design trends, working on
            motion UI experiments, and mentoring others in the dev community.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            {[
              {
                href: "https://github.com/davidWaza",
                label: "GitHub",
                Icon: GithubLogo,
              },
              {
                href: "https://www.linkedin.com/in/idemeto-emediong",
                label: "LinkedIn",
                Icon: LinkedinLogo,
              },
              {
                href: "https://x.com/WazaBanga01",
                label: "Twitter",
                Icon: TwitterLogo,
              },
            ].map(({ href, label, Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-14 h-14 rounded-full border border-[#003432]/30 flex items-center justify-center bg-white/90 backdrop-blur-sm shadow-sm hover:bg-[#003432] hover:shadow-md transition-all duration-300"
                >
                  <Icon
                    size={26}
                    weight="fill"
                    className="text-[#003432] group-hover:text-white transition-colors duration-300"
                  />
                </motion.div>

                <span className="absolute left-1/2 -translate-x-1/2 top-16 opacity-0 group-hover:opacity-100 text-sm bg-[#003432] text-white px-3 py-1 rounded-md transition-all duration-300 whitespace-nowrap">
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
