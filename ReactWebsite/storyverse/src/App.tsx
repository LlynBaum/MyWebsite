import React from 'react';
import Header from "./Components/Header/Header";
import Footer from './Components/Footer/Footer';
import UserStories from './Components/UserStorys/UserStories';
import { Routes ,Route } from 'react-router-dom';
import StoryEditor from './Components/StoryEditor/StoryEditor';
import './App.css';


function App() {
  return (
    <>
      <Header />

      <main>
          <Routes>
            <Route path='/' element={<UserStories />} />
            <Route path='/your-stories' element={<UserStories />} />
            <Route path='/story-editor' element={<StoryEditor />} />
          </Routes>
          {/* routes */}
        </main>

      <Footer />
    </>
  );
}

export default App;