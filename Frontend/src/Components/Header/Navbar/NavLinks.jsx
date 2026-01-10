import { CgMenu } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { useContext } from "react";
import HeaderData, { HeaderStore } from "../Store";
import Profile from "./Profile/Profile";
import Cart from "./Cart/Cart";

export default function NavLinks() {
  const { menuToggle, handleMenuToggle } = useContext(HeaderStore);

  return (
    <div className="flex items-center relative">
      {/* Login / Signup */}
      <Profile></Profile>

      {/* Shopping Bag */}
      <Cart></Cart>

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
