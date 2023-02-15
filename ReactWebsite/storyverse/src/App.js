import './App.css';
import Header from "./Components/Header/Header.js";
import Footer from './Components/Footer/Footer.js';
import StoryEditor from './Components/StoryEditor/StoryEditor.js';
import { useState } from 'react';


function App() {
  const [curComponent, setCurComponent] = useState(<StoryEditor />)

  function switchCoponentInMainSection(component){
    console.log({component})
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