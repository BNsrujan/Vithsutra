export default function WeOfferSection() {
  const features = [
    {
      title: "IoT Solutions",
      description:
        "Smart, connected systems that provide real-time insights and control",
      bgClass: "bg-company-light-gray",
    },
    {
      title: "Robotics & Automation",
      description:
        "Advanced robotics solutions that optimize, automate operations and improve efficiency",
      bgClass: "bg-company-light-gray",
    },
  ];

  return (
    <div className="w-full mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-2 font-medium text-sm text-company-text-gray tracking-wider">
        FEATURED
      </div>
      <h2 className="text-4xl font-bold text-company-black mb-8">We Offer</h2>

      <div className="space-y-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${feature.bgClass} rounded-[24px] p-12 h-96 relative`}
          >
            <div className="max-w-md">
              <h3 className="text-xl font-semibold text-company-black mb-1">
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
