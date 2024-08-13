import React, { useEffect } from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import anshImage from '../../Images/5367412124-headshot.jpg';
import './About.css'; // Import the CSS file

// Import custom icon images
import premiereIcon from './adobe.png';
import finalDraftIcon from './finalDraft.png';
import finalCutProIcon from './finalCutPro.png';

const About = () => {
  useEffect(() => {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }, []);
  // Function to open email client in a new tab
  const handleEmailClick = () => {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=anshpath@gmail.com', '_blank');
  };

  return (
    <Container className="about-container">
      <Row className="align-items-center">
        <Col md={6}>
          <h1 className = 'page-heading' >Northern Virginia based filmmaker...</h1>
          <p>
            From making home videos with his cousins to pursuing a dream in filmmaking, Ansh has always loved movies and always will. During quarantine, when he had a lot of time on his hands, he decided to write his first screenplay. Overly ambitious as always, he wrote a feature-length story that was riddled with flaws. But throughout the years he fixed them and soon he was writing as much as he could.
          </p>
          <p>
            From there, he co-founded his high school's first film club and pioneered a year-long project. The project was Ansh's first big production and it involved all members of the club pulling their weight.
          </p>
          <p>
            Currently, he is at the University of Virginia studying Computer Science and Cinematography. He continues to pursue his passion and is constantly driven by ambition.
          </p>
        </Col>
        <Col md={6}>
          <Image src={anshImage} fluid rounded />
        </Col>
      </Row>

      {/* Software Section */}
      <Row className="mt-5 text-center">
        <Col>
          <h2 className = 'page-heading'>Softwares I Use</h2>
          <div className="software-icons">
            <div className="icon-circle">
              <img src={premiereIcon} alt="Adobe Premiere" className="icon" />
              <p>Adobe Premiere</p>
            </div>
            <div className="icon-circle">
              <img src={finalDraftIcon} alt="Final Draft" className="icon" />
              <p>Final Draft</p>
            </div>
            <div className="icon-circle">
              <img src={finalCutProIcon} alt="Final Cut Pro" className="icon" />
              <p>Final Cut Pro</p>
            </div>
            {/* Add more custom icons as needed */}
          </div>
        </Col>

        <Col>
          <h1 className = 'page-heading'>Contact Me</h1>
          <div className="email-box" onClick={handleEmailClick}>
            <p className="email-address">anshpath@gmail.com</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
