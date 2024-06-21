import React from 'react';
import NarrativeCard from "./NarrativeCard";
import { Container, Row, Col } from "react-bootstrap";
import movieData from './movieData';

import { Link } from "react-router-dom";

function Narrative() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="page-heading">Narrative Films</h1>
        <Row>
          {movieData.map(movie => (
            <Col key={movie.fileName} md={12} className="narrative-card">
              <Link to={`/narrativefilms/${movie.fileName}`}>
              <NarrativeCard
                img={movie.img}
                link={`/narrativefilms/${movie.fileName}`}
              />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Narrative;
