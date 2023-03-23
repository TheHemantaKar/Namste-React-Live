import { useDispatch } from "react-redux";
import vegIcon from "../assets/img/veg-Icon.png";
import nonVegIcon from "../assets/img/non_veg-Icon.png";
import {
  addItem,
  incrementItemQuantity,
  decrementItemQuantity,
  clearCart,
  removeItem,
} from "../utils/cartSlice";

const AddToCartItem = ({
  id,
  cloudinaryImageId,
  name,
  category,
  avgRating,
  price,
  quantity = 0,
  isVeg,
}) => {
  const dishpatch = useDispatch();

  return (
    <div className="flex my-2">
      {isVeg === 1 ? (
        <div className="flex flex-row">
          <div className="mt-[5px] mr-1">
            <img src={vegIcon} className="h-3 w-3" />
          </div>
          <div className="text-sm w-40">
            <p className="whitespace-normal">
              <small>{name}</small>
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-row">
          <div className="mt-[5px] mr-1">
            <img src={nonVegIcon} className="h-3 w-3" />
          </div>
          <div className="text-sm w-40">
            <p className="whitespace-normal">
              <small>{name}</small>
            </p>
          </div>
        </div>
      )}

      {price === 0 ? (
        <div className="flex flex-row align-middle mt-[-6px]">
          <div
            className="text-sm bg-red-400 text-white cursor-pointer w-4 h-[22px] mt-2 m-auto pl-[2px] pt-[5px] "
            onClick={() => dishpatch(removeItem(id))}
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
              <path
                fillRule="evenodd"
                d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      ) : (
        <div className="flex flex-row justify-center mt-[-6px]">
          <div className="flex items-stretch h-[22px] w-16 mt-2  ">
            <div
              className="text-sm text-green-500  border cursor-pointer text-center w-5 top-[-2px] self-auto"
              onClick={() => dishpatch(incrementItemQuantity(id))}
            >
              <strong>+</strong>
            </div>
            <div className="text-sm bg-blue-400 text-white text-center w-5 top-[-2px] self-auto">
              <small>{quantity}</small>
            </div>

            <div
              className="text-sm text-red-500  border cursor-pointer text-center w-5 top-[-2px] self-auto"
              onClick={() => dishpatch(decrementItemQuantity(id))}
            >
              <strong>-</strong>
            </div>
          </div>
          <div className="flex flex-row  ">
            <div
              className="text-sm bg-red-400 text-white cursor-pointer w-4 h-[22px] mt-2 m-auto pl-[2px] pt-[5px] "
              onClick={() => dishpatch(removeItem(id))}
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                <path
                  fillRule="evenodd"
                  d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-row">
        {price === 0 ? (
          <div className="text-xs text-red-500 p-22 ">
            <small>Not Available</small>
          </div>
        ) : (
          <div className="text-sm mt-[4px] ml-[5px]">
            <strong>
              <small>₹ {(price * quantity) / 100}</small>
            </strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddToCartItem;
