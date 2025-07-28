import React from "react";
import SectorLayout  from "@/PagesForApp/industrialsectortemplate/IndustryalSectorLayout";
import { healthcareMedicalData } from "@/data/industries-data/healthcaremedical.industries";


export default function Page() {
  return <SectorLayout data={healthcareMedicalData} />;
} 