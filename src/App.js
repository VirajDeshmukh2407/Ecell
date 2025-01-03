import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import AboutEcell from "./sub-pages/About-Ecell";
import Events from "./pages/Events";
import CoreTeam from "./pages/Team";
import Faculty from "./pages/Faculty";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import EConclavePage from "./sub-pages/EConclave";
import Alumini from "./pages/Alumini";
function App() {
  return (
    <div>
      <Home />
      <About />
      <Events />
      <CoreTeam />
      <Faculty />
      <Alumini />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
