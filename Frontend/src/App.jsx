import { useState } from "react";

import About from "./component/About";
import Contact from "./component/Contact";
import Experience from "./component/Experience";
import Hero from "./component/Hero";
import MouseGlow from "./component/MouseGlow";
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import ThemeSwitcher from "./component/ThemeSwitcher";
import PageLoader from "./component/pageLoader";
// import PageLoader from "./component/PageLoader";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="font-sans">
      {/* Premium Page Loader */}
      {loading && <PageLoader onComplete={() => setLoading(false)} />}

      {/* Portfolio */}
      <MouseGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      {/* Theme Selector */}
      <ThemeSwitcher />
    </div>
  );
};

export default App;