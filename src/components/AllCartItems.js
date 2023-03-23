import { useDispatch, useSelector } from "react-redux";
import AddToCartItem from "./AddToCartItem";
import {
  addItem,
  incrementItemQuantity,
  decrementItemQuantity,
  clearCart,
  removeItem,
} from "../utils/cartSlice";

const AllCartItems = ({ id, quantity = 0 }) => {
  const cartItems = useSelector((store) => store.cart.items);
  const dishpatch = useDispatch();

  return (
    <div className="">
      <div className="flex flex-row justify-between ">
        <div className="text-lg font-bold">Cart Items {quantity.length}</div>
        <div>
          <button
            className="bg-red-400 text-white px-2"
            onClick={() => dishpatch(clearCart(id))}
          >
            <small>Clear Items</small>
          </button>
        </div>
      </div>
      <hr />
      <div className="flex flex-col overflow-y-auto flex-grow h-40">
        {cartItems.map((item) => (
          <AddToCartItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default AllCartItems;
