import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export default function ProfileDropBox({ hover, setHover }) {
  const [status, setStatus] = useState("register");

  return (
    <div
      className={`flex rounded-b-[0.5rem] flex-col w-[13rem] md:w-[15rem]  mt-[0.3rem] overflow-hidden bg-[transparent] 
  bg-white absolute top-[1.5rem] md:top-[2rem] right-[-230%] md:right-[-20%] z-50
  transition-all duration-300 ease-out
  ${
    hover
      ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
      : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
  }
`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex rounded-b-[0.5rem] flex-col !mt-[1rem] border border-[#1d1d1d76] border-t-[2px] p-[1rem] !border-t-[2px] !border-t-[#ffc400] ">
        <h className=" text-[0.9rem] md:text-[1rem] font-semibold md:font-bold  ">
          Hellow User
        </h>
        <span className="text-[0.6rem] mt-[0.2rem] md:text-[0.7rem] font-[500] ">
          To access your Kryzora account
        </span>
        <button
          className={` p-[0.5rem] !rounded-md bg-[#ffc400] text-[white] !mt-[0.8rem] ${
            status === "registered" ? "hidden" : ""
          }  `}
        >
          Sign In
        </button>
        <button
          className={` p-[0.5rem] !rounded-md bg-[#ffc400] text-[white] !mt-[0.8rem] ${
            status === "registered" ? "hidden" : ""
          } `}
        >
          Sign Up
        </button>

        <button
          className={` p-[0.5rem] !rounded-md bg-[#ffc400] text-[white] !mt-[0.8rem] ${
            status === "registered" ? "" : "hidden"
          } `}
        >
          Log Out
        </button>

        <span className=" p-[0.5rem]  border-t-[1px] border-[#1d1d1d76] text-[0.8rem] mt-[1rem] cursor-pointer hover:underline ">
          My Orders{" "}
          <HiOutlineShoppingBag className=" inline-block ml-[0.2rem] " />
        </span>
      </div>
    </div>
  );
}
