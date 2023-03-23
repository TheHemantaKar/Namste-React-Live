import { IMG_CON_URL, MENU_IMG_URL } from "../config";
import { useDispatch } from "react-redux";
import {
  addItem,
  incrementItemQuantity,
  decrementItemQuantity,
  clearCart,
  removeItem,
  totalPrice,
} from "../utils/cartSlice";

const CartItemCard = ({
  id,
  cloudinaryImageId,
  name,
  category,
  avgRating,
  price,
  quantity = 0,
}) => {
  const dishpatch = useDispatch();

  return (
    <div className="flex flex-row justify-center p-2 m-2 rounded-sm ">
      <div className="flex max-w-6xl mx-auto items-center space-x-10">
        <div>
          {cloudinaryImageId === "" ? (
            <img
              src={IMG_CON_URL + cloudinaryImageId}
              className="h-24 w-36 rounded-md shadow-lg"
            />
          ) : (
            <img
              src={MENU_IMG_URL + cloudinaryImageId}
              className="h-24 w-36 rounded-md shadow-lg"
            />
          )}
        </div>
        <div className="flex flex-col w-40">
          <h2 className="font-bold text-md ">{name}</h2>
          <h4>{category}</h4>

          {price === 0 ? (
            <div>
              <h5 className="font-bold text-red-500 p-22">out of stock</h5>
            </div>
          ) : (
            <div>
              <h5>Rs. {(price * quantity) / 100}</h5>
            </div>
          )}
        </div>
        <div>
          {price === 0 ? (
            <div className="flex justify-end w-[115px]">
              <button
                className="bg-red-400 text-white p-2"
                onClick={() => dishpatch(removeItem(id))}
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <div className="flex">
              <div className="flex">
                <div>
                  <button
                    className="text-green-500 font-bold border p-2 "
                    onClick={() => dishpatch(incrementItemQuantity(id))}
                  >
                    +
                  </button>
                </div>
                <div>
                  <p className="bg-blue-400 text-white p-2 border">
                    {quantity}
                  </p>
                </div>
                <div>
                  <button
                    className=" text-red-500 font-bold border p-2 "
                    onClick={() => dishpatch(decrementItemQuantity(id))}
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="flex">
                <button
                  className="bg-red-400 text-white p-2 ml-1"
                  onClick={() => dishpatch(removeItem(id))}
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
