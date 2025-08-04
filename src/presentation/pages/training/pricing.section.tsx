"use client";

import { IconButton } from "@/presentation/components/ui/iconhover.ui";
import { motion } from "motion/react";
import { Puzzle } from "lucide-react";
import { text } from "@/shared/lib/typography";
import Heading from "@/presentation/components/ui/heading.ui";
import { Button } from "@/presentation/components/ui/button.ui";
import { iconMap } from "@/data/domain/robotics.data";
import { models } from "@/data/domain/robotics.data";

export default function PricingModels() {
  return (
    <section className="py-company-xl-48  max-w-company-section-width mx-auto bg-company-white">
      <Heading heading="Training Models" Display="Choose Your Path" />
      <motion.div
        className="md:grid md:grid-cols-3  md:gap-company-lg-24 flex flex-col md:h-[800px] justify-center gap-company-lg-24 md:mb-0 z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {models.map((model, index) => (
          <div
            key={index}
            className={`relative  border-1 border-company-primary-royalBlue/40 rounded-card max-w-company-card-width p-company-lg-24 transition duration-300 rounded-company-section-24 ease-in bg-company-litest-gray z-10 text-black`}
          >
            {/* {index == 2 && (
              <div className="absolute -top-4 left-0 max-w-company-card-width w-full h-9 font-semibold px-3 py-1 rounded-t-company-section-24  bg-company-secondary-yello  z-20">
                Master model full pack
              </div>
            )} */}
            <div className="">
              <div className="flex items-center mt-company-sm-12 ">
                <div className="flex  items-center h-full size-6  ">
                  {model.icon}
                </div>
                <div className="h-full  ">
                  <p className={text.cardHeadingsmall + "mb-company-xl-48"}>
                    {model.title}
                  </p>
                  <p
                    className={
                      text.Sectionbodytexts + "  text-company-primary-royalBlue"
                    }
                  >
                    {model.subtitle}
                  </p>
                </div>
              </div>
            </div>
            <p className={text.cardBodytext + "pt-company-xl-48 text-company-text-gray mb-4 "}>
              {model.description}
            </p>
            <hr className=" w-full my-company-lg-24 bg-company-dark-gray" />
            <ul className="space-y-company-md-16">
              {model.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center   gap-company-md-16 group transition duration-300 ease-in group-hover:text-company-primary-royalBlue"
                >
                  {iconMap[feature] ?? <IconButton icon={Puzzle}  />}
                  <span
                    className={
                      text.cardBodytext +
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
              className="w-full absolute bottom-company-lg-24"
            >
              Book a Model
            </Button>
          </div>
        ))}
      </motion.div>

      <section className="text-center py-company-xl-48 space-y-company-xs-8 bg-company-primary-royalBlue rounded-company-section-24 mt-company-lg-24">
        <h2 className={text.SectionHeader + " text-white"}>
          Ready to Start Your Robotics Journey?
        </h2>
        <p
          className={text.cardBodytextlight + " text-white/90 pb-company-md-16"}
        >
          Choose your model and begin hands-on learning with industry experts.
        </p>
        <Button variant={"neumorphicYellow"}>Contact Us</Button>
      </section>
    </section>
  );
}
