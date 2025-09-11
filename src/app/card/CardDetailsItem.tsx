import React from "react";
import { CartItemsType } from "./types";

type CardItem = {
  content?: string;
  discount?: string;
  shippingFee?: string;
};

interface CardDetailsItemProps {
  cartItems: CartItemsType;
  item: CardItem;
}

const CardDetailsItem = ({ cartItems, item }: CardDetailsItemProps) => {
  // Calculate subtotal from cart items
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Determine what to display based on the item type
  const getLabel = () => {
    if (item.content) return "Subtotal";
    if (item.discount) return "Discount";
    if (item.shippingFee) return "Shipping Fee";
    return "";
  };

  const getValue = () => {
    if (item.content) return `$${subtotal.toFixed(2)}`;
    if (item.discount) return item.discount;
    if (item.shippingFee) return item.shippingFee;
    return "";
  };
  return (
    <div className="flex justify-between text-sm py-1">
      <p className="text-gray-500">{getLabel()}</p>
      <p
        className={`${
          getLabel() === "Discount" ? "text-red-500" : ""
        } font-medium`}
      > 
        {getValue()}
      </p>
    </div>
  );
};

export default CardDetailsItem;
