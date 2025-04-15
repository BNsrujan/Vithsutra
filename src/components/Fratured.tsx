"use client";

import * as motion from "motion/react-client";

export default function WeOfferSection() {
  const features = [
    {
      title: "IoT Solutions",
      description:
        "Smart, connected systems that provide real-time insights and control",
      bgImage: "/iot.png",
    },
    {
      title: "Robotics & Automation",
      description:
        "Advanced robotics solutions that optimize, automate operations and improve efficiency",
      bgImage: "/robotics.png",
    },
  ];

  return (
    <div className="max-w-[1400px] h-10/12 lg:w-[1400px]  mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-2  text-company-text-gray ">FEATURED</div>
      <h2 className=" section-head text-company-black mb-8">We Offer</h2>

      <div className="space-y-6 ">
        {features.map((feature, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" }}
            key={`${index}+${feature.title}`}
            className="rounded-[24px] p-12 h-96 relative bg-cover bg-company-light-light-gray "
            style={{ backgroundImage: `url(${feature.bgImage}) opacity-20 ` }}
          >
            <div className="max-w-md">
              <h3 className="text-xl font-semibold text-company-white mb-1">
                {feature.title}
              </h3>
              <p className="text-company-text-gray text-sm">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
