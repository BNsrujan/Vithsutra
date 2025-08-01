"use client";

import Heading from "./heading";
import {
  TestimonialsCarouselProps,
  Testimonial,
} from "@/core/entities/testimonial";
import { cn } from "@/shared/lib/utils";
import { Marquee } from "@/presentation/components/magicui/marquee.ui";
import Image from "next/image";
import { text } from "@/shared/lib/typography";

export default function TestimonialsCarousel({
  testimonials,
}: TestimonialsCarouselProps) {
  return (
    <div className="py-24 w-full flex justify-center">
      <section className="px-4 md:px-0 max-w-company-section-width mx-auto">
        <Heading heading="TESTIMONIALS" Display="What Our Clients Say" />
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:40s]">
            {testimonials.map((testimonials) => (
              <ReviewCard key={testimonials.id} {...testimonials} />
            ))}
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </section>
    </div>
  );
}

const ReviewCard = (testimonials: Testimonial) => {
  return (
    <figure
      className={cn(
        "relative h-full md:w-[900px] cursor-pointer overflow-hidden rounded-xl border p-company-xl-48",
      
      )}
    >
      <div className="flex flex-row items-center  gap-2 w-full">
        <Image
          className="rounded-full w-16 h-16 object-cover grayscale-25"
          width="32"
          height="32"
          alt=""
          src={testimonials.avatar}
        />
        <div className="flex flex-col items-start">
          <figcaption className={`${text.cardBodytext}  `}>
            {testimonials.name}
          </figcaption>
         
          <p className={`${text.cardBodytext} `}>
          {testimonials.title} {testimonials.company}
          </p>
        </div>
         <Image className=" place-self-end" src={"/favicon/favicon-96x96.png"} alt="vitsutra_image" width={80} height={80} />
      </div>
      <blockquote className={`${text} `}>{testimonials.quote}</blockquote>
    </figure>
  );
};
