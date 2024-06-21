import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useMovieData } from './MovieDataContext';

function NarrativeFilmDetail() {
  const { filmName } = useParams();
  const movies = useMovieData();
  const movie = movies.find(movie => movie.fileName === filmName);

  useEffect(() => {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this effect runs only once when component mounts

  if (!movie) {
    return <div>Movie not found for {filmName}</div>;
  }

  // Function to extract YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    // Example URL formats to handle:
    // - https://www.youtube.com/watch?v=dQw4w9WgXcQ
    // - https://youtu.be/dQw4w9WgXcQ
    // Extract video ID from URL
    let videoId = null;
    if (url.includes('youtube.com')) {
      videoId = url.split('v=')[1];
      const ampersandPosition = videoId.indexOf('&');
      if (ampersandPosition !== -1) {
        videoId = videoId.substring(0, ampersandPosition);
      }
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1];
      const slashPosition = videoId.indexOf('/');
      if (slashPosition !== -1) {
        videoId = videoId.substring(0, slashPosition);
      }
    }
    return videoId;
  };

  const videoId = getYouTubeVideoId(movie.link);
  const videoSrc = videoId ? `https://www.youtube.com/embed/${videoId}` : null;

  return (
    <Container>
      <div className="narrativevideo-container">
        {videoSrc ? (
          <iframe
            src={videoSrc}
            title={movie.title}
            allowFullScreen
            frameBorder="0"
          ></iframe>
        ) : (
          <p>Invalid video URL</p>
        )}
      </div>
      <h1 className="page-heading">{movie.title} ({movie.releaseDate})</h1>
      <Row>
        <h1 className="cred">
          Directed By: {movie.director}
        </h1>
      </Row>
      <Row>
        <p className="desc">
          {movie.description}
        </p>
      </Row>
    </Container>
  );
}

export default NarrativeFilmDetail;
