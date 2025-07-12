"use client";

import Largecard from "@/components/ui/largecard";
import { useRouter } from "next/navigation";
import { SectionHeader } from "@/components/ui/section-header";

export default function WeOfferSection() {
  const router = useRouter();

  const features = [
    {
      title: "Internet of Things (IoT)",
      description:
        "Smart sensor-based systems that connect devices, monitor data, and enable real-time control",
      bgImage: "/iot_images/image.png",
      link: "/technologies/robotics"
    },
    {
      title: "Robotics",
      description:
        "Industrial and educational robotics for automation, training, and real-world innovation",
      bgImage: "/robotics/image.png",
      link: "/technologies/robotics"
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
    <section className="relative  overflow-hidden">
      <div className="max-w-company-section-width mx-auto ">
        <SectionHeader 
          label="FEATURED"
          title="Automation at All Levels"
          className="mb-company-lg-24 md:mb-company-xl-48"
        />

        {/* Features Grid */}
        <div className="flex flex-col gap-company-lg-24 ">
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
