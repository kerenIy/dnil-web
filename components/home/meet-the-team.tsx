import Image from "next/image";
import Link from "next/link";

export default function MeetTeam() {
  return (
    <section className="pt-16 pb-[14rem] container mx-auto px-[10%]">
      <div className="relative flex justify-start items-start mt-[10%] h-80">
        <Image
          src="/top-team.jpg"
          alt="Team members"
          width={800}
          height={450}
          className="object-cover rounded-lg"
        />

        <div className="">
          <div className="absolute bg-white opacity-90 rounded-[6px] bottom-[-120px] md:bottom-[-190px] md:right-[-5%] right-0">
            <div className="border-[#B3B3B3] border rounded-[6px] backdrop-blur-md p-6 max-w-[518px] relative z-1000">
              <h2 className="section-title font-bold text-[#0C0C0C] text-[19px] md:text-[31.5px]  leading-[30px] md:leading-[40px] tracking-[0%]">
                Meet the Team
              </h2>
              <p className="my-3 md:my-6 font-normal text-[#0C0C0C] text-[13px] md:text-[16px] leading-[24px] tracking-[0%]">
                Meet our financial leaders, our management team, and our board
                members. Together, they guide our company with vision,
                integrity, and a commitment to excellence.
              </p>

              <button className="bg-[#0A0045] px-3 md:px-6 py-1 md:py-2 text-white  rounded-[14px] md:rounded-[20px] text-[13px] md:text-[16px] flex item-center w-fit">
                <Link
                  href="/team"
                  className="bg-[#0A0045] rounded-[14px] md:rounded-[20px] flex justify-start items-start text-white"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="mt-1 md:mt-0 ml-2"
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
      </div>
    </section>
  );
}
