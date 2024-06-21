import React from "react";
import './Home.css';
import bgVideo from './Movie Scrabble.mp4';

function Home() {
  
  return (
    <div className="homepage">
      <video src={bgVideo} autoPlay loop muted className="video-bg" />
    </div>
  );
}

export default Home;
