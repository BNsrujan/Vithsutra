"use client";

import Largecard from "../ui/largecard";
import { useRouter } from "next/navigation";
import { SectionHeader } from "../ui/section-header";

export default function WeOfferSection() {
  const router = useRouter();

  const features = [
    {
      title: "Internet of Things (IoT)",
      description:
        "Smart sensor-based systems that connect devices, monitor data, and enable real-time control",
      bgImage: "/iot_images/image.png",
      link: "/solutions/iot"
    },
    {
      title: "Robotics",
      description:
        "Industrial and educational robotics for automation, training, and real-world innovation",
      bgImage: "/robotics/image.png",
      link: "/solutions/robotics"
    },
    {
      title: "Industrial Automation",
      description:
        "Custom PLC, SCADA, and cloud-integrated systems for intelligent factory control",
      bgImage: "/robotics/image.png",
      link: "/solutions/automation"
    },
  ];

  const handleCardClick = (link: string) => {
    router.push(link);
  };

  return (
    <section className="relative py-16 md:py-24 bg-company-light-light-gray overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4">
        <SectionHeader 
          label="FEATURED"
          title="Automation at All Levels"
          className="mb-8 md:mb-12"
        />

        {/* Features Grid */}
        <div className="flex flex-col gap-y-8 md:gap-y-12 lg:gap-y-[64px]">
          {features.map((feature, index) => (
            <Largecard 
              key={index}
              index={index}
              feature={feature}
              onCardClick={() => handleCardClick(feature.link || '')}
              className="w-full md:max-w-[90%] lg:max-w-full mx-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
