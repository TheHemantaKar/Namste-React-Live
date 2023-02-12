import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CON_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [restaruentInfo, setRestaruentInfo] = useState(null);

  useEffect(() => {
    getRestaurantsInfo();
  }, []);

  async function getRestaurantsInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9715987&lng=77.5945627&menuId=" +
        resId
    );

    const json = await data.json();
    console.log(json.data);
    setRestaruentInfo(json.data);
  }
  return !restaruentInfo ? (
    <Shimmer />
  ) : (
    <div className="ResInfo_menu">
      <div>
        <h1>Restarunt id: {resId}</h1>
        <h2>{restaruentInfo?.name}</h2>
        <img src={IMG_CON_URL + restaruentInfo?.cloudinaryImageId} />
        <h3>{restaruentInfo?.area}</h3>
        <h3>{restaruentInfo?.city}</h3>
        <h3>{restaruentInfo?.avgRating}</h3>
        <h3>{restaruentInfo?.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaruentInfo?.menu?.items).map((item) => (
            <li key={item.id}>{item?.name}</li>
          ))}
        </ul>

       {/*  {console.log(Object.values(restaruentInfo.menu?.items))} */}
      </div>
    </div>
  );
};

export default RestaurantMenu;
