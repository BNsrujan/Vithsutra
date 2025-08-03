
import SectorLayout  from "@/presentation/pages/industrialsectortemplate/industryal_sector_layout";
import { educationResearchData } from "@/data/industries-data/educationresearch.industries";


export default function Page() {
  return <SectorLayout data={educationResearchData} />;
} 