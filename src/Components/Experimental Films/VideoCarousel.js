import React, { useState } from 'react';
import './VideoCarousel.css';

// Import your single arrow image
import arrowImage from './arrow7.png';

const VideoCarousel = ({ items }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleNext = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="video-carousel">
      <div className="carousel-content">
        <button className="carousel-control prev" onClick={handlePrev}>
          <img src={arrowImage} alt="Previous" className="rotate-arrow" />
        </button>
        <div className="video-container">
          <video key={currentVideoIndex} width="100%" height="auto" controls autoPlay muted loop>
            <source src={items[currentVideoIndex].video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <button className="carousel-control next" onClick={handleNext}>
          <img src={arrowImage} alt="Next" />
        </button>
      </div>
      <div className="video-text">
        <h2 className = 'other-text'>{items[currentVideoIndex].title}</h2>
        <p>{items[currentVideoIndex].description}</p>
      </div>
    </div>
  );
};

export default VideoCarousel;
