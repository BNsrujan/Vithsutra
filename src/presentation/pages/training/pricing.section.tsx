"use client";

import { IconButton } from "@/presentation/components/ui/icon_hover.ui";
import { motion } from "motion/react";
import { Puzzle } from "lucide-react";
import { typography } from "@/shared/lib/typography";
import Heading from "@/presentation/components/ui/heading.ui";
import { Button } from "@/presentation/components/ui/button.ui";
import { iconMap } from "@/data/domain/training_page.data";
import { models } from "@/data/domain/training_page.data";

export default function PricingModels() {
  return (
    <section className="py-company-xl-48  max-w-company-section-width mx-auto bg-company-white  ">
      <Heading heading="Training Models" Display="Choose Your Path" className="px-4 md:px-0 " />
      <motion.div
        className="md:grid md:grid-cols-3 pt-company-xl-48 md:gap-company-lg-24 flex flex-col px-4 md:px-0   md:h-[900px] justify-center gap-company-lg-24 md:mb-0 z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {models.map((model, index) => (
          <div
            key={index}
            className={`relative border-1 border-company-primary-royalBlue/40 min-h-[800px] rounded-card max-w-company-card-width p-company-lg-24 transition duration-300 rounded-company-section-24 ease-in bg-company-litest-gray z-10 text-black`}
          >
            {/* {index == 2 && (
              <div className="absolute -top-4 left-0 max-w-company-card-width w-full h-9 font-semibold px-3 py-1 rounded-t-company-section-24  bg-company-secondary-yello  z-20">
                Master model full pack
              </div>
            )} */}
            <div className="">
              <div className="flex items-center mt-company-sm-12 ">
                <div className="flex  items-center h-full   ">{model.icon}</div>
                <div className="h-full pl-company-xs-8">
                  <p className={`${typography.title.large} `}>{model.title}</p>
                  <p
                    className={`${typography.body.medium} text-company-primary-royalBlue`}
                  >
                    {model.subtitle}
                  </p>
                </div>
              </div>
            </div>
            <p
              className={
                typography.body.large +
                " pt-company-xl-48 text-company-text-gray mb-4 "
              }
            >
              {model.description}
            </p>
            <hr className=" w-full my-company-lg-24 bg-company-dark-gray" />
            <ul className="space-y-company-md-16">
              {model.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center   gap-company-md-16 group transition duration-300 ease-in group-hover:text-company-primary-royalBlue"
                >
                  {iconMap[feature] ?? <IconButton icon={Puzzle} />}
                  <span
                    className={
                      typography.body.large +
                      "  text-company-gray-text group-hover:text-company-primary-royalBlue"
                    }
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <Button
              variant={"neumorphic"}
              className="w-[90%] absolute  bottom-company-lg-24 "
            >
              Book a Model
            </Button>
          </div>
        ))}
      </motion.div>

      <section className="text-center py-company-xl-48 space-y-company-xs-8 bg-company-primary-royalBlue  md:rounded-company-section-24 mt-company-lg-24">
        <h2 className={typography.headline.large + " text-white"}>
          Ready to Start Your Robotics Journey?
        </h2>
        <p
          className={typography.body.medium + " text-white/90 pb-company-md-16"}
        >
          Choose your model and begin hands-on learning with industry experts.
        </p>
        <Button variant={"neumorphicYellow"}>Contact Us</Button>
      </section>
    </section>
  );
}
