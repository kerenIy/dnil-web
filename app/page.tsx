import Navbar from "@/components/global/navbar";
import Hero from "@/components/global/hero";
import IndustryNews from "@/components/home/industry-news";
import AboutUs from "@/components/home/about-us";
import ProductsSolutions from "@/components/home/product-solutions";
import CoreValues from "@/components/home/core-values";
import Pillars from "@/components/home/pillar";
import Careers from "@/components/home/careers";
import MeetTeam from "@/components/home/meet-the-team";
import PressReleases from "@/components/home/press-releases";
import IndustriesServed from "@/components/home/industries-served";
import ImportantNotices from "@/components/home/important-notices";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <IndustryNews />
      <AboutUs />
      <ProductsSolutions />
      <CoreValues />
      <Pillars />
      <Careers />
      <MeetTeam />
      <PressReleases />
      <IndustriesServed />
      <ImportantNotices />
    </main>
  );
}
