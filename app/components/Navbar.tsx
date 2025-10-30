"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Briefcase, Phone } from "@phosphor-icons/react"; // install: npm i @phosphor-icons/react
import SmartButton from "./Button";

type Props = {
  phone?: string;
};

export default function StickyNavbar({ phone = "+1234567890" }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Resume", href: "/resume.pdf", icon: FileText },
    { name: "Portfolio", href: "/#portfolio", icon: Briefcase },
  ];

  const linkClass = (href: string) =>
    `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2` +
    (pathname === href
      ? " text-white bg-gray-900/90"
      : " text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white");

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[#003432] shadow-sm dark:bg-gray-900/60"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-lg font-semibold"
            >
              <span
                className="w-8 h-8 rounded-full bg-linear-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white text-sm"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                I
              </span>
              <span className="sr-only">Homepage</span>
              <span
                className="ml-2 hidden sm:inline font-semibold text-white"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                IDEMETO.
              </span>
            </Link>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex md:items-center md:gap-1">
              {navLinks.map(({ name, href, icon: Icon }) => (
                <Link
                  key={name}
                  href={href}
                  className={`${linkClass(href)} text-white`}
                  aria-label={name}
                  target={`${name.includes("Resume") ? "_blank" : ""}`}
                  rel={`${
                    name.includes("Resume") ? "noopener noreferrer" : ""
                  }`}
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  <Icon size={18} weight="duotone" />
                  {name}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center">
              <SmartButton
                label="Hire Me"
                icon={<Phone size={20} weight="duotone" />}
                onClick={() => alert("Let's connect!")}
              />
            </div>

            {/* Mobile menu */}
            <div className="md:hidden">
              <MobileMenu
                phone={phone}
                pathname={pathname || "/"}
                links={navLinks}
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

function MobileMenu({
  pathname,
  links,
}: {
  phone: string;
  pathname: string;
  links: { name: string; href: string; icon: unknown }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((s) => !s)}
        className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 dark:text-gray-200"
        aria-expanded={open}
        aria-label="Toggle menu"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800">
          {links.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className={`block px-4 py-2 text-sm ${
                pathname === href ? "font-semibold" : ""
              }`}
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {name}
            </Link>
          ))}
          <SmartButton
            label="Hire Me"
            icon={<Phone size={20} weight="duotone" />}
            onClick={() => alert("Let's connect!")}
          />
        </div>
      )}
    </div>
  );
}
