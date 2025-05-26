"use client";
import Link from "next/link";
import { useState } from "react";

import { sidebarItems } from "@/lib/compant-links";
import NetworkingSolutions from "./service-items/infrastructure";
import Security from "./service-items/security";
import Professional from "./service-items/professional";
import Procurement from "./service-items/procurement";
import Support from "./service-items/support";

interface ItemProps {
  name: string;
  image: string;
  description: string;
  subtitle: string;
  id: number;
  content?: any;
  products?: {
    title: string;
    description: string;
    link: string;
  }[];
}

export default function ServicesPage() {
  const [tab, setTab] = useState(1);
  const [activeTab, setActiveTab] = useState(1);

  const [pageContent, setPageContent] = useState<ItemProps>(sidebarItems[0]);

  console.log(tab);

  const handleTabClick = (
    id: number,
    item: {
      id: number;
      name: string;
      image: string;
      description: string;
      subtitle: string;
      content?: any;
      products?: { title: string; description: string; link: string }[];
    }
  ) => {
    setTab(id);
    setPageContent(item);
    setActiveTab(id);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[10%] text-black">
      {/* Breadcrumb */}
      <div className="py-4 text-sm">
        <div className="flex items-center space-x-2">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            Home
          </Link>
          <span className="text-gray-500">/</span>
          <span className="text-gray-700">Products & Solutions</span>
        </div>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Services & Solutions</h1>
        <p className="mt-2 text-[#0C0C0C]">
          This shows our global range of products and solutions. For more
          detailed offerings in your region, select your region from the top
          menu.
        </p>
      </div>

      {/* Main content with sidebar */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          {sidebarItems.map((item) => (
            <li
              key={item.id}
              className={`${
                item?.id === activeTab
                  ? "bg-[#0A0045] text-white"
                  : "text-[#0C0C0C]"
              } font-normal text-[16px] leading-[22px] tracking-[0%] rounded-[2px] px-2 py-2 my-1 flex items-center max-w-[280px] cursor-pointer`}
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
        </div>

        {/* Main content */}
        <div className="flex-1">
          {/* Hero section with image */}
          <div className="flex flex-col md:flex-row mb-8">
            <div className="">
              <div className="md:flex-1 mt-4 md:mt-0">
                <div className="relative h-64 md:h-full">
                  <img
                    src={pageContent?.image}
                    alt="IT professional working in server room"
                    width="766"
                    height="442"
                    style={{
                      objectFit: "cover",
                      borderRadius: "0.5rem",
                    }}
                  />
                </div>
              </div>
              <div className="md:flex-1 bg-[#F4F4F4] p-3 mt-4">
                <h2 className="text-2xl font-bold mb-4">{pageContent?.name}</h2>
                <p className="text-gray-600">{pageContent?.description}</p>
              </div>
            </div>
          </div>

          {/* Digital Solutions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">
              {pageContent?.subtitle}
            </h2>

            <div className={"grid grid-cols-1 md:grid-cols-3 gap-6"}>
              {pageContent?.content &&
                pageContent?.content.map((solution: any, index: any) => (
                  <div key={index} className="bg-[#F4F4F4] p-6 rounded">
                    <h3 className="text-left font-medium mb-4">
                      {solution?.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {solution?.description}
                    </p>
                    <div className="flex justify-end">
                      <div className="w-6 h-6 bg-black text-white flex items-center justify-center text-xs">
                        →
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {pageContent?.id === 2 && <NetworkingSolutions />}
            {pageContent?.id === 3 && <Security />}
            {pageContent?.id === 4 && <Professional />}
            {pageContent?.id === 6 && <Procurement />}
            {pageContent?.id === 7 && <Support />}
          </div>

          {/* Products */}
          <div>
            {pageContent?.products && pageContent?.products.length > 0 && (
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">
                Products
              </h2>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-7">
              {pageContent?.products &&
                pageContent?.products.map((product, index) => (
                  <div key={index} className="bg-[#F4F4F4] p-6 rounded">
                    <Link href={product?.link}>
                      {" "}
                      <h3 className="text-left font-medium mb-4">
                        {product.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {product.description}
                      </p>
                      <div className="flex justify-end">
                        <div className="w-6 h-6 bg-black text-white flex items-center justify-center text-xs">
                          →
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
