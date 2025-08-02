"use client";
import {
  Carousel,
  Card,
} from "@/presentation/components/ui/applicationcard.component";
import { ProductApplication } from "@/core/entities/product";
import Heading from "@/presentation/components/ui/heading.ui";

interface ApplicationProps {
  applications: ProductApplication[];
}

function Application({ applications }: ApplicationProps) {
  // Convert applications to Card format for the carousel
  const carouselItems = applications.map((app, index) => {
    if (typeof app === "string") {
      return (
        <Card
          key={index}
          card={{
            src: "/public/industry/fmog.avif", // Default image
            title: app,
            category: "Application",
            content: <div>{app}</div>,
          }}
          index={index}
        />
      );
    } else {
      return (
        <Card
          key={index}
          card={{
            src: app.image,
            title: app.industry,
            category: "Industry",
            content: <div>{app.description}</div>,
          }}
          index={index}
        />
      );
    }
  });

  return (
    <section className="py-16 px-4 md:px-0 md:py-24 overflow-hidden  relative flex justify-center items-center">
      <div className=" mt-company-xl-48 w-company-section-width">
        <div className="md:py-company-lg-24">
          <div className="max-w-company-section-width mx-auto w-full">
            <Heading Display="APPLICATION" heading="Use Cases" />
            <div className="flex justify-center items-center w-full h-[400px] md:h-[800px] min-h-96 relative overflow-hidden">
              <Carousel items={carouselItems} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Application;
