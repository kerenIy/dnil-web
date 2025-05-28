import Link from "next/link";

const pressReleases = [
  {
    id: 1,
    date: "May 15, 2023",
    title:
      "DNIL signs 'AI-based Alliance' for Status with the AIST Partner Network, solidifying cloud leadership position (Global) (Vol.1)",
    link: "#",
  },
  {
    id: 2,
    date: "May 12, 2023",
    title: "DNIL announces selection of Partner candidates",
    link: "#",
  },
];

export default function PressReleases() {
  return (
    <div className="">
      <br />
      <br />
      <section className="mt-24 py-16 bg-[#F4F4F4]">
        <div className="container mx-auto px-4">
          <h2 className="font-bold text-[#0C0C0C] text-[32px] leading-[40px] tracking-[0%]">
            Press Releases
          </h2>
          <p className="mb-8 text-[#0C0C0C]">
            See the latest announcements from the DNIL global press team.
          </p>

          <div className="space-y-4">
            {pressReleases.map((release) => (
              <div key={release.id} className="p-4">
                <div className="flex justify-between items-start">
                  <div className="md:flex items-center">
                    <p className="text-[#0C0C0C]">{release.date}</p>
                    <h3 className="max-w-[900px] mt-3 md:mt-0 md:ml-[40px] font-medium text-[#0C0C0C]">
                      {release.title}
                    </h3>
                  </div>
                  <Link
                    href="/services#newsletter"
                    className="text-[#fff] flex-shrink-0 bg-[#0C0C0C] p-[3px] rounded-[4px]"
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
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Link href="/press" className="btn-secondary">
              See All
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
