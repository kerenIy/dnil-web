import Link from "next/link";

const notices = [
  {
    id: 1,
    date: "Jan 15, 2023",
    title:
      "A Note of Caution about Fraudulent Job Recruitment emails posing as DNIL",
    link: "#",
  },
  {
    id: 2,
    date: "Sep 27, 2022",
    title: "A Note of Caution about Fraudulent Job Recruitment",
    link: "#",
  },
];

export default function ImportantNotices() {
  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="font-bold text-[#0C0C0C] text-[32px] leading-[40px] tracking-[0%]">
        Important Notices
      </h2>

      <div className="space-y-4">
        {notices.map((notice) => (
          <div key={notice.id} className="p-4">
            <div className="flex justify-between items-start">
              <div className="md:flex items-center">
                <p className="text-[#0C0C0C]">{notice.date}</p>
                <h3 className="max-w-[900px] md:ml-[40px] mt-3 md:mt-0 font-medium text-[#0C0C0C]">
                  {notice.title}
                </h3>
              </div>
              <Link
                href={notice.link}
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
        <Link
          href="/newsroom"
          className="border-[#0A0045] border-[2px] rounded-[20px] text-[#0A0045] px-6 py-2 flex items-center justify-center"
        >
          View All{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
