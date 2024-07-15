import React from "react";
import './Home.css';
import bgVideo from './Movie Scrabble.mp4';
import bgImage from './projector.jpg';

function Home() {
  
  return (
    <div className="homepage">
      <img src={bgImage} className="video-bg" />
    </div>
    //test
  );
}

export default Home;
//<video src={bgVideo} autoPlay loop muted className="video-bg" />
