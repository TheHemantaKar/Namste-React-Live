import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { IMG_CON_URL, MENU_IMG_URL, EMPTY_CART_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import vegIcon from "../assets/img/veg-Icon.png";
import nonVegIcon from "../assets/img/non_veg-Icon.png";
import AllCartItems from "./AllCartItems";
import { Link } from "react-router-dom";
/* import { filterDish } from "../utils/helper"; */

const RestaurantMenu = ({
  id,
  cloudinaryImageId,
  name,
  category,
  avgRating,
  price,
  quantity = 0,
  isVeg,
}) => {
  const { resId } = useParams();
  const restaruent = useRestaurant(resId);
  /* onst [allDish, setAllDish] = useState([]);
  const [filteredDish, setFilteredDish] = useState([]);
  */
  const [searchDish, setSearchDish] = useState("");
  const [widgetsItems, setWidgetsItems] = useState();
  /*  {
    console.log(allDish);
  }

  setAllDish(restaruent);
 */

  const handelWidgetsItems = (item) => {
    setWidgetsItems(item);
  };

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //despatch(action)
    dispatch(addItem(item));
  };

  const cartItem = useSelector((store) => store.cart.items);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cartItem.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += (item.price * item.quantity) / 100;
    });
    return { totalPrice, totalQuantity };
  };

  /*   const getCartTotal = (cartItem) => {
    return cartItem.reduce((acc, price) => {
      acc += price.count;
      return acc;
    });
  }; */

  return !restaruent ? (
    <Shimmer />
  ) : (
    <div className="ResInfo_menu ">
      {/* console.log(
        { ...restaruent?.menu?.items.filter(index.id)} ===
          { ...widgetsItems?.entities?.values }
      )} */}

      {/*  {console.log({ ...widgetsItems })} */}
      {/* {console.log({ ...restaruent.menu.items })} */}
      {/* sticky top-[72px] */}
      <div className="flex flex-row justify-center content-center bg-[#171a29] text-white h-52 sticky top-[72px]">
        <div className="flex max-w-6xl mx-auto items-center py-8 px-8 space-x-10">
          <div className="w-56 h-max">
            <img src={IMG_CON_URL + restaruent?.cloudinaryImageId} />
          </div>
          <div className="h-auto ">
            <div className="m-2 ">
              <h2 className="text-lg font-bold">{restaruent?.name}</h2>
              <p className="text-xs font-light">
                <small>
                  {restaruent?.area}, {restaruent?.city}
                </small>
              </p>
              <p className="text-xs font-light">
                <small>
                  {restaruent?.cuisines[0]}, {restaruent?.cuisines[1]}
                </small>
              </p>
            </div>
            <div className="flex flex-row justify-between mb-2 mt-2 w-52 text-center">
              <div className="m-auto p-2">
                {restaruent?.avgRating >= 4 ? (
                  <div className="flex bg-green-600 text-white text-sm w-8 h-4">
                    <div>
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-[14px] h-[14px]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    <div className="text-xs font-light">
                      {" "}
                      {" " + restaruent?.avgRating}
                    </div>
                  </div>
                ) : (
                  <div className="flex bg-amber-600 text-white text-sm w-8 h-4">
                    <div>
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-[14px] h-[14px]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    <div className="text-xs font-light">
                      {" " + restaruent?.avgRating}
                    </div>
                  </div>
                )}
              </div>
              <div className="text-xs font-light m-auto p-2">
                <div>
                  <b>|</b>
                </div>
              </div>
              <div className="text-xs font-light m-auto p-2 leading-[0.5rem]">
                <div className="mt-1">
                  <small>
                    {restaruent?.sla?.maxDeliveryTime} Min Delivery Time
                  </small>
                </div>
              </div>
              <div className="text-xs font-light m-auto p-2">
                <div>
                  <b>|</b>
                </div>
              </div>
              <div className="text-xs font-light m-auto p-2 leading-[0.5rem]">
                <div className="mt-1">
                  <small>
                    <b> {restaruent?.costForTwoMsg}</b>
                  </small>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex flex-row justify-between h-auto mb-2 mt-2 ">
                <div className="flex m-auto p-2">
                  <input
                    type="text"
                    className="search-input outline-none p-1 px-2 "
                    placeholder="Search for dishes..."
                    value={searchDish}
                    onChange={(e) => {
                      const filterData = filterDish(searchDish, allDish);
                      setSearchDish(e.target.value);
                      setFilteredDish(filterData);
                    }}
                  />
                </div>

                <div className="flex m-auto p-2 bg-white">
                  <div className="flex text-xs  text-black font-semibold">
                    <input
                      type="checkbox"
                      className="w-4 h-4 search-input p-1 px-2 mr-[2px]"

                      /* value={searchText}  */
                      /* onChange={(e) => {
                    setSearchText(e.target.value);
                  }} */
                    />
                    <label> Pure Veg</label>
                  </div>
                </div>

                <div className="flex m-auto p-2 ml-2 bg-white">
                  <div className="flex text-xs  text-black font-semibold">
                    <div>
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 mr-[2px]"
                      >
                        <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
                      </svg>
                    </div>
                    <div for="vehicle1"> Favourite</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="m-2 p-2 border border-white">
              <h2 className="text-lg font-bold mt-[-24px] ml-[-23px] absolute bg-[#171a29] px-2 -z-0 w-max text-white">
                OFFER
              </h2>
              <div className="">
                <div className="flex justify-start mb-2 mt-2">
                  <div className=" text-white text-md ">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 mt-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.93 1.31a41.401 41.401 0 0110.14 0C16.194 1.45 17 2.414 17 3.517V18.25a.75.75 0 01-1.075.676l-2.8-1.344-2.8 1.344a.75.75 0 01-.65 0l-2.8-1.344-2.8 1.344A.75.75 0 013 18.25V3.517c0-1.103.806-2.068 1.93-2.207zm8.85 5.97a.75.75 0 00-1.06-1.06l-6.5 6.5a.75.75 0 101.06 1.06l6.5-6.5zM9 8a1 1 0 11-2 0 1 1 0 012 0zm3 5a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="text-md font-semibold text-white">
                    <p>
                      <small>
                        {
                          restaruent?.aggregatedDiscountInfo?.descriptionList[0]
                            .meta
                        }
                      </small>
                    </p>
                  </div>
                  <div></div>
                </div>
                <div className="flex justify-start mb-2 mt-2">
                  <div className=" text-white text-md">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 mt-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.93 1.31a41.401 41.401 0 0110.14 0C16.194 1.45 17 2.414 17 3.517V18.25a.75.75 0 01-1.075.676l-2.8-1.344-2.8 1.344a.75.75 0 01-.65 0l-2.8-1.344-2.8 1.344A.75.75 0 013 18.25V3.517c0-1.103.806-2.068 1.93-2.207zm8.85 5.97a.75.75 0 00-1.06-1.06l-6.5 6.5a.75.75 0 101.06 1.06l6.5-6.5zM9 8a1 1 0 11-2 0 1 1 0 012 0zm3 5a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="text-md font-semibold text-white">
                    <p>
                      <small>
                        {
                          restaruent?.aggregatedDiscountInfo?.descriptionList[1]
                            .meta
                        }
                      </small>
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <h1>Restarunt id: {resId}</h1> */}

        {/*  <h3>Area: {restaruent?.area}</h3>
        <h3>City: {restaruent?.city}</h3>
        <h3>Rating: {restaruent?.avgRating}</h3>
        <h3>Price: {restaruent?.costForTwoMsg}</h3> */}
      </div>
      <div className="flex flex-row justify-center  bg-[#fbfbfb]">
        <div className="flex px-8 space-x-10">
          <div className="border-r-2">
            <ul className="sticky pt-[10px] top-[282px]">
              {/* {console.log(restaruent?.menu?.widgets?.entities)} */}
              {Object.values(restaruent?.menu?.widgets).map((item) => (
                <li key={item?.entities?.index} id={item?.entities?.index}>
                  <div className=" my-1 ">
                    {/*  {console.log(item)} */}
                    <p className="text-right pr-2 mr-[0px] cursor-pointer hover:pr-2 hover:text-orange-600 hover:border-r-2 hover:border-x-orange-600 hover:mr-[-2px] ">
                      <small onClick={() => handelWidgetsItems(item)}>
                        {item?.name}
                      </small>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="px-[30px]">
              {Object.values(restaruent?.menu?.items).map((item) => (
                <li
                  key={item.id}
                  id={item.id}
                  className="px-[10px] border-b-2 border-[#e3e3e3]"
                >
                  <div className="flex flex-row justify-between my-5">
                    <div>
                      <div>
                        {item?.isVeg === 1 ? (
                          <div>
                            <img src={vegIcon} className="h-4 w-4" />
                          </div>
                        ) : (
                          <div>
                            <img src={nonVegIcon} className="h-4 w-4" />
                          </div>
                        )}
                      </div>
                      {/*  {console.log(item.name)} */}
                      <div>
                        <div className="w-56">
                          <p className="whitespace-normal text-sm font-light">
                            {item?.name}
                          </p>
                          <p className="whitespace-normal text-xs font-light">
                            <small>{item?.category}</small>
                          </p>
                        </div>
                      </div>
                      <div>
                        <p>
                          <strong>
                            <small>₹{item?.price / 100}</small>
                          </strong>
                        </p>
                      </div>
                    </div>
                    <div className="text-center ">
                      <div className="w-30">
                        {/* {console.log(item.id)} */}
                        {item?.cloudinaryImageId === "" ? (
                          <img
                            src={IMG_CON_URL + restaruent?.cloudinaryImageId}
                            className="h-24 w-36 rounded-md shadow-lg"
                          />
                        ) : (
                          <img
                            src={MENU_IMG_URL + item?.cloudinaryImageId}
                            className="h-24 w-36 rounded-md shadow-lg"
                          />
                        )}
                      </div>
                      <div className="mt-[-12px]">
                        <button
                          className="px-10 py-[5px] bg-white border-2 border-gray-200 text-green-700 font-bold text-xs shadow-sm"
                          onClick={() => handleAddItem(item)}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="sticky pt-[10px] top-[282px] w-80">
              {cartItem.length === 0 ? (
                <div>
                  <div className="text-2xl my-2 text-gray-500">
                    <strong>Cart Empty</strong>
                  </div>
                  <div>
                    <img
                      src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2"
                      className="h-56 w-auto rounded-md"
                    />
                  </div>
                  <div className="text-sm my-2 text-gray-500">
                    Good food is always cooking! Go ahead, order some yummy
                    items from the menu.
                  </div>
                </div>
              ) : (
                <div>
                  <AllCartItems />
                  <hr />
                  <div>
                    <div className="flex flex-row justify-between">
                      <p>
                        <small>
                          Sub Total({getTotal().totalQuantity} items)-
                        </small>
                      </p>
                      <p className="text-right">
                        <strong>
                          <small>₹{getTotal().totalPrice}</small>
                        </strong>
                      </p>
                    </div>
                    <div className="flex mt-10">
                      <Link to="/cart" className="w-full">
                        <button className="w-full bg-green-700 text-white py-[5px] px-[10px]">
                          Check Out
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/*  {console.log(Object.values(restaruentInfo.menu?.items))} */}
      </div>
    </div>
  );
};

export default RestaurantMenu;
