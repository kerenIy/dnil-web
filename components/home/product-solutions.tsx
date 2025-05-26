"use client";
import Link from "next/link";

import { useState } from "react";

import { sidebarItems } from "@/lib/compant-links";

export default function ProductsSolutions() {
  const [tab, setTab] = useState(1);
  const [tabName, setTabName] = useState<any>({
    id: 1,
    name: "Software Solutions",
    image: "/products.jpg",
    description: "Find everything you need for your digital transformation.",
    subtitle: "Digital Solutions",
  });
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id: number, tab: any) => {
    setTab(id);
    setTabName(tab);
    setActiveTab(id);
  };

  console.log(tab);

  return (
    <section className="py-[80px] container overflow-y-hidden overflow-x-hidden px-[10%] mx-auto">
      <h2
        className="section-title text-[#0C0C0C] font-bold text-[31.75px] my-5 leading-[40px]"
        data-aos="fade-up"
        data-aos-once="false"
      >
        Products & Solutions
      </h2>

      {/* Desktop Layout */}
      <div
        className="hidden md:flex items-start"
        data-aos="fade-up"
        data-aos-once="false"
      >
        <div>
          <ul>
            {sidebarItems.map((item) => (
              <li
                key={item.id}
                className={`${
                  item?.id === activeTab
                    ? "bg-[#0A0045] text-white"
                    : "text-[#0C0C0C]"
                } font-normal text-[16px] leading-[22px] tracking-[0%] rounded-[2px] px-2 py-2 my-1 flex items-center w-[300px] cursor-pointer`}
                onClick={() => handleTabClick(item.id, item)}
              >
                <div
                  className={`${
                    item?.id === activeTab ? "bg-[#fff]" : "bg-[#0C0C0C]"
                  } w-[3px] h-[21px] rounded-[2px]`}
                ></div>
                <span className="ml-3">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="md:ml-[40px]"
          data-aos="slide-left"
          data-aos-once="false"
        >
          <div className=" bg-[#F4F4F4] p-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-[24px] text-[#0C0C0C] leading-[35px] font-normal mb-3 underline">
                  {tabName?.name}
                </h3>
                <p className="text-[16px] text-[#0C0C0C] font-normal mb-4 max-w-[400px]">
                  Find everything you need for your digital transformation.
                </p>

                <br />

                <Link
                  href="/services"
                  className="text-[#0C0C0C] flex items-center text-[16px] mb-4"
                >
                  <span>Digital Solutions</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </Link>

                <Link
                  href="/services"
                  className="text-[#0C0C0C] flex items-center text-[16px]"
                >
                  <span>IT Products</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </Link>
              </div>

              <div className="relative h-64">
                <img
                  src={tabName?.image || "/products.jpeg"}
                  alt={tabName?.name}
                  className="object-cover w-full h-full absolute top-0 left-0 transition-transform duration-300 group-hover:scale-105 rounded-lg"
                />
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>

      {/* Mobile Swipeable Layout */}
      <div className="md:hidden" data-aos="fade-up" data-aos-once="false">
        <div className="overflow-x-auto whitespace-nowrap flex gap-4 pb-4">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id, item.name)}
              className={`${
                item.id === activeTab
                  ? "bg-[#0A0045] text-white w-fit"
                  : "bg-[#F4F4F4] text-[#0C0C0C] w-fit"
              } px-4 py-2 rounded-full text-sm whitespace-nowrap`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="bg-[#F4F4F4] p-5 mt-4">
          <h3 className="text-[20px] text-[#0C0C0C] font-semibold mb-2 underline">
            {tabName?.name}
          </h3>
          <p className="text-[15px] text-[#0C0C0C] mb-4">
            Find everything you need for your digital transformation.
          </p>

          <Link
            href="/services"
            className="text-[#0C0C0C] flex items-center text-[15px] mb-2"
          >
            <span>Digital Solutions</span>
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>

          <Link
            href="/services"
            className="text-[#0C0C0C] flex items-center text-[15px]"
          >
            <span>IT Products</span>
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>

          <div className="relative h-48 mt-4">
            <img
              src={tabName?.image || "/products.jpeg"}
              alt={tabName?.name}
              className="object-cover w-full h-full absolute top-0 left-0 transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      <div
        className="flex flex-col pt-16"
        data-aos="fade-up"
        data-aos-once="false"
      >
        <h2 className="section-title text-[#0C0C0C] font-bold text-[31.75px] my-5 leading-[40px]">
          Core Values
        </h2>
        <p className="text-[16px] text-[#0C0C0C] font-normal leading-[24px]">
          At Data Networks Infrastructures Limited (DNIL), our core values shape
          our approach to innovation, service, and success. These principles
          define who we are and how we operate, ensuring that we consistently
          deliver excellence, build trust, and drive impact.
        </p>
      </div>
    </section>
  );
}
