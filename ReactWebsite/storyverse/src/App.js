import './App.css';
import Header from "./Components/Header/Header.js";
import Footer from './Components/Footer/Footer.js';
import { useState } from 'react';
import UserStories from './Components/UserStorys/UserStories';
import { Routes ,Route } from 'react-router-dom';
import StoryEditor from './Components/StoryEditor/StoryEditor';


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
          <Routes>
            <Route path='/' element={<UserStories />} />
            <Route path='/your-stories' element={<UserStories />} />
            <Route path='/story-editor' element={<StoryEditor />} />
          </Routes>
        </main>

      <Footer />
    </>
  );
}

export default App;