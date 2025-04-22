export default function Footer() {
  const sections = [
    {
      title: "Services",
      links: [
        { label: "IoT", href: "/services/iot" },
        { label: "Robotics", href: "/services/robotics" },
      ],
    },
    {
      title: "Industries",
      links: [
        { label: "Automotive", href: "/industries/automotive" },
        { label: "Logistics", href: "/industries/logistics" },
        { label: "FMCG", href: "/industries/fmcg" },
        { label: "Electronics", href: "/industries/electronics" },
        { label: "Chemical & Pharma", href: "/industries/pharma" },
        { label: "Smart Retail", href: "/industries/retail" },
        { label: "New Energy", href: "/industries/energy" },
      ],
    },
    {
      title: "Robootics ",
      links: [
        { label: "Assembly", href: "/applications/assembly" },
        {
          label: "Quality Inspection",
          href: "/applications/quality-inspection",
        },
        {
          label: "Material Processing",
          href: "/applications/material-processing",
        },
        { label: "Robotic Mobility", href: "/applications/robotic-mobility" },
        { label: "Machine Tending", href: "/applications/machine-tending" },
        { label: "Palletizing", href: "/applications/palletizing" },
        { label: "Handling", href: "/applications/handling" },
        { label: "Retail tasks", href: "/applications/retail-tasks" },
        { label: "Pick and place", href: "/applications/pick-place" },
        { label: "Welding", href: "/applications/welding" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Download center", href: "/support/download" },
        { label: "Support Hub", href: "/support/hub" },
      ],
    },
    {
      title: "Partners",
      links: [
        { label: "Become a partner", href: "/partners/join" },
        { label: "Ecosystem", href: "/partners/ecosystem" },
      ],
    },
    {
      title: "Explore",
      links: [
        { label: "Case Studies", href: "/explore/case-studies" },
        { label: "Blog", href: "/explore/blog" },
        { label: "Events", href: "/explore/events" },
      ],
    },
    {
      title: "IoT Application",
      links: [
        { label: "Smart home Application", href: "/iot/smart-home" },
        { label: "Industrial monitoring", href: "/iot/industrial-monitoring" },
        { label: "Healthcare monitoring", href: "/iot/healthcare" },
        { label: "Agricultural sensing", href: "/iot/agriculture" },
        { label: "Supply chain tracking", href: "/iot/supply-chain" },
        { label: "Retail analytics", href: "/iot/retail-analytics" },
        { label: "Fleet management", href: "/iot/fleet-management" },
      ],
    },
  ];

  return (
    <footer className="bg-company-light-light-gray w-full py-16 flex flex-col justify-center m-auto">
      <div className="w-full lg:px-36 mx-auto ">
        <div className="flex justify-between px-4 sm:px-6 lg:px-8">
          <div className="lg:col-span-1">
            <h2 className="section-head text-gray-900">Vithsutra</h2>
            <p className="mt-4 text-gray-600 max-w-xs">
              Our vision is to provide convenience and help automate your work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-10">
            {sections.slice(0, 2).map((section, index) => (
              <div
                key={index}
                className="space-y-8 font-[400] text-[12px] text-company-text-gray"
              >
                <div>
                  <h3 className="text-company-black font-[600] tracking-wider uppercase mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <a href={link.href} className=" hover:text-gray-900">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                {sections[index + 1] && (
                  <div>
                    <h3 className=" text-company-black font-[600] tracking-wider uppercase mb-4">
                      {sections[index + 1].title}
                    </h3>
                    <ul className="space-y-2">
                      {sections[index + 1].links.map((link, i) => (
                        <li key={i}>
                          <a
                            href={link.href}
                            className="font-[400] text-[12px] text-company-text-gray hover:text-company-black"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}

            {/* Robotics Applications */}
            <div>
              <h3 className="text-company-black font-[600] text-[12px] tracking-wider uppercase mb-4">
                {sections[2].title}
              </h3>
              <ul className="space-y-2">
                {sections[2].links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="font-[400] text-[12px] text-company-text-gray hover:text-company-black"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support + Partners + Explore */}
            <div className="space-y-8">
              {sections.slice(3, 6).map((section, index) => (
                <div key={index}>
                  <h3 className="text-company-black font-[600] text-[12px] tracking-wider uppercase mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-1">
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <a
                          href={link.href}
                          className="font-[400] text-[12px] text-company-text-gray hover:text-company-black"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* IoT Applications */}
            <div>
              <h3 className="text-company-black font-[600] text-[12px] tracking-wider uppercase mb-4">
                {sections[6].title}
              </h3>
              <ul className="space-y-2">
                {sections[6].links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="font-[400] text-[12px] text-company-text-gray hover:text-company-black"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center">
          <p className="text-company-text-gray text-sm">
            ©2022 Company Name. All rights reserved
          </p>
          <div className="mt-2 md:mt-0 flex space-x-4">
            <a
              href="/privacy"
              className="text-company-text-gray hover:text-company-black"
            >
              Privacy & Policy
            </a>
            <a
              href="/terms"
              className="text-company-text-gray hover:text-company-black"
            >
              Terms & Condition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
