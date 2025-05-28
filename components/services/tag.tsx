import Image from "next/image";

export default function IndustriesServed() {
  return (
    <section className="relative" id="newsletter">
      <Image
        src="/world.jpg"
        alt="Industries Served"
        width={920}
        height={580}
        className="w-full"
      />

      <div className="">
        <div className="absolute bg-white opacity-90 rounded-[6px] bottom-[140px] right-[9%]">
          <div className="border-[#B3B3B3] border rounded-[6px] backdrop-blur-md p-6 max-w-[518px] relative z-1000">
            <h2 className="section-title font-bold text-[#0C0C0C] text-[31.5px] leading-[40px] tracking-[0%]">
              Subscribe to our Newsletter
            </h2>
            <p className="my-6 font-normal text-[#0C0C0C] text-[16px] leading-[24px] tracking-[0%]">
              Get all the latest information straight to your inbox
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border-[#0a0045a0] border-2 rounded-[20px] md:rounded-[40px] text-[#0C0C0C] text-[16px] leading-[24px] tracking-[0%] placeholder:text-[#0A0045] placeholder:opacity-50 outline-none"
            />

            <br />
            <br />
            <div className="absolute bottom-0 left-0 z-[-1]">
              <div
                className="w-64 h-[200px]"
                style={{
                  background:
                    "linear-gradient(50.91deg, #1C165F 0%, #FFFFFF 25%)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
