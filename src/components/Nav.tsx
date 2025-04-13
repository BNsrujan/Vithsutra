import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-4 bg-white ">
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex items-center gap-8 text-sm text-gray-700 font-medium">
        <li>
          <Link href="/services">services</Link>
        </li>
        <li>
          <Link href="/application">Application</Link>
        </li>
        <li>
          <Link href="/industries">industries</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/explore">explore</Link>
        </li>
      </ul>

      {/* Let's Talk Button */}
      <div>
        <Link href="/contact">
          <button className="border border-black text-black text-sm px-4 py-2 rounded-md hover:bg-black hover:text-white transition">
            Let’s Talk
          </button>
        </Link>
      </div>
    </nav>
  );
}
