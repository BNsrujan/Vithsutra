
import SectorLayout  from "@/presentation/PagesForApp/industrialsectortemplate/IndustryalSectorLayout";
import { educationResearchData } from "@/data/industries-data/educationresearch.industries";


export default function Page() {
  return <SectorLayout data={educationResearchData} />;
} 