import "./App.css";
import Nav from "./Components/Nav/Nav";
import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";

function App() {
 
  return (
    <div className="App">
      <Nav />
      <Intro />
      <About />
      <Skills />
      <Projects />
      {/*<Contact />*/}
      {/*<Footer />*/}
    </div>
  );
}

export default App;
