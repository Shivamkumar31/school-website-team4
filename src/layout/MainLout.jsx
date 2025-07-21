import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  useEffect(() => {
    // Add preload class to prevent animations on initial load
    document.body.classList.add("preload");

    // Remove preload class after a short delay to enable animations
    const timer = setTimeout(() => {
      document.body.classList.remove("preload");
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
