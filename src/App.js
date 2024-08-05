import TextToSpeech from "./components/texttospeech";
import Presentation from "./components/presentation";
import Nav from "./components/nav";
import About from "./components/about"
import Videoback from "./components/videoback";
import Footer from "./components/footer";
import './App.css';


function App() {
  return (
    <div className="App">
      <Presentation />
      <Nav />
      <About />
      <TextToSpeech />
      <Videoback/>
      <Footer/>
    </div>
  );
}

export default App;
