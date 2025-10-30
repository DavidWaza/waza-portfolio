"use client";

import ExperienceSection from "./ExperiencesSection";

const WorkExperience = () => {
  return (
    <section className="bg-[#F6F6EF] lg:py-20 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full text-black">
          <div className="lg:col-span-1 text-[#003432] sticky top-20 self-start h-fit mb-10 lg:mb-0 px-5">
            <p
              className="text-3xl lg:text-2xl font-medium"
              style={{ fontFamily: "var(--font-instrument-serif)" }}
            >
              Work Experiences
            </p>
          </div>
          <div className="col-span-2">
            <ExperienceSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
