"use client";

import { useState } from "react";
import Image from "next/image";

import GetInTouch from "../global/get-in-touch";
import Link from "next/link";

interface TabContent {
  [key: string]: string;
}
interface CaseStudyPageProps {
  heroTitle?: string;
  heroDescription?: string;
  mainCaseStudy: {
    title?: string;
    description?: string;
    image?: string;
  };
  tabContent: TabContent;
  tabImage: TabContent;
}

export default function CaseStudyPage({
  heroTitle,
  heroDescription,
  mainCaseStudy,
  tabContent,
  tabImage,
}: CaseStudyPageProps) {
  const currentSlide = 0;

  const relatedCaseStudies = [
    {
      id: "1",
      title: "Euracare Multi-Specialist Hospital & Heart Center",
      subtitle: "",
      image: "/case-studies/euracare-abt.png",
      category: "Healthcare",
      link: "/case-studies/euracare",
    },
    {
      id: "2",
      title: "Lagos State Employment Trust Fund",
      subtitle: "",
      image: "/case-studies/lseft2.png",
      category: "Government",
      link: "/case-studies/lseft",
    },
    {
      id: "3",
      title: "Development Bank of Nigeria",
      subtitle: "",
      image: "/case-studies/dbn.png",
      category: "Banking",
      link: "/case-studies/dbn",
    },
  ];

  //   const nextSlide = () => {
  //     setCurrentSlide((prev) => (prev + 1) % relatedCaseStudies.length);
  //   };

  const tabs = [
    { label: "The Need", key: "need" },
    { label: "The Proposed Solution", key: "solution" },
    { label: "The Value We Added", key: "value" },
  ];

  const tabsMobile = [
    { label: "Need", key: "need" },
    { label: "Solution", key: "solution" },
    { label: "Value", key: "value" },
  ];

  //   const prevSlide = () => {
  //     setCurrentSlide(
  //       (prev) =>
  //         (prev - 1 + relatedCaseStudies.length) % relatedCaseStudies.length
  //     );
  //   };

  const [activeTab, setActiveTab] = useState("need");

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-gray-600">Home / Case Studies</div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[450px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/case-studies/hero-bg.png"
            alt="Digital wave background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#00000033] to-[#00000033]">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 ml-[6%] md:ml-[8%] mt-[2%]">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
                {heroTitle}
              </h1>
              <p className="text-lg text-blue-100 leading-relaxed">
                {heroDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Case Study Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[10%]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-[#0C0C0C]">
            <div>
              <h2 className="text-lg md:text-2xl font-normal  mb-6">
                {mainCaseStudy?.title}
              </h2>
              <p className="max-w-[400px] leading-relaxed text-[14px]">
                {mainCaseStudy?.description}
              </p>
            </div>
            <div className="relative">
              <Image
                src={mainCaseStudy?.image || "/case-studies/euracare.png"}
                alt="Euracare Hospital"
                width={800}
                height={500}
                className="rounded-[8px] w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-8 md:py-16 bg-[#2D2D2D] text-white px-[5%] md:px-[10%]">
        <div className="p-8">
          <div className="flex justify-center gap-8">
            <div className="">
              {/* Tabs */}
              <div className="hidden md:flex justify-center items-center w-[90%]">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`pb-2 mx-[2%] md:w-[35%] border-b-[2px]  transition-colors duration-300 text-left text-[13px] ${
                      activeTab === tab.key
                        ? "border-[#0A0045] text-[#0A0045] font-semibold"
                        : "border-white text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="md:hidden flex justify-center items-center w-[90%]">
                {tabsMobile.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`pb-2 mx-[2%] w-[35%] md:w-[35%] border-b-[2px]  transition-colors duration-300 text-left text-[13px] ${
                      activeTab === tab.key
                        ? "border-[#0A0045] text-[#0A0045] font-semibold"
                        : "border-white text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[45px] w-[100%]">
                <Image
                  src={tabImage[activeTab as keyof typeof tabImage] || "/"}
                  alt="Euracare Hospital"
                  width={530}
                  height={450}
                  className="md:mr-[3%]"
                />
                <p className="text-[#E7E5DE] leading-relaxed text-[14px] max-w-[500px] md:ml-[3%]">
                  {tabContent[activeTab as keyof typeof tabContent]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <GetInTouch />
      <br />
      <br />
      <br />

      {/* Related Case Studies */}
      <section className="py-16 bg-black text-white px-[10%]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-12">
            Find out more about other Case Studies
          </h2>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedCaseStudies.map((study, index) => (
                <div
                  key={study.id}
                  className={`transition-opacity duration-300 w-full md:w-[264px] ${
                    index >= currentSlide && index < currentSlide + 3
                      ? "opacity-100"
                      : "opacity-50"
                  }`}
                >
                  <Link href={study.link}>
                    <div className="bg-[#2D2D2D] rounded-sm overflow-hidden">
                      <Image
                        src={study.image}
                        alt={study.title}
                        width={280}
                        height={177}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-5">
                        <div className="flex items-center">
                          <p className="text-white text-center rounded-full px-3 py-1 text-[12px] bg-[#FFFFFF1A]">
                            {study.category}
                          </p>
                          <p className="text-white text-center  text-[11px] ml-3">
                            3 min read
                          </p>
                        </div>
                        <h3 className="ml-1 mt-2 text-base font-semibold mb-2">
                          {study.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            {/* <div className="flex justify-start mt-8 space-x-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <span className="text-white">‹</span>
              </button>
              <div className="flex space-x-2 items-center">
                {relatedCaseStudies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? "bg-blue-500" : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <span className="text-white">›</span>
              </button>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
