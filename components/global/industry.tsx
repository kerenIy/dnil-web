"use client";

import { industryLinks } from "@/lib/compant-links";
import Link from "next/link";

export const IndustriesDropdown = () => {
  return (
    <div className="relative z-50">
      <div className="absolute right-[-150px] mt-2 bg-white shadow-lg rounded-xl p-3 w-[200px] max-w-[calc(100vw-1rem)] overflow-hidden">
        <div className="grid grid-cols-1 gap-3">
          {industryLinks.map(({ title, href }) => (
            <Link
              key={title}
              href={href}
              className="group hover:bg-gray-50 p-3 rounded-md transition-colors"
            >
              <h4 className="text-lg font-semibold text-black group-hover:text-blue-700">
                {title}
              </h4>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
