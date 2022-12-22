import React from 'react'

function ProjectCards(props) {
  return (
    <div className="card"> 
      <div className="img-container">
        <img alt={props.name} src={props.image}/>
      </div>
      <div className="content">
          <p className="card-title">{props.name}</p>
          <a href={props.github}>Github</a> 
          <a href={props.deploy}>Deployed</a> 
          <p class="topics">({props.topics})</p>
      </div>
    </div>
  );
}

export default ProjectCards;