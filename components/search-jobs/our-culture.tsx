import { open_sans } from "@/app/fonts/font";
import Image from "next/image";

const cultureValues = [
  {
    title: "Professional Growth",
    description:
      "It takes both partnership and innovation to drive transformation.",
  },
  {
    title: "Collaborative Environment",
    description:
      "DNIL defines itself by the contribution we make in tackling society's challenges.",
  },
  {
    title: "Impactful Projects",
    description:
      "DNIL's culture is key to our mission to unlock a sustainable future.",
  },
  {
    title: "Work-Life Balance",
    description:
      "Good governance is essential to sustainability and at the heart of everything we do.",
  },
  {
    title: "Sustainability Report",
    description:
      "Detailed data on our sustainability performance and our impact on society and the environment.",
  },
];

export default function OurCulture() {
  return (
    <main className="min-h-screen">
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/career-bg.jpg"
            alt="Career opportunities at DNIL"
            width={1920}
            height={600}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        <div className="absolute inset-0 z-0 bg-black/40" />

        <div
          className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center text-white"
          data-aos="fade-up"
          data-aos-once="false"
        >
          <h1 className="text-5xl font-light mb-4">Our Culture</h1>
          <p className="text-lg max-w-3xl mb-8">
            Join us and contribute to creating innovative solutions that better
            people{"'"}s lives and preserve our planet.
          </p>
        </div>
      </section>

      <section className="md:absolute bottom-[-85px] left-[60px]">
        <div className="container mx-auto px-[10%] mt-[15px] md:mt-0">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-[#0C0C0C]">
            {cultureValues.map((item, index) => (
              <div
                key={index}
                className="bg-white border-[#B3B3B3] border  md:h-[220px] p-3 md:p-6 rounded-lg shadow-sm"
                data-aos="fade-up"
                data-aos-once="false"
                data-aos-delay={index * 100}
              >
                <h3 className="font-normal mb-3">{item.title}</h3>
                <p className="text-sm max-w-[140px] md:max-w-[240px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="school-of-thought" className="mt-[20%] px-[10%]">
        <div className="flex justify-center items-center">
          <div className="text-center">
            <p
              className={`${open_sans.className} text-[#000000] font-bold text-4xl mb-8`}
              data-aos="fade-up"
              data-aos-once="false"
              data-aos-delay={100}
            >
              Our School of Thought
            </p>
            <p
              className={`${open_sans.className} text-[#000000] text-[17px] leading-[30px] tracking-[0%]`}
              data-aos="fade-up"
              data-aos-once="false"
              data-aos-delay={200}
            >
              The Future of ICT is Built on Trust, Innovation, and Impact
            </p>
            <div className="flex justify-center items-center">
              {" "}
              <p
                className={`${open_sans.className} text-[#000000] text-[17px] leading-[30px] tracking-[0%] max-w-[1000px] mb-12`}
                data-aos="fade-up"
                data-aos-once="false"
                data-aos-delay={300}
              >
                At Data Networks Infrastructures Limited (DNIL), we operate on a
                foundational belief: technology is not just a tool, it{"'"}s an
                enabler of business transformation and sustainable growth. Our
                philosophy is rooted in three core pillars that guide everything
                we do:
              </p>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center my-8"
              data-aos="fade-up"
              data-aos-once="false"
              data-aos-delay={400}
            >
              {companyValues.map((value, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-md  ${
                    value.highlight ? "" : "border-transparent"
                  } transition duration-300`}
                >
                  <div className="flex justify-center items-center mb-4 text-3xl ">
                    <div className="bg-[#D9D9D9] w-[40px] h-[40px] rounded-full p-3">
                      <Image
                        src={value.icon}
                        alt="Heart"
                        width={30}
                        height={30}
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-black">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const companyValues = [
  {
    title: "Trust",
    description:
      "We build lasting relationships with our clients based on transparency, reliability, and consistent delivery of value.",
    icon: "/icons/heart.svg",
    highlight: true,
  },
  {
    title: "Innovation",
    description:
      "We continuously explore emerging technologies and methodologies to deliver forward-thinking solutions that give our clients a competitive edge.",
    icon: "/icons/rocket.svg",
  },
  {
    title: "Impact",
    description:
      "We measure our success by the tangible business outcomes we create for our clients and the positive difference we make in their operations.",
    icon: "/icons/shield.svg",
  },
];
