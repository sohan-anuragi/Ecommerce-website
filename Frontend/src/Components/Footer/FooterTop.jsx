export default function FooterTop() {
  return (
    <div className="w-full bg-[#262625] pt-[1rem] md:flex md:flex-row p-[1rem] ">
      <div className=" md:w-[50%] w-[95%] md:px-[1rem] p-[2rem] md:px-[2rem] xl:px-[7rem]  flex flex-col  ">
        <h className="font-bold text-white mb-[1rem]">DEPARTMENT</h>
        <div className="flex gap-12 ">
          <ul className="flex flex-col gap-1 text-white font-sans p-0 m-0 list-none">
            <li className="">
              <a
                href="#"
                className="  !no-underline !text-[white] text-[0.8rem] "
              >
                Men
              </a>
            </li>
            <li className="">
              <a
                href="#"
                className=" !no-underline !text-[white] text-[0.8rem] "
              >
                Women
              </a>
            </li>
            <li className="">
              <a
                href="#"
                className=" !no-underline !text-[white] text-[0.8rem] "
              >
                Kids
              </a>
            </li>
            <li className=" ">
              <a
                href="#"
                className=" !no-underline !text-[white] text-[0.8rem] "
              >
                Home & Living
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-1 text-white font-sans p-0 m-0 list-none">
            <li className="">
              <a
                href="#"
                className=" !no-underline !text-[white] text-[0.8rem]"
              >
                Beauty
              </a>
            </li>
            <li className=" ">
              <a
                href="#"
                className=" !no-underline !text-[white] text-[0.8rem] "
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" md:w-[50%] w-[95%] md:px-[1rem] p-[2rem] md:px-[2rem] xl:px-[7rem]  flex flex-col  ">
        <h className="font-bold text-white mb-[1rem]">FOR NEW UPDATES</h>
        <form className="flex gap-1">
          <input
            type="email"
            placeholder="Enter your Email"
            className="p-[0.5rem] rounded-sm border border-gray-300 bg-[white] w-[70%] mb-[1rem] mr-[1rem"
          />
          <input
            type="submit"
            value="Subscribe"
            className="p-[0.5rem] ml-[1rem] rounded-sm border border-gray-300 bg-yellow-500 text-white font-semibold cursor-pointer mb-[1rem]"
          />
        </form>
      </div>
    </div>
  );
}
