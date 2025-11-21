"use client";

import { useEffect, useState } from "react";
import ExperienceSection from "./ExperiencesSection";
import { WorkExperienceProps } from "@/lib/data";
import { getSupabase } from "../config/supabaseClient";
import { toast } from "sonner";

const WorkExperience = () => {
  const [fetching, setFetching] = useState(false);
  const [data, setData] = useState<WorkExperienceProps[]>([]);

  const supabase = getSupabase();

  useEffect(() => {
    const fetchData = async () => {
      setFetching(true);

      const { data: workExperienceData, error } = await supabase
        .from("work_experiences")
        .select("*");

      if (error) {
        console.error("Hero fetch error:", error);
        toast.error("Failed to fetch data");
      } else {
        setData(workExperienceData as WorkExperienceProps[]);
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
            <ExperienceSection data={data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
