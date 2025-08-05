"use client";

import {
  Carousel,
  Card,
} from "@/presentation/components/ui/application_card.component";
import { ProductApplication } from "@/core/entities/product";
import Heading from "@/presentation/components/ui/heading.ui";

interface ApplicationProps {
  applications: ProductApplication[];
}

function Application({ applications }: ApplicationProps) {
  const carouselItems = applications.map((app, index) => (
    <Card
      key={index}
      card={{
        src: typeof app === "string" ? "/public/industry/fmog.avif" : app.image,
        title: typeof app === "string" ? app : app.industry || " ",
        category: typeof app === "string" ? "Application" : "Industry",
        content: <div>{typeof app === "string" ? app : app.description}</div>,
      }}
      index={index}
    />
  ));

  return (
    <section className="py-16 px-4 md:px-0 md:py-24 overflow-hidden relative flex justify-center items-center">
      <div className="mt-company-xl-48 w-company-section-width">
        <div className="md:py-company-lg-24">
          <div className="max-w-company-section-width mx-auto w-full">
            <Heading Display="APPLICATION" heading="Use Cases" />
            <div className="flex justify-center items-center w-full h-[400px] md:h-[750px] min-h-96 relative ">
              <Carousel items={carouselItems} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Application;
