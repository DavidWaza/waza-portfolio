"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Envelope,
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  Phone,
  X,
} from "@phosphor-icons/react";
import React from "react";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ open, onClose }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Click outside to close */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* Contact Card */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative bg-white/80 backdrop-blur-lg border border-white/40 rounded-3xl p-8 w-[90%] sm:w-[430px] shadow-2xl overflow-hidden"
          >
            {/* Gradient Accent */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-emerald-600/40 to-teal-700/30 rounded-full blur-3xl"></div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-[#003432] hover:text-emerald-700 transition-colors"
            >
              <X size={22} weight="bold" />
            </button>

            {/* Profile Section */}
            <div className="flex flex-col items-center text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4"
              >
                <Image
                  src="/assets/waza.png"
                  alt="Emediong Idemeto"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </motion.div>

              <h2
                className="text-2xl font-semibold text-[#003432]"
                style={{ fontFamily: "var(--font-instrument-serif)" }}
              >
                Emediong Idemeto
              </h2>
              <p className="text-[#738c8b] mb-4 text-sm">
                Frontend Developer & UI Engineer
              </p>

              {/* Contact Chips */}
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                <Link
                  href="mailto:idemetoemediong@gmail.com"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#003432]/10 text-[#003432] hover:bg-[#003432]/20 transition"
                >
                  <Envelope size={18} weight="duotone" /> Email
                </Link>
                <Link
                  href="tel:+2348165473210"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#003432]/10 text-[#003432] hover:bg-[#003432]/20 transition"
                >
                  <Phone size={18} weight="duotone" /> Call
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-5">
                <Link
                  href="https://github.com/davidWaza"
                  target="_blank"
                  className="text-[#003432] hover:text-emerald-700 transition"
                >
                  <GithubLogo size={24} weight="fill" />
                </Link>
                <Link
                  href="https://linkedin.com/in/idemeto-emediong"
                  target="_blank"
                  className="text-[#003432] hover:text-emerald-700 transition"
                >
                  <LinkedinLogo size={24} weight="fill" />
                </Link>
                <Link
                  href="https://x.com/WazaBanga01"
                  target="_blank"
                  className="text-[#003432] hover:text-emerald-700 transition"
                >
                  <TwitterLogo size={24} weight="fill" />
                </Link>
              </div>
            </div>

            {/* CTA Footer */}
            <div className="mt-8 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-full shadow-md hover:shadow-lg transition-all font-medium"
                onClick={onClose}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
