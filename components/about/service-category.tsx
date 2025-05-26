import React from "react";
import { sidebarItems } from "@/lib/compant-links";

import Link from "next/link";

export default function ServiceCategory() {
  return (
    <div>
      {" "}
      <section className="my-16 py-7 px-[10%]" id="services">
        <h2 className="text-2xl font-bold mb-4 text-[#0C0C0C]">
          Services & Solutions
        </h2>
        <p className="text-[#0C0C0C] text-[15px] mb-8">
          This shows our global reach of products and solutions. For more
          detailed offerings in your region, select your region from the list
          below.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {sidebarItems.map((category, index) => (
            <Link key={index} href="/services" className="group relative block">
              <div className="relative h-40 mb-2 overflow-hidden rounded-lg">
                {/* Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="object-cover w-full h-full absolute top-0 left-0 transition-transform duration-300 group-hover:scale-105"
                />

                {/* Centered Overlay */}
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="backdrop-blur-md bg-[#F5F5F5B2] border border-[#F4F4F4] px-4 py-2 md:p-2 mx-2 rounded-[6px]">
                    <h3 className="text-[#0C0C0C] text-center font-medium">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            href="/services"
            className="flex items-center border-2 border-[#0A0045] text-[#0A0045] px-4 py-2 rounded-[20px] hover:bg-gray-50"
          >
            Explore More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
