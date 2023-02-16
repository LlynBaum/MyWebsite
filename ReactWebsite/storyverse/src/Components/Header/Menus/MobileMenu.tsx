import DarkModeButton from "../DarkModeButton/DarkModeButton";
import { Link } from "react-router-dom"; 
import "./mobileMenu.css";
import React from "react";

export default function MobileMenu({isChecked, switchDarkMode}: {isChecked: boolean, switchDarkMode: () => void}){
    
    return(
        <>
            <div className="small-menu mobile-menu">
                <input type="checkbox" id="menu_toggel" />
                <label className="menu_btn" htmlFor="menu_toggel">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>

                <div className="menu_box">
                    <>
                        <ul className="nav-menu">
                            <li><button>Home</button></li>
                            <li>
                                <Link to={'/your-stories'}>Your Stories</Link>
                            </li>
                            <li><button>Library</button></li>
                            <li><button>About</button></li>
                        </ul>
                    </>
                    
                    <DarkModeButton isChecked={isChecked} switchDarkMode={switchDarkMode} />
                </div>
            </div>
        </>
    );
}