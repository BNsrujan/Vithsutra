import SectorLayout  from "@/presentation/pages/industrialsectortemplate/industryal_sector_layout";
import { foodProcessingData } from "@/infrastructure/data/industries-data/foodprocessing.industries.data";


export default function Page() {
  return <SectorLayout data={foodProcessingData} />;
} 