"use client";
import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import {
  industries,
  solutions,
  technologies,
  companyLinks,
  legalLinks,
} from "@/data/footer";
import { typography } from "@/shared/lib/typography";
import LogoWithName from "./ui/logo_with_name";

const SocialIconLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <div className="group p-company-sm-12 border border-company-light-gray hover:border-company-primary-royalBlue rounded-company-button-8 flex items-center justify-center transition-colors group-hover:bg-company-primary-royalBlue/20 duration-300 ">
    <Link href={href}>{children}</Link>
  </div>
);

const FooterLinkList = ({
  title,
  links,
}: {
  title: string;
  links: { name: string; href: string }[];
}) => (
  <div>
    <h3
      className={` font-semibold mb-company-sm-12 text-company-blue ${typography.title.medium}`}
    >
      {title}
    </h3>
    <ul className="space-y-company-xs-8">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className={`text-company-text-gray hover:text-company-primary-royalBlue duration-300 transition-colors ${typography.label.medium}`}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-company-litest-gray text-company-black md:px-10">
      <div className="max-w-[1700px] mx-auto pt-12 pb-[12px] flex flex-col items-baseline">
        <div className="w-full flex flex-col lg:flex-row items-start gap-12 justify-between ">
          {/* Logo & Description */}
          <div className="flex-shrink-0 max-w-[700px] h-full flex flex-col ml-7 md:m-0 lg:w-auto mb-8 lg:mb-0">
            <div className=" space-y-company-xs-8">
              <LogoWithName/>
              <p
                className={` ${typography.title.medium} text-company-gray-text font-semibold w-[330px] md:w-[400px]`}
              >
                Empowering industries with innovative automation solutions and
                cutting-edge technology.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-company-sm-12 h-full items-end mt-16">
              <SocialIconLink href="">
                <Instagram
                  className="w-icon-width text-icon-color group-hover:text-icon-hover-color duration-300"
                  strokeWidth={2.5}
                  absoluteStrokeWidth
                />
              </SocialIconLink>
              <SocialIconLink href="">
                <Linkedin
                  strokeWidth={2.5}
                  className="w-icon-width  text-icon-color group-hover:text-icon-hover-color duration-300"
                  absoluteStrokeWidth
                />
              </SocialIconLink>
              <SocialIconLink href="">
                <Twitter
                  strokeWidth={2}
                  className="w-icon-width  text-icon-color group-hover:text-icon-hover-color duration-300"
                  absoluteStrokeWidth
                />
              </SocialIconLink>
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="flex-1 max-w-[900px] ml-7 md:m-0">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:pl-8 w-full">
              <FooterLinkList title="Industries" links={industries} />
              <FooterLinkList title="Solutions" links={solutions} />
              <FooterLinkList title="Technologies" links={technologies} />
              <FooterLinkList title="Company" links={companyLinks} />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-company-gray mt-[24px] pt-[8px] w-full">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={` ${typography.label.medium} text-company-black `}>
              © {new Date().getFullYear()} Vithsutra. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-company-text-gray hover:text-company-blue  transition-colors ${typography.label.medium}`}
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
