import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "./Components/Home/Home";
import Narrative from "./Components/Narrative Films/Narrative";
import NarrativeFilmDetail from "./Components/Narrative Films/NarrativeFilmDetail";
import Experimental from "./Components/Experimental Films/Experimental";
import About from "./Components/About/About";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer"; // Import the Footer component
import { MovieDataProvider } from "./Components/Narrative Films/MovieDataContext";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollControl load={load}>
        <NavBar />
        <div className="main-content">
          <MovieDataProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/narrativefilms" element={<Narrative />} />
              <Route path="/narrativefilms/:filmName" element={<NarrativeFilmDetail />} />
              <Route path="/experimentalfilms" element={<Experimental />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </MovieDataProvider>
        </div>
        <Footer /> {/* Render Footer component */}
      </ScrollControl>
    </Router>
  );
}

function ScrollControl({ load, children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) {
      document.body.classList.add("no-home-page");
    } else {
      document.body.classList.remove("no-home-page");
    }
    console.log(`Location: ${location.pathname}, isHome: ${isHome}`);
  }, [isHome, location.pathname]);

  return (
    <div className={`App ${load || isHome ? "no-scroll" : "scroll"}`}>
      {children}
    </div>
  );
}

export default App;
