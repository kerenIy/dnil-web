import Careers from "@/components/about/careers";
import Corporate from "@/components/about/corporate";
import DnilGlance from "@/components/about/dnil-at-a-glance";
import About from "@/components/about/index";
import ServiceCategory from "@/components/about/service-category";
import Navbar from "@/components/global/navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <About />
      <DnilGlance />
      <Corporate />
      <ServiceCategory />
      <Careers />
    </>
  );
}
