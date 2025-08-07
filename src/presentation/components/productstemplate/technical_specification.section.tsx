import { Product } from "@/core/entities/product";
import Image from "next/image";
import React from "react";
import Heading from "../ui/heading.ui";
import { typography } from "@/shared/lib/typography";

function Technicalspecification(product: Product) {
  return (
    <div>
      <section className="flex p-company-xs-8 md:p-0  contain-content justify-center  ">
        <div className="max-w-company-section-width   w-full h-full">
          <Heading
            heading="Detailed technical information for system integration and deployment"
            Display="Technical Specifications"
            className="flex flex-col-reverse mb-company-xl-48 "
          />
          <div className=" relative h-[38rem] flex justify-center py-company-xl-48  items-center bg-company-litest rounded-company-section-24 border z-100 mx-auto ">
            <div className="absolute hidden  md:grid grid-cols-1 md:grid-cols-2  p-company-lg-24 justify-items-center-safe md:gap-x-96 px-0 w-full ">
              {product.productspecification &&
                product.productspecification.map((feature, idx) => {
                  const IconComponent = feature.icon ? (
                    <Image
                      src={feature.icon}
                      alt={feature.heading}
                      width={50}
                      height={50}
                    />
                  ) : typeof feature.icon === "function" ? (
                    React.createElement(feature.icon, {
                      className: " text-gray-700",
                    })
                  ) : null;

                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-company-xs-8 justify-center py-company-md-16 w-[400px]"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20  border  rounded-company-button-8  flex items-center justify-center">
                          {IconComponent}
                        </div>
                      </div>
                      <div className="flex-1 justify-center h-full">
                        <h3
                          className={` ${typography.title.large} pb-company-xs-8 text-gray-900 `}
                        >                          {feature.heading}
                        </h3>
                        <p
                          className={`${typography.body.medium} text-sm text-gray-600 leading-relaxed`}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
            <Image
              src={product.tecnicalimage}
              alt={product.name}
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Technicalspecification;
