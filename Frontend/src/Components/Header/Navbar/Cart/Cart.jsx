import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import CartBox from "./CartBox";

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>
        <a
          href="#"
          className="mr-[3rem] md:-[1rem] relative flex items-center w-[3rem] font-bold md:mr-[0rem] no-underline !no-underline text-[#111111] !no-underline"
        >
          <span className="bg-[#ff4800] rounded-full text-center h-[1.2rem] w-[1.2rem] text-white absolute right-[0.5rem] text-[0.8rem]  font-bold">
            4
          </span>
          <HiOutlineShoppingBag
            size={30}
            className=" w-6 h-6 md:w-6 md:h-6 lg:w-7 lg:h-7 text-inherit !text-[#111111] !no-underline"
          />
        </a>
      </div>
      <CartBox isOpen={isOpen} setIsOpen={setIsOpen}></CartBox>
    </div>
  );
}
