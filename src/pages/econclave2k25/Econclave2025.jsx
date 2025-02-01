import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../Footer";
import Hero from "./Hero";
import FloatingSidebar from "../../components/FloatingSidebar";
import About from "./About";
import Events from "./Events";
import Queries from "./Queries";
import Loader from "./Loader";

const Econclave2025 = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen bg-black">
          <Loader />
        </div>
      ) : (
        <div>
          <Navbar />
          <div className="hidden sm:flex">
          <FloatingSidebar /></div>
          <Hero />
          <About />
          <Events />
          <Queries />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Econclave2025;
