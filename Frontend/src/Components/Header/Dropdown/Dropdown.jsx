import { RiMenuSearchFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import DropLinks from "./DropLinks";
export default function Dropdown() {
  return (
    <div className="flex justify-between text-2xl pl-[1rem] md:pl-[2rem] pr-[1rem] xl:pr-[2rem] shadow-[0_1px_1px_rgba(0,0,0,0.15)]">
      <a
        href="#"
        className="flex p-[1.3rem] !no-underline !text-[#121111] w-[30%] md:w-[7rem] h-[100%] xl:ml-[2rem] md:font-[400] text-[1rem] items-center cursor-pointer shadow-[1px_0_0_rgba(0,0,0,0.15)]"
      >
        <span className="mr-[0.6rem] ">
          <RiMenuSearchFill size={20} />
        </span>
        Filter
      </a>
      <DropLinks></DropLinks>
      <div className="flex ml-auto h-[100%] w-[70%] md:w-[14rem] md:mr-[2rem] xl:w-[20rem] p-[0.8rem] text-[0.7rem] font-[500]  md:text-[0.9rem] md:font-[500] ">
        <span className="flex ml-[1rem] mr-[0.5rem] items-center justify-center w-[32px] h-[32px] rounded-full bg-gray-200 sans-serif">
          <FaLocationDot size={16} />
        </span>
        <span>SET YOUR CURRENT LOCATION </span>
      </div>
    </div>
  );
}
