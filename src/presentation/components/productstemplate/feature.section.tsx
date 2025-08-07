import React from "react";
import Heading from "../ui/heading.ui";
import Image from "next/image";
import { text } from "@/shared/lib/typography";
import { Product } from "@/core/entities/product";

export function FeatureSection({
  features,
}: {
  features: Product["features"];
}) {
  return (
    <div  className=" ">
      <section className=" px-4 md:px-0  flex py-company-xl-48 flex-col justify-center  ">
        <div className="max-w-company-section-width mx-auto">
          <Heading heading="Why Choose Us" Display="EXPLORE WHAT WE OFFER" />
          <FeatuerCard features={features} />
        </div>
      </section>
    </div>
  );
}

export function FeatuerCard({ features }: { features: Product["features"] }) {
  return (
    <div className="py-company-xl-48 max-w-company-section-width mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-company-xl-48">
        {features?.map((feature, idx) => {
          const IconComponent = feature.image ? (
            <Image
              src={feature?.image}
              alt={feature.title}
              width={50}
              height={50}
            />
          ) : typeof feature.icon === "function" ? (
            React.createElement(feature?.icon, {
              className: " text-gray-700",
            })
          ) : null;

          return (
            <div
              key={feature.title + idx}
              className="flex items-start gap-company-xs-8 justify-center "
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-white border border-gray-200 rounded-company-button-8  flex items-center justify-center">
                  {IconComponent}
                </div>
              </div>
              <div className="flex-1 justify-center h-full">
                <h3
                  className={` ${text.cardHeadingsmall} pb-company-xs-8 text-gray-900 `}
                >
                  {feature.title}
                </h3>
                <p
                  className={`${text.cardBodytextlight} text-sm text-gray-600 leading-relaxed`}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
