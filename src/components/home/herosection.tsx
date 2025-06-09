"use client";
import { text } from "@/lib/typography";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  return (
    <div className="relative w-full h-[100vh] min-h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ 
            objectPosition: 'center'
          }}
        >
          <source src="/video/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
       
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <section className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto ">
          <p className={`${text.DisplayPrefixtext} text-company-blue-white text-base sm:text-lg md:text-xl`}>
            Experience The
          </p>
          <h1 className={`${text.Displaytext} text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl text-company-blue-white font-bold`}>
            Vithsutra 
          </h1>
          <p className={`${text.midtext} text-gray-200 max-w-7xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl font-medium px-4 sm:px-6 md:px-8`}>
            We create tailored solutions designed to meet your organization&apos;s
            unique needs and goals. Our team is committed to delivering projects
            on time, without compromising on quality. With a strong focus on
            detail and excellence.
          </p>
          <Button onClick={() => router.push('/contact')} className=" text-company-blue-white text-center  bg-company-primary-royalBlue">
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
}
