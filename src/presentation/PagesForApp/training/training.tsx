import BrochureDownload from "@/presentation/PagesForApp/training/BrochureDownload";
import Faq from "@/presentation/PagesForApp/training/FAndQ";
import ComparisonTable from "@/presentation/PagesForApp/training/futhersComparision";
import PricingModels from "@/presentation/PagesForApp/training/pricing";


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