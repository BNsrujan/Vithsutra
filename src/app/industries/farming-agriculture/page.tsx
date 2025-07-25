import SectorLayout  from "@/PagesForApp/IndustrialSectorTemplate/IndustryalSectorLayout";
import { farmingAgricultureData } from "@/data/industries-data/farmingagriculture.industries";

export default function Page() {
  return <SectorLayout data={farmingAgricultureData} />;
} 