"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import { Phone } from "@phosphor-icons/react";
import SmartButton from "@/app/components/Button";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import ContactModal from "@/app/components/ModalPopup";
import { useState } from "react";

const ProjectDetails = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop()?.toLowerCase();
  const [open, setOpen] = useState(false);

  const normalizeTitle = (title: string) =>
    title.split(" - ")[0].toLowerCase().replace(/\s+/g, "");

  const project = projects.find((p) => normalizeTitle(p.title) === slug);
  if (!project) {
    return (
      <div className="bg-[#F6F6EF] min-h-screen flex flex-col items-center justify-center text-[#003432]">
        <h2 className="text-3xl font-semibold mb-3">Project Not Found</h2>
        <p className="text-[#738c8b]">
          The project you’re looking for doesn’t exist.
        </p>
      </div>
    );
  }

  return (
    <section className="bg-[#F6F6EF] py-20 px-6 md:px-16 text-[#003432]">
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-14 py-30">
        {/* === LEFT CONTENT === */}
        <div className="lg:col-span-2 space-y-16">
          {/* === HEADER === */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Circular Image */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border border-[#003432]/20 shadow-md shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="100vw"
                  className="object-contain scale-90 transition-transform duration-500 hover:scale-100"
                />
              </div>

              {/* Project Info */}
              <div className="flex-1 space-y-5">
                <h1
                  className="text-3xl sm:text-4xl lg:text-5xl font-medium"
                  style={{ fontFamily: "var(--font-instrument-serif)" }}
                >
                  {project.title}
                </h1>

                <div className="flex flex-wrap gap-3">
                  <span className="bg-[#E2E8E5] px-4 py-1 rounded-md text-sm">
                    {project.year}
                  </span>
                  <span className="bg-[#E2E8E5] px-4 py-1 rounded-md text-sm">
                    {project.projectType}
                  </span>
                  <div>
                    <Link href={project.websiteLink || ""}>
                      <span className="px-4 py-1 underline text-base">
                        {`${project.title.split("-")["0"]} Web Link`}
                      </span>
                    </Link>
                  </div>
                </div>
                <p className="prose prose-lg text-[#738c8b] mt-2 leading-relaxed lg:w-3/4 max-w-none whitespace-pre-line">
                  <ReactMarkdown>{project.caseStudyDescription}</ReactMarkdown>
                </p>
              </div>
            </div>
          </motion.div>

          {/* === CASE STUDIES === */}
          <div>
            <h2
              className="text-3xl mb-6 font-medium"
              style={{ fontFamily: "var(--font-instrument-serif)" }}
            >
              Case Studies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.caseStudies.map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="relative aspect-4/3 rounded-xl overflow-hidden shadow-sm bg-white/50"
                >
                  <Image
                    src={img}
                    alt={`Case study ${i + 1}`}
                    fill
                    sizes="100vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* === TEAM === */}
          <div>
            <h2
              className="text-3xl mb-4 font-medium"
              style={{ fontFamily: "var(--font-instrument-serif)" }}
            >
              Major Players
            </h2>
            <ul className="space-y-3">
              {project.team.map((member, index) => (
                <li key={index} className="text-lg text-[#003432]">
                  <span className="font-semibold">{member.name}</span> —{" "}
                  <span className="text-[#738c8b]">{member.role}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* === TECH STACK === */}
          <div>
            <h2
              className="text-3xl mb-6 font-medium"
              style={{ fontFamily: "var(--font-instrument-serif)" }}
            >
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-4">
              {project.stacks.map((stack, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 border border-[#003432]/20 rounded-full bg-white shadow-sm"
                >
                  <Image
                    src={stack.logo}
                    alt={stack.name}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                  <span className="text-sm">{stack.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* === RIGHT CTA STICKY SIDEBAR === */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:sticky top-28 h-fit bg-[#003432] text-white p-8 rounded-2xl shadow-md space-y-6"
        >
          <h3
            className="text-2xl font-medium"
            style={{ fontFamily: "var(--font-instrument-serif)" }}
          >
            Interested in this kind of project?
          </h3>
          <p className="text-[#D9E9E5] text-base leading-relaxed">
            Let’s collaborate to build something just as impactful — whether
            it’s a data-driven platform, digital product, or full web
            experience.
          </p>

          <SmartButton
            label="Schedule a Call"
            icon={<Phone size={20} weight="duotone" />}
            onClick={() => setOpen(true)}
          />
          <ContactModal open={open} onClose={() => setOpen(false)} />
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetails;
