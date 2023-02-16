import { useMatch, Link, BrowserRouter } from "react-router-dom"; 
import "./menu.css";

export default function DesktopMenu({}){

    return(
        <>
            <nav className="desktop-menu">
                <ul>
                    <li><button>Home</button></li>
                    <li>
                        <Link to={'/your-stories'}>Your Stories</Link>
                    </li>
                    <li><button>Library</button></li>
                    <li><button>About</button></li>
                </ul>
            </nav>
        </>
    );
}
