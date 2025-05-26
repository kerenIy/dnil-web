import React from "react";
import Image from "next/image";
import { corporateLinks } from "@/lib/compant-links";

import Link from "next/link";

export default function Corporate() {
  return (
    <div>
      <section className="my-16 px-[10%] py-7" id="corporate-information">
        <div className="">
          <h2 className="text-2xl font-bold mb-4 text-[#0C0C0C]">
            Corporate Information
          </h2>
          <p className="text-[#0C0C0C] text-[15px] mb-8">
            Discover more about our company profile, team, and the many ways you
            can connect with us about our work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {corporateLinks.slice(0, 4).map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="group relative h-48 overflow-hidden rounded-lg"
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-white font-medium">{item.title}</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {corporateLinks.slice(4, 6).map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="group relative h-48 overflow-hidden rounded-lg"
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-white font-medium">{item.title}</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
