import React from "react";
import './Home.css';
import bgImage from './projector.jpg';

function Home() {
  
  return (
    <div className="homepage">
      <img src={bgImage} alt = "Backgroudn" className="video-bg" />
    </div>
    //test
  );
}

export default Home;
//<video src={bgVideo} autoPlay loop muted className="video-bg" />
