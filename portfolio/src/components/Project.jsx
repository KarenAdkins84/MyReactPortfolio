
import React from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/Project.css';
import { GoLogoGithub } from "react-icons/go";
import { RxRocket } from "react-icons/rx";

function ProjectCards(props) {
  console.log(props)
  return (
    <div className='wrapper'>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Img variant="top" style={{width: '250px', height: '250px'}} src={props.image} />
        <Card.Text>
          {props.topics}
        </Card.Text>
        <Card.Link href={props.github}> <GoLogoGithub size={70} /> </Card.Link>
        <Card.Link href={props.deploy}> <RxRocket size={56} /> </Card.Link>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ProjectCards;