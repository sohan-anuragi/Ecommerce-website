import { createContext, useReducer } from "react";
import { CartProductList } from "./CartProductList";

export const CartContext = createContext();

const CartListReducer = (currCartList, action) => {
  if (action.type === "DELETE-ITEM") {
    // Delete item by id
    return currCartList.filter((items) => items.id !== action.payload);
  } else if (action.type === "INCREASE") {
    // Increase quantity safely
    return currCartList.map((items) =>
      items.id === action.payload
        ? {
            ...items,
            quantity: items.quantity + 1,
            totalPrice: items.price * (items.quantity + 1),
          }
        : items
    );
  } else if (action.type === "DECREASE") {
    // Decrease quantity, never below 1
    return currCartList.map((items) =>
      items.id === action.payload && items.quantity > 1
        ? {
            ...items,
            quantity: items.quantity - 1,
            totalPrice: items.price * (items.quantity - 1),
          }
        : items
    );
  }

  // Default: return current list
  return currCartList;
};

export default function CartListProvider({ children }) {
  const [cartList, dispatchCartList] = useReducer(CartListReducer, [
    ...CartProductList,
  ]);

  const handleDelete = (id) => {
    console.log("sohan");
    dispatchCartList({
      type: "DELETE-ITEM",
      payload: id,
    });
  };

  const increaseQua = (id) => {
    dispatchCartList({
      type: "INCREASE",
      payload: id,
    });
  };

  const decreaseQua = (id) => {
    dispatchCartList({
      type: "DECREASE",
      payload: id,
    });
  };

  return (
    <CartContext.Provider
      value={{ cartList, increaseQua, decreaseQua, handleDelete }}
    >
      {children}
    </CartContext.Provider>
  );
}
