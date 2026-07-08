import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Curtains from "./components/Curtains.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import { colorByPath } from "./data/routesConfig.js";

export default function App() {
  const location = useLocation();
  const color = colorByPath[location.pathname] || "bg-gray-500";

  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <Header />

      <main className="flex-1 pt-25 sm:pt-15">
        <AnimatePresence >
          <Curtains key={location.pathname} color={color} />
        </AnimatePresence>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
