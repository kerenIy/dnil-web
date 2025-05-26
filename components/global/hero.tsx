import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[500px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Digital wave background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#00000033] to-[#00000033]" />

      {/* Text content */}
      <div
        className="relative z-20 container mx-auto pl-[10%] pr-[8%] h-full flex flex-col justify-center text-white"
        data-aos="fade-up"
        data-aos-once="false"
      >
        <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl mb-8">
          <p className="mb-2 leading-[32.5px] text-[16px] md:text-[20px] font-light">
            At Data Network Infrastructure Limited (DNIL), we design and deliver
            technology solutions that power business growth. From secure network
            infrastructure and professional consultancy to tailored IT security
            systems, our services are built around your needs, efficient,
            scalable, and reliable.
          </p>
        </div>

        <h1 className="text-xl md:text-3xl md:text-[35px] font-normal">
          Smart ICT Solutions. Seamless Infrastructure. Lasting Impact.
        </h1>
      </div>
    </section>
  );
}
