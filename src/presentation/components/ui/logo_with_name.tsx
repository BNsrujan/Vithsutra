import Link from "next/link";
import Image from "next/image";
import { typography } from "@/shared/lib/typography";

export default function LogoWithName() {
  return (
    <div className="flex items-baseline space-x-company-xs-8">
      <Link href="/" className="flex  items-center ">
        <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16">
          <Image
            src="/logo/company_logo_without_text.png"
            alt="Logo"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 40px, (max-width: 1024px) 48px, 64px"
          />
        </div>

        <h1
          className={`vithsutra ${typography.headline.medium} ml-company-xs-8  font-bold`}
        >
          Vithsutra
        </h1>
      </Link>
    </div>
  );
}
