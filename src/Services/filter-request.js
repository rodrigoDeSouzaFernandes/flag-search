export const requestCapital = (capital, setState) => {
  fetch(`https://restcountries.eu/rest/v2/capital/${capital}`)
    .then((response) => response.json())
    .then(setState);
};

export const requestRegion = (region, setState) => {
  fetch(`https://restcountries.eu/rest/v2/region/${region}`)
    .then((response) => response.json())
    .then(setState);
};
