import { RxCross2 } from "react-icons/rx";
import CartProducts from "./CartProducts";
import CartListProvider from "./CartStore";

export default function CartBox({ isOpen, setIsOpen }) {
  return (
    <div
      className={`fixed overflow-y-auto z-200 flex flex-row-reverse  top-0 left-0 w-full h-full bg-black transition-all duration-500 ease-in-out ${
        isOpen ? " bg-opacity-50  " : " opacity-0 pointer-events-none"
      } `}
    >
      <div
        className={` overflow-y-auto z-500 p-[1rem]  h-full w-[95%] md:w-[30%] lg:w-[35%] bg-[white] rounded-l-sm shadow-lg transition-all duration-500 ease-in-out ${
          isOpen ? " translate-x-0 " : " translate-x-full "
        } `}
      >
        <div className="flex flex-row justify-between p-[0.8rem] ">
          <h className="text-lg font-semibold font-sans">Shopping Cart</h>
          <span
            onClick={() => setIsOpen(false)}
            className="cursor-pointer text-2xl"
          >
            <RxCross2 />
          </span>
        </div>

        <div>
          <CartListProvider>
            <CartProducts />
          </CartListProvider>
        </div>
      </div>
    </div>
  );
}
