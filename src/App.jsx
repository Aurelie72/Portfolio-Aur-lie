import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";


export default function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-black text-white overflow-x-hidden">

      <Header />

      <main className="flex-1 pt-0 sm:pt-0">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

