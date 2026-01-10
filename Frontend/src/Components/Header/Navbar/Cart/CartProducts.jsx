import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartStore";
import { CartProductList } from "./CartProductList";

export default function CartProducts() {
  const { cartList, increaseQua, decreaseQua, handleDelete } =
    useContext(CartContext);

  const grandTotal = cartList.reduce((accumulator, currValue) => {
    return accumulator + currValue.totalPrice;
  }, 0);

  return (
    <div>
      <p
        className={` ${
          cartList.length === 0 ? "block" : "hidden"
        } font-sans text-[0.7rem] !mt-[1rem] text-center text-[#ff9d00] p-[0.5rem] border-[1px] border-[#ff9d00]`}
      >
        ! "0" Your cart is empty. Add items to get started.
      </p>
      <div className="shadow-md mt-[1rem]">
        {cartList.map((product, index) => (
          <div
            className="flex flex-row  p-[0.5rem] border-[1px] border-[#00000013] rounded-sm "
            key={index}
          >
            <img src={product.img} alt={product.name} className="w-[30%]"></img>
            <div className="flex flex-col w-[70%] p-[0.8rem] ">
              <div className=" flex w-[] justify-between ">
                <p className="text-[0.8rem] ml-[1rem] font-sans">
                  {product.name}
                </p>
                <div
                  className=" flex-col justify-start text-[1.2rem] cursor-pointer "
                  onClick={() => handleDelete(product.id)}
                >
                  <RiDeleteBin6Line />
                </div>
              </div>
              <div className="flex justify-between ">
                <div className="flex justify-between align-center  p-[0.5rem] border-[1px] border-[#0000002f] w-[30%] rounded-sm h-[85%] ml-[1rem]">
                  <span
                    className="cursor-pointer"
                    onClick={() => decreaseQua(product.id)}
                  >
                    <MdOutlineArrowBackIos />
                  </span>
                  <span className=" mt-[-3px]  ">{product.quantity}</span>
                  <span
                    className="cursor-pointer"
                    onClick={() => increaseQua(product.id)}
                  >
                    <MdOutlineArrowForwardIos />
                  </span>
                </div>
                <p className=" font-semibold font-sans text-[black] select-none ">
                  Rs. {product.totalPrice} /-
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Next Part */}
      <div
        className={`mt-[1.5rem] p-[0.5rem] ${
          cartList.length === 0 ? "hidden" : "block"
        }  `}
      >
        {/* SubTotal */}
        <div className="flex justify-between">
          <span>
            <span className="font-semibold text-[1.1rem]  font-sans">
              SubTotal
            </span>
            <span className="text-[0.9rem] ml-[0.4rem] font-sans ">
              (without Shipping) :
            </span>
          </span>
          <p className=" font-semibold font-sans text-[black] mt-[0.3rem] ">
            Rs. {grandTotal}/-
          </p>
        </div>
        {/* Delivery Method */}
        <div>
          <span className="flex  mt-[1rem] mb-[0.5rem] font-sans ">
            <span>
              <FaTruck />
            </span>{" "}
            <span className="mt-[-0.2rem] ml-[0.3rem] text-[0.8rem]">
              Delivery Method
            </span>
          </span>
          <form>
            <input
              type="text"
              placeholder="Enter Pincode"
              className="w-[70%] outline-none p-[0.5rem] border-[1px] border-[#00000090] rounded-[2px] !mt-[0.5rem]"
            ></input>
            <button className="bg-[#f6ad0f] text-white p-[0.5rem] rounded-[2px] text-[0.8rem] !ml-[0.2rem] !mb-[0.4rem] !rounded-sm w-[25%] border-[1px] border-[#f6ad0f] font-semibold font-sans text-[0.9rem] ">
              CHECK
            </button>
          </form>

          {/* I dont Know my ZIP */}
          <a className="text-[0.7rem] mt-[0.5rem]  " href="#">
            I don’t know my ZIP
          </a>
        </div>
        {/* Final Total */}
        <div className="mt-[2rem]">
          <div className="flex justify-between">
            <span>
              <span className="font-bold text-[1.3rem] ">Total : </span>
            </span>
            <p className=" font-bold text-[1.3rem] font-sans text-[black] mt-[0.3rem] ">
              Rs. {grandTotal}/-
            </p>
          </div>
          <button className="bg-[#f6a10f] text-white p-[0.7rem] !rounded-[1px] text-[0.9rem] font-semibold font-sans !rounded-sm w-[100%] !mt-[1rem] ">
            BUY NOW
          </button>
          <div className="flex justify-center">
            <a
              className=" text-[0.9rem] !mt-[1rem] !text-[#000000ee]  "
              href="/"
            >
              View more products
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
