import React from 'react';
import '../styles/TechSkills.css';
import 
{ SiMongodb, 
    SiApollographql, 
    SiReact, 
    SiNodedotjs, 
    SiMysql,
    SiSequelize,
    SiPwa,
    SiInsomnia,
    SiHtml5,
    SiCss3,
    SiGithub,
    SiJavascript
} from "react-icons/si";

const TechSkills = () => {
    return (
    <div className='main'>
        <div className='techSkills'>
            <div>
                <ul className='skills'>
                    <li><SiMongodb/>MongoDB</li>
                    <li>Express</li>
                    <li><SiReact/>React</li>
                    <li><SiNodedotjs/>Node</li>
                </ul>
            </div>
            <div>
                <ul className='skills'>
                    <li><SiMysql/>MySQL</li>
                    <li>NoSQL</li>
                    <li><SiSequelize/>Sequelize</li>
                    <li>Mongoose</li>
                </ul>
            </div>
            <div>
                <ul className='skills'>
                    <li>Apollo Client Server</li>
                    <li><SiApollographql/>GraphQL</li>
                    <li>REST API's</li>
                    <li><SiPwa/>Progressive Web Apps</li>
                </ul>
            </div>
            <div >
                <ul className='skills'>
                    <li><SiHtml5/>HTML</li>
                    <li><SiCss3/>CSS</li>
                    <li><SiGithub/>GIT</li>
                    <li><SiJavascript/>Javascript</li>
                </ul>
            </div>
            <div>
                <ul className='skills'>
                    <li><SiInsomnia/>Insomnia Core</li>
                    <li>GraphQL Sandbox</li>
                    <li>MongoDB Compass</li>
                    <li>MongoDB Atlas</li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default TechSkills;