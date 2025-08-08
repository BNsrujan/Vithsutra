"use client";

import Heading from "./ui/heading.ui";
import {
  TestimonialsCarouselProps,
  Testimonial,
} from "@/core/entities/testimonial";
import { cn } from "@/shared/lib/utils";
import { Marquee } from "@/presentation/components/magicui/marquee.ui";
import Image from "next/image";
import { typography } from "@/shared/lib/typography";
import { useState } from "react";

export default function TestimonialsCarousel({
  testimonials,
}: TestimonialsCarouselProps) {
  return (
    <div
      id="testimonials"
      className="py-16 sm:py-24 w-full flex justify-center"
    >
      <section className="px-4 sm:px-6 md:px-8 lg:px-0 w-full max-w-screen-xl mx-auto">
        <Heading heading="TESTIMONIALS" Display="What Our Clients Say" />

        <div className="relative flex w-full flex-col items-center justify-center pt-12 overflow-hidden">
          <Marquee
            pauseOnHover
            className="[--duration:40s] gap-6 md:gap-company-xl-48"
          >
            {testimonials.map((item) => (
              <ReviewCard key={item.id} {...item} />
            ))}
          </Marquee>

          {/* Gradient overlays for edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-background" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-background" />
        </div>
      </section>
    </div>
  );
}

const ReviewCard = ({ avatar, name, title, company, quote }: Testimonial) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <figure
      className={cn(
        "relative w-[90vw] sm:w-[500px] md:w-[700px] lg:w-[900px] max-w-full gap-6 rounded-xl border border-company-primary-royalBlue p-6 sm:p-10 select-none",
        isDragging ? "cursor-grabbing z-50" : "cursor-grab"
      )}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: isDragging ? "none" : "transform 0.2s ease-out",
        userSelect: isDragging ? "none" : "auto",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Show Dragging indicator */}
      {isDragging && (
        <div className="absolute top-2 right-2 text-xs px-2 py-1 bg-blue-500 text-white rounded">
          Dragging...
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4 sm:gap-6">
        <div className="flex gap-4">
          {avatar ? (
            <Image
              className="rounded-full w-12 h-12 sm:w-16 sm:h-16 object-cover grayscale-25"
              width={64}
              height={64}
              alt={name}
              src={avatar}
            />
          ) : (
            <span className="text-xl sm:text-2xl w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full font-bold text-gray-600 bg-gray-200">
              {name.charAt(0)}
            </span>
          )}
          <div className="flex flex-col">
            <figcaption className={typography.title.large}>{name}</figcaption>
            <p className={typography.body.medium}>
              {title}, {company}
            </p>
          </div>
        </div>
        <Image
          src="/favicon/favicon-96x96.png"
          alt="testimonial-logo"
          width={64}
          height={64}
          quality={80}
          className="hidden sm:block"
        />
      </div>
      <blockquote className="mt-4 text-sm sm:text-base">{quote}</blockquote>
    </figure>
  );
};
