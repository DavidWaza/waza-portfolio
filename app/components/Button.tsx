"use client";

import React from "react";
import { motion } from "framer-motion";

interface SmartButtonProps {
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function SmartButton({
  label,
  icon,
  onClick,
  className = "",
  type = "button",
}: SmartButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative flex items-center gap-2 rounded-full bg-[#E2FF76] px-5 py-2 text-[#003432] font-medium overflow-hidden group ${className} cursor-pointer font-medium`}
    >
      {/* Icon (prefix → suffix on hover) */}
      <span className="transition-all duration-500 transform group-hover:translate-x-[60%] group-hover:opacity-0">
        {icon}
      </span>

      {/* Label (label → prefix on hover) */}
      <span className="transition-all duration-500 transform group-hover:-translate-x-[60%] group-hover:opacity-0">
        {label}
      </span>

      {/* Hover Layer (reverse order) */}
      <span className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <span className="transition-transform duration-500">{label}</span>
        <span className="transition-transform duration-500">{icon}</span>
      </span>
    </motion.button>
  );
}
