export function filterData(searchText, filteredRestaurants) {
  const filterData = filteredRestaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}

/* export function filterDish(searchDish, filteredDish) {
  const filterDish = filteredDish.filter((restaruent) =>
    restaruent?.menu?.items?.toLowerCase()?.includes(searchDish.toLowerCase())
  );
  return filterDish;
}
 */
