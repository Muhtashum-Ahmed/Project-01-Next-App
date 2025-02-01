import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses"
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsCards from "@/components/TestimonialsCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";


export default function Home() {
  return (

    <main className="min-h-screen bg-black/[0.96] antialiased bg-dot-white/[0.17]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs /> 
      <TestimonialsCards />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </main>

  );
}
