import React from "react";
import { montserrat } from "@/app/fonts/font";
import Link from "next/link";

export default function GetInTouch() {
  return (
    <div
      className={`${montserrat.className} flex justify-center items-center w-full bg-[#0A0045]`}
    >
      <div className=" py-16 px-6 text-center">
        <h2 className="font-bold text-[43px] text-white">Get in touch</h2>
        <p className="font-normal text-white text-[20px] leading-[32px] max-w-[600px]">
          For all enquiries and queries, send us a message
          info@dnilsolutions.com or call our help desk. Visit our contact page
          for more contact details.
        </p>
        <button className="bg-[#5A8CFD] rounded-[5px] px-[12px] py-[6px] capitalize my-6">
          <Link href={"/contact"}>contact us</Link>
        </button>
      </div>
    </div>
  );
}
