"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Briefcase, Phone, List, X } from "@phosphor-icons/react";
import SmartButton from "./Button";
import ContactModal from "./ModalPopup";
import { Tally2 } from "lucide-react";
import { toast } from "sonner";
import { getSupabase } from "../config/supabaseClient";
import { HeroRow } from "../page";

interface ResumeProps {
  resumes:string
}


export default function StickyNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [fetching, setFetching] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    if (isHome) {
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [isHome]);

  
  const bgClass =
  !isHome || scrolled
  ? "backdrop-blur-md bg-[#003432] shadow-sm"
  : "bg-transparent";
  
  const [resumeData, setResumeData] = useState<ResumeProps | null>(null);
  
  const supabase = getSupabase();
  
  useEffect(() => {
    const fetchData = async () => {
      setFetching(true);
      const { data:resume, error } = await supabase
      .from("hero")
      .select("resumes")
      .limit(1)
      .single();
      if (error) {
        console.error("Hero fetch error:", error);
        toast.error("Failed to fetch resume");
      } else {
        setResumeData(resume);
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

  console.log(resumeData, 'ress')
  const navLinks = [{ name: "Resume",  icon: FileText }];
  
  return (
    <>
      {/* === NAVBAR === */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}
      >
        <nav className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-lg font-semibold"
              >
                <span className="w-8 h-8 rounded-full bg-linear-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white text-sm">
                  I
                </span>
                <span
                  className="ml-2 hidden sm:inline font-semibold text-white"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  IDEMETO.
                </span>
              </Link>
            </div>

            {/* Desktop Nav Links + Button */}
            <div className="hidden md:flex md:items-center md:gap-6">
              <div className="flex items-center gap-1">
                {navLinks.map(({ name, icon: Icon }) => (
                  <Link
                    key={name}
                    href={resumeData?.resumes || ""}
                    className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-emerald-100 transition-colors duration-150"
                    target={name === "Resume" ? "_blank" : undefined}
                    rel={name === "Resume" ? "noopener noreferrer" : undefined}
                  >
                    <Icon size={18} weight="duotone" />
                    {name}
                  </Link>
                ))}
              </div>

              {/* Hire Me CTA */}
              <SmartButton
                label="Hire Me"
                icon={<Phone size={20} weight="duotone" />}
                onClick={() => setOpen(true)}
              />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-3">
              <SmartButton
                label=""
                icon={<Phone size={20} weight="duotone" />}
                onClick={() => setOpen(true)}
                className="px-3!"
              />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2 hover:bg-white/10 rounded-md transition-all duration-300 relative w-10 h-10 flex items-center justify-center"
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  <X
                    size={24}
                    weight="bold"
                    className={`absolute inset-0 transition-all duration-300 ${
                      mobileMenuOpen
                        ? "opacity-100 rotate-0 scale-100"
                        : "opacity-0 rotate-90 scale-0"
                    }`}
                  />
                  <Tally2
                    size={24}
                    // weight="bold"
                    className={`absolute inset-0 transition-all duration-300 rotate-90 ${
                      mobileMenuOpen
                        ? "opacity-0 -rotate-90 scale-0"
                        : "opacity-100 rotate-0 scale-100"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pt-4 pb-3 mt-3">
              <div className="flex flex-col gap-2 bg-linear-to-b from-emerald-900/20 to-teal-900/10 backdrop-blur-sm rounded-xl p-3 border border-emerald-500/20 shadow-lg">
                {navLinks.map(({ name, icon: Icon }, index) => (
                  <Link
                    key={name}
                    href={resumeData?.resumes || ""}
                    className="group flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-white hover:bg-linear-to-r hover:from-emerald-500/20 hover:to-teal-500/20 transition-all duration-200 hover:translate-x-1 border border-transparent hover:border-emerald-500/30"
                    target={name === "Resume" ? "_blank" : undefined}
                    rel={name === "Resume" ? "noopener noreferrer" : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="w-8 h-8 rounded-md bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                      <Icon size={18} weight="duotone" />
                    </div>
                    <span className="flex-1">{name}</span>
                    <svg
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </header>
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
