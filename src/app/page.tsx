import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import WhyOnline from "@/components/sections/WhyOnline";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <WhyOnline />
      <Testimonials />
      <CTA />
    </>
  );
}
