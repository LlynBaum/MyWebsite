import './App.css';
import Header from "./Components/Header/Header.js";
import Footer from './Components/Footer/Footer.js';
import StoryEditor from './Components/StoryEditor/StoryEditor.js';


function App() {
  return (
    <>
      <Header />

      <main>
        <StoryEditor />
      </main>

      <Footer />
    </>
  );
}

export default App;