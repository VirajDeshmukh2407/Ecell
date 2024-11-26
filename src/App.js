import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AboutEcell from "./sub-pages/About-Ecell";
import Events from "./pages/Events";
import CoreTeam from "./pages/Team";
import Faculty from "./pages/Faculty";

function App() {
  return (
    <div>
      <Home />
      <About />
      <Routes>
        <Route path="/about-ecell" element={<AboutEcell />} />
      </Routes>
      <Events/>
      <CoreTeam/>
      <Faculty/>
    </div>
  );
}

export default App;