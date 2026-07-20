// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import Router from "./Router.jsx";



// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//      <Router />
//   </StrictMode>,
// )


import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<div className="loader">Chargement...</div>}>
      <Router />
    </Suspense>
  </StrictMode>
);
