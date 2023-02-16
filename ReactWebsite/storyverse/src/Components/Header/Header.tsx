import React from "react";
import Logo from "../../Logo/Storyverse_transparent_darker.png";
import DarkModeButton from "./DarkModeButton/DarkModeButton"
import { useState } from 'react';
import DesktopMenu from "./Menus/DesktopMenu";
import MobileMenu from "./Menus/MobileMenu";

export default function Header({}){

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
    
            <DesktopMenu />
            <MobileMenu 
              isChecked={isDarkMode} 
              switchDarkMode={() => setIsDarkMode(!isDarkMode)} />
    
            <div className="user-area">
              <div className="dark-mode-button-user-area">
                <DarkModeButton isChecked={isDarkMode} switchDarkMode={() => setIsDarkMode(!isDarkMode)} />
              </div>
              <i className="fa fa-bell bell"></i>
              <button className="log-in-button">Log in</button>
            </div>
          </header>
        </>
    );
}