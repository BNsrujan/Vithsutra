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
    <div className="w-[1800px] mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-2 container-supporting-full text-company-text-gray ">
        FEATURED
      </div>
      <h2 className=" section-head text-company-black mb-8">We Offer</h2>

      <div className="space-y-6 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-[24px] p-12 h-96 relative bg-cover  "
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
          </div>
        ))}
      </div>
    </div>
  );
}
