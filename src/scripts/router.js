"use strict";

import { renderDetailsPage, renderMainPage } from "./_render";

export const route = (event, target) => {
  event.preventDefault();
  if (window.location.pathname === target.getAttribute("href")) return;

  window.history.pushState({}, "", target.getAttribute("href"));
  handleLocation();
};

export const handleLocation = () => {
  if (window.location.pathname === "/src/index.html") renderMainPage();
  if (window.location.pathname.includes("/country/")) {
    const country = window.location.pathname.split("/").at(-1);
    renderDetailsPage(country);
  }
};
