import './App.css';
import Header from "./Components/Header/Header.js";
import Footer from './Components/Footer/Footer.js';
import { useState } from 'react';
import UserStories from './Components/UserStorys/UserStories';


function App() {
  const [curComponent, setCurComponent] = useState(
    <UserStories switchCoponentInMainSection={switchCoponentInMainSection}/>
  );

  function switchCoponentInMainSection(component){
    setCurComponent(component);
  }

  return (
    <>
      <Header switchCoponentInMainSection={switchCoponentInMainSection}/>

      <main>
        {curComponent}
      </main>

      <Footer />
    </>
  );
}

export default App;