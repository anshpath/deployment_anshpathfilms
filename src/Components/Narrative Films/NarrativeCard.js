import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
//import './NarrativeCard.css'; // Ensure you have the styles in this file

function NarrativeCard(props) {
  return (
    <Card className="narrative-card-view" style={{ position: 'relative' }}>
      <Button variant="primary" href={props.link} target="_blank">
        <Card.Img variant="top" src={props.img} alt="card-img" />
      </Button>
      {/* Overlay for the title */}
      <div className="card-overlay">
        <h2>{props.title}</h2>
      </div>
    </Card>
  );
}

export default NarrativeCard;