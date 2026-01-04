import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import ProfileDropBox from "./profileDropBox";

export default function Profile() {
  const [hover, setHover] = useState(false);

  return (
    <div className="flex flex-col relative  ">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`flex items-center mr-[0.8rem] lg:mr-[2rem] family-poppins no-underline text-inherit !no-underline cursor-pointer ${
          hover
            ? " transition-all duration-300 ease-in-out border-b-[2px] border-[#ff5a07]"
            : " transition-all duration-300 ease-in-out border-b-[2px] border-transparent"
        } `}
      >
        <FaRegUser
          size={25}
          className={`w-5 h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 transition-all duration-300 ease-in-out ${
            hover ? "!text-[#ff5a07]" : "text-[#111111]"
          }`}
        />
        <div className="flex flex-col ml-[0.7rem] hidden lg:flex text-[#111111] !no-underline">
          <span
            className={`text-[0.95rem] font-[600] font-sans ml-[0.2rem] transition-all duration-300 ease-in-out ${
              hover ? "!text-[#ff5a07]" : ""
            } `}
          >
            Login with ID
          </span>
          <span
            className={`text-[0.9rem] font-sans mt-[-5px] text-[#111111] transition-all duration-300 ease-in-out ${
              hover ? "!text-[#ff5a07]" : ""
            } `}
          >
            or sign up
          </span>
        </div>
      </div>
      {/* <ProfileDropBox></ProfileDropBox> */}
    </div>
  );
}
