export const getAllCountries = (setState) => {
  fetch('https://restcountries.eu/rest/v2/all')
    .then((response) => response.json())
    .then(setState)
    .catch(alert);
};

export const nenhuma = () => {};
