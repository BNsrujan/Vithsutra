"use client"
import Link from "next/link";
import Image from "next/image";
import { text } from "@/lib/typography";

export default function Navbar() {
  return (
    <nav className="z-20 absolute top-0 w-full text-company-black-text flex items-center justify-between px-6 md:px-12 py-4 h bg-transparent h-[64px]">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image src="/logo/company_logo_without_text.png" alt="Logo" width={40} height={40} />
        </Link>
      </div>

      <ul className={`${text.Navtext} hidden md:flex items-center gap-8`}>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/case-studies">Case Studies</Link>
        </li>
        <li>
          <Link href="/team">Team</Link>
        </li>
        <li>
          <Link href="/careers">Careers</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/faq">FAQ</Link>
        </li>
      </ul>

      <div className="flex gap-4 justify-center items-center">         
        <Link href="/contact">
          <button className="shadow-2xl">
            Let&apos;s Talk
          </button>
        </Link>
      </div>
    </nav>
  );
}
