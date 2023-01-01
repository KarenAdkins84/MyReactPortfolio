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
import { RxRocket } from "react-icons/rx";

function ProjectCards(props) {
  console.log(props)
  return (
    <div className='wrapper'>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <img variant="top" style={{width: '250px', height: '250px'}} src={props.image} />
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