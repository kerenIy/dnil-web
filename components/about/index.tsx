import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen" data-aos="fade-up" data-aos-once="false">
      <div className="container mx-auto py-8 ">
        <div className="px-[10%]">
          <div className="mb-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-[#0a2463]">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/about-us" className="text-[#0a2463]">
              About Us
            </Link>
          </div>

          <h1 className="text-3xl font-bold mb-4 text-[#0C0C0C]">About Us</h1>
          <h2 className="text-2xl font-bold mb-4 text-[#0C0C0C]">DNIL</h2>

          <p className="max-w-[1300px] text-[14px] font-normal mb-8 text-[#0C0C0C]">
            At Data Network Infrastructures Limited (DNIL), we are a premier ICT
            consultancy and technology solutions provider dedicated to driving
            innovation, digital transformation, and sustainable growth. We
            empower organizations by delivering strategic, integrated technology
            services that solve complex business challenges.
          </p>

          <div className="relative w-full max-w-4xl mx-auto mb-12 rounded-lg overflow-hidden">
            <Image
              src="/about-yt.png"
              alt="DNIL corporate video"
              width={700}
              height={400}
              className="w-full"
            />
          </div>

          <p className="max-w-[723px] mx-auto mb-16 text-center text-[#0C0C0C] text-[18px]">
            Our expertise spans professional consultancy, custom software
            development, network and IT security solutions, SaaS products, and
            digital transformation. As a trusted partner, DNIL is committed to
            creating long-term value and fostering technological excellence for
            clients across diverse industries.
          </p>
        </div>
      </div>
    </main>
  );
}
