import React, { useEffect, useState } from 'react';
import NarrativeCard from "./NarrativeCard";
import { Container, Row, Col, Button } from "react-bootstrap";
import movieData from './movieData';
import { Link } from "react-router-dom";

function Narrative() {
  const [showGrid, setShowGrid] = useState(false);

  useEffect(() => {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }, []);

  const toggleGrid = () => {
    setShowGrid(prev => !prev);
  };

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="page-heading">Narrative Films</h1>

        {/* Button to toggle between list and grid view */}
        <div className="text-center mb-0">
          <Button variant="secondary" onClick={toggleGrid}>
            {showGrid ? 'Show One by One' : 'View All Projects'}
          </Button>
        </div>

        {/* Use bootstrap gutters to control spacing between cards */}
        <Row className="g-1">
          {movieData.map(movie => (
            <Col
              key={movie.fileName}
              xs={12}
              md={showGrid ? 4 : 12}
              className="narrative-card"
            >
              <Link to={`/films/${movie.fileName}`}>  
                <NarrativeCard
                  img={movie.img}
                  title={movie.title}
                  link={`/films/${movie.fileName}`}
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
