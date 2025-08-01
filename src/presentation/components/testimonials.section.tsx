"use client";

import Heading from "./ui/heading";
import { TestimonialsCarouselProps, Testimonial } from "@/core/entities/testimonial";
import { cn } from "@/shared/lib/utils";
import { Marquee } from "@/presentation/components/magicui/marquee.ui";
import Image from "next/image";
import { text } from "@/shared/lib/typography";

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  return (
    <div id="testimonials" className="py-24 w-full flex justify-center">
      <section className="px-4 md:px-0 max-w-company-section-width mx-auto">
        <Heading heading="TESTIMONIALS" Display="What Our Clients Say" />
        <div className="relative flex w-full flex-col items-center pt-company-xl-48 justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:40s] gap-company-xl-48">
            {testimonials.map((item) => (
              <ReviewCard key={item.id} {...item} />
            ))}
          </Marquee>

          {/* Gradient overlays for edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-background"></div>
        </div>
      </section>
    </div>
  );
}

const ReviewCard = ({ avatar, name, title, company, quote }: Testimonial) => {
  return (
    <figure
      className={cn(
        "relative h-full md:w-[900px] cursor-pointer gap-company-md-16 overflow-hidden rounded-xl border border-company-primary-royalBlue p-company-xl-48"
      )}
    >
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex gap-company-xs-8">
          {avatar ? (
            <Image
              className="rounded-full w-16 h-16 object-cover grayscale-25"
              width={64}
              height={64}
              alt={name}
              src={avatar}
            />
          ):
          (
            <span className="text-2xl w-16 h-16 rounded-full md:text-3xl font-bold text-gray-600">{name.charAt(0)}</span>
          )}
          <div className="flex flex-col items-start gap-company-xs-8">
            <figcaption className={text.DisplaySupportingtext}>{name}</figcaption>
            <p className={text.Sectionbodytexts}>
              {title} ,{company}
            </p>
          </div>
        </div>
        <Image
          src="/favicon/favicon-96x96.png"
          alt="testimonial-logo"
          width={80}
          height={80}
          quality={80}
        />
      </div>
      <blockquote>{quote}</blockquote>
    </figure>
  );
};
