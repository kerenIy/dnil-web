import HeroSection from "@/components/partners/hero-section";

import Image from "next/image";
import Navbar from "@/components/global/navbar";
import IndustriesServed from "@/components/home/industries-served";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <HeroSection
        title="Our Partners"
        image="/partners/hero-bg.png"
        description="We are an ICT consultancy practice. Our focus is working with clients to provide solutions for their technology needs."
      />

      <div className="grid grid-cols-4 gap-6 bg-white px-8 py-16">
        {partners.map((partner) => {
          return (
            <div
              key={partner.id}
              className="partner flex justify-center items-center p-4"
            >
              <Image
                src={partner.image}
                alt="partner"
                width={150}
                height={50}
              />
            </div>
          );
        })}
      </div>
      <IndustriesServed />
    </>
  );
}

const partners = [
  {
    id: 1,
    image: "/partners/partners-one.png",
  },
  {
    id: 2,
    image: "/partners/partners-two.png",
  },
  {
    id: 3,
    image: "/partners/partners-three.png",
  },
  {
    id: 4,
    image: "/partners/partners-four.png",
  },
  {
    id: 5,
    image: "/partners/partners-five.png",
  },
  {
    id: 6,
    image: "/partners/partners-six.png",
  },
  {
    id: 7,
    image: "/partners/partners-seven.png",
  },
  {
    id: 8,
    image: "/partners/partners-eight.png",
  },
  {
    id: 9,
    image: "/partners/partners-nine.png",
  },
  {
    id: 10,
    image: "/partners/partners-ten.png",
  },
  {
    id: 11,
    image: "/partners/partners-eleven.png",
  },
  {
    id: 12,
    image: "/partners/partners-twelve.png",
  },
  {
    id: 13,
    image: "/partners/partners-thirteen.png",
  },
  {
    id: 14,
    image: "/partners/partners-fourteen.png",
  },
  {
    id: 15,
    image: "/partners/partners-fifteen.png",
  },
  {
    id: 16,
    image: "/partners/partners-sixteen.png",
  },
];
