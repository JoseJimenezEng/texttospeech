import TextToSpeech from "./components/texttospeech";
import Presentation from "./components/presentation";
import Nav from "./components/nav";
import About from "./components/about"
import Videoback from "./components/videoback";
import './App.css';


function App() {
  return (
    <div className="App">
      <Presentation />
      <Nav />
      <About />
      <TextToSpeech />
      <Videoback/>
    </div>
  );
}

export default App;
