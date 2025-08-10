import SectorLayout  from "@/presentation/pages/industrialsectortemplate/industryal_sector_layout";
import { farmingAgricultureData } from "@/infrastructure/data/industries-data/farmingagriculture.industries";

export default function Page() {
  return <SectorLayout data={farmingAgricultureData} />;
} 