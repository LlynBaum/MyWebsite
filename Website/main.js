const themeButton = document.getElementById("theme-button");

themeButton?.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    var darkModeActive = themeButton.checked;
    localStorage.setItem("darkMode", darkModeActive)
});

var darkModeActive = localStorage.getItem("darkMode");
themeButton.checked = darkModeActive;
if(darkModeActive){
    document.body.classList.toggle("dark-theme");
}