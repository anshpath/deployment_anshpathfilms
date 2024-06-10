// NarrativeFilmDetail.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useMovieData } from './MovieDataContext';

function NarrativeFilmDetail() {
  const { filmName } = useParams();
  const movies = useMovieData();
  const movie = movies.find(movie => movie.fileName === filmName);

  if (!movie) {
    return <div>Movie not found for {filmName}</div>;
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <h1>{movie.title}</h1>
          <Image src={movie.img} alt={movie.title} fluid />
          <p>{movie.description}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default NarrativeFilmDetail;
