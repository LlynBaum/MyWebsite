import UserStories from "../../UserStorys/UserStories";
import "./menu.css";

export default function DesktopMenu({switchCoponentInMainSection}){
    return(
        <nav className="desktop-menu">
            <ul>
                <li><button>Home</button></li>
                <li><button onClick={() => switchCoponentInMainSection(<UserStories />)}>Your Stories</button></li>
                <li><button>Library</button></li>
                <li><button>About</button></li>
            </ul>
        </nav>
    );
}
