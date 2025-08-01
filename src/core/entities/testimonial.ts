export interface Testimonial {
    id: number;
    name: string;
    title: string;
    company: string;
    quote: string;
    avatar?: string;
  }
  
  export  interface TestimonialsCarouselProps {
    testimonials: Testimonial[];
  }
  
 
  