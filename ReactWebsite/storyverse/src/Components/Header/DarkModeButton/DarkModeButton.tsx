import './DarkModeButton.css';
import MoonSun from "./moon-sun-dark.png"
import React from "react";

export default function DarkModeButton({isChecked, switchDarkMode}: {isChecked : boolean, switchDarkMode: () => void}) {
    return(
        <div className="theme-button-parent">
        <label>
          <input type={"checkbox"} className="dark-mode-switch" onChange={switchDarkMode} checked={isChecked}></input>
          <img src={MoonSun} className="dark-mode-switch-picture" alt="dark-mode-switch"></img>
        </label>
      </div>
    )
}