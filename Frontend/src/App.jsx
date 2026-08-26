
// import Navbar from "./component/Navbar";
// import Hero from "./component/Hero";

import About from "./component/About";
import Contact from "./component/Contact";
import Experience from "./component/Experience";
import Hero from "./component/Hero";
import MouseGlow from "./component/MouseGlow";
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";
import Skills from "./component/Skills";

const App = () => {
  return (
    <div className="font-sans">
      <MouseGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;