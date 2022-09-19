"use strict";

import { handleLocation } from "./router";

export const getCountryData = async (url) => {
  try {
    if (!sessionStorage.getItem("Store")) {
      const response = await fetch(url);
      const data = await response.json();
      createStore(data);
      handleLocation();
    } else handleLocation();
  } catch (error) {
    console.error(error);
  }
};

export const createStore = (data) => {
  let store = {};

  for (const country of data) {
    store[country.cca3] = {
      borders: country.borders,
      capital: country.capital,
      cca3: country.cca3,
      currencies: Object.values(country.currencies).map((curr) => curr.name),
      flags: country.flags.svg,
      languages: Object.values(country.languages).toString().replaceAll(",", ", "),
      name: country.name.common,
      nativeName: Object.values(country.name.nativeName)[0],
      population: country.population.toLocaleString(),
      region: country.region,
      subregion: country.subregion,
      tld: country.tld.toString().replaceAll(",", ", "),
    };
  }
  sessionStorage.setItem("Store", JSON.stringify(store));
};
