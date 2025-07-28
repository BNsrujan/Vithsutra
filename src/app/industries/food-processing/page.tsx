import SectorLayout  from "@/presentation/PagesForApp/industrialsectortemplate/IndustryalSectorLayout";
import { foodProcessingData } from "@/data/industries-data/foodprocessing.industries";


export default function Page() {
  return <SectorLayout data={foodProcessingData} />;
} 