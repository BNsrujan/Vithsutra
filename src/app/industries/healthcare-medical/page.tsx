import React from "react";
import SectorLayout  from "@/presentation/pages/industrialsectortemplate/industryal_sector_layout";
import { healthcareMedicalData } from "@/data/industries-data/healthcaremedical.industries";


export default function Page() {
  return <SectorLayout data={healthcareMedicalData} />;
} 