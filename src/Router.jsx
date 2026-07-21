import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const App = lazy(() => import("./App.jsx"));

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
