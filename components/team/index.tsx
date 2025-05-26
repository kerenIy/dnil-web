"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState("leaders");

  return (
    <main className="pb-12">
      {/* Hero Section */}
      <div className="bg-[#262E64] text-white py-16">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-aos="fade-up"
          data-aos-once="false"
        >
          <h1 className="text-4xl font-normal mb-4">Meet the Team</h1>
          <p className="max-w-3xl">
            Our team is comprised of committed, driven, and seasoned individuals
            who collaborate with each other, leveraging their extensive
            expertise and experience along with other employees to create a
            positive impact.
          </p>
        </div>
      </div>

      {/* Team Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab("leaders")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "leaders"
                  ? "border-[#1e2756] text-[#1e2756] "
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Our Leaders
            </button>
            <button
              onClick={() => setActiveTab("team")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "team"
                  ? "border-[#1e2756] text-[#1e2756] "
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 "
              }`}
            >
              The Team
            </button>
          </nav>
        </div>

        {/* Team Grid */}
        <div className="bg-[#F6F7FE] p-7 rounded-md">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTab === "leaders"
              ? leaderProfiles.map((profile, index) => (
                  <TeamMemberCard key={index} profile={profile} />
                ))
              : teamProfiles.map((profile, index) => (
                  <TeamMemberCard key={index} profile={profile} />
                ))}
          </div>
        </div>

        {/* More About Section */}
        <div className="mt-16">
          <h2 className="text-[#1e2756] text-xl font-bold mb-6">
            More about DNIL
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {aboutLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block relative group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={`/team-${index + 1}.jpg`}
                    alt={link.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
                    <div className="text-white font-medium">{link.title}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

interface Profile {
  name: string;
  title: string;
  bio?: string;
  image: string;
}

function TeamMemberCard({ profile }: { profile: Profile }) {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow-sm">
      <div className="h-[450px] bg-gray-200 relative">
        <img
          src={profile.image}
          alt={profile.name}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      </div>
      <div className="bg-[#1e2756] text-white p-4">
        <h3 className="font-medium">{profile.name}</h3>
        <p className="text-sm text-gray-300">{profile.title}</p>
      </div>
    </div>
  );
}

const leaderProfiles: Profile[] = [
  {
    name: "Oluwaseun Onabanjo",
    title: "Chief Executive Officer",
    bio: "Leading DNIL's global strategy and operations since 2018.",
    image:
      "https://ankurdev.s3.eu-west-2.amazonaws.com/chatbot/uploads/seun.JPG",
  },
  {
    name: "Bola Omonaiye",
    title: "Chief Technology Officer",
    bio: "Driving innovation and technological advancement across all DNIL divisions.",
    image:
      "https://ankurdev.s3.eu-west-2.amazonaws.com/chatbot/uploads/bola.JPG",
  },
  {
    name: "Okah Erura Cynthia",
    title: "Technical Lead",
    bio: "Overseeing financial operations and strategic investments.",
    image:
      "https://ankurdev.s3.eu-west-2.amazonaws.com/chatbot/uploads/cynthia.JPG",
  },
  {
    name: "Abiodun Olusoga",
    title: "Chief Finance Officer",
    bio: "Leading our fastest growing division focused on digital transformation solutions.",
    image:
      "https://ankurdev.s3.eu-west-2.amazonaws.com/chatbot/uploads/abiodun.JPG",
  },
  {
    name: "Timothy Okpara",
    title: "Head Of Sales",
    bio: "Leading our fastest growing division focused on digital transformation solutions.",
    image:
      "https://ankurdev.s3.eu-west-2.amazonaws.com/chatbot/uploads/timothy.JPG",
  },

  {
    name: "Christian Ojum",
    title: "Head of Presales",
    bio: "Overseeing financial operations and strategic investments.",
    image:
      "https://ankurdev.s3.eu-west-2.amazonaws.com/chatbot/uploads/christian.JPG",
  },
];

const teamProfiles: Profile[] = [
  {
    name: "Jennifer Nkata",
    title: "Human Resources Manager",
    bio: "Leading DNIL's global strategy and operations since 2018.",
    image:
      "https://ankurdev.s3.eu-west-2.amazonaws.com/chatbot/uploads/jennifer.JPG",
  },
  {
    name: "Louis Ezeigbokwe",
    title: "Lead Enterprise Solutions",
    bio: "Leading DNIL's global strategy and operations since 2018.",
    image:
      "https://ankurdev.s3.eu-west-2.amazonaws.com/chatbot/uploads/louis.JPG",
  },
  {
    name: "Toluwani Olajide-Phillips",
    title: "Finance Executive",
    bio: "Driving innovation and technological advancement across all DNIL divisions.",
    image:
      "https://ankurdev.s3.eu-west-2.amazonaws.com/chatbot/uploads/tolu.JPG",
  },
  {
    name: "Folake Sunday",
    title: "Admin & Support Officer",
    bio: "Overseeing financial operations and strategic investments.",
    image:
      "https://ankurdev.s3.eu-west-2.amazonaws.com/chatbot/uploads/folake.JPG",
  },
  {
    name: "Roseline Ogunlade",
    title: "Sales Account Manager",
    bio: "Leading our fastest growing division focused on digital transformation solutions.",
    image:
      "https://ankurdev.s3.eu-west-2.amazonaws.com/chatbot/uploads/roseline.JPG",
  },
  {
    name: "Mark Uje-Eje",
    title: "Sales Account Manager",
    bio: "Leading our fastest growing division focused on digital transformation solutions.",
    image:
      "https://ankurdev.s3.eu-west-2.amazonaws.com/chatbot/uploads/mark.JPG",
  },
  {
    name: "Chinedu Osuji",
    title: "Sales Account Manager",
    bio: "Leading our fastest growing division focused on digital transformation solutions.",
    image:
      "https://ankurdev.s3.eu-west-2.amazonaws.com/chatbot/uploads/chichi.JPG",
  },
  {
    name: "Damilare Agbabiaka",
    title: "Lead Solutions Architect",
    bio: "Leading our fastest growing division focused on digital transformation solutions.",
    image:
      "https://ankurdev.s3.eu-west-2.amazonaws.com/chatbot/uploads/dami.JPG",
  },
  {
    name: "Oluwatomisin Ayodabo",
    title: "AI & Data Engineer",
    bio: "Leading our fastest growing division focused on digital transformation solutions.",
    image:
      "https://ankurdev.s3.eu-west-2.amazonaws.com/chatbot/uploads/tomi.JPG",
  },
  {
    name: "Ibitein Iyalla",
    title: "Frontend Engineer",
    bio: "Leading our fastest growing division focused on digital transformation solutions.",
    image:
      "https://ankurdev.s3.eu-west-2.amazonaws.com/chatbot/uploads/ibitein.JPG",
  },
  {
    name: "Morounfolu Oyebanjo",
    title: "Creative Development Lead",
    bio: "Leading our fastest growing division focused on digital transformation solutions.",
    image:
      "https://ankurdev.s3.eu-west-2.amazonaws.com/chatbot/uploads/folu.JPG",
  },
];

const aboutLinks = [
  {
    title: "About DNIL",
    image: "/about-dnil.jpg",
    href: "/about-us",
  },
  {
    title: "Our Careers",
    image: "/careers.jpg",
    href: "/company/search-jobs",
  },
  {
    title: "News & Insights",
    image: "/news-insights.jpg",
    href: "/news",
  },
  {
    title: "Our Partners",
    image: "/partners.jpg",
    href: "/partners",
  },
];
