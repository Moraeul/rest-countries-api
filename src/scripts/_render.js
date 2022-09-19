"use strict";

const root = document.getElementById("root");

export const renderMainPage = () => {
  const store = JSON.parse(sessionStorage.getItem("Store"));

  root.innerHTML = "";
  const ul = document.createElement("ul");
  root.appendChild(ul);
  generateFormMarkup();

  for (const country of Object.keys(store)) {
    generateCountryCardMarkup(store[country], ul);
  }
};

export const renderDetailsPage = (country) => {
  root.innerHTML = "";
  const div = document.createElement("div");
  root.appendChild(div);

  generateDetailsMarkup(country, div);
};

const generateCountryCardMarkup = (country, container) => {
  const countryHTML = `
    <li>
      <a href="/src/index.html/country/${country.cca3}" class="country">
        <img class="country-flag" src="${country.flags}"></img>
        <div class="country-info">
          <h3 class="country-name">${country.name}</h3>
          <p class="country-population"><b>Population: </b>${country.population}</p>
          <p class="country-region"><b>Region: </b>${country.region}</p>
          <p class="country-capital"><b>Capital: </b>${country.capital}</p>
        </div>
      </a>
    </li>
  `;
  container.insertAdjacentHTML("beforeend", countryHTML);
};

const generateDetailsMarkup = (country, container) => {
  const store = JSON.parse(sessionStorage.getItem("Store"));

  const detailsHTML = `
  <div class="details">
    <a href="/src/index.html" class="back-btn input-field"><i class="fa-solid fa-arrow-left-long"></i> Back</a>

    <div class="details-container">
      <img src="${store[country].flags}"></img>

      <div class="details-info-container">
        <h2 class="details-info-country-name">${store[country].name}</h2>
        <div class="details-info">
          <p><b>Native Name: </b>${store[country].nativeName?.common || store[country].name}</p>
          <p><b>Population: </b>${store[country].population}</p>
          <p><b>Region: </b>${store[country].region}</p>
          <p><b>Sub Region: </b>${store[country].subregion}</p>
          <p><b>Capital: </b>${store[country].capital}</p>
          <p><b>Top Level Domain: </b>${store[country].tld}</p>
          <p><b>Currencies: </b>${store[country].currencies}</p>
          <p><b>Languages: </b>${store[country].languages}</p>
        </div>
      </div>
    </div>

    <div class="border-countries">
      <h4>Border Countries:</h4>
      <div class="border-countries-links">
        ${store[country].borders
          .map(
            (border) => `
          <a href="/src/index.html/country/${store[border].cca3}" class="border-country-link input-field">${store[border].name}</a>
        `
          )
          .join("")}
      </div>
    </div>
  </div>
  `;
  container.insertAdjacentHTML("afterbegin", detailsHTML);
};

const generateFormMarkup = () => {
  const formHTML = `
  <form class="search-form" id="searchForm">
    <label class="search-input-label input-field" for="searchInput">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        class="search-input"
        id="searchInput"
        placeholder="Search for a country..."
      />
    </label>

    <select name="dropdown" class="dropdown-menu input-field" id="dropdownMenu">
      <option value="" selected>Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  </form>
  `;
  root.insertAdjacentHTML("afterbegin", formHTML);
};
