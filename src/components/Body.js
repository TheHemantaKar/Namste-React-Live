import React, { useContext } from "react";
/* import { restaurantsList } from "../config"; */
import RestaurantsCard from "./RestaurantsCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import Carousel from "./Carousel";

const Body = () => {
  const [allRestaurants, setAllRestarurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [carouselItem, setCarouselItem] = useState([]);
  const { user, setUser } = useContext(UserContext);
  //console.log(carouselItem);
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //console.log(json?.data?.cards[2]?.data?.data?.cards);
    // optional chening using "?"

    setAllRestarurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setCarouselItem(json?.data?.cards[0]?.data?.data?.cards);
  }

  const online = useOnline();
  if (!online) {
    return <h1>Please check your internet Connection</h1>;
  }

  //Early return or not return component_____________________________
  if (!allRestaurants) return null;

  //If we didn't get any card after found
  /*  if(filteredRestaurants?.length === 0) return <h1>No resturent Found</h1> */
  //Conditional rendering_______________
  //If restarunt is empty => Shimmer UI
  //If resturent has data => Actual deta UI

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex bg-[#171a29]  h-auto">
        <Carousel carouselItem={carouselItem} />
      </div>

      <div className="search-cointainer bg-gray-100 p-5 text-center">
        <input
          type="text"
          className="search-input outline-none p-1 px-2  w-3/6"
          placeholder="Looking for great food near you ..."
          value={searchText}
          onChange={(e) => {
            const data = filterData(searchText, allRestaurants);
            setSearchText(e.target.value);
            setFilteredRestaurants(data);
          }}
        />
        {/* <button
          className="search-btn p-1 px-3 bg-[#171a29] hover:bg-black text-white "
          onClick={() => {
            //filter data
            const data = filterData(searchText, allRestaurants);
            // update the data
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button> */}
        {/* 
        // context API
        <input
          value={user.name}
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }}
        />
        <input
          value={user.email}
          onChange={(e) => {
            setUser({
              ...user,
              email: e.target.value,
            });
          }} 
        />*/}
      </div>
      <div className="flex flex-wrap justify-center bg-[#fbfbfb]">
        {/*   {console.log(restaurants)} */}
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantsCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
