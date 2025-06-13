import Image from "next/image";
import Link from "next/link";

export default function CoreValues() {
  return (
    <div className="pb-16 relative " data-aos="fade-up" data-aos-once="false">
      {" "}
      <Image
        src="/core.jpg"
        alt="Core Values"
        width={1920}
        height={1080}
        objectFit="cover"
        className="hidden md:inline"
      />
      <Image
        src="/core.jpg"
        alt="Core Values"
        width={620}
        height={480}
        className="inline md:hidden"
      />
      <section className="mt-10 md:mt-0 md:absolute md:bottom-[120px] left-[40px]">
        <div className="container mx-auto px-[10%]">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-6 text-[#0C0C0C]">
            <div className="bg-white border-[#B3B3B3] border md:h-[240px] p-3 md:p-6 rounded-md md:rounded-lg shadow-sm">
              <h3 className="font-bold mb-3">Continuous Growth</h3>
              <p className="text-sm">
                It takes both partnership and innovation to drive
                transformation.
              </p>
            </div>

            <div className="bg-white border-[#B3B3B3] border md:h-[240px] p-3 md:p-6 rounded-md md:rounded-lg shadow-sm">
              <h3 className="font-bold mb-3">Security & Reliability</h3>
              <p className="text-sm">
                DNIL defines itself by the contribution we make in tackling
                society{"'"}s challenges.
              </p>
            </div>

            <div className="bg-white border-[#B3B3B3] border md:h-[240px] p-3 md:p-6 rounded-md md:rounded-lg shadow-sm">
              <h3 className="font-bold mb-3">Customer Centric </h3>
              <p className="text-sm">
                DNIL{"'"}s culture is key to our mission to unlock a sustainable
                future.
              </p>
            </div>

            <div className="bg-white border-[#B3B3B3] border md:h-[240px] p-3 md:p-6 rounded-md md:rounded-lg shadow-sm">
              <h3 className="font-bold mb-3">Integrity & Trust</h3>
              <p className="text-sm">
                Good governance is essential to sustainability and at the heart
                of everything we do.
              </p>
            </div>
            <div className="bg-white border-[#B3B3B3] border md:h-[240px] p-3 md:p-6 rounded-md md:rounded-lg shadow-sm">
              <h3 className="font-bold mb-3">Excellence & Innovation</h3>
              <p className="text-sm">
                Detailed data on our sustainability performance and our impact
                on society and the environment.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        className="flex justify-center items-center md:mt-[190px]"
        data-aos="fade-up"
        data-aos-once="false"
      >
        {" "}
        <div className="mx-[10%]">
          <br />
          <button className="border-[#0A0045] border-2 px-8 py-2 text-[#0A0045]  rounded-[20px] text-[16px] flex item-center w-fit">
            <Link href="/about" className="flex items-center justify-center">
              Explore More{" "}
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
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
