import React from "react";
import Image from "next/image";

import { glanceCards } from "@/lib/compant-links";

export default function DnilGlance() {
  return (
    <div>
      {" "}
      <section
        className="relative text-white py-10 mb-16"
        id="mission-vision-values"
      >
        <Image
          src="/dnil-glance.png"
          alt="DNIL glance"
          width={1920}
          height={1080}
          objectFit="cover"
          className="hidden md:inline"
        />
        <div className="md:absolute bottom-[-10px] container mx-auto px-[8%] left-[4%]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {glanceCards.map((card, index) => (
              <div
                key={index}
                className="bg-[#F4F4F4] border border-[#D9D9D9] text-[#0C0C0C] p-6 rounded-lg"
              >
                <h3 className="text-center font-bold text-[15px] mb-3">
                  {card.title}
                </h3>
                <p className="text-[15px] text-center">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="text-[#0C0C0C] mb-16 md:flex items-center px-[10%]">
        <div className="">
          <div className="border border-[#737373] p-6 rounded-lg mb-3 max-w-[500px] relative">
            <h2 className="text-xl font-bold mb-4 z-1000">Our Vision</h2>
            <p className="text-[13px] mb-4 z-1000">
              To lead and shape the future with confidence of every client
              through personal attention, passion for what we do, and a
              commitment to long-lasting relationships.
            </p>

            <div className="absolute bottom-0 left-0 z-[-1]">
              <div
                className="w-32 md:w-64 h-[70px] md:h-[200px]"
                style={{
                  background:
                    "linear-gradient(64.12deg, #1C165F -28.47%, #FFFFFF 24.69%)",
                }}
              ></div>
            </div>
          </div>

          <div className="border border-[#737373] p-6 mt-3 rounded-lg max-w-[500px] relative overflow-hidden">
            <div className="absolute top-0 right-0 z-[-1]">
              <div
                className="w-32 md:w-64 h-[70px] md:h-[200px]"
                style={{
                  background:
                    "linear-gradient(63.46deg, #FFFFFF 76.12%, #1C165F 166.61%)",
                }}
              ></div>
            </div>

            <h2 className="text-xl font-bold mb-4">Our Mission</h2>
            <p className="text-[13px]">
              To deliver exceptional business value through innovative
              technology solutions and consultancy, transforming how our
              business is impacted by tech.
            </p>
          </div>
        </div>

        <div
          className="mt-4 md:mt-0 relative md:ml-6"
          data-aos="fade-up"
          data-aos-once="false"
        >
          <Image
            src="/top-careers.jpg"
            alt="DNIL team members"
            width={800}
            height={450}
          />
        </div>
      </section>
    </div>
  );
}
