"use client";

import Link from "next/link";
import Image from "next/image";

const industries = [
  { name: "Automotive", href: "/industries/automotive" },
  { name: "Logistics", href: "/industries/logistics" },
  { name: "FMOG", href: "/industries/fmog" },
  { name: "Chemical & Pharma", href: "/industries/chemical-pharma" },
  { name: "Plastics & Polymers", href: "/industries/plastics-polymers" },
  { name: "Metal & Machining", href: "/industries/metal-machining" },
];

const solutions = [
  { name: "IIOT & Robotics", href: "/technologies/iiot-robotics" },
  { name: "Electronics", href: "/technologies/electronics" },
  { name: "Smart Retail", href: "/technologies/smart-retail" },
  { name: "Assembly", href: "/applications/assembly" },
  { name: "Pick and Place", href: "/applications/pick-and-place" },
  { name: "Welding", href: "/applications/welding" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/team" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
  { name: "Sitemap", href: "/sitemap" },
];

export default function Footer() {
  return (
    <footer className="bg-company-litest-gray text-company-black">
      <div className="max-w-[1400px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-2">
            <Link href="/" className="inline-block">
              <Image 
                src="/logo/company_logo_without_text.png" 
                alt="Company Logo" 
                width={50} 
                height={50}
                className="mb-4"
              />
            </Link>
            <h1 className="text-2xl font-bold text-company-blue">Vithsutra</h1>
            <p className="text-company-text-gray text-sm">
              Empowering industries with innovative automation solutions and cutting-edge technology.
            </p>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-company-blue">Industries</h3>
            <ul className="space-y-2">
              {industries.map((industry) => (
                <li key={industry.name}>
                  <Link 
                    href={industry.href} 
                    className="text-company-text-gray hover:text-company-blue text-sm transition-colors"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-company-blue">Solutions</h3>
            <ul className="space-y-2">
              {solutions.map((solution) => (
                <li key={solution.name}>
                  <Link 
                    href={solution.href} 
                    className="text-company-text-gray hover:text-company-blue text-sm transition-colors"
                  >
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-company-blue">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-company-text-gray hover:text-company-blue text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-company-gray mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-company-text-gray text-sm">
              © {new Date().getFullYear()} Vithsutra. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {legalLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="text-company-text-gray hover:text-company-blue text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 