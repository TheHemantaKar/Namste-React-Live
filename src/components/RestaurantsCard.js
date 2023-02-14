/* import { Link } from "react-router-dom"; */
import { IMG_CON_URL } from "../config";

const RestaurantsCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  costForTwoString,
  id,
}) => {
  return (
    <div className="card w-[200px] h-[300px] p-2 m-2 shadow-md bg-pink-50 hover:shadow-lg rounded-sm">
      {<img src={IMG_CON_URL + cloudinaryImageId} />}
      <h2 className="font-bold text-md ">{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h6>{avgRating} Stars</h6>
      <h5>{costForTwoString}</h5>
      {/*  <Link to={"/restaurant/" + id}>Show All Menu</Link> */}
      {/*  <button className="addTo-cartBtn">Add To Cart</button> */}
    </div>
  );
};

export default RestaurantsCard;
