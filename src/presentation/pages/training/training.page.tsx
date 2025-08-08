import BrochureDownload from "@/presentation/components/brochure_download.component";
import Faq from "@/presentation/components/faq.section";
import ComparisonTable from "@/presentation/pages/training/futhers_comparision.section";
import PricingModels from "@/presentation/pages/training/pricing.section";
import { faqs } from "@/data/domain/training_page.data";

export default function Training() {
  return (
    <div className="flex justify-center  items-center flex-col w-full">
      <PricingModels/>
      <ComparisonTable/>
      <BrochureDownload/>
      {/* <Faq  FaQ={faqs} /> */}
    </div>
  );
}