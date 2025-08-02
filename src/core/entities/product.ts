// Core Entity: Product
import { LucideIcon } from "lucide-react";

export interface ProductFeature {
  title: string;
  description: string;
  image?: string;
  icon?: string | LucideIcon;
}

export interface WhyChoose {
  title: string;
  description: string;
  image?: string;
  icon?: string | LucideIcon;
}

export interface ProductSpec {
  name: string;
  value: string;
}

export interface HowItWorks {
  image: string;
  title: string;
  description: string;
}

export interface Fact {
  number: number;
  title: string;
  suffix: string;
}

export interface ProductApplication   {
  industry: string;
  image: string;
  description: string;
} 

export interface ProductSpecification {
  icon: string;
  heading: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  quote: string;
  avatar?: string;
}

export interface FAQ {
  qution: string; // Note: keeping original typo for compatibility
  answer: string;
}

export interface Product {
  id: string;
  name: string;
  tagline?: string | null;
  description: string;
  mainImage: string;
  category?:string;
  productSectionImage: string;
  tecnicalimage: string;
  whychose?: WhyChoose[];
  features: ProductFeature[];
  productspecification?: ProductSpecification[];
  howItWorks?: HowItWorks[];
  applications: ProductApplication[];
  gallery?: string[];
  testimonials?: Testimonial[];
  FaQ: FAQ[];
  isActive?: boolean;
  slug: string;
  facts: Fact[];
  link: string;

}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  slug: string;
}