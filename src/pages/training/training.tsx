import BrochureDownload from "@/pages/training/BrochureDownload";
import Faq from "@/pages/training/FAndQ";
import ComparisonTable from "@/pages/training/futhersComparision";
import PricingModels from "@/pages/training/pricing";


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