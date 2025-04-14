import { TextAnimate } from "@/components/magicui/text-animate";
import Image from "next/image";

export default function WhyVithsutra() {
  return (
    <section className="flex flex-col  lg:flex-row  justify-between px-6 md:px-16 py-16 bg-company-white">
      <div className="max-w-[1800px] ">
        <TextAnimate className="text-3xl font-bold text-company-black mb-4">
          Why Vithsutra is the best.
        </TextAnimate>
        <TextAnimate
          animation="blurInUp"
          by="character"
          duration={5}
          className="text-[600] text-[28px] "
        >
          To revolutionize how businesses interact with technology by creating
          intelligent, integrated solutions that anticipate future challenges
          and place our clients at the forefront of digital transformation. By
          2030, we aim to be a global leader in technological innovation,
          empowering organizations across continents to achieve unprecedented
          efficiency, growth, and competitive advantage.
        </TextAnimate>
      </div>

      <div className="mt-10 lg:mt-0 lg:ml-16">
        <div className="w-[var(--box-big-mobile-width)] h-[var(--box-big-mobile-height)] rounded-[28px] bg-company-light-light-gray  bg-[url('/placeholder.png')] bg-cover bg-center ">
          <Image
            src="/image.png"
            width={800}
            height={400}
            alt="about"
            className="flex  items-center content-center "
          />
        </div>
      </div>
    </section>
  );
}
