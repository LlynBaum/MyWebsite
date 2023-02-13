const themeButton = document.getElementById("theme-button");
const themeButtonSmall = document.getElementById("theme-button-menu-small");

themeButtonSmall?.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    var darkModeActive = themeButtonSmall.checked;
    themeButton.checked = darkModeActive;
    localStorage.setItem("darkMode", darkModeActive)
});

themeButton?.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    var darkModeActive = themeButton.checked;
    themeButtonSmall.checked = darkModeActive;
    localStorage.setItem("darkMode", darkModeActive)
});

var darkModeActive = localStorage.getItem("darkMode");
themeButton.checked = darkModeActive;
if(darkModeActive){
    document.body.classList.toggle("dark-theme");
}