const signature = `
 _    ____      _____                ____           _        __       _   _ 
| |  / ___|    |  ___|__  _ __      / ___|_ __ __ _| |_ ___ / _|_   _| | | |
| | | |  _     | |_ / _ \\| '__|    | |  _| '__/ _\` | __/ _ \\ |_| | | | | | |
|_| | |_| |    |  _| (_) | |       | |_| | | | (_| | ||  __/  _| |_| | | |_|
(_)  \\____|    |_|  \\___/|_|        \\____|_|  \\__,_|\\__\\___|_|  \\__,_|_| (_)
                                    ♥
`;

console.log(signature);

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
  const indices =[];  
  // return [...listingPriceArray.keys()]
  for (let i = 0; i < listingPriceArray.length; i++) {
    if (listingPriceArray[i] >= minPrice && listingPriceArray[i] <= maxPrice) {
      indices.push(i);
    }
  }
  return indices;
}

// LevelUp!
function filterByTypes(targetTypes, listingTypeArray) {
  // Note: Comment out the following line when you attempt the LevelUp!
  // return [...listingTypeArray.keys()]
  const indices=[];
  for (let i=0; i<listingTypeArray.length; i++){
    for (let j=0; j<targetTypes.length; j++){
      if (listingTypeArray[i]=== targetTypes[j]){
        indices.push(i);
      }
    }
  }
  return indices;
}
