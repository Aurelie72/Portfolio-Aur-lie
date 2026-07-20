import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CustomCursor from "./components/CustomCursor.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <Header />

      <main className="flex-1 pt-30 sm:pt-15">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

