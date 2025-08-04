import Link from "next/link";
import Image from "next/image";
import { text } from "@/shared/lib/typography";


export default function  LogoWithName  ()  {
    return (
      <div className="flex items-baseline space-x-company-xs-8">
        <Link href="/" className="flex items-baseline ">
          <Image
            src="/logo/company_logo_without_text.png"
            alt="Logo"
            width={60}
            height={60}
          />
          <h1 className={`vithsutra ${text.logo} ml-company-xs-8  font-bold`}>
            Vithsutra
          </h1>
        </Link>
      </div>
    );
  };
  