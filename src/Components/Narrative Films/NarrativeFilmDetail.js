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

  // Function to convert YouTube URL to embed URL
  const getYouTubeEmbedUrl = (url) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  };

  const videoSrc = getYouTubeEmbedUrl(movie.link);

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
      <h1 className = 'page-heading'>{movie.title} ({movie.releaseDate})</h1>
      <Row>
        <h1 class = 'cred'>
          Directed By: {movie.director}
        </h1>
      </Row>
      <Row>
        <p class = 'desc'>
          {movie.description}
        </p>
      </Row>
    </Container>
  );
}

export default NarrativeFilmDetail;
