export function filterData(searchText, filteredRestaurants) {
  const filterData = filteredRestaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}
