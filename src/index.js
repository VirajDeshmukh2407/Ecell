import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import HomePage from "./pages/Home";
import EConclavePage from "./sub-pages/EConclave";
import About from "./pages/About";
import CoreTeam from "./pages/Team";
import ContactUs from "./pages/ContactUs";
import AarambhPage from "./sub-pages/Aarambh";
import StartupSutra from "./sub-pages/StartupSutra";
// import Econclave2025 from "./econclave2k25/Econclave2025";

import Econclave2025 from "./pages/econclave2k25/Econclave2025";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/Econclave2025",
    element: <Econclave2025 />,
  },
  {
    path: "/econclave",
    element: <EConclavePage />,
  },
  {
    path: "/aarambh",
    element: <AarambhPage />,
  },
  {
    path: "/startupsutra",
    element: <StartupSutra />,
  },
  {
    path: "/team",
    element: <CoreTeam />,
  },
  {
    path: "/contacts",
    element: <ContactUs />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
