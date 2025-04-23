import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useAnimation } from "framer-motion";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import FAQ from "./components/FAQ/FAQ";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Gallery from "./components/Gallery/Gallery";
import Sponsors from "./components/Sponsors/Sponsors";
import Tournament from "./components/Tournament/Tournament";
import Loadingpage from "./components/Loadingpage/Loadingpage";
import CursorTrail from "./components/Cursoranimation/Cursoranimation";
import Watchlive from "./components/WatchLive/Watchlive";
import Fixture from "./components/Fixture/Fixture";

function App() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1000);
  const [a, setA] = useState(100);
  const [loading, setLoading] = useState(true);
  const controls = useAnimation();

  // Handle window resize event
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle loading logic
  useEffect(() => {
    if (a > 0) {
      const timer = setTimeout(() => setA(a - 1), 20);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setLoading(false), 2500);
    }
  }, [a]);

  // Animation controls
  useEffect(() => {
    controls.start({ opacity: 1, transition: { duration: 1 } });
  }, [controls]);

  return (
    <div className="App" style={{ overflowX: "hidden", height: "100vh" }}>
      {!loading && isLargeScreen && <CursorTrail />}

      <Routes>
        <Route
          path="/"
          element={
            loading ? (
              <Loadingpage value={100 - a} />
            ) : (
              <div>
                <Navbar />
                <HeroSection />
                <About />
                <Gallery />
                <FAQ />
                <Sponsors />
                <Contact />
              </div>
            )
          }
        />
        <Route path="/tournament" element={<Tournament />} />
        <Route path="/fixture" element={<Fixture />} />
        <Route path="/watchlive" element={<Watchlive />} />
      </Routes>
    </div>
  );
}

export default App;
