export default function SignUpPage() {
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
            <li>Change Password</li>
          </ul>
        </div>

        {/* Heading */}
        <h className="text-[1.5rem] font-semibold mb-[2rem] block ">
          Change your Password
        </h>

        <h className="text-[0.9rem] font-semibold mb-[2rem]">
          We will send you an email to change your password.
        </h>

        {/* Form */}
        <form action="/login" method="POST" className="flex flex-col mt-[1rem]">
          {/* Email */}

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

          {/* Button */}
          <button
            type="submit"
            className=" !mt-[1.3rem] !mb-[1rem] p-[0.7rem] bg-[#ffb300f4] border-[1px] border-[#ffb300f4] !rounded-[2px] text-white rounded-[0.3rem]"
          >
            Send Email
          </button>
        </form>
      </div>
    </>
  );
}
