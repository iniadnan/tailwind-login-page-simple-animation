// START THEME
if(localStorage.theme === "dark") {
    document.documentElement.classList.add("dark");
} else {
    document.documentElement.classList.remove("dark");
}

// TOGGLE THEME
function toggleTheme() {
  let themeOn = localStorage.getItem("theme");
  let themeChange = themeOn == "dark" ? "light" : "dark";
  localStorage.setItem("theme", themeChange);
  if(themeChange == 'dark') {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}