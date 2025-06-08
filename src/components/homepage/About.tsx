import { TextAnimate } from "@/components/magicui/text-animate";

export default function WhyVithsutra() {
  return (
    <section id="about" className="flex max-w-[1400px] gap-5 flex-col h-6/12 lg:flex-row  justify-between px-6 md:px-16 py-16 bg-company-white">
      <div className=" ">
        <TextAnimate className="section-head dark:text-white text-company-black mb-4 ">
          Why Vithsutra is the best.
        </TextAnimate>
        <p className="container-supporting-half  dark:text-white ">
          To revolutionize how businesses interact with technology by creating
          intelligent, integrated solutions that anticipate future challenges
          and place our clients at the forefront of digital transformation. By
          2030, we aim to be a global leader in technological innovation,
          empowering organizations across continents to achieve unprecedented
          efficiency, growth, and competitive advantage.
        </p>
      </div>

      <div className="mt-10 lg:mt-0 ">
        <div className="  w-96 h-[500px] overflow-hidden rounded-lg bg-company-light-light-gray">
          {/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
          <video width="380" height="240" autoPlay loop controls>
            <source src="/video.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
