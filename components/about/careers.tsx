import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Careers() {
  return (
    <div>
      <section className="relative h-80 mb-16 overflow-hidden ">
        <Image
          src="/about-careers.jpg"
          alt="Careers at DNIL"
          fill
          className="object-cover"
        />

        <div className="">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center]">
            <div className="border-[#B3B3B3] border rounded-[6px] backdrop-blur-md p-3 md:p-6 max-w-[310px]  relative z-1000 bg-white top-[40px] left-[15%] h-fit">
              <h2 className="section-title font-bold text-[#0C0C0C] text-[19px] md:text-[31.5px] leading-[30px] md:leading-[40px] tracking-[0%] md:w-[718px]">
                Careers
              </h2>
              <p className="my-2 md:my-6 font-normal text-[#0C0C0C] text-[13px] md:text-[16px] leading-[24px] tracking-[0%]">
                Find your perfect place with us
              </p>

              <button className="bg-[#0A0045] px-3 md:px-6 py-1 md:py-2 text-white  rounded-[14px] md:rounded-[20px] text-[13px] md:text-[16px] flex item-center w-fit">
                <Link
                  href="/company/search-jobs"
                  className="bg-[#0A0045] rounded-[14px] md:rounded-[20px] flex justify-start items-start text-white"
                >
                  Find Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="mt-0 md:ml-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.646 3.646a.5.5 0 0 1 .708 0L10.707 8l-3.353 4.354a.5.5 0 0 1-.708-.708L9.293 8 6.646 4.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </Link>
              </button>

              <div className="absolute bottom-0 left-0 z-[-1]">
                <div
                  className="w-32 md:w-64 h-[70px] md:h-[200px]"
                  style={{
                    background:
                      "linear-gradient(50.91deg, #1C165F 0%, #FFFFFF 25%)",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
