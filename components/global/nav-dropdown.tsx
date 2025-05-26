"use client";

import { companyLinks } from "@/lib/compant-links";
import Link from "next/link";

export const CompanyDropdown = () => {
  return (
    <div className="absolute right-[-150px] grid grid-cols-2 gap-3 p-3 bg-white shadow-lg rounded-xl w-[400px]  max-w-[calc(100vw-1rem)] overflow-hidden">
      {companyLinks.map(({ title, subtitle, href }) => (
        <Link
          key={title}
          href={href}
          className="group hover:bg-gray-50 p-3 rounded-md transition-colors"
        >
          <h4 className="text-lg font-semibold text-black group-hover:text-blue-700">
            {title}
          </h4>
          <p className="text-sm text-indigo-900">{subtitle}</p>
        </Link>
      ))}
    </div>
  );
};
