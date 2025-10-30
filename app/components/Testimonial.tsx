"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

const testimonials = [
  {
    name: "Nelson Atuonwu",
    role: "CEO, Grip",
    feedback:
      "Working with Emediong was a delight — his design sense and attention to detail elevated our product UI beyond expectations.",
    image: "/assets/avatars/4.jpg",
  },
  {
    name: "Esiso Oba Michael",
    role: "Creative Director, CEO Diplomats",
    feedback:
      "He transformed our concept into a beautiful and functional platform. His frontend expertise helped us meet critical launch deadlines.",
    image: "/assets/avatars/2.jpg",
  },
  {
    name: "Emmy Akpan",
    role: "CEO, Scribes",
    feedback:
      `What stood out most about working with Emediong was his rare combination of speed and quality. He took on my project and delivered an exceptional website in a remarkably short period of time. The final product turned out beautiful, functional, and far exceeded my expectations. He is a true professional, and I couldn't be happier with the result.`,
    image: "/assets/avatars/3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F6F6EF] py-20 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* === Header === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p
            className="text-2xl text-[#003432] mb-3"
            style={{ fontFamily: "var(--font-instrument-serif)" }}
          >
            Testimonials
          </p>
          <h2
            className="text-4xl lg:text-5xl font-medium text-[#003432]"
            style={{ fontFamily: "var(--font-instrument-serif)" }}
          >
            What People Say About My Work
          </h2>
        </motion.div>

        {/* === Swiper Carousel === */}
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          effect="fade"
          speed={1000}
          className="pb-12"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false }}
                className="bg-transparent rounded-2xl p-8 sm:p-10 text-left mx-auto max-w-3xl"
              >
                <div className="bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                  <p className="text-[#003432] text-lg leading-relaxed mb-6 italic">
                    “{t.feedback}”
                  </p>

                  <div className="flex items-center gap-4">
                    <motion.img
                      src={t.image}
                      alt={t.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#003432]/20"
                    />
                    <div>
                      <p className="text-[#003432] font-semibold text-lg">
                        {t.name}
                      </p>
                      <p className="text-[#738c8b] text-sm">{t.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
