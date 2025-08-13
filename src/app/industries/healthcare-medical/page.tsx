import SectorLayout  from "@/presentation/pages/industrialsectortemplate/industryal_sector_layout";
import { healthcareMedicalData } from "@/infrastructure/data/industries-data/healthcaremedical.industries.data";


export default function Page() {
  return <SectorLayout data={healthcareMedicalData} />;
} 