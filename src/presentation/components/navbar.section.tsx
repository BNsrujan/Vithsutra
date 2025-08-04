"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/presentation/components/ui/button.ui";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/presentation/components/ui/navigationmenu.ui";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { text } from "@/shared/lib/typography";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/presentation/components/ui/accordion.component";
import type  { MenuSection ,MenuItem }  from "@/core/entities/navbar";
import { menuData } from "@/data/navbar";


// Reusable menu item component
const MenuItem = React.memo(({ item }: { item: MenuItem }) => (
  <li>
    <NavigationMenuLink asChild>
      <Link
        href={item.href}
        className="block select-none space-y-1 rounded-md p-company-lg-24 leading-none no-underline outline-none transition-colors hover:bg-[var(--company-litest-gray)] hover:text-[var(--company-primary-royalBlue)] focus:bg-[var(--company-litest-gray)] focus:text-[var(--company-primary-royalBlue)]"
      >
        <div className={`${text.Navtext} font-medium`}>{item.title}</div>
        <p
          className={`${text.cardBodytextlight} font-light text-[var(--company-mid-gray)]`}
        >
          {item.description}
        </p>
      </Link>
    </NavigationMenuLink>
  </li>
));
MenuItem.displayName = "MenuItem";

// Reusable menu section component
const MenuSection = React.memo(
  ({ section, items }: { section: MenuSection; items: MenuItem[] }) => (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className={`${navigationMenuTriggerStyle()} ${
          text.Navtext
        } text-[var(--company-blue-black)] hover:text-[var(--company-primary-royalBlue)]`}
      >
        {section.title}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
          <li className="row-span-3">
            <NavigationMenuLink asChild>
              <Link
                className="flex h-full w-full select-none flex-col overflow-hidden justify-end rounded-md bg-company-litest-gray p-company-lg-24 no-underline outline-none focus:shadow-md"
                href={section.href}
              >
                <div
                  className={`${text.cardHeadingsmall} text-wrap  text-[var(--company-blue-black)]`}
                >
                  {section.title}
                </div>
                <p
                  className={`${text.cardBodytextlight} text-[var(--company-mid-gray)]`}
                >
                  {section.description}
                </p>
              </Link>
            </NavigationMenuLink>
          </li>
          {items.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
);
MenuSection.displayName = "MenuSection";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Close mobile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const mobileMenu = document.querySelector(".mobile-menu");
      const mobileMenuButton = document.querySelector(".mobile-menu-button");

      if (mobileMenu && mobileMenuButton) {
        if (
          !mobileMenu.contains(target) &&
          !mobileMenuButton.contains(target)
        ) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="sticky top-0 z-50 bg-company-white   w-full ">
      <div className="flex  items-center justify-between w-full  px-2 py-4 max-w-[1800px] mx-auto">
        <div className="flex items-baseline space-x-2">
          <Link href="/" className="flex items-baseline ">
            <Image
              src="/logo/company_logo_without_text.png"
              alt="Logo"
              width={60}
              height={60}
            />
            <h1 className={`vithsutra ${text.logo} ml-company-xs-8   font-bold`}>
              Vithsutra
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="space-x-company-md-16">
              {Object.entries(menuData).map(([key, section]) => (
                <MenuSection
                  key={key}
                  section={section}
                  items={section.items}
                />
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="neumorphic">
            <Link href="/contact" className={text.Buttontext}>
              Let&apos;s Talk
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 mobile-menu-button text-[var(--company-blue-black)] hover:bg-[var(--company-litest-gray)]  rounded-lg transition-colors z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-icon-width h-icon-height"
            strokeWidth={2.5}
            />
          ) : (
            <Menu
              className="h-icon-height w-icon-width"
              strokeWidth={2.5}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`mobile-menu md:hidden fixed  w-full right-0 left-auto  h-[calc(100vh-64px)]  transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-full overflow-y-auto">
            <div className="p-4 space-y-6">
              <Accordion type="single" collapsible>
                {Object.entries(menuData).map(([key, section]) => (
                  <AccordionItem key={key} value={key}>
                    <AccordionTrigger className="text-lg  font-semibold text-[var(--company-blue-black)] hover:text-[var(--company-primary-royalBlue)]">
                      <div>
                        {section.title}
                        <p className="text-sm text-[var(--company-mid-gray)] ">
                          {section.description}
                        </p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {section.items.map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            className="block p-2 border-t-1 hover:bg-[var(--company-litest-gray)] transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="font-medium text-[var(--company-blue-black)]">
                              {item.title}
                            </div>
                            <div className="text-sm text-[var(--company-mid-gray)]">
                              {item.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
