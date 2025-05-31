"use client";

import { sidebarItems } from "@/lib/compant-links";
import Link from "next/link";

export const ServicesDropdown = () => {
  return (
    <div className="relative z-50">
      <div className="absolute right-[-150px] mt-2 bg-white shadow-lg rounded-xl p-3 w-[500px] max-w-[calc(100vw-1rem)] overflow-hidden">
        <div className="grid grid-cols-2 gap-3">
          {sidebarItems.map(({ name, subtitle }) => (
            <Link
              key={name}
              href={"/services"}
              className="group hover:bg-gray-50 p-3 rounded-md transition-colors"
            >
              <h4 className="text-lg font-semibold text-black group-hover:text-blue-700">
                {name}
              </h4>
              <p className="text-sm text-indigo-900">{subtitle}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
