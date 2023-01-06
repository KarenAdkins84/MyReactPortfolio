import React from 'react';
import '../styles/Home.css';


const Home = () => {
  return (
    <div className='about'>
      <section className='photo'>
      <img className="profile-photo" src={require("../assets/images/bio.jpg")} style={{ width: 500, height: 600 }} alt={"Karen Adkins and son"}/>
      </section>
      <section className='info'>
        <h2 className='title'>About Me</h2>
        <p className='bio'>
            Hello, my name is Karen Adkins and I am a Full Stack Software Developer. 
        I will be completing Vanderbilt University Coding Bootcamp in January of 2023.
        In bootcamp I have learned the fundamentals of HTML, CSS, GIT, Javascript, Web APIs, Third-party APIs, 
        Server-side APIs, MySQL, NoSQL, Sequelize, Mogoose, Progressive Web Apps(PWAs) and the MERN stack, which includes
        MongoDB, Express, Node, and React. Please check out my projects featured in this portfolio to 
        see examples of my solo and collaborative works!<br></br>
            Originally from Michigan, I grew up and currently reside in middle Tennessee.
        My previous work experience is mostly customer service in the restaurant industry as a server, bartender,
        and front-of-house supervisor. I am also the only parent to an adorable 'Big Boy' 
        who just recently celebrated his 4th birthday, so when I am not working or coding, 
        you can usually find me playing with dinosaurs, HotWheels, or Legos!

        </p>
      </section>
    </div>
  )
}

export default Home;