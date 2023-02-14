import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CON_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaruent = useRestaurant(resId);

  return !restaruent ? (
    <Shimmer />
  ) : (
    <div className="ResInfo_menu flex m-5">
      <div className="bg-pink-50 p-5 rounded-md">
        <h1>Restarunt id: {resId}</h1>
        <h2 className="text-lg font-bold">{restaruent?.name}</h2>
        <img src={IMG_CON_URL + restaruent?.cloudinaryImageId} />
        <h3>Area: {restaruent?.area}</h3>
        <h3>City: {restaruent?.city}</h3>
        <h3>Rating: {restaruent?.avgRating}</h3>
        <h3>Price: {restaruent?.costForTwoMsg}</h3>
      </div>
      <div className="ml-10 bg-pink-50 p-5 rounded-md">
        <h1 className="text-lg font-bold  ">Menu</h1>
        <ul>
          {Object.values(restaruent?.menu?.items).map((item) => (
            <li key={item.id}>{item?.name}</li>
          ))}
        </ul>

        {/*  {console.log(Object.values(restaruentInfo.menu?.items))} */}
      </div>
    </div>
  );
};

export default RestaurantMenu;
