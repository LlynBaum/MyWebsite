import Logo from "../../Logo/Storyverse_transparent_darker.png";
import DarkModeButton from "./DarkModeButton/DarkModeButton.js"
import { useState } from 'react';
import DesktopMenu from "./Menus/DesktopMenu";
import MobileMenu from "./Menus/MobileMenu";

export default function Header({switchCoponentInMainSection}){

    const [isDarkMode, setIsDarkMode] = useState(false);
    if(isDarkMode){
        document.body.classList.add("dark-theme");
    }
    else{
        document.body.classList.remove("dark-theme");
    }

    return (
        <>
          <header>
            <img className='logo' src={Logo} alt="Storyverse" />
    
            <DesktopMenu switchCoponentInMainSection={switchCoponentInMainSection} />
            <MobileMenu switchCoponentInMainSection={switchCoponentInMainSection} />
    
            <div className="user-area">
              <DarkModeButton isChecked={isDarkMode} switchDarkMode={() => setIsDarkMode(!isDarkMode)} />
              <i className="fa fa-bell bell"></i>
              <button className="log-in-button">Log in</button>
            </div>
          </header>
        </>
    );
}