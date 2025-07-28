import SectorLayout  from "@/presentation/PagesForApp/industrialsectortemplate/IndustryalSectorLayout";
import { farmingAgricultureData } from "@/data/industries-data/farmingagriculture.industries";

export default function Page() {
  return <SectorLayout data={farmingAgricultureData} />;
} 