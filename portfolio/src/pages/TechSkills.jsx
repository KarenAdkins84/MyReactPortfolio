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
    <div className='techSkills col-lg-12'>
        {/* <h1><SiHtml5/><SiCss3/><SiJavascript/><SiGithub/>
        <SiMysql/><SiSequelize/><SiPwa/><SiApollographql/>
        <SiInsomnia/><SiNodedotjs/><SiMongodb/><SiReact/></h1> */}
        <div className='mernStack'>
            <ul className='mern'>
                <li>MongoDB<SiMongodb/></li>
                <li>Express</li>
                <li>React<SiReact/></li>
                <li>Node<SiNodedotjs/></li>
            </ul>
        </div>
        <div className='database'>
            <ul>
                <li>MySQL<SiMysql/></li>
                <li>NoSQL</li>
                <li>Sequelize<SiSequelize/></li>
                <li>Mongoose</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>Apollo Client Server</li>
                <li>GraphQL<SiApollographql/></li>
                <li>RESTful API's</li>
                <li>Progressive Web Apps<SiPwa/></li>
            </ul>
        </div>
        <div>
            <ul>
                <li>HTML<SiHtml5/></li>
                <li>CSS<SiCss3/></li>
                <li>GIT<SiGithub/></li>
                <li>Javascript<SiJavascript/></li>
            </ul>
        </div>
        <div>
            <ul>
                <li>Insomnia Core<SiInsomnia/></li>
                <li>GraphQL Sandbox</li>
                <li>MongoDB Compass</li>
                <li>MongoDB Atlas</li>
            </ul>
        </div>
    </div>
    )
}

export default TechSkills;