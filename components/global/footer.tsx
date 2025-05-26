import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="md:flex justify-center items-center container text-[#151515] mx-auto px-4 py-12">
        <div className="">
          <Image src="/dnil-logo.png" alt="Logo" width={250} height={250} />
          <div className="pt-8">
            <Link
              href="mailto:info@dnilsolutions.com"
              className="w-fit bg-[#0A0045] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-all flex items-center 2xl:text-[20px]"
            >
              Let{"'"}s Talk{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-4"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-[35px] md:mt-0 md:ml-[20%] grid grid-cols-2 md:grid-cols-4 gap-12 2xl:text-[20px]">
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about-us"
                  className="text-[#151515] hover:text-[#0a2463]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/company/search-jobs"
                  className="text-[#151515] hover:text-[#0a2463]"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="https://ankursolutions.com/"
                  className="text-[#151515] hover:text-[#0a2463]"
                >
                  Ankur Global
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/newsroom"
                  className="text-[#151515] hover:text-[#0a2463]"
                >
                  Newsletter
                </Link>
              </li>
              {/* <li>
                <Link href="3" className="text-[#151515] hover:text-[#0a2463]">
                  Subsidiaries
                </Link>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-[#151515] hover:text-[#0a2463]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#151515] hover:text-[#0a2463]">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com"
                className="text-gray-600 hover:text-[#0a2463]"
              >
                <Image
                  src={"/company/social-four.svg"}
                  width={25}
                  height={25}
                  alt="Twitter"
                  className="mt-1"
                />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-gray-600 hover:text-[#0a2463]"
              >
                <Image
                  src={"/company/social-two.svg"}
                  width={35}
                  height={35}
                  alt="Twitter"
                />
              </Link>
              <Link
                href="https://facebook.com"
                className="text-gray-600 hover:text-[#0a2463]"
              >
                <Image
                  src={"/company/social-three.svg"}
                  width={25}
                  height={25}
                  alt="Twitter"
                  className="mt-1"
                />
              </Link>
            </div>

            <div>
              <p className="text-sm text-[#151515]">DNIL © 2025</p>
              <div className="mt-4">
                <Link href="/" className="text-2xl font-bold text-[#0a2463]">
                  <Image src="/dnil.png" alt="Logo" width={150} height={150} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
