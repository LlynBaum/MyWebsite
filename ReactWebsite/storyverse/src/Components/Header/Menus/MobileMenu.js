import UserStories from "../../UserStorys/UserStories";
import "./mobileMenu.css";

export default function MobileMenu({switchCoponentInMainSection}){
    return(
        <>
            <div className="small-menu mobile-menu">
                <input type="checkbox" id="menu_toggel" />
                <label className="menu_btn" htmlFor="menu_toggel">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>

                <nav className="menu_box">
                    <ul>
                        <li><button>Home</button></li>
                        <li><button onClick={() => switchCoponentInMainSection(<UserStories />)}>Your Stories</button></li>
                        <li><button>Library</button></li>
                        <li><button>About</button></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}