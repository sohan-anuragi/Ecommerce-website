import { FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CgMenu } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { useContext } from "react";
import HeaderData, { HeaderStore } from "../Store";

export default function NavLinks() {
  const { menuToggle, handleMenuToggle } = useContext(HeaderStore);

  return (
    <div className="flex items-center relative">
      {/* Login / Signup */}
      <a
        href="#"
        className="flex items-center mr-[0.8rem] lg:mr-[2rem] family-poppins no-underline text-inherit !no-underline "
      >
        <FaRegUser
          size={25}
          className="w-5 h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 text-[#111111]"
        />
        <div className="flex flex-col ml-[0.7rem] hidden lg:flex text-[#111111] !no-underline">
          <span className="text-[0.95rem] font-[600] font-sans ml-[0.2rem] text-[#111111] !no-underline">
            Login with ID
          </span>
          <span className="text-[0.9rem] font-sans mt-[-5px] text-[#111111] !no-underline">
            or sign up
          </span>
        </div>
      </a>

      {/* Shopping Bag */}
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

      {/* Menu / Cross Icon */}
      <span
        onClick={handleMenuToggle}
        className={`absolute z-[100] right-[1rem] top-1/2 -translate-y-1/2 md:hidden cursor-pointer ${
          menuToggle ? "text-white" : "text-black"
        }`}
      >
        {menuToggle ? <RxCross2 size={30} /> : <CgMenu size={30} />}
      </span>
    </div>
  );
}
