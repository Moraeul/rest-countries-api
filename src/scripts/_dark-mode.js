export const toggleDarkMode = () => {
  document.body.classList.contains("dark-mode")
    ? localStorage.setItem("dark-mode", false)
    : localStorage.setItem("dark-mode", true);

  document.body.classList.toggle("dark-mode");
};

export const prefersDarkMode = () => {
  localStorage.getItem("dark-mode") === "true"
    ? document.body.classList.add("dark-mode")
    : document.body.classList.remove("dark-mode");
};
