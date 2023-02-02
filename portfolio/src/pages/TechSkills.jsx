import React from 'react';
import '../styles/TechSkills.css';

const TechSkills = () => {
    return (
    <div className='techSkills'>
        <div className='mernStack'>
            <ul className='mern'>
                <li>MongoDB</li>
                <li>Express</li>
                <li>React</li>
                <li>Node</li>
            </ul>
        </div>
        <div className='database'>
            <ul>
                <li>MySQL</li>
                <li>NoSQL</li>
                <li>Sequelize</li>
                <li>Mongoose</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>Apollo Client Server</li>
                <li>GraphQL</li>
                <li>RESTful API's</li>
                <li>Progressive Web Apps</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>GIT</li>
                <li>Javascript</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>InsomniaCore</li>
                <li>GraphQL Sandbox</li>
                <li>MongoDB Compass</li>
                <li>MongoDB Atlas</li>
            </ul>
        </div>
    </div>
    )
}

export default TechSkills;