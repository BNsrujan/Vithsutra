import SectorLayout  from "@/presentation/pages/industrialsectortemplate/industryal_sector_layout";
import { foodProcessingData } from "@/data/industries-data/foodprocessing.industries";


export default function Page() {
  return <SectorLayout data={foodProcessingData} />;
} 