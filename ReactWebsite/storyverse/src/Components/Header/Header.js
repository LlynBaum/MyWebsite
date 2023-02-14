import Logo from "../../Logo/Storyverse_transparent_darker.png";
import DarkModeButton from "./DarkModeButton/DarkModeButton.js"
import { useState } from 'react';
import DesktopMenu from "./Menus/DesktopMenu";

export default function Header(){
    const [isDarkMode, setIsDarkMode] = useState(false);
    if(isDarkMode){
        document.getElementById("root").classList.add("dark-theme");
    }
    else{
        document.getElementById("root").classList.remove("dark-theme");
    }

    return (
        <>
          <header>
            <img className='logo' src={Logo} alt="Storyverse" />
    
            <DesktopMenu />
    
            <div className="user-area">
              <DarkModeButton isChecked={isDarkMode} switchDarkMode={() => setIsDarkMode(!isDarkMode)} />
              <i className="fa fa-bell bell"></i>
              <button className="log-in-button">Log in</button>
            </div>
          </header>
        </>
    );
}