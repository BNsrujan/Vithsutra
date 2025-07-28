import BrochureDownload from "@/presentation/pages/training/BrochureDownload";
import Faq from "@/presentation/pages/training/FAndQ";
import ComparisonTable from "@/presentation/pages/training/futhersComparision";
import PricingModels from "@/presentation/pages/training/pricing";


export default function Training() {
  return (
    <div className="flex justify-center  items-center flex-col">
      <PricingModels/>
      <ComparisonTable/>
      <BrochureDownload/>
      <Faq/>
    </div>
  );
}