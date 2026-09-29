import Hero from "@/Components/Landing/Hero";
import BrandOverview from "@/Components/Landing/BrandOverview";
import Comparison from "@/Components/Landing/Comparison";
import Features from "@/Components/Landing/Features";
import WorkoutGuide from "@/Components/Landing/WorkoutGuide";
import FAQ from "@/Components/Landing/FAQ";
import Testimonial from "@/Components/Landing/Testimonials";
export default function Home() {
  return (
    <>
        <Hero/>
        <BrandOverview/>
        <Comparison/>
        <Features/>
        <WorkoutGuide/>
        <Testimonial/>
        <FAQ/>
    </>
  );
}
