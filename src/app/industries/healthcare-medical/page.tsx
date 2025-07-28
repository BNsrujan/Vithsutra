import React from "react";
import SectorLayout  from "@/presentation/pages/industrialsectortemplate/IndustryalSectorLayout";
import { healthcareMedicalData } from "@/data/industries-data/healthcaremedical.industries";


export default function Page() {
  return <SectorLayout data={healthcareMedicalData} />;
} 