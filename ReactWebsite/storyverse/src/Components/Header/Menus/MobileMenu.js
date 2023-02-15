import UserStories from "../../UserStorys/UserStories.js";
import DarkModeButton from "../DarkModeButton/DarkModeButton";
import "./mobileMenu.css";

export default function MobileMenu({switchCoponentInMainSection, isChecked, switchDarkMode}){
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
                    <ul>
                        <li><button>Home</button></li>
                        <li><button onClick={
                            () => switchCoponentInMainSection(
                                <UserStories switchCoponentInMainSection={switchCoponentInMainSection}/>
                                )}>
                                Your Stories
                            </button>
                        </li>
                        <li><button>Library</button></li>
                        <li><button>About</button></li>
                    </ul>
                    <DarkModeButton isChecked={isChecked} switchDarkMode={switchDarkMode} />
                </div>
            </div>
        </>
    );
}