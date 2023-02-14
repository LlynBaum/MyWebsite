import Logo from "./Styles/Logo/Storyverse_transparent_darker.png";
import './App.css';
import { useState } from 'react';
import DarkModeButton from "./Components/DarkModeButton/DarkModeButton.js"


function App() {
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

        <nav className="desktop-menu">
          <ul>
            <li>Home</li>
            <li>Your Stories</li>
            <li>Library</li>
            <li>About</li>
          </ul>
        </nav>

        <div className="user-area">
          <DarkModeButton isChecked={isDarkMode} switchDarkMode={() => setIsDarkMode(!isDarkMode)} />
          <i class="fa fa-bell bell"></i>
          <button className="log-in-button">Log in</button>
        </div>
      </header>
    </>
  );
}

export default App;