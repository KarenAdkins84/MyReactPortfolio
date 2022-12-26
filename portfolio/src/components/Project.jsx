// import React from 'react'
// import '../styles/Project.css';

// function ProjectCards(props) {
//   return (
//     <div className="card"> 
//       <div className="img-container">
//         <img alt={props.name} src={props.image}/>
//       </div>
//       <div className="content">
//           <p className="card-title">{props.name}</p>
//           <a href={props.github}>Github</a> 
//           <a href={props.deploy}>Deployed</a> 
//           <p class="topics">({props.topics})</p>
//       </div>
//     </div>
//   );
// }

// export default ProjectCards;
import React from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/Project.css';
import { GoLogoGithub } from "react-icons/go";

function ProjectCards(props) {
  return (
    <div className='wrapper'>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Img variant="top" src={props.image} />
        <Card.Text>
          {props.topics}
        </Card.Text>
        <Card.Link href={props.github}> <GoLogoGithub /> </Card.Link>
        <Card.Link href={props.deploy}>Deployed</Card.Link>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ProjectCards;