"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CompanyDropdown } from "./nav-dropdown";
import { ServicesDropdown } from "./services-dropdown";
// import GoogleTranslate from "./google-translate";
// import { IndustriesDropdown } from "./industry";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // const [showLanguage, setShowLanguage] = useState(false);
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="text-black font-bold text-[28px] mx-4">
        <p className="hidden 3xl:inline 4xl:hidden">3xl</p>
        <p className="hidden 2xl:inline 3xl:hidden">2xl</p>
        <p className="hidden 4xl:inline">4xl</p>
      </div>
      <div>
        <div className="flex justify-between items-center mx-[5%] md:mx-[10%] 2xl:mx-[5%] py-2 text-black font-normal text-[15px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] 4xl:text-[27px] leading-[24.41px]">
          <div className="flex justify-between items-center">
            <Image
              src="/dnil.png"
              alt="DNIL Logo"
              width={100}
              height={50}
              onClick={() => router.push("/")}
              className="cursor-pointer"
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

          <div className="hidden md:flex items-center space-x-4 ml-6 relative">
            {/* Icons here (language, contact, search) */}
            {/* <button
              className="text-[12px] flex items-center"
              onClick={() => setShowLanguage(!showLanguage)}
            >
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
              <span className="ml-2">Global / EN</span>
            </button> */}

            {/* {showLanguage && (
              <div
                className="absolute top-full mt-2 z-50 bg-white shadow-md border rounded"
                onClick={() => setShowLanguage(false)}
              >
                <GoogleTranslate />
              </div>
            )} */}

            <button className="text-[12px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] 4xl:text-[27px]">
              <a
                href="mailto:info@dnilsolutions.com"
                target="_blank"
                className="flex items-center"
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="2xl:w-[18px] 3xl:w-[20px] "
                >
                  <path d="M4 4h16v16H4z" />
                  <polyline points="4,4 12,13 20,4" />
                </svg>
                <span className="ml-2 ">Contact Us</span>
              </a>
            </button>
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
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <span className="ml-2">Search</span>
            </button> */}
          </div>
        </div>

        {/* Desktop Nav with Hover Dropdowns */}
        <div className="hidden md:flex justify-end items-end bg-[#F4F4F4] py-4 w-full px-[10%] 2xl:px-[5%]">
          <div className="flex text-black font-normal text-[15px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] 4xl:text-[29px] leading-[24.41px] space-x-6 relative">
            {[
              {
                label: "Company",
                href: "/company/our-culture",
                dropdown: <CompanyDropdown />,
              },
              {
                label: "Our Services",
                href: "/services",
                dropdown: <ServicesDropdown />,
              },
              // {
              //   label: "Industries",
              //   href: "/industries",
              //   dropdown: <IndustriesDropdown />,
              // },

              // {
              //   label: "Commitments",
              //   href: "/commitments",
              //   dropdown: <CompanyDropdown />,
              // },
            ].map((item, i) => (
              <DropdownNavItem key={i} href={item.href} label={item.label}>
                {item.dropdown}
              </DropdownNavItem>
            ))}

            <Link href="/services#newsletter" className="nav-link">
              Insights
            </Link>
            <Link href="/case-studies/lsetf" className="nav-link">
              Case Studies
            </Link>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md py-4 px-4 text-black relative">
            <nav className="text-[13px] flex flex-col space-y-4">
              {/* <button
                className="text-[12px] flex items-center"
                onClick={() => setShowLanguage(true)}
              >
                <span className="ml-1">Global / EN</span>
              </button>

              {showLanguage && (
                <div className="absolute top-full mt-2 z-50 bg-white shadow-md border rounded">
                  <GoogleTranslate />
                </div>
              )} */}
              <button className="text-[12px] flex items-center">
                <span className="ml-1">
                  <a href="mailto:info@dnilsolutions.com">Contact Us</a>
                </span>
              </button>
              {/* <button className="text-[12px] flex items-center">
                <span className="ml-1">Search</span>
              </button> */}
            </nav>

            <div className="ml-1 text-[12px]">
              {[
                {
                  label: "Company",
                  href: "/company/our-culture",
                  dropdown: <CompanyDropdown />,
                },
                {
                  label: "Our Services",
                  href: "/services",
                  dropdown: <ServicesDropdown />,
                },
                // {
                //   label: "Industries",
                //   href: "/industry",
                //   dropdown: <IndustriesDropdown />,
                // },

                // {
                //   label: "Commitments",
                //   href: "/commitments",
                //   dropdown: <CompanyDropdown />,
                // },
              ].map((item, i) => (
                // <DropdownNavItem key={i} href={item.href} label={item.label}>
                //   <></>
                // </DropdownNavItem>
                <Link
                  key={i}
                  href={item.href}
                  className="nav-link flex items-center my-2.5"
                >
                  {item.label}
                </Link>
              ))}

              <Link href="/services#newsletter" className="nav-link">
                Insights
              </Link>

              <Link href="/case-studies/lsetf" className="nav-link">
                Case Studies
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

// Handles dropdown positioning to prevent overflow
export function DropdownNavItem({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [alignRight, setAlignRight] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  // Determine screen size for mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initialize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Desktop overflow logic
  useEffect(() => {
    if (!isMobile) {
      const handleMouseEnter = () => {
        if (dropdownRef.current && containerRef.current) {
          const dropdownRect = dropdownRef.current.getBoundingClientRect();
          const viewportWidth = window.innerWidth;

          if (dropdownRect.left + dropdownRect.width > viewportWidth) {
            setAlignRight(true);
          } else {
            setAlignRight(false);
          }
        }
      };

      const el = containerRef.current;
      el?.addEventListener("mouseenter", handleMouseEnter);

      return () => el?.removeEventListener("mouseenter", handleMouseEnter);
    }
  }, [isMobile]);

  return (
    <div
      className="relative group md:cursor-pointer"
      ref={containerRef}
      onClick={() => {
        if (isMobile) {
          setOpen((prev) => !prev);
        }
      }}
    >
      <Link
        href={href}
        className="nav-link flex items-center justify-between w-full md:w-auto"
      >
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-1"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </Link>

      <div
        ref={dropdownRef}
        className={`absolute md:absolute top-full z-50 bg-white md:shadow-lg ${
          alignRight ? "right-0" : "left-0"
        } 
          ${
            isMobile
              ? open
                ? "block mt-2"
                : "hidden"
              : "hidden group-hover:block"
          }
        `}
      >
        {children}
      </div>
    </div>
  );
}
