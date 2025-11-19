"use client";
import AboutMe from "./components/AboutMe";
import Herobanner from "./components/Herobanner";
import SelectedProjects from "./components/SelectedProjects";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import WorkExperience from "./components/WorkExperience";

export default function Home() {
  return (
    <div>
      <Herobanner />
      <SelectedProjects />
      <Services />
      <WorkExperience />
      <Testimonial />
      <AboutMe />
    </div>
  );
}
