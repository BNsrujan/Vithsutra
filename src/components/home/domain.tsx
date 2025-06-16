"use client";

import Largecard from "../ui/largecard";
import { useRouter } from "next/navigation";
import { SectionHeader } from "../ui/section-header";

export default function WeOfferSection() {
  const router = useRouter();

  const features = [
    {
      title: "IoT Solutions",
      description:
        "Smart, connected systems that provide real-time insights and control",
      bgImage: "/iot_images/image.png",
      link: "/solutions/iot"
    },
    {
      title: "Robotics & Automation",
      description:
        "Advanced robotics solutions that optimize, automate operations and improve efficiency",
      bgImage: "/robotics/image.png",
      link: "/solutions/robotics"
    },
    {
      title: "Robotics & Automation",
      description:
        "Advanced robotics solutions that optimize, automate operations and improve efficiency",
      bgImage: "/robotics/image.png",
      link: "/solutions/automation"
    },
  ];

  const handleCardClick = (link: string) => {
    router.push(link);
  };

  return (
    <section className="relative py-24 bg-company-light-light-gray overflow-hidden">
      <div className="mx-auto ">
        <SectionHeader 
          label="FEATURED"
          title="Automation at All Levels"
        />

        {/* Features Grid */}
        <div className="flex flex-col gap-y-[24px] md:gap-y-[64px]">
          {features.map((feature, index) => (
            <Largecard 
              key={index}
              index={index}
              feature={feature}
              onCardClick={() => handleCardClick(feature.link || '')}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
