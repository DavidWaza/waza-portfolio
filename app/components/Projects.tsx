"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "@phosphor-icons/react";
import Image from "next/image";
import SmartButton from "./Button";

type TechStack = {
  name: string;
  logo: string;
  border: string;
};

interface ProjectCardProps {
  title: string;
  description: string;
  year: string;
  projectType: string;
  stacks: TechStack[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  year,
  projectType,
  stacks,
}) => {
  return (
    <section>
      <div>
        <p
          className="text-4xl"
          style={{ fontFamily: "var(--font-instrument-serif)" }}
        >
          {title}
        </p>

        <p className="py-2 text-xl lg:w-2/3 text-[#4b4b4b]">{description}</p>

        {/* Animated Wrapper */}
        <motion.div
          initial={{ marginTop: "5rem" }}
          whileHover={{ marginTop: "2.5rem" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative lg:w-3/4 cursor-pointer"
        >
          <motion.div
            whileHover="hovered"
            initial="rest"
            animate="rest"
            className="relative bg-white/0 hover:bg-white rounded-lg hover:shadow-sm lg:p-6 hover:border hover:border-gray-200 transition-colors duration-300"
          >
            <div className="space-y-10">
              {/* === Year === */}
              <div className="border-b border-gray-300 pb-3 flex justify-between">
                <p className="text-gray-400">Year</p>
                <p className="text-[#003432] font-medium">{year}</p>
              </div>

              {/* === Tech Stack === */}
              <div className="border-b border-gray-300 pb-3">
                <p className="text-gray-400 mb-2">Stacks</p>
                <div className="flex items-center gap-4 flex-wrap">
                  {stacks.map((stack) => (
                    <motion.div
                      key={stack.name}
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      className={`flex items-center gap-2 px-3 py-2 rounded-full border ${stack.border} shadow-sm`}
                    >
                      <Image
                        src={stack.logo}
                        alt={stack.name}
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                      <span className="text-sm font-medium text-[#003432]">
                        {stack.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* === Type === */}
              <div className="border-b border-gray-300 pb-3 flex justify-between">
                <p className="text-gray-400">Type of project</p>
                <p className="text-[#003432] font-medium">{projectType}</p>
              </div>
            </div>

            {/* === CTA Button === */}
            <motion.button
              variants={{
                rest: { opacity: 0, y: 20 },
                hovered: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-[#003432] text-white px-6 py-3 rounded-full lg:flex items-center gap-2 hover:bg-[#005b58] transition-colors hidden"
            >
              View Project
              <ArrowRight size={18} weight="bold" />
            </motion.button>

            <div className="py-10 lg:hidden flex items-center justify-center">
              <SmartButton
                label="View project details"
                icon={<ArrowRight size={20} />}
                onClick={() => alert("Let's connect!")}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectCard;
