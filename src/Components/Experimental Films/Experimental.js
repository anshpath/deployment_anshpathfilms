// Experimental.js
import React, { useEffect } from 'react';
import VideoCarousel from './VideoCarousel';
import './VideoCarousel.css';
const Experimental = () => {
  useEffect(() => {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }, []);
  const items = [
    {
      video: '/Boston SB.mp4',
      title: '"Old Money"',
      description: 'Kodak Vision 3 Color Negative Film 7213'
    },
    {
      video: '/Haiku Film.mp4',
      title: '"A House Haiku"',
      description: 'Kodak Vision 3 Color Negative Film 7207'
    },
    {
      video: '/Hike Film.mp4',
      title: '"The Color of Peaks"',
      description: 'Kodak Tri-X Black and White Reversal Film 7266, Kodak Vision 3 Color Negative Film 7203'
    }
  ];

  return (
    <div className="experimental">
      <h1 className = 'page-heading'>Experimental Films</h1>
      <h3 className = 'other-text'>The following films are shot on a Bolex H16 Rex5 16mm Film Camera</h3>
      <VideoCarousel items={items} />
    </div>
  );
};

export default Experimental;
