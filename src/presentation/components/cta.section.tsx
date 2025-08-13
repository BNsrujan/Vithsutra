import { containerVariants } from "@/shared/lib/motion";
import { motion } from "motion/react";
import { typography } from "@/shared/lib/typography";
import { Button } from "@/presentation/components/ui/button.ui";
import { useRouter } from "next/navigation";
import { DialogDemo } from "@/presentation/components/brochure_dialog.component";
import { Product } from "@/core/entities/product";

export default function Cta(product: Product) {
  const router = useRouter();
  return (
    <div>
      <section className="h-[560px]">
        <div className="max-w-company-section-width w-full mx-auto md:rounded-4xl bg-company-primary-royalBlue h-[300px] flex flex-col justify-center  items-center  text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2
              className={`${typography.headline.large} text-white mb-company-md-16`}
            >
              Ready to Get Started?
            </h2>
            <p
              className={`${typography.body.large} text-company-litest-gray  mb-company-md-16 max-w-3xl mx-auto`}
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
