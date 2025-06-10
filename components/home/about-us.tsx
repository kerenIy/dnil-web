import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/about-us-bg.png"
          alt="Digital wave background"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      <div
        className="py-16 relative z-10 container mx-auto px-[10%] 2xl:px-[5%] 3xl:px-[9%] 4xl:px-[5%]"
        data-aos="fade-up"
        data-aos-once="false"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 items-center">
          <div className="">
            <h2 className="section-title text-[#0C0C0C] font-normal text-[32px] 2xl:text-[37px] 3xl:text-[45px] 4xl:text-[57px]">
              About Us
            </h2>
            <p className="text-[16px] 2xl:text-[22px] 3xl:text-[28px] 4xl:text-[32px] text-[#0C0C0C] my-5 max-w-[445px] 2xl:max-w-[600px] 3xl:max-w-[650px] 4xl:max-w-[850px] leading-[24px] 2xl:leading-[28px] 3xl:leading-[32px] 4xl:leading-[38px] tracking-[0%]">
              DNIL is an ICT consultancy practice committed to delivering
              efficient, scalable, and secure technology solutions. We work
              closely with clients to understand their operational needs and
              craft tailored services that optimize performance, enhance
              security, and drive long-term business growth.
              <br />
              <br />
              We are a service-first organization, where customer focus,
              integrity, and quality guide every project we deliver.
            </p>

            <button className="bg-[#0A0045] px-8 py-2 text-white  rounded-[20px] text-[16px] 2xl:text-[20px] 3xl:text-[24px] 4xl:text-[28px] flex item-center w-fit">
              <Link
                href="/about-us"
                className="flex items-center justify-center"
              >
                Know More{" "}
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

          <div className="relative mt-[10px] md:mt-0 h-80 md:h-96 2xl:h-[28rem] 3xl:h-[32rem] 4xl:h-[36rem]">
            <Image
              src="/about.jpg"
              alt="Team members"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
