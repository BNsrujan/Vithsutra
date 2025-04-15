import Link from "next/link";
import Image from "next/image";
import { ShimmerButton } from "./magicui/shimmer-button";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-4 bg-white ">
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
      </div>

      {/* Nav Links */}
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
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/explore">Explore</Link>
        </li>
      </ul>

      {/* Let's Talk Button */}
      <div>
        <Link href="/contact">
          <ShimmerButton className="shadow-2xl bg-white">
            Let&apos;s Talk
          </ShimmerButton>
        </Link>
      </div>
    </nav>
  );
}
