"use client";

import Link from "next/link";
import Image from "next/image";
import { text } from "@/lib/typography";

const industries = [
  { name: "Food Processing", href: "/industries/food-processing" },
  { name: "Healthcare & Medical", href: "/industries/healthcare-medical" },
  { name: "Education & Research", href: "/industries/education-research" },
  { name: "Farming & Agriculture", href: "/industries/farming-agriculture" },
  { name: "Manufacturing", href: "/industries/manufacturing" },
];

const solutions = [
  { name: "RFID-Based Telephone", href: "/products/rfid-telephone" },
  { name: "Biometric System", href: "/products/biometric-product" },
  { name: "Hydroponics Controller", href: "/products/hydroponic-controller" },
  { name: "Robotics Training Program", href: "/products/hydroponic-controller" },
  { name: "Industrial Automation Suite", href: "/products/hydroponic-project" },
];

const technologies = [
  { name: "IIOT", href: "/technologies/iiot" },
  { name: "Robotics", href: "/technologies/robotics" },
  { name: "Softwares", href: "/technologies/Softwares" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Contact", href: "/contact" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
  { name: "Sitemap", href: "/sitemap" },
];

export default function Footer() {
  return (
    <footer className="bg-company-litest-gray text-company-black px-10">
      <div className="max-w-[1700px] mx-auto justify-between pt-12 pb-[12px] flex flex-col items-baseline">
        <div className="w-full flex flex-col lg:flex-row items-start gap-12 justify-between">
          {/* logo section */}
          <div className="flex-shrink-0 max-w-[700px] ml-7 md:m-0 lg:w-auto mb-8 lg:mb-0">
            <div className="flex gap-2 items-center">
              <Link href="/" className="inline-block">
                <Image 
                  src="/logo/company_logo_without_text.png" 
                  alt="Company Logo" 
                  width={50} 
                  height={50}
                  className="w-16 mb-[8px]"
                />
              </Link>
              <h1 className={`${text.Sectionbodytext}`}>Vithsutra</h1>
            </div>
            <p className={` ${text.FooterHeadingtext} text-company-gray-text   font-semibold w-[350px]`}>
              Empowering industries with innovative automation solutions and cutting-edge technology.
            </p>
          </div>

          {/* Navigation Sections */}
          <div className="flex-1 max-w-[900px] ml-7 md:m-0 ">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:pl-8 w-full">
              {/* Industries */}
              <div>
                <h3 className={`text-lg font-semibold mb-4 text-company-blue ${text.FooterHeadingtext}`}>Industries</h3>
                <ul className="space-y-[4px]">
                  {industries.map((industry) => (
                    <li key={industry.name}>
                      <Link 
                        href={industry.href} 
                        className={`text-company-text-gray hover:text-company-blue text-sm transition-colors ${text.Footerlinktext}`}
                      >
                        {industry.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Solutions */}
              <div>
                <h3 className={`text-lg font-semibold mb-4 text-company-blue ${text.FooterHeadingtext}`}>Solutions</h3>
                <ul className="space-y-[4px]">
                  {solutions.map((solution) => (
                    <li key={solution.name}>
                      <Link 
                        href={solution.href} 
                        className={`text-company-text-gray hover:text-company-blue text-sm transition-colors ${text.Footerlinktext}`}
                      >
                        {solution.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Technologies */}
              <div>
                <h3 className={`text-lg font-semibold mb-4 text-company-blue ${text.FooterHeadingtext}`}>Technologies</h3>
                <ul className="space-y-[4px]">
                  {technologies.map((tech) => (
                    <li key={tech.name}>
                      <Link 
                        href={tech.href} 
                        className={`text-company-text-gray hover:text-company-blue text-sm transition-colors ${text.Footerlinktext}`}
                      >
                        {tech.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Company & Contact */}
              <div>
                <h3 className={`text-lg font-semibold mb-4 text-company-blue ${text.FooterHeadingtext}`}>Company</h3>
                <ul className="space-y-[4px]">
                  {companyLinks.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className={`text-company-text-gray hover:text-company-blue text-sm transition-colors ${text.Footerlinktext}`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-company-gray mt-[24px] pt-[8px] w-full">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={` ${text.FooterHeadingtext} text-company-text-gray text-sm`}>
              © {new Date().getFullYear()} Vithsutra. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 mt-2 md:mt-0">
              {legalLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className={`text-company-text-gray hover:text-company-blue text-sm transition-colors ${text.Footerlinktext}`}
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