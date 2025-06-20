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
      { title: "RFID-Based Telephone", description: "Secure RFID calling system with student-specific digital balance recharge", href: "/projects/rfid-telephone" },
      { title: "Biometric System", description: "Affordable biometric authentication with cloud integration and live access logs", href: "/projects/biometric-product" },
      { title: "Hydroponics Controller ", description: "Precision-controlled farming using industrial-grade sensors and real-time dashboards", href: "/projects/billing-system" },
      { title: "Robotics Training Program", description: "Hands-on robotics education using collaborative industrial robots like IGUS ReBeL", href: "/projects/hydroponic-controller" },
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
      { title: "Softwares", description: "Real time Cloud based Dashboard", href: "/technologies/Softwares" },
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
    ]
  },
  company: {
    title: "About Us",
    description: "Learn more about our company and mission.",
    href: "/about",
    items: [
      { title: "Blog", description: "Latest news and insights", href: "/blog" },
      { title: "Case Studies", description: "Explore our successful projects and implementations", href: "/case-studies" },
      { title: "Contact", description: "Get in touch with our team", href: "/contact" }
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
  <NavigationMenuItem>
    <NavigationMenuTrigger className={`${navigationMenuTriggerStyle()} ${text.Navtext} text-[var(--company-blue-black)] hover:text-[var(--company-primary-royalBlue)]`}>
      {section.title}
    </NavigationMenuTrigger>
    <NavigationMenuContent>
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
        <li className="row-span-3">
          <NavigationMenuLink asChild>
            <Link
              className="flex h-full w-full select-none flex-col overflow-hidden justify-end rounded-md bg-company-litest-gray p-6 no-underline outline-none focus:shadow-md"
              href={section.href}
            >
              <div className={`${text.DisplaySaportingtext} text-wrap  text-[var(--company-blue-black)]`}>
                {section.title}
              </div>
              <p className={`${text.cardsubtext} text-[var(--company-mid-gray)]`}>
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
      const mobileMenu = document.querySelector('.mobile-menu')
      const mobileMenuButton = document.querySelector('.mobile-menu-button')
      
      if (mobileMenu && mobileMenuButton) {
        if (!mobileMenu.contains(target) && !mobileMenuButton.contains(target)) {
          setIsMobileMenuOpen(false)
        }
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside)
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  return (
    <div className="sticky top-0  z-50 w-full bg-white ">
      <div className="flex items-center justify-between w-full px-4 py-3 max-w-[1800px] mx-auto">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center">
            <Image src="/logo/company_logo_without_text.png" alt="Logo" width={40} height={40} />
            <h1 className="vithsutra ml-2 text-lg font-bold">Vithsutra</h1>
          </Link>
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
          className="md:hidden p-2 mobile-menu-button text-[var(--company-blue-black)] hover:bg-[var(--company-litest-gray)]  rounded-lg transition-colors z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed  top-[64px] bg-company-white  z-60">
          <div className="h-[calc(100vh-64px)] overflow-y-auto">
            <div className="p-4 space-y-6">
              {Object.entries(menuData).map(([key, section]) => (
                <div key={key} className="border-b border-[var(--company-litest-gray)] pb-4 last:border-0">
                  <Link 
                    href={section.href}
                    className="block mb-2 text-lg font-semibold text-[var(--company-blue-black)] hover:text-[var(--company-primary-royalBlue)]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {section.title}
                  </Link>
                  <p className="text-sm text-[var(--company-mid-gray)] mb-3">
                    {section.description}
                  </p>
                  <div className="space-y-2">
                    {section.items.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block p-2 rounded-lg hover:bg-[var(--company-litest-gray)] transition-colors"
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
                </div>
              ))}
              
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
