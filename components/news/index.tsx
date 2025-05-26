export default function NewsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[10%] py-16">
      {/* News Slider */}
      <div className="relative mb-8 bg-white">
        <div className="relative">
          <div
            className="relative h-[200px] md:h-[250px] w-full"
            data-aos="fade-up"
            data-aos-once="false"
          >
            <div className="absolute inset-0 z-10 flex">
              <div className="w-full bg-gray-100 p-6 flex flex-col justify-end items-end">
                <div className="">
                  <div className="text-sm text-[#1C165F] font-bold mb-1">
                    PICK UP
                  </div>
                  <div className="text-xs text-[#333333] font-bold mb-3">
                    2024.4.01
                  </div>
                  <h2 className="text-sm md:text-xl text-[#333333] font-bold max-w-[400px]">
                    DNIL to Strengthen Business Structure to Realize a {"'"}True
                    One DNIL{"'"} with Digital at its Core
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Navigation */}
        <div className="flex justify-center items-center space-x-2 mt-4">
          <button className="w-2 h-2 rounded-full bg-gray-300"></button>
          <button className="w-2 h-2 rounded-full bg-gray-800"></button>
          <button className="w-2 h-2 rounded-full bg-gray-300"></button>
          <button className="w-2 h-2 rounded-full bg-gray-300"></button>
          <button className="w-2 h-2 rounded-full bg-gray-300"></button>
          <button className="w-2 h-2 rounded-full bg-gray-300"></button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-600 ml-2">
            <span>II</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="lg:w-2/3">
          {/* Search Section */}
          <div
            className="mb-8"
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-delay="200"
          >
            <div className="flex items-center">
              <div className="border border-[#CECECE] px-4 py-1.5  text-sm font-normal text-[#CECECE]">
                Please enter a few keywords in Search Box and and click on the
                Search button
              </div>
              <button className="bg-[#1C165F] text-white p-3 flex items-center justify-center w-8 h-8">
                <span className="text-xs">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-search"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* News Releases */}
          <div>
            <h2
              className="text-xl font-bold mb-6 text-black"
              data-aos="fade-up"
              data-aos-once="false"
            >
              Latest News Releases
            </h2>

            {newsReleases.map((news, index) => (
              <div
                key={index}
                className="mb-8 pb-6 border-b border-gray-200"
                data-aos="fade-up"
                data-aos-once="false"
                data-aos-delay={100 + index * 100}
              >
                <div className="text-sm text-[#333333] mb-2">{news.date}</div>
                <h3 className="font-medium mb-2 text-[#333333]">
                  {news.title}
                </h3>

                <div className="flex flex-wrap gap-2 mt-3">
                  {news.categories.map((category, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-3 py-1 text-xs border border-[#2D4173] rounded-full text-[#2D4173] "
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex justify-center mt-8">
              <button className="text-[#737373] font-bold text-lg px-4 py-2 rounded-sm">
                Load more
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3">
          <div className="mb-6">
            <h3 className="bg-[#1C165F] text-white p-2 text-sm">
              Related Information
            </h3>
            <div className="border border-gray-200 p-4">
              <div className="bg-[#1C165F] h-36 mb-4"></div>
              <div className="text-xs mb-4 text-[#333333] my-1">
                DNIL Social Innovation Forum 2024: JAPAN Toward the Future
              </div>

              <div className="bg-[#1C165F] h-36 mb-4 mt-8"></div>
              <div className="text-xs mb-4 text-[#333333] my-1">
                DNIL 2023 Digital Summit: JAPAN Future Cities
              </div>
            </div>
          </div>

          <div>
            <h3 className="bg-[#1C165F] text-white p-2 text-sm">
              Contact Information
            </h3>
            <div className="border border-gray-200 p-4">
              <div className="flex space-x-3 mt-2">
                <a href="#" className="text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
                <a href="#" className="text-blue-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const newsReleases = [
  {
    date: "2023.5.11",
    title:
      "Global Logic Achieves Premier Tier Status within the AWS Partner Network, enabling cloud leadership (Global Logic Inc.)",
    categories: ["Corporate"],
    hasPress: true,
  },
  {
    date: "2023.5.11",
    title: "DNIL announces selection of director candidates",
    categories: ["Corporate", "Personnel Announcement"],
    hasPress: false,
  },
  {
    date: "2023.5.11",
    title: "DNIL Announces Decision on Year-end Dividend",
    categories: ["Corporate"],
    hasPress: false,
  },
  {
    date: "2023.5.9",
    title:
      "DNIL Co-Founder Energy announces supply of key reactor components to CFDC (Hydrogen New Nuclear Project) CFDC-GC Nuclear Energy, Ltd.",
    categories: ["Energy"],
    hasPress: true,
  },
  {
    date: "2023.5.7",
    title:
      "DNIL Energy to deliver the world's first 35-year 300 kV gas-insulated switchgear (DNIL Energy Ltd.)",
    categories: ["Corporate", "Energy"],
    hasPress: false,
  },
  {
    date: "2023.4.28",
    title:
      "Notice: DNIL Group's New Management Plan and Consolidated Financial Results for the Year Ended March 31, 2023",
    categories: ["Corporate", "Financial Information"],
    hasPress: false,
  },
  {
    date: "2023.4.28",
    title: "Notification of Repurchase of Shares of Common Stock",
    categories: ["Corporate"],
    hasPress: false,
  },
  {
    date: "2023.4.28",
    title: "DNIL Announces Plan for Year-end Dividend",
    categories: ["Corporate"],
    hasPress: false,
  },
  {
    date: "2023.4.24",
    title:
      "Company name change to DNIL GE Vernova Nuclear Energy Group on June 1, 2023 (DNIL GE Nuclear Energy, Ltd.)",
    categories: ["Corporate", "Energy"],
    hasPress: false,
  },
  {
    date: "2023.4.22",
    title:
      "Through Collaborative Creation, Daisen and DNIL Begin Trial Operation of AI Agent Supporting Equipment Future Diagnostics in Factories",
    categories: [
      "Corporate",
      "Product Information",
      "Open Innovation & Co-creation Solutions",
    ],
    hasPress: true,
  },
  {
    date: "2023.4.17",
    title:
      "DNIL Industrial Equipment Systems Launches Next-Generation Inverter System to Support Stable, Resilient Power Grid (DNIL Industrial Equipment Systems Co., Ltd.)",
    categories: ["Corporate"],
    hasPress: false,
  },
  {
    date: "2023.4.15",
    title:
      "DNIL Decarbons launches all-in-one electric fleet management platform to accelerate hydrogen, ammonia fleet decarbonization (DNIL DeCarbons Ltd.)",
    categories: ["Corporate", "Products & Development"],
    hasPress: false,
  },
];
