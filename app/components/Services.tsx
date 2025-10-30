"use client";
import ServiceCard from "./ServicesCard";

const Services = () => {
  const services = [
    {
      iconSrc: "/assets/logos/icons8-monitor-50.png",
      title: "Web Design",
      description:
        "Transform concepts, wireframes, or client inputs into polished mockup designs that align with design standards.",
      features: [
        "Custom Website Design",
        "Responsive Design",
        "Landing Page Design",
      ],
    },
    {
      iconSrc: "/assets/logos/icons8-figma-50.png",
      title: "UI/UX Design",
      description:
        "Design intuitive, user-centered interfaces that enhance usability and drive engagement. From research to prototyping, I craft seamless digital experiences tailored to your brand and audience.",
      features: [
        "User Research & Wireframing",
        "High-Fidelity Prototypes (Figma)",
        "Design Systems & Component Libraries",
        "Responsive & Accessible Layouts",
      ],
    },
    {
      iconSrc: "/assets/logos/icons8-wordpress-64.png",
      title: "No-Code Development",
      description:
        "Build fast, scalable, and visually compelling websites using no-code tools like WordPress and Webflow — empowering businesses to launch quickly without compromising on design or performance.",
      features: [
        "Custom WordPress Development",
        "Webflow & Framer Site Setup",
        "CMS Configuration & Content Integration",
        "SEO Optimization & Analytics Setup",
      ],
    },
  ];

  return (
    <div className="bg-[#E8E8D7] py-10 lg:py-20">
      <div className="mx-auto max-w-350 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6 lg:gap-12 text-center lg:text-left">
          {/* Left Label */}
          <div>
            <p
              className="text-xl sm:text-2xl text-[#003432] tracking-wide"
              style={{ fontFamily: "var(--font-instrument-serif)" }}
            >
              Services
            </p>
          </div>

          {/* Right Text */}
          <div className="max-w-3xl">
            <p
              className="text-2xl sm:text-3xl lg:text-4xl text-[#003432] font-medium capitalize mb-2"
              style={{ fontFamily: "var(--font-instrument-serif)" }}
            >
              What Can I Do For You?
            </p>
            <p className="text-base sm:text-lg font-medium text-[#738c8b] capitalize leading-relaxed">
              Empowering your vision through exceptional design and development
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 my-20">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              onButtonClick={() =>
                alert(`Let's connect about ${service.title}!`)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
