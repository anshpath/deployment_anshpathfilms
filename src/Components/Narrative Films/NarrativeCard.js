import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function NarrativeCard(props){
    return (
<Card className = "narrative-card-view">
    {/* // style = {{backgroundColor: "transparent", border: null}} */}
    <Button variant = "primary" href={props.link} target="_blank">
    <Card.Img variant = "top" src = {props.img} alt="card-img" />
    </Button>
    </Card>
    )
}
export default NarrativeCard;