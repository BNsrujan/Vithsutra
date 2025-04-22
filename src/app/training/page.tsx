import BrochureDownload from "@/components/training/BrochureDownload";
import Faq from "@/components/training/FAndQ";
import ComparisonTable from "@/components/training/futhersComparision";
import PricingModels from "@/components/training/pricing";
import Testimonials from "@/components/training/testimonials";


export default function Training() {
  return (
    <div className="bg-white max-w-[1800px]">
      <PricingModels/>
      <ComparisonTable/>
      <BrochureDownload/>
      <Faq/>
    
    </div>
  );
}
