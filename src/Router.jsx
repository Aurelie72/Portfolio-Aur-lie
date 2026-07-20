// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from "./App.jsx";
// import Home from "./pages/Home.jsx";
// import ProjectDetail from "./pages/ProjectDetail.jsx";

// export default function Router() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />}>
//           <Route index element={<Home />} />
//           <Route path="projects/:id" element={<ProjectDetail />} />
//           <Route path="*" element={<Home />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy loading du layout
const App = lazy(() => import("./App.jsx"));

// Lazy loading des pages
const Home = lazy(() => import("./pages/Home.jsx"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail.jsx"));

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="loader">Chargement...</div>}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="projects/:id" element={<ProjectDetail />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
