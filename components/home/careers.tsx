import Image from "next/image";
import Link from "next/link";

export default function Careers() {
  return (
    <section className="py-16 container mx-auto px-[10%]">
      <div className="relative flex justify-end items-end  mt-[10%] h-80">
        <Image
          src="/top-careers.jpg"
          alt="Team members in office"
          width={800}
          height={450}
          className="object-cover rounded-lg"
        />

        <div className="">
          <div className="absolute bg-white opacity-90 rounded-[6px] top-[-92px] md:bottom-[-70px] left-[1%] md:left-[-10%] h-fit">
            <div className="border-[#B3B3B3] border rounded-[6px] backdrop-blur-md p-6 max-w-[330px] md:max-w-[518px] relative z-1000">
              <h2 className="section-title font-bold text-[#0C0C0C] text-[19px] md:text-[31.5px] leading-[30px] md:leading-[40px] tracking-[0%]">
                Careers
              </h2>
              <p className="my-3 md:my-6 font-normal text-[#0C0C0C] text-[13px] md:text-[16px] leading-[24px] tracking-[0%]">
                The most rewarding thing about being part of the DNIL family is
                our ability to make tangible contributions to society.
              </p>

              <button className="bg-[#0A0045] px-3 md:px-6 py-1 md:py-2 text-white  rounded-[14px] md:rounded-[20px] text-[13px] md:text-[16px] flex item-center w-fit">
                <Link
                  href="/company/search-jobs"
                  className="bg-[#0A0045] rounded-[14px] md:rounded-[20px] flex justify-start items-start text-white"
                >
                  Find Your Place
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-3 md:w-6 h-3 md:h-6 mt-1 md:mt-0 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5H19.5M19.5 4.5V10.5M19.5 4.5L10.5 13.5M9 5.25H4.5A1.5 1.5 0 003 6.75v12A1.5 1.5 0 004.5 20.25h12a1.5 1.5 0 001.5-1.5V15"
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
      </div>
    </section>
  );
}
