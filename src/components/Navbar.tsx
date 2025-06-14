"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { text } from "@/lib/typography"

// Types for menu items
type MenuItem = {
  title: string;
  description: string;
  href: string;
}

type MenuSection = {
  title: string;
  description: string;
  href: string;
  items: MenuItem[];
}

// Menu data
const menuData: Record<string, MenuSection> = {
  projects: {
    title: "Solutions",
    description: "Explore our diverse range of successful projects.",
    href: "/Solutions",
    items: [
      { title: "RFID-Based Telephone", description: "Secure RFID calling system with student-specific digital balance recharge", href: "/projects/rfid-based-telephone" },
      { title: "Biometric System", description: "Affordable biometric authentication with cloud integration and live access logs", href: "/projects/biometric-product" },
      { title: "Hydroponics Controller ", description: "Precision-controlled farming using industrial-grade sensors and real-time dashboards", href: "/projects/billing-system" },
      { title: "Robotics Training Program", description: "Hands-on robotics education using collaborative industrial robots like IGUS ReBeL", href: "/projects/hydroponic-project" },
      { title: "Industrial Automation Suite", description: "End-to-end automation using PLCs, SCADA, sensors, and remote dashboards", href: "/projects/hydroponic-project" },
    ]
  },
  technologies: {
    title: "CoreExpertise",
    description: "Explore our cutting-edge technology solutions.",
    href: "/technologies",
    items: [
      { title: "IIOT & Robotics", description: "Industrial IoT and robotic automation solutions", href: "/technologies/iiot-robotics" },
      { title: "Electronics", description: "Advanced electronic solutions and components", href: "/technologies/electronics" },
      { title: "Smart Retail", description: "Intelligent retail technology solutions", href: "/technologies/smart-retail" },
    ]
  },
  industries: {
    title: "Industries We Empower",
    description: "Discover our comprehensive solutions tailored for various industries.",
    href: "/industries",
    items: [
      { title: "Food Processing", description: "Automating packaging, sorting, and quality control with robotics and smart sensors to boost hygiene and efficiency.", href: "/industries/food-processing" },
      { title: "Healthcare & Medical", description: "Secure patient access, sample inspection, and hospital automation powered by biometrics, robotics, and IIoT.", href: "/industries/healthcare-medical" },
      { title: "Education & Research", description: "Providing institutions with IIoT labs and robotics training kits for real-world learning and innovation.", href: "/industries/education-research" },
      { title: "Farming & Agriculture", description: "Empowering modern farmers with hydroponics automation, sensor-based monitoring, and precision farming tech.", href: "/industries/farming-agriculture" },
      { title: "Manufacturing", description: "Streamlining industrial operations through PLC-based automation, SCADA systems, and robotic integration.", href: "/industries/manufacturing" },
      { title: "Public Infrastructure", description: "RFID-based communication systems and biometric access tools for hostels, offices, and public spaces.", href: "/industries/public-infrastructure" },
      { title: "Logistics & Warehousing", description: "Enabling intelligent tracking, inventory control, and access automation through IIoT and robotics-driven solutions.", href: "/industries/public-infrastructure" },

    ]
  },
  company: {
    title: "About Us",
    description: "Learn more about our company and mission.",
    href: "/about",
    items: [
      { title: "Blog", description: "Latest news and insights", href: "/blog" },
      { title: "Case_Study", description: "our works", href: "/Case_study" },
      { title: "Events", description: "Join our event", href: "/" },
      { title: "Our Team", description: "Meet our talented team members", href: "/team" },
      { title: "FAQ", description: "Frequently asked questions", href: "/faq" },
    ]
  }
}

// Reusable menu item component
const MenuItem = React.memo(({ item }: { item: MenuItem }) => (
  <li>
    <NavigationMenuLink asChild>
      <Link 
        href={item.href} 
        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[var(--company-litest-gray)] hover:text-[var(--company-primary-royalBlue)] focus:bg-[var(--company-litest-gray)] focus:text-[var(--company-primary-royalBlue)]"
      >
        <div className={`${text.Navtext} font-medium`}>{item.title}</div>
        <p className={`${text.cardsubtext} text-[var(--company-mid-gray)]`}>
          {item.description}
        </p>
      </Link>
    </NavigationMenuLink>
  </li>
))
MenuItem.displayName = 'MenuItem'

// Reusable menu section component
const MenuSection = React.memo(({ section, items }: { section: MenuSection, items: MenuItem[] }) => (
  <NavigationMenuItem className="">
    <NavigationMenuTrigger className={`${navigationMenuTriggerStyle()} ${text.Navtext} text-[var(--company-blue-black)] hover:text-[var(--company-primary-royalBlue)]`}>
      {section.title}
    </NavigationMenuTrigger>
    <NavigationMenuContent>
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
        <li className="row-span-3">
          <NavigationMenuLink asChild>
            <Link
              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[var(--company-litest-gray)] to-[var(--company-white)] p-6 no-underline outline-none focus:shadow-md"
              href={section.href}
            >
              <div className={`${text.cardHeadingtext} text-[var(--company-blue-black)]`}>
                {section.title}
              </div>
              <p className={`${text.cardBodytext} text-[var(--company-mid-gray)]`}>
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
))
MenuSection.displayName = 'MenuSection'

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  // Close mobile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <div className="relative w-full bg-company-white flex justify-center  content-center ">
      <div className="flex items-center justify-between w-full px-3 max-w-[1800px]  border-[var(--company-litest-gray)]">
        
        <div className=" flex  space-x-[8px] justify-end font-bold text-lg">
          <Link href="/">
            <Image src="/logo/company_logo_without_text.png" alt="Logo" width={50} height={50} />
          </Link>
          
            <h1 className="vithsutra">Vithsutra</h1>
            
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {Object.entries(menuData).map(([key, section]) => (
                <MenuSection key={key} section={section} items={section.items} />
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button 
            variant="default" 
            className="bg-[var(--company-primary-royalBlue)] hover:bg-[var(--company-primary-royalBlue)]/90"
          >
            <Link href="/contact" className={text.Buttontext}>Let&apos;s Talk</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 mobile-menu-button text-[var(--company-blue-black)]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[var(--company-white)] border-b border-[var(--company-litest-gray)] transition-all duration-300 ease-in-out mobile-menu ${
          isMobileMenuOpen ? "max-h-[calc(100vh-64px)] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="p-4 space-y-4">
          <NavigationMenu>
            <NavigationMenuList>
              {Object.entries(menuData).map(([key, section]) => (
                <MenuSection key={key} section={section} items={section.items} />
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="pt-4">
            <Button 
              variant="default" 
              className="w-full bg-[var(--company-primary-royalBlue)] hover:bg-[var(--company-primary-royalBlue)]/90"
            >
              <Link href="/contact" className={text.Buttontext}>Let&apos;s Talk</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
