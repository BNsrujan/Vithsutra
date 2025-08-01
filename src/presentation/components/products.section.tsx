import Heading from "./ui/heading"
import {motion} from "motion/react"
import { Carousel } from "./ui/productscard"
import { Product } from "@/core/entities/product";
import { containerVariants } from "@/shared/lib/animations";
import { text } from "@/shared/lib/typography";
import { Card } from "./ui/productscard";

interface ProductsSectionProps {
  otherProducts: Product[];
}

export default function ProductsSection({
  otherProducts,
}: ProductsSectionProps) {
  return (
      <section className="py-24">
        <div className="max-w-company-section-width mx-auto px-4 md:px-0">
          <Heading heading="BEST SELLING PRODUCT" Display="Other Products" />
          <motion.div
           
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Carousel
              items={otherProducts
                .filter((p): p is Product => !!p && !!p.id && !!p.name)
                .map((p, index) => (
                  <Card
                    key={p.id}
                    card={{
                      src: p.productSectionImage,
                      title: p.name,
                      category: p.tagline || "",
                      link: `/products/${p.id}`,
                      content: (
                        <div className="space-y-4">
                          <p className={`${text.cardBodytext} text-gray-600`}>
                            {p.description}
                          </p>
                          <a
                            href={`/products/${p.id}`}
                            className="inline-block text-blue-600 hover:text-blue-800"
                          >
                            Learn more →
                          </a>
                        </div>
                      ),
                    }}
                    index={index}
                  />
                ))}
            />
          </motion.div>
        </div>
      </section>
  );
}
