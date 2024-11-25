// App.js
// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import AboutEcell from "./sub-pages/About-Ecell";

// const App = () => {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Home />,
//     },
//     {
//       path: "about",
//       element: <About />,
//       children: [
//         {
//           path: "ao",
//           element: <AboutEcell />,
//         },
//       ],
//     },
//   ]);
//   return <RouterProvider router={router} />;
// };

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AboutEcell from "./sub-pages/About-Ecell";
// import Events from "./pages/Events";

function App() {
  return (
    <div>
      <Home />
      <About />
      <Routes>
        <Route path="/about-ecell" element={<AboutEcell />} />
      </Routes>
      {/* <Events/> */}
    </div>
  );
}

export default App;