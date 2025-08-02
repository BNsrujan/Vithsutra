import { containerVariants } from "@/shared/lib/motion";
import { motion } from "motion/react";
import { text } from "@/shared/lib/typography";
import { Button } from "../ui/button.ui";
import { useRouter } from "next/navigation";
import { DialogDemo } from "../brochuredialog.component";
import { Product } from "@/core/entities/product";

export default function Cta(product: Product) {
  const router = useRouter();
  return (
    <div>
      <section className="">
        <div className="max-w-company-section-width w-full mx-auto md:rounded-4xl bg-company-primary-royalBlue h-[300px] flex flex-col justify-center  items-center  text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2
              className={`${text.cardHeadingtext} text-white mb-company-md-16`}
            >
              Ready to Get Started?
            </h2>
            <p
              className={`${text.Extratext} text-company-litest-gray  mb-company-md-16 max-w-2xl mx-auto`}
            >
              Contact us today to learn more about {product.name} and how it can
              benefit your business.
            </p>
            <div className="md:flex  space-y-4 md:space-y-0  w-fll justify-center content-center md:gap-company-md-16 ">
              <Button
                onClick={() => router.push("/Contact")}
                variant={"neumorphicYellow"}
              >
                Request a Demo
              </Button>
              <DialogDemo />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
