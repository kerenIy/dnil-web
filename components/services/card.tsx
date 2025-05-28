import Link from "next/link";

interface CardProps {
  link?: string;
  title: string;
  description: string;
}
const CardGrid = ({ link, title, description }: CardProps) => {
  return (
    <div className="">
      {" "}
      {link ? (
        <>
          {" "}
          <Link href={link} target="_blank">
            <div className="relative bg-[#F4F4F4] shadow rounded p-4 pt-[22%] w-[100%] my-6 h-[200px]">
              <div className="bg-[#D9D9D9] text-center text-[13px] font-normal py-4 rounded absolute top-[-20px] left-[10.5px] h-[70px] w-[90%]">
                {title}
              </div>
              <p className="mt-4 text-[12px] text-[#0C0C0C]">{description}</p>
              <div className="flex justify-end">
                <div className="absolute bottom-2 w-6 h-6 bg-[#0C0C0C] text-white flex items-center justify-center text-xs">
                  →
                </div>
              </div>
            </div>
          </Link>
        </>
      ) : (
        <div className="relative bg-[#F4F4F4] shadow rounded p-4 pt-[22%] w-[100%] my-6 h-[205px]">
          <div className="bg-[#D9D9D9] text-center text-[13px] font-normal py-4 rounded absolute top-[-20px] left-[10.5px] h-[70px] w-[90%]">
            {title}
          </div>
          <p className="mt-4 text-[12px] text-[#0C0C0C]">{description}</p>
          {/* <div className="flex justify-end">
            <div className="absolute bottom-2 w-6 h-6 bg-[#0C0C0C] text-white flex items-center justify-center text-xs">
              →
            </div>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default CardGrid;
