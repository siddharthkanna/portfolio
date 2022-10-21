import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";

function App() {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("./resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  });
  return (
    <div className="App">
      <Nav />
      <Intro />
      <About />
      {/*<Skills />*/}
      {/*<Projects />*/}
      {/*<Contact />*/}
      {/*<Footer />*/}
    </div>
  );
}

export default App;
