// import React, { useEffect } from "react";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import AboutEcell from "./sub-pages/About-Ecell";
// import Events from "./pages/Events";
// import CoreTeam from "./pages/Team";
// import Faculty from "./pages/Faculty";
// import Contact from "./pages/Contact";
// import Footer from "./pages/Footer";
// import EConclavePage from "./sub-pages/EConclave";
// import Alumini from "./pages/Alumini";
// import { HashLoader } from "react-spinners";

// const App = ()=>{
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 3000); // Adjust time as needed
//     return () => clearTimeout(timer);
//   }, []);
//   return (
//     {loading ? (
//       <div className="flex items-center justify-center h-screen bg-black">
//         <HashLoader color="#facc15" size={80} />
//       </div>
//     ) :
//   (
//     <div>
//         <Home />
//       <About />
//       <Events />
//       <CoreTeam />
//       <Faculty />
//       <Alumini />
//       <Contact />
//       <Footer />
//     </div>
//   )
//   );

// }

// export default App;

import React, { useState, useEffect } from "react";
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
import { HashLoader } from "react-spinners";

const App = () => {
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
          <HashLoader color="#facc15" />
        </div>
      ) : (
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
      )}
    </>
  );
};

export default App;
