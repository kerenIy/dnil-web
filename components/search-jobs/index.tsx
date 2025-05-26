import Image from "next/image";
import Link from "next/link";

const jobCategories = [
  {
    title: "Project/Program Management",
    jobs: 215,
  },
  {
    title: "Engineering & Science",
    jobs: 1565,
  },
  {
    title: "Sales, Marketing & Product Management",
    jobs: 209,
  },
  {
    title: "Finance",
    jobs: 119,
  },
  {
    title: "IT, Telecom & Internet",
    jobs: 1136,
  },
  {
    title: "Production & Skilled Trades",
    jobs: 252,
  },
  {
    title: "Supply Chain",
    jobs: 9,
  },
  {
    title: "Administration & Facilities",
    jobs: 166,
  },
  {
    title: "Human Resources",
    jobs: 117,
  },
  {
    title: "Customer Service & Contact Center Operations",
    jobs: 255,
  },
  {
    title: "Browse Opportunities",
    jobs: null,
  },
];

export default function SearchJobs() {
  return (
    <main className="min-h-screen">
      <section className="relative h-[700px] md:h-[1000px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/career-bg.jpg"
            alt="Career opportunities at DNIL"
            width={1920}
            height={1200}
            className="w-full h-full object-cover md:inline hidden"
            priority
          />

          <Image
            src="/career-bg.jpg"
            alt="Career opportunities at DNIL"
            width={1920}
            height={600}
            className="w-full h-full object-cover md:hidden inline"
            priority
          />
        </div>

        <div className="absolute inset-0 z-0 bg-black/40" />

        <div
          className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center text-white"
          data-aos="fade-up"
          data-aos-once="false"
        >
          <h1 className="text-5xl font-light mb-4">Explore Careers at DNIL</h1>
          <p className="text-lg max-w-3xl mb-8">
            Join us and contribute to creating innovative solutions that better
            people{"'"}s lives and preserve our planet.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 max-w-3xl"
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-delay="100"
          >
            <input
              type="text"
              placeholder="Search by keyword or job title"
              className="flex-grow px-12 py-1  text-gray-800"
            />
            <input
              type="text"
              placeholder="Search by location"
              className="flex-grow px-12 py-1 text-gray-800"
            />
            <button className="bg-[#1C165F] text-white px-12 py-1 hover:bg-opacity-90 transition-all">
              Find Jobs
            </button>
          </div>
        </div>
      </section>

      <section
        className="py-16 bg-[#424242] text-white"
        data-aos="fade-up"
        data-aos-once="false"
      >
        <div className="container mx-auto px-4">
          <p className="text-xl max-w-4xl mx-auto font-light">
            <span className="font-bold">
              Technology is driving today{"'"}s fast-paced world
            </span>{" "}
            — and we create new innovations that transform industries and
            society for the better. But without the brightest, most creative
            people — people like you — our achievements would not be possible.
            Join us and together let{"'"}s start powering good to make the world
            a better place.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div
          className="container mx-auto px-4"
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="200"
        >
          <h2 className="text-3xl font-light text-center mb-2 text-[#000000]">
            Discover your ideal career—
          </h2>
          <p className="text-[#000000] text-2xl text-center mb-12 font-light">
            anywhere in the world
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-[10%]">
            {jobCategories.map((category, index) => (
              <Link
                key={index}
                href={
                  category.jobs
                    ? `/careers/search-jobs/${category.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`
                    : "/careers/browse"
                }
                className="bg-[#8c8c8c] hover:bg-[#737373] transition-colors p-6 flex flex-col justify-center items-center text-center text-white h-[180px]"
                data-aos="flip-up"
                data-aos-once="false"
                data-aos-delay="200"
              >
                <h3 className="font-medium mb-2">{category.title}</h3>
                {category.jobs && (
                  <p className="text-sm">{category.jobs} available jobs</p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
