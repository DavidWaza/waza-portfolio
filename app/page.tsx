"use client";
import { useState, useEffect } from "react";
import AboutMe from "./components/AboutMe";
import Herobanner from "./components/Herobanner";
import SelectedProjects from "./components/SelectedProjects";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import WorkExperience from "./components/WorkExperience";
import { toast } from "sonner";
import { getSupabase } from "./config/supabaseClient";

export type HeroRow = {
  id: number;
  title: string;
  description: string;
  phones: string[];
  images: string[];
  resumes: string | null;
  created_at?: string;
};

export default function Home() {
  const [fetching, setFetching] = useState(false);
  const [heroData, setHeroData] = useState<HeroRow | null>(null);

  // Initialize supabase
  const supabase = getSupabase();

  useEffect(() => {
    const fetchData = async () => {
      setFetching(true);
      const { data, error } = await supabase
        .from("hero")
        .select("*")
        .limit(1)
        .single();
      if (error) {
        console.error("Hero fetch error:", error);
        toast.error("Failed to fetch data");
      } else {
        setHeroData(data || null);
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
    <div>
      <Herobanner heroData={heroData} />
      <SelectedProjects />
      <Services />
      <WorkExperience />
      <Testimonial />
      <AboutMe />
    </div>
  );
}
