import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../Footer";
import Hero from "./Hero";
import FloatingSidebar from "../../components/FloatingSidebar";
import About from "./About";
// import { Vortex } from "../components/Vortex";

const Econclave2025 = () => {
  return (
    <div>
      <Navbar/>
      <FloatingSidebar/>
      <Hero/>
      <About/>
      <Footer/>
    </div>
  )
}

export default Econclave2025
