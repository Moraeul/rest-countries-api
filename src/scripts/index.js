import { toggleDarkMode, prefersDarkMode } from "./_dark-mode.js";

const darkModeButton = document.getElementById("darkModeButton");

prefersDarkMode();
darkModeButton.addEventListener("click", toggleDarkMode);
