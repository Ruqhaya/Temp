import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Team() {
  const testimonials = [
    {
      quote:
        "Ruqhaya Nooreen’s focus on performance optimization has resulted in fast, scalable, and reliable applications. Her contributions have been critical in delivering a seamless experience.",
      name: "Ruqhaya Nooreen",
      designation: "Front End",
      src: "https://images.unsplash.com/photo-1551292831-023188e78222?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGZyZWUlMjBnaXJsfGVufDB8fDB8fHww",
    },
    {
      quote:
        "Tashfeen Fatima's expertise in backend development and authentication has been a cornerstone of our system's security. Her work ensures a robust and reliable foundation for our platform.",
      name: "Tashfeen Fatima",
      designation: "Backend and Authentication",
      src: "https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },    
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}