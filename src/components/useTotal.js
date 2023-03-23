// src/components/Total.js
import { useState } from "react";

const useTotal = (getTotal) => {
  const [totalPrice, setTotalPrice] = useState(null);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cartItem.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += (item.price * item.quantity) / 100;
      setTotalPrice({ totalPrice, totalQuantity });
    });
    return totalPrice;
  };
};

export default useTotal;
