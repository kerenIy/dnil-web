import React from "react";
import Image from "next/image";

export default function GetInTouch() {
  return (
    <div>
      <section className="relative hidden md:block">
        <Image
          src="/contact.jpg"
          alt="Industries Served"
          width={920}
          height={580}
          className="w-full"
        />

        <div className="absolute top-[20%] w-full px-[7%] text-white">
          <div className="flex justify-between items-center flex-wrap gap-4">
            {/* Text Block */}
            <div className="">
              <p className="font-bold text-[18px] md:text-[28px]">
                Get in touch
              </p>
              <p>
                We{"'"}d love to hear from you! Contact us with your questions
                or concerns, and we{"'"}ll respond promptly.
              </p>
            </div>

            {/* Button */}
            <button className="border-[#0A0045] border-2 px-8 py-2 text-[#0A0045] bg-white rounded-[20px] text-[16px] flex items-center mt-5">
              <a
                href="mailto:info@dnilsolutions.com"
                className="flex items-center justify-center"
              >
                Contact Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="ml-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.646 3.646a.5.5 0 0 1 .708 0L10.707 8l-3.353 4.354a.5.5 0 0 1-.708-.708L9.293 8 6.646 4.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </a>
            </button>
          </div>
        </div>
      </section>

      <section className="relative block md:hidden">
        <Image
          src="/contact.jpg"
          alt="Industries Served"
          width={920}
          height={580}
          className="h-[250px]"
        />

        <div className="absolute top-[20%] w-full px-[7%] text-white">
          <div className="flex justify-between items-center flex-wrap gap-4">
            {/* Text Block */}
            <div className="">
              <p className="font-bold text-[18px] md:text-[28px]">
                Get in touch
              </p>
              <p>
                We{"'"}d love to hear from you! Contact us with your questions
                or concerns, and we{"'"}ll respond promptly.
              </p>
            </div>

            {/* Button */}
            <button className="border-[#0A0045] border-2 px-8 py-2 text-[#0A0045] bg-white rounded-[20px] text-[16px] flex items-center mt-5">
              <a
                href="mailto:info@dnilsolutions.com"
                className="flex items-center justify-center"
              >
                Contact Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="ml-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.646 3.646a.5.5 0 0 1 .708 0L10.707 8l-3.353 4.354a.5.5 0 0 1-.708-.708L9.293 8 6.646 4.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
