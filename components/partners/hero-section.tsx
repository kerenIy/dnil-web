import Image from "next/image";
import { lato } from "@/app/fonts/font";

interface HeroSectionProps {
  image: string;
  title: string;
  description: string;
}

export default function HeroSection({
  image,
  title,
  description,
}: HeroSectionProps) {
  return (
    <section
      className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden"
      //   data-aos="slide-up"
      //   data-aos-once="false"
    >
      <div className="absolute inset-0 z-0">
        <Image src={image} alt="Hero Background" fill />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00000033] to-[#00000033] opacity-90 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center z-0"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20 text-white">
        <h1 className="text-4xl md:text-[60px] font-bold mb-6 text-center">
          {title}
        </h1>
        <div className="flex justify-center items-center">
          {" "}
          <p
            className={`${lato.className} text-lg md:text-[20px] max-w-[900px] text-center font-[400]`}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
