import Navbar from "@/components/search-jobs/navbar";

export default function Page() {
  return (
    <div>
      <Navbar />

      <div className="bg-gray-300 flex flex-col items-center justify-center text-center space-y-2 h-[70vh] ">
        <p className=" text-black font-light text-5xl mb-3">
          We{"'"}re not hiring right now.
        </p>
        <p className="text-[22px] text-gray-600 mb-4">
          Join our newsletter and be the first to know when new opportunities
          open up.
        </p>
        <br />

        <div className="flex justify-center items-center relative mt-12">
          {" "}
          <input
            type="email"
            placeholder="Enter your email"
            className="w-[400px] p-1.5 md:p-3 border-[#0a0045a0] border-2 rounded-[10px] md:rounded-[20px] lg:rounded-[40px] text-[#0C0C0C] text-[16px] leading-[24px] tracking-[0%] placeholder:text-[#0A0045] placeholder:opacity-50 outline-none"
          />
          <button className="bg-[#1C165F] px-3 py-2 rounded-[10px] md:rounded-[20px] lg:rounded-[40px] text-white  text-[16px] leading-[24px] tracking-[0%] absolute right-[8px] bottom-[5.5px]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
