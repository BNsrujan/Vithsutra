"use client";

import TestimonialsCarousel from "@/presentation/components/testimonials.section";
import Application from "@/presentation/components/Application.section";
import { Product } from "@/core/entities/product";
import QuickFacts from "@/presentation/components/quickfactes.section";
import Faq from "@/presentation/pages/training/FAndQ";
import ProductsSection from "@/presentation/components/products.section";
import ProductHeroSection from "@/presentation/components/productstemplate/prodcut_hero_section";
import Technicalspecification from "../../components/productstemplate/technicalspecification.section";
import Cta from "../../components/productstemplate/cta.section";
import Gallery from "../../components/productstemplate/gallery.section";
import Howitworks from "@/presentation/components/productstemplate/processtepcard.section";
import FeatureSection from "../../components/productstemplate/feature.section";
import Hydroponic from "../../components/productstemplate/hydroponic.section";

interface ProductPageProps {
  product: Product;
  otherProducts?: Product[];
}

export default function ProductPage({
  product,
  otherProducts = [],
}: ProductPageProps) {
  return (
    <main className="min-h-screen space-y-company-xl-48">
      
      {/* Hero Section */}
      <ProductHeroSection {...product} />

      {/* Hydroponic Special Section (Only for Hydroponic Controller) */}
      {product.name == "Hydroponic Controller" && <Hydroponic {...product} />}

      {/* Feature Highlights Section */}
      <FeatureSection features={product.features} />

      {/* How It Works Section */}
      {product.howItWorks && product.howItWorks.length > 0 && 
        <Howitworks howItWorks={product.howItWorks} />
      }

      {/* Technical Specification Section */}
      <Technicalspecification {...product} />

      {/* Applications Section */}
      <Application applications={product.applications} />

      {/* Call to Action (CTA) Section */}
      <Cta {...product} />

      {/* Testimonials Section */}
      {product.testimonials && product.testimonials.length > 0 && 
        <TestimonialsCarousel testimonials={product.testimonials} />
      }

      {/* FAQ Section */}
      <Faq />

      {/* Related Products Section */}
      {otherProducts.length > 0 && 
        <ProductsSection otherProducts={otherProducts} />
      }

      {/* Gallery Section */}
      {product.gallery && product.gallery.length > 0 && 
        <Gallery gallery={product.gallery} />
      }

      {/* Quick Facts Section */}
      {product.facts && <QuickFacts facts={product.facts} />}
    </main>
  );
}
