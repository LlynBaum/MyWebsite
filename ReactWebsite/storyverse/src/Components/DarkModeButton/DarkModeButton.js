import './DarkModeButton.css';
import MoonSun from "./moon-sun.png"

export default function DarkModeButton({isChecked, switchDarkMode}) {
    return(
        <div className="theme-button-parent">
        <label>
          <input type={"checkbox"} className="dark-mode-switch" onChange={switchDarkMode} checked={isChecked}></input>
          <img src={MoonSun} className="dark-mode-switch-picture" alt="dark-mode-switch"></img>
        </label>
      </div>
    )
}