import React from 'react';
// import portfolio from '../portfolio.json';
import ProjectCards from '../components/Project';
import '../styles/Portfolio.css';
import PWAImage from '../assets/images/PwaScreenshot.png'
function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}
const portfolio=[
    {
    "id": 1,
    "name": "PWA Text Editor",
    "image": PWAImage,//create data.js to replace port.json, import here
    "github": "https://github.com/KarenAdkins84/PwaTextEditor",
    "deploy": "https://cryptic-plains-18429.herokuapp.com/",
    "topics": "PWA, manifest.json, service-workers, webpack plugins"
},
{
    "id": 2,
    "name": "ReGifter",
    "image": "",
    "github": "https://github.com/KarenAdkins84/TheShop",
    "deploy": "https://the-regifter.herokuapp.com/",
    "topics": ""
},
{
    "id": 3,
    "name": "ChefRosetta",
    "image": "",
    "github": "https://github.com/KarenAdkins84/Recipes-Translator",
    "deploy": "https://ehamzapour.github.io/Recipes-Translator/",
    "topics": ""
},
{
    "id": 4,
    "name": "",
    "image": "",
    "github": "",
    "deploy": "",
    "topics": ""
},
{
    "id": 5,
    "name": "",
    "image": "",
    "github": "",
    "deploy": "",
    "topics": ""
},
{
    "id": 6,
    "name": "",
    "image": "",
    "github": "",
    "deploy": "",
    "topics": ""
}
]


const Portfolio = () => {
    return (
        <section className="container">
            <div className="project">
                <h2 className="top-title">My Portfolio</h2>
            </div>

            <Wrapper id="card-data">
                {portfolio.map((project) => (
                    <ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} topics={project.topics}/>
            ))}
            </Wrapper>
        </section>

);
}

export default Portfolio