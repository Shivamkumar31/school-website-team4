import { Outlet, useMatches } from "react-router";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  const matches = useMatches();

  // Update document title based on loader data from active route
  useEffect(() => {
    const activeMatch = matches.find((match) => match.data?.title);
    if (activeMatch?.data?.title) {
      document.title = activeMatch.data.title;
    }
  }, [matches]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}
