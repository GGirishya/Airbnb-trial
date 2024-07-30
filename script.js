function filterByCity(targetCity, listingCityArray) {
  const indices = [];
  for (let i = 0; i < listingCityArray.length; i++) {
    if (listingCityArray[i].toLowerCase() === targetCity.toLowerCase()) {
      indices.push(i);
    }
  }
  return indices;
}

function filterByPrice(minPrice, maxPrice, listingPriceArray) {
  // Note: Comment out the following line when you start working on this function!
  const indicies =[];

  
  // return [...listingPriceArray.keys()]
}

// LevelUp!
function filterByTypes(targetTypes, listingTypeArray) {
  // Note: Comment out the following line when you attempt the LevelUp!
  return [...listingTypeArray.keys()]
}