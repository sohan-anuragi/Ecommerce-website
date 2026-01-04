import { useState } from "react";
import { BiHide } from "react-icons/bi";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export default function SignUpPage() {
  const [show, setshow] = useState(false);
  const [show1, setshow1] = useState(false);

  return (
    <>
      <div className="py-[1rem]  px-[2rem] md:px-[5rem] md:w-[50%] lg:px-[7rem]">
        {/* Breadcrumb */}
        <div className="my-[1rem]">
          <ul className="flex text-[0.6rem] !p-[0rem]  !m-[0rem]">
            <li>
              <a
                href="#"
                className="!no-underline !text-[black] p-[0rem] m-[0rem]"
              >
                Home
              </a>
            </li>
            <span>{" > "}</span>
            <li>
              <a
                href="#"
                className="!no-underline !text-[black] p-[0rem] m-[0rem]"
              >
                My Account
              </a>
            </li>
            <span>{" > "}</span>
            <li>SignUp</li>
          </ul>
        </div>

        {/* Heading */}
        <h className="text-[1.5rem] font-semibold mb-[2rem] block ">
          Create An Account
        </h>

        <h className="text-[0.9rem] font-semibold mb-[2rem]">
          Shop faster and track all your orders in one place
        </h>

        {/* Form */}
        <form action="/login" method="POST" className="flex flex-col mt-[1rem]">
          {/* Email */}

          <label
            htmlFor="name"
            className="text-[0.8rem] font-semibold mt-[1rem] mb-[0.5rem]"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name..."
            required
            className="p-[0.7rem] border-[1px] rounded-sm border-[#8080807c] mt-[0.5rem] !text-[0.8rem]
            focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400"
          />

          <label
            htmlFor="email"
            className="text-[0.8rem] font-semibold mt-[1rem] mb-[0.5rem]"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email..."
            required
            className="p-[0.7rem] border-[1px] rounded-sm border-[#8080807c] mt-[0.5rem] !text-[0.8rem]
            focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400"
          />

          <label
            htmlFor="email"
            className="text-[0.8rem] font-semibold mt-[1rem] mb-[0.5rem]"
          >
            Phone Number (Optional)
          </label>
          <input
            type="email"
            id="phone"
            name="phone"
            placeholder="+91 Enter your phone number..."
            required
            className="p-[0.7rem] border-[1px] rounded-sm border-[#8080807c] mt-[0.5rem] !text-[0.8rem]
            focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400"
          />

          {/* Password */}
          <label
            htmlFor="password"
            className="text-[0.8rem] font-semibold mb-[0.5rem] mt-[1rem]"
          >
            Password
          </label>
          <div className="flex items-center justify-between border-[1px] rounded-sm border-[#8080807c] focus-within:ring-1 focus-within:ring-yellow-300 focus-within:border-yellow-300">
            <input
              type={show ? "password" : "text"}
              id="password"
              name="password"
              placeholder="Ex: 123#$#abc&%"
              required
              className="p-[0.7rem]  rounded-sm  mt-[0.5rem] !text-[0.8rem]
            focus:outline-none w-[90%] "
            />
            <span className="" onClick={() => setshow(!show)}>
              {show ? (
                <BiHide size={20} className="mr-[0.5rem]" />
              ) : (
                <MdOutlineRemoveRedEye size={20} className="mr-[0.5rem]" />
              )}
            </span>
          </div>

          <label
            htmlFor="confirm_password"
            className="text-[0.8rem] font-semibold mb-[0.5rem] mt-[1rem]"
          >
            Confirm Password
          </label>

          <div className="flex items-center justify-between border-[1px] rounded-sm border-[#8080807c] focus-within:ring-1 focus-within:ring-yellow-300 focus-within:border-yellow-300">
            <input
              type={show1 ? "password" : "text"}
              id="confirm_password"
              name="confirm_password"
              placeholder="Ex: 123#$#abc&%"
              required
              className="p-[0.7rem]  rounded-sm  mt-[0.5rem] !text-[0.8rem]
            focus:outline-none w-[90%] "
            />
            <span className="" onClick={() => setshow1(!show1)}>
              {show1 ? (
                <BiHide size={20} className="mr-[0.5rem]" />
              ) : (
                <MdOutlineRemoveRedEye size={20} className="mr-[0.5rem]" />
              )}
            </span>
          </div>

          <div
            class="g-recaptcha"
            data-sitekey="6Le9xTwsAAAAAKoxBOil8D6iJ8nU7nIIkitNPOcW"
          ></div>

          {/* Button */}
          <button
            type="submit"
            className=" !mt-[1rem] p-[0.7rem] bg-[#ffb300f4] border-[1px] border-[#ffb300f4] !rounded-[2px] text-white rounded-[0.3rem]"
          >
            Login
          </button>
        </form>

        <p className="center p-[1rem] text-center text-[0.9rem] text-[black] ">
          Already have an account?{" "}
          <a href="#" className="!text-[black]">
            Login
          </a>
        </p>
      </div>
    </>
  );
}
