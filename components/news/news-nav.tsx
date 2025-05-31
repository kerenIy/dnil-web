"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // const [showLanguage, setShowLanguage] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="">
        <div className="flex justify-between items-center mx-[5%] md:mx-[10%] py-2 text-black font-normal text-[15px] leading-[24.41px] relative">
          <div className="flex justify-between items-center">
            <Image
              src="/dnil.png"
              alt="DNIL Logo"
              width={100}
              height={50}
              className=""
              onClick={() => router.push("/")}
            />
          </div>

          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          <div className="hidden md:flex items-center space-x-4 ml-6">
            {/* <button
              className="flex items-center"
              onClick={() => setShowLanguage(!showLanguage)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <span className="ml-2">Global / EN</span>
            </button> */}
            <button className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16v16H4z" />
                <polyline points="4,4 12,13 20,4" />
              </svg>
              <span className="ml-2">
                <a href="mailto:info@dnilsolutions.com">Contact Us</a>
              </span>
            </button>
            <button className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <span className="ml-2">Search</span>
            </button>
          </div>
        </div>

        {/* Desktop Nav with Hover Dropdowns */}
        <div className="hidden md:flex justify-between items-center bg-[#F4F4F4]  w-full px-[10%]">
          <div className="">
            <p className="font-bold text-[#000000]">News Releases</p>
          </div>
          <div className="flex text-black font-normal text-[15px] leading-[24.41px] space-x-6 relative">
            {[
              {
                label: "Corporate Information",
                href: "/about-us#corporate-information",
              },
              {
                label: "Services & Solutions",
                href: "/services",
              },
              {
                label: "News Releases",
                href: "/services#newsletter",
              },
              {
                label: "Careers",
                href: "/company/search-jobs",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`${
                  item.label === "News Releases"
                    ? "bg-[#1C165F] text-white  py-4 px-2 "
                    : "group-hover:text-black py-4"
                } relative group`}
              >
                <Link href={item.href} className="nav-link flex items-center ">
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md py-4 px-4 text-[#000000]">
            <nav className="text-[13px] flex flex-col space-y-4">
              <div className="flex items-center">
                {/* <button className="text-[12px] flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                  <span className="ml-1">Global / EN</span>
                </button> */}
                <button className="ml-2 text-[12px] flex items-center">
                  Contact Us
                </button>
                {/* <button className="ml-2 text-[12px] flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                  <span className="ml-1">Search</span>
                </button> */}
              </div>
              <Link
                href="/about-us#corporate-information"
                className="nav-link flex items-center"
              >
                Corporate Information
              </Link>
              <Link href="/services" className="nav-link flex items-center">
                Services & Solutions
              </Link>
              {/* <Link
                href="/services#newsletter"
                className="nav-link flex items-center"
              >
                News Releases
              </Link> */}
              <Link
                href="/company/search-jobs"
                className="nav-link flex items-center"
              >
                Careers
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
