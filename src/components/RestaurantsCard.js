/* import { Link } from "react-router-dom"; */
import { IMG_CON_URL } from "../config";

const RestaurantsCard = ({
  id,
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  costForTwoString,
  locality,
  lastMileTravelString,
  veg,
  deliveryTime,
  favorite,
  aggregatedDiscountInfo,
  avgRatingString,
}) => {
  return (
    <div className="card w-[220px] h-auto p-3 m-2 mt-5 border-white hover:border-gray-400  hover:shadow-md hover:bg-[#ffffff] ">
      <img src={IMG_CON_URL + cloudinaryImageId} />
      <h2 className="text-md font-semibold mt-1 mb-1">{name}</h2>
      <div className="h-max mt-1 mb-2">
        <p
          className="text-[13px] font-light mt-1 mb-1"
          title={cuisines.join(", ")}
        >
          {cuisines.join(", ")}
        </p>
      </div>
      <hr />
      <div className="flex justify-between mb-2 mt-2">
        {avgRating >= 4 ? (
          <div className="flex bg-green-600 text-white text-sm w-8 ">
            <span>
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
            </span>

            <span className="text-xs font-light"> {" " + avgRating}</span>
          </div>
        ) : (
          <div className="flex bg-amber-600 text-white text-sm w-8 ">
            <span>
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
            </span>

            <span className="text-xs font-light"> {" " + avgRating}</span>
          </div>
        )}
        <div className="text-xs font-light">
          <span>
            <b>|</b>
          </span>
        </div>
        <div className="text-xs font-light">
          <p>
            <span className="mt-1">
              <small>{lastMileTravelString}</small>
            </span>{" "}
          </p>
        </div>
        <div className="text-xs font-light">
          <span>
            <b>|</b>
          </span>
        </div>
        <div className="text-xs font-light ">
          <span className="mt-1">
            <small>
              <b>{costForTwoString}</b>
            </small>
          </span>
        </div>
      </div>
      <hr />
      <div className="flex justify-center mb-2 mt-2">
        <div className="flex text-orange-900 text-sm ">
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path
              fillRule="evenodd"
              d="M4.93 1.31a41.401 41.401 0 0110.14 0C16.194 1.45 17 2.414 17 3.517V18.25a.75.75 0 01-1.075.676l-2.8-1.344-2.8 1.344a.75.75 0 01-.65 0l-2.8-1.344-2.8 1.344A.75.75 0 013 18.25V3.517c0-1.103.806-2.068 1.93-2.207zm8.85 5.97a.75.75 0 00-1.06-1.06l-6.5 6.5a.75.75 0 101.06 1.06l6.5-6.5zM9 8a1 1 0 11-2 0 1 1 0 012 0zm3 5a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="text-xs font-semibold text-orange-900">
          <p>
            <small>{aggregatedDiscountInfo.descriptionList[0].meta}</small>
          </p>
        </div>
        <div></div>
      </div>
      {/*  <Link to={"/restaurant/" + id}>Show All Menu</Link> */}
      {/*  <button className="addTo-cartBtn">Add To Cart</button> */}
    </div>
  );
};

export default RestaurantsCard;
