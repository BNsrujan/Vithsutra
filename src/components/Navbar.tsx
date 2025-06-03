"use client"
import Link from "next/link";
import Image from "next/image";
import { text } from "@/lib/typography";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="z-50 fixed top-0 w-full text-company-black-text flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 bg-white/80 backdrop-blur-md h-[64px]">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image src="/logo/company_logo_without_text.png" alt="Logo" width={40} height={40} />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className={`${text.Navtext} hidden md:flex items-center gap-8`}>
        <li>
          <Link href="/products" className="hover:text-company-blue transition-colors">Products</Link>
        </li>
        <li>
          <Link href="/case-studies" className="hover:text-company-blue transition-colors">Case Studies</Link>
        </li>
        <li>
          <Link href="/team" className="hover:text-company-blue transition-colors">Team</Link>
        </li>
        <li>
          <Link href="/careers" className="hover:text-company-blue transition-colors">Careers</Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-company-blue transition-colors">Blog</Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-company-blue transition-colors">About</Link>
        </li>
        <li>
          <Link href="/faq" className="hover:text-company-blue transition-colors">FAQ</Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Contact Button - Desktop */}
      <div className="hidden md:flex gap-4 justify-center items-center">         
        <Link href="/contact">
          <button className="bg-company-blue text-white px-6 py-2 rounded-lg hover:bg-company-blue-dark transition-colors shadow-lg">
            Let&apos;s Talk
          </button>
        </Link>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        style={{ top: '64px' }}
      >
        <div className="flex flex-col p-6 space-y-6">
          <Link 
            href="/products" 
            className="text-lg font-medium hover:text-company-blue transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>
          <Link 
            href="/case-studies" 
            className="text-lg font-medium hover:text-company-blue transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Case Studies
          </Link>
          <Link 
            href="/team" 
            className="text-lg font-medium hover:text-company-blue transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Team
          </Link>
          <Link 
            href="/careers" 
            className="text-lg font-medium hover:text-company-blue transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Careers
          </Link>
          <Link 
            href="/blog" 
            className="text-lg font-medium hover:text-company-blue transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link 
            href="/about" 
            className="text-lg font-medium hover:text-company-blue transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/faq" 
            className="text-lg font-medium hover:text-company-blue transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </Link>
          <Link 
            href="/contact" 
            className="mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <button className="w-full bg-company-blue text-white px-6 py-3 rounded-lg hover:bg-company-blue-dark transition-colors shadow-lg">
              Let&apos;s Talk
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
