import React from "react";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/pages/Footer";
import Hero from "./Hero";
import FloatingSidebar from "../../src/components/FloatingSidebar";
import About from "./About";

const Econclave2025 = () => {
  return (
    <div className="">
      <Navbar />
      {/* <FloatingSidebar /> */}
      <Hero />
      <About />
      <Footer />
    </div>
  )
}

export default Econclave2025;
