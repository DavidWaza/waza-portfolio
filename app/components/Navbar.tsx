"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Briefcase, Phone } from "@phosphor-icons/react";
import SmartButton from "./Button";
import ContactModal from "./ModalPopup";

export default function StickyNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    if (isHome) {
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [isHome]);

  const navLinks = [
    { name: "Resume", href: "/resume.pdf", icon: FileText },
    { name: "Portfolio", href: "/#portfolio", icon: Briefcase },
  ];

  const bgClass =
    !isHome || scrolled
      ? "backdrop-blur-md bg-[#003432] shadow-sm"
      : "bg-transparent";

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

            {/* Nav Links + Button */}
            <div className="flex items-center gap-6">
              <div className="hidden md:flex md:items-center md:gap-1">
                {navLinks.map(({ name, href, icon: Icon }) => (
                  <Link
                    key={name}
                    href={href}
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
            <ContactModal open={open} onClose={() => setOpen(false)} />
          </div>
        </nav>
      </header>
    </>
  );
}
