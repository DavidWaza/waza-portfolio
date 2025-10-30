"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const SelectedProjects = () => {
  return (
    <section className="bg-[#F6F6EF] py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, ease: "easeOut" }}
          variants={fadeUp}
          className="mb-20"
        >
          <h2
            className="text-4xl md:text-2xl text-[#003432] font-medium tracking-tight"
            style={{ fontFamily: "var(--font-instrument-serif)" }}
          >
            Selected Projects
          </h2>
          <div className="mt-3 w-24 h-[3px] bg-[#003432]/80 rounded-full" />
        </motion.div>

        {/* Projects List */}
        <div className="flex flex-col gap-28">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              variants={fadeUp}
            >
              <Link
                href={project.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-12 cursor-pointer group"
                >
                  {/* Image Thumbnail */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-[#d6e2dc] bg-[#e9f3ef]/50 shrink-0 shadow-sm group-hover:shadow-md transition-all duration-500">
                    <Image
                      src={project.image}
                      alt={`${project.title} logo`}
                      fill
                      sizes="100vw"
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="flex-1 border-l border-[#d4ddd8]/80 pl-6 sm:pl-10">
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <h3
                        className="text-2xl md:text-3xl text-[#003432] font-medium mb-2 group-hover:text-[#00554e] transition-colors duration-300"
                        style={{ fontFamily: "var(--font-instrument-serif)" }}
                      >
                        {project.title}
                      </h3>
                      <span className="text-sm text-[#496d68] bg-[#edf3f0] px-3 py-1 rounded-md whitespace-nowrap">
                        {project.year} · {project.projectType}
                      </span>
                    </div>

                    <p className="text-[#516a66] text-base leading-relaxed mb-4 max-w-3xl">
                      {project.description}
                    </p>

                    {/* Stack Icons */}
                    <div className="flex flex-wrap gap-3">
                      {project.stacks.map((stack) => (
                        <div
                          key={stack.name}
                          className={`flex items-center gap-2 px-3 py-1 rounded-full border ${stack.border} text-sm text-[#003432]/80`}
                        >
                          <Image
                            src={stack.logo}
                            alt={stack.name}
                            width={18}
                            height={18}
                            className="object-contain"
                          />
                          {stack.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedProjects;
