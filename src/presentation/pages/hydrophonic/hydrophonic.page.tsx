"use client";

import TestimonialsCarousel from "@/presentation/components/testimonials.section";
import Application from "@/presentation/components/application.section";
import { Product } from "@/core/entities/product";
import QuickFacts from "@/presentation/components/quick_factes.section";
import Faq from "@/presentation/components/faq.section";
import ProductsSection from "@/presentation/components/products.section";
import ProductHeroSection from "@/presentation/components/productstemplate/prodcut_hero_section";
import Technicalspecification from "@/presentation/components/productstemplate/technical_specification.section";
import Cta from "@/presentation/components/cta.section";
import Gallery from "@/presentation/components/gallery.section";
import Howitworks, {
  ProcessStepCards,
} from "@/presentation/components/productstemplate/process_step_card.section";
import {
  FeatuerCard,
  FeatureSection,
} from "@/presentation/components/productstemplate/feature.section";
import Hydroponic from "@/presentation/components/productstemplate/hydroponic.section";
import Heading from "@/presentation/components/ui/heading.ui";

interface ProductPageProps {
  product: Product;
  otherProducts?: Product[];
}

export default function ProductPage({
  product,
  otherProducts = [],
}: ProductPageProps) {
  return (
    <main className="min-h-screen ">
      {/* Hero Section */}
      <ProductHeroSection {...product} />

      {/* Hydroponic Special Section (Only for Hydroponic Controller) */}
      {product.name == "Hydroponic Controller" && <Hydroponic {...product} />}

      

      {/* How It Works Section */}
      {product.howItWorks && product.howItWorks.length > 0 && (
        <div>
          <Heading
            heading="From root to cloud  real-time insights that grow with you."
            Display="How VithNet Works"
            className="flex flex-col-reverse"
            />
          <ProcessStepCards howItWorks={product.howItWorks} />
        </div>
      )}

      {/* Feature Highlights Section */}
      <div className="h-[800px] flex justify-center items-start w-full flex-col">
        <Heading
        heading="Built for students, trusted by institutions."
        Display="Built-in Features"
        className="flex flex-col-reverse mb-company-xl-48 w-full"
      />
      <FeatuerCard features={product.features} />
      </div>

      {/* Technical Specification Section */}
      <Technicalspecification {...product} />

      {/* Applications Section */}
      <Application applications={product.applications} />

      {/* Call to Action (CTA) Section */}
      <Cta {...product} />

      {/* Testimonials Section */}
      {product.testimonials && product.testimonials.length > 0 && (
        <TestimonialsCarousel testimonials={product.testimonials} />
      )}

      {/* FAQ Section */}
      <Faq FaQ={product.FaQ} />

      {/* Related Products Section */}
      {otherProducts.length > 0 && (
        <ProductsSection otherProducts={otherProducts} />
      )}

      {/* Gallery Section */}
      {product.gallery && product.gallery.length > 0 && (
        <Gallery gallery={product.gallery} />
      )}

      {/* Quick Facts Section */}
      {product.facts && <QuickFacts facts={product.facts} />}
    </main>
  );
}
