import { IMG_CON_URL } from "../config";

const RestaurantsCard = ({ cloudinaryImageId, name, cuisines, avgRating, costForTwoString }) => {
    return (
      <div className="card">
        { <img
          src={
            IMG_CON_URL +
            cloudinaryImageId
          }
        />}
        <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h6>{avgRating} Stars</h6>
        <h5>{costForTwoString}</h5>
       {/*  <button className="addTo-cartBtn">Add To Cart</button> */}
      </div>
    );
  };

export default RestaurantsCard;