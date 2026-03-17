import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
}
