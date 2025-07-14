import BrochureDownload from "@/PagesForApp/training/BrochureDownload";
import Faq from "@/PagesForApp/training/FAndQ";
import ComparisonTable from "@/PagesForApp/training/futhersComparision";
import PricingModels from "@/PagesForApp/training/pricing";


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