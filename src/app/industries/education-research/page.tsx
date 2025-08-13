
import SectorLayout  from "@/presentation/pages/industrialsectortemplate/industryal_sector_layout";
import { educationResearchData } from "@/infrastructure/data/industries-data/educationresearch.industries.data";


export default function Page() {
  return <SectorLayout data={educationResearchData} />;
} 