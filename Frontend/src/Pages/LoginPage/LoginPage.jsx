export default function LoginPage() {
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
            <li>Login</li>
          </ul>
        </div>

        {/* Heading */}
        <h1 className="text-[1.5rem] font-semibold mb-[2rem]">Sign In</h1>

        {/* Form */}
        <form action="/login" method="POST" className="flex flex-col mt-[1rem]">
          {/* Email */}
          <label
            htmlFor="email"
            className="text-[0.8rem] font-semibold mt-[1rem] mb-[0.5rem]"
          >
            Email:
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

          {/* Password */}
          <label
            htmlFor="password"
            className="text-[0.8rem] font-semibold mb-[0.5rem] mt-[1rem]"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Ex: 123#$#abc&%"
            required
            className="p-[0.7rem] border-[1px] rounded-sm border-[#8080807c] mt-[0.5rem] !text-[0.8rem]
            focus:outline-none focus:ring-1 focus:ring-yellow-300 focus:border-yellow-300"
          />

          {/* Forgot password */}
          <a
            href="#"
            className="text-[0.8rem] mt-[0.7rem] mb-[1rem] !text-[black]"
          >
            Forgot Password?
          </a>

          {/* Button */}
          <button
            type="submit"
            className="p-[0.7rem] bg-[#ffb300f4] border-[1px] border-[#ffb300f4] !rounded-[2px] text-white rounded-[0.3rem]"
          >
            Login
          </button>
        </form>

        <p className="center p-[1rem] text-center text-[0.9rem] text-[black] ">
          Don’t have an account yet?{" "}
          <a href="#" className="!text-[black]">
            create an account
          </a>
        </p>
      </div>
    </>
  );
}
