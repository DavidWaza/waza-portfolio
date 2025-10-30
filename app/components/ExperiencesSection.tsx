"use client";

import { experiences } from "@/lib/experienceData";
import React from "react";

const ExperienceSection: React.FC = () => {
  return (
    <section className="bg-[#f7f8f3] px-4">
      <div className="max-w-5xl mx-auto space-y-10 bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-sm">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="flex flex-col gap-4 sm:gap-6">
            {/* === Header Section === */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-4 sm:gap-6">
              {/* Number Circle */}
              <div className="lg:flex items-center gap-4">
                <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-[#cbd5c0] flex items-center justify-center text-[#23423c] text-lg sm:text-xl font-light">
                  {exp.id}
                </div>
                <div className="py-3 lg:py-0">
                  <h2
                    className="text-xl sm:text-2xl font-serif text-[#0f322b] leading-tight"
                    style={{ fontFamily: "var(--font-instrument-serif)" }}
                  >
                    {exp.role}
                  </h2>
                  <p className="text-[#21493e] text-sm sm:text-base">
                    {exp.company} · {exp.date}
                  </p>
                </div>
              </div>

              {/* Job Type */}
              <span className="text-[#21493e] bg-[#f0f4ec] text-xs sm:text-sm px-3 py-1 rounded-md self-start sm:self-auto">
                {exp.type}
              </span>
            </div>

            {/* === Responsibilities === */}
            <div className="mt-2 sm:mt-4">
              <p className="text-[#738c8b] text-sm sm:text-base mb-1">
                Responsibilities
              </p>
              <ul className="list-disc list-inside text-[#23423c] text-sm sm:text-base py-2 space-y-2 sm:space-y-3 leading-relaxed">
                {exp.responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            {index !== experiences.length - 1 && (
              <div className="border-t border-[#e5e8df] mt-4 sm:mt-6 pt-4 sm:pt-6" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
