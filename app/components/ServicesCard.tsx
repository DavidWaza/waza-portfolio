"use client";

import Image from "next/image";
import SmartButton from "./Button";
import { Phone } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import ContactModal from "./ModalPopup";
import { useState } from "react";

interface ServiceCardProps {
  iconSrc: string;
  title: string;
  description: string;
  features: string[];
  buttonLabel?: string;
  onButtonClick?: () => void;
}

const ServiceCard = ({
  iconSrc,
  title,
  description,
  features,
  buttonLabel = "Schedule a call",
}: ServiceCardProps) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.03,
        y: -5,
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="relative bg-white p-10  shadow-sm transition-all duration-300 cursor-pointer"
    >
      {/* Icon */}
      <motion.div
        whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.6 } }}
        className="w-20 h-20 rounded-full border border-gray-300 flex items-center justify-center bg-[#F6F6EF] mb-4"
      >
        <Image
          src={iconSrc}
          alt={title}
          width={40}
          height={40}
          className="object-contain"
        />
      </motion.div>

      {/* Text */}
      <div>
        <h3
          className="text-3xl font-semibold text-[#003432] mb-2"
          style={{ fontFamily: "var(--font-instrument-serif)" }}
        >
          {title}
        </h3>
        <p className="text-[#738c8b] text-base leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <div className="pt-8 space-y-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ x: 5 }}
              className="border-b border-gray-200 pb-3 text-[#738c8b]"
            >
              {feature}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Button */}
      {/* <div className="pt-10">
        <SmartButton
          label={buttonLabel}
          icon={<Phone size={20} weight="duotone" />}
           onClick={() => setOpen(true)}
        />
      </div> */}
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </motion.div>
  );
};

export default ServiceCard;
