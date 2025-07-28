"use client";
import { Carousel, Card } from "@/presentation/components/ui/Applicationcard";
import { ProductApplication } from "@/data/products";
import Heading from "./heading";

interface ApplicationProps {
  applications: ProductApplication[];
}

function Application({ applications }: ApplicationProps) {
  // Convert applications to Card format for the carousel
  const carouselItems = applications.map((app, index) => {
    if (typeof app === 'string') {
      return (
        <Card
          key={index}
          card={{
            src: "/public/industry/fmog.avif", // Default image
            title: app,
            category: "Application",
            content: <div>{app}</div>
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
            content: <div>{app.description}</div>
          }}
          index={index}
        />
      );
    }
  });

  return (
    <div className="md:py-company-lg-24">
      <div className="max-w-company-section-width mx-auto w-full">
        <Heading Display="APPLICATION" heading="Use Cases" />
        <div className="flex justify-center items-center w-full h-[400px] md:h-[600px] min-h-96 relative overflow-hidden">
          <Carousel items={carouselItems} />
        </div>
      </div>
    </div>
  );
}

export default Application;
