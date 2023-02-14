import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestaurant = (resId) => {
  const [restaruent, setRestaruent] = useState(null);

  useEffect(() => {
    getRestaurantsInfo();
  }, []);

  async function getRestaurantsInfo() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    setRestaruent(json.data);
  }
  return restaruent;
};

export default useRestaurant;
