import React, { useState, useEffect } from "react";
import Home from "./Components/Home/Home";
import Narrative from "./Components/Narrative Films/Narrative";
import NarrativeFilmDetail from "./Components/Narrative Films/NarrativeFilmDetail.js";
import Experimental from "./Components/Experimental Films/Experimental";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import NavBar from "./Components/NavBar"
import sample from "./Images/sample.mp4"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation
} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MovieDataProvider } from "./Components/Narrative Films/MovieDataContext.js";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollControl load={load}>
      <NavBar />
      <MovieDataProvider>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/narrativefilms" element={<Narrative />} />
          <Route path="/narrativefilms/:filmName" element={<NarrativeFilmDetail />} />
          <Route path="/experimentalfilms" element={<Experimental />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </MovieDataProvider>
        
      </ScrollControl>
    </Router>
  );
}

function HomePage() {
  return (
    <>
      <div className="video-container">
        <video className='videoTag' autoPlay loop muted>
          <source src={sample} type='video/mp4' />
        </video>
      </div>
      <Home />
    </>
  );
}

function ScrollControl({ load, children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  
  return (
    <div className="App" id={load || isHome ? "no-scroll" : "scroll"}>
      {children}
    </div>
  );
}

export default App;

