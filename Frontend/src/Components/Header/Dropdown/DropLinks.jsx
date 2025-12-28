import { useContext } from "react";
import { HeaderStore } from "../Store";

export default function DropLinks() {
  const { menuToggle, handleMenuToggle } = useContext(HeaderStore);

  return (
    <ul
      className={`absolute md:static top-[0.1rem] right-0
bg-[#ff5500] md:bg-transparent
text-white md:text-black
mt-[0.1rem]
w-[50%] h-[90%] md:w-auto md:h-auto
pt-[3rem] md:pt-0
font-sans
md:flex md:flex-row
text-[1rem] md:items-center
z-50
transition-transform duration-300
${menuToggle ? "block" : "hidden"}
md:translate-x-0`}
    >
      <li className="p-[0.7rem] md:p-[0rem] shadow-[0_-1px_1px_rgba(0,0,0,0.15),_0_1px_1px_rgba(0,0,0,0.15)] md:shadow-none ">
        <a
          href="#"
          className="  !no-underline !text-[white] md:!text-[#111010] mb-[1rem] ml-[1rem] lg:ml-[1.5rem]"
        >
          Men
        </a>
      </li>
      <li className="p-[0.7rem] md:p-[0rem] shadow-[0_-1px_1px_rgba(0,0,0,0.15),_0_1px_1px_rgba(0,0,0,0.15)] md:shadow-none ">
        <a
          href="#"
          className=" !no-underline !text-[white] md:!text-[#111010] mt-[0.7rem] ml-[1rem] lg:ml-[1.5rem]"
        >
          Women
        </a>
      </li>
      <li className="p-[0.7rem] md:p-[0rem] shadow-[0_-1px_1px_rgba(0,0,0,0.15),_0_1px_1px_rgba(0,0,0,0.15)] md:shadow-none ">
        <a
          href="#"
          className=" !no-underline !text-[white] md:!text-[#111010] mt-[0.7rem] mb-[1rem] ml-[1rem] lg:ml-[1.5rem]"
        >
          Kids
        </a>
      </li>
      <li className="p-[0.7rem] md:p-[0rem] shadow-[0_-1px_1px_rgba(0,0,0,0.15),_0_1px_1px_rgba(0,0,0,0.15)] md:shadow-none ">
        <a
          href="#"
          className=" !no-underline !text-[white] md:!text-[#111010] mt-[0.7rem] ml-[1rem] lg:ml-[1.5rem]"
        >
          Home & Living
        </a>
      </li>
      <li className="p-[0.7rem] md:p-[0rem] md:hidden lg:block shadow-[0_-1px_1px_rgba(0,0,0,0.15),_0_1px_1px_rgba(0,0,0,0.15)] md:shadow-none ">
        <a
          href="#"
          className=" !no-underline !text-[white] md:!text-[#111010] mt-[0.7rem] ml-[1rem] lg:ml-[1.5rem]"
        >
          Beauty
        </a>
      </li>
      <li className="p-[0.7rem] md:p-[0rem] shadow-[0_-1px_1px_rgba(0,0,0,0.15),_0_1px_1px_rgba(0,0,0,0.15)] md:shadow-none ">
        <a
          href="#"
          className=" !no-underline !text-[white] md:!text-[#111010] mt-[0.7rem] ml-[1rem] lg:ml-[1.5rem]"
        >
          Contact
        </a>
      </li>
    </ul>
  );
}
