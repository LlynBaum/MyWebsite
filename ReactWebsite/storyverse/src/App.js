import './App.css';
import Header from "./Components/Header/Header.js";
import Footer from './Components/Footer/Footer.js';
import StoryEditor from './Components/StoryEditor/StoryEditor.js';
import UserStories from './Components/UserStorys/UserStories';


function App() {
  return (
    <>
      <Header />

      <main>
        <UserStories />
      </main>

      <Footer />
    </>
  );
}

export default App;