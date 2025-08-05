export interface Testimonial {
    id: string;
    name: string;
    title: string;
    company: string;
    quote: string;
    avatar?: string;
  }
  
  export  interface TestimonialsCarouselProps {
    testimonials: Testimonial[];
  }
  
 
  