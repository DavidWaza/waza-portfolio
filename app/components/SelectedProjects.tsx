"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getSupabase } from "../config/supabaseClient";
import { toast } from "sonner";
import { TOOL_CONFIG } from "../config/toolConfig";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

type Project = {
  id: number;
  title: string;
  description: string;
  location: string;
  application_type: string;
  year: string;
  tools: string[];
  logo: string;
  created_at?: string;
};

const SelectedProjects = () => {
  const [fetching, setFetching] = useState(false);
  const [data, setData] = useState<Project[] | null>(null);

  const supabase = getSupabase();

  useEffect(() => {
    const fetchData = async () => {
      setFetching(true);

      const { data: projectData, error } = await supabase
        .from("projects")
        .select("*");

      if (error) {
        console.error("Hero fetch error:", error);
        toast.error("Failed to fetch data");
      } else {
        setData(projectData as Project[]);
      }

      setFetching(false);
    };

    fetchData();
  }, [supabase]);

  if (fetching) {
    return (
      <section className="lg:h-screen bg-[#003432] flex items-center justify-center pt-20 lg:mt-0">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E2FF76]"></div>
      </section>
    );
  }

  return (
    <section className="bg-[#F6F6EF] lg:py-24 py-10 px-2">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, ease: "easeOut" }}
          variants={fadeUp}
          className="mb-10 lg:mb-20"
        >
          <h2
            className="text-4xl md:text-2xl text-[#003432] font-medium tracking-tight"
            style={{ fontFamily: "var(--font-instrument-serif)" }}
          >
            Selected Projects
          </h2>
          <div className="mt-3 w-24 h-[3px] bg-[#003432]/80 rounded-full" />
        </motion.div>

        <div className="flex flex-col gap-28">
          {data?.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              variants={fadeUp}
            >
              <Link
                href={`/projects/${project.title
                  .split(" - ")[0]
                  .toLowerCase()
                  .replace(/\s+/g, "")}`}
              >
                <motion.div
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-12 cursor-pointer group"
                >
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-[#d6e2dc] bg-[#e9f3ef]/50 shrink-0 shadow-sm group-hover:shadow-md transition-all duration-500">
                    <Image
                      src={project.logo}
                      alt={`${project.title} logo`}
                      fill
                      sizes="100vw"
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  <div className="flex-1 lg:border-l border-[#d4ddd8]/80 lg:pl-6 sm:pl-10">
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <h3
                        className="text-2xl md:text-3xl text-[#003432] font-medium mb-2 group-hover:text-[#00554e] transition-colors duration-300"
                        style={{ fontFamily: "var(--font-instrument-serif)" }}
                      >
                        {project.title} - {project.location}
                      </h3>

                      <span className="text-sm text-[#496d68] bg-[#edf3f0] px-3 py-1 my-2 lg:my-0 rounded-md whitespace-nowrap">
                        {project.year} · {project.application_type}
                      </span>
                    </div>

                    <p className="text-[#516a66] text-base leading-relaxed mb-4 max-w-3xl py-1">
                      {project.description}
                    </p>

                    {/* Tools Section */}
                    <div className="flex flex-wrap gap-3">
                      {project.tools?.map((tool) => {
                        const key = tool.toLowerCase();
                        const config = TOOL_CONFIG[key];

                        return (
                          <div
                            key={tool}
                            className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm shadow-sm border 
                              ${config?.border || "border-gray-300"} 
                              ${config?.bg || "bg-white"}`}
                          >
                            {config?.icon && (
                              <Image
                                src={config.icon}
                                alt={tool}
                                width={20}
                                height={20}
                              />
                            )}
                            {tool}
                          </div>
                        );
                      })}
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
