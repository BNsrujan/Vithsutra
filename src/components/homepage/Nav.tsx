"use pah"
import Link from "next/link";
import Image from "next/image";
import { ShimmerButton } from "../magicui/shimmer-button";
import ModeToggle from "../theme-togal";


export default function Navbar() {
  return (
    
    <nav className=" absolute top-0 w-full flex items-center justify-between px-6 md:px-12 py-4 h bg-transparent h-[64px] ">
      <div className="flex items-center gap-2">
        <Link href={"/"}>
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        </Link>
      </div>


      <ul className="hidden md:flex label-text items-center gap-8">
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/application">Application</Link>
        </li>
        <li>
          <Link href="/industries">Industries</Link>
        </li>
        <li>
          <Link href="/explore">Explore</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li> 
      </ul>

      <div className="flex gap-4 justify-center items-center"> 
        <ModeToggle/>
        <Link href="/contact">
          <ShimmerButton className="shadow-2xl ">
            Let&apos;s Talk
          </ShimmerButton>
        </Link>
      </div>
    </nav>
  );
}
