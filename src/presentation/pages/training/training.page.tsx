import BrochureDownload from "@/presentation/components/brochure_download.component";
import Faq from "@/presentation/components/faq.section";
import ComparisonTable from "@/presentation/pages/training/futhers_comparision.section";
import PricingModels from "@/presentation/pages/training/pricing.section";
import { faqs ,testimonials } from "@/data/domain/robotics.data";
import TestimonialsCarousel from "@/presentation/components/testimonials.section";

export default function Training() {
  return (
    <div className="flex justify-center  items-center flex-col">
      <PricingModels/>
      <ComparisonTable/>
      <BrochureDownload/>
      <Faq  FaQ={faqs} />
      <TestimonialsCarousel testimonials={testimonials} />
    
    </div>
  );
}