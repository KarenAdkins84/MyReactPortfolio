import React from 'react';
import '../styles/Home.css';


const Home = () => {
  return (
    <div className='about'>
      <img className="profile-photo" src={require("../assets/images/bio.jpg")} style={{ width: 400, height: 400 }} alt={"Karen Adkins and son"}/>
    
      <div className='info'>
        <h2 className='title'>About Me</h2>
        <p className='bio'>
            Hello, my name is Karen Adkins and I am a MERN-certified Full Stack Software Developer. 
        I completed Vanderbilt University Coding Bootcamp in January of 2023.Originally from Michigan, I grew up and currently reside in middle Tennessee.
        My previous work experience is mostly customer service in the restaurant industry as a server, bartender,
        and front-of-house supervisor. I am also the only parent of an adorable little boy 
        who recently celebrated his 4th birthday, so when I am not working or coding, 
        you can usually find me playing with dinosaurs, HotWheels, or Legos!<br></br>
          This is my first venture into the tech world, so although I do not have any prior technical experience, 
        I am an innovative problem solver with a passion for learning. I have excellent communication skills and 
        I thrive in a fast-paced environment. I am an optimistic go-getter and a great team player. Since bootcamp ended, 
        I have been continuing my education with courses from Udemy on the MERN stack, data structures, and algorithms.
        Please check out my projects featured in this portfolio to see examples of my solo and collaborative works!

        </p>
        <h3>Recommendation</h3>
        <p className='recommendation'>
        Karen is a diligent person who is always willing to go above and beyond to get the job done. 
        Her commitment and dedication to her work are evident in everything she does. She is a valuable asset 
        to any team, and her positive attitude and eagerness to learn make her a pleasure to work with.
        I highly recommend Karen for any opportunity she pursues. Her hardworking nature, quick learning ability, 
        and proactive problem-solving approach will undoubtedly make her a valuable addition to any organization.
        <br></br>--Saurav Khatiwada, Software Engineer, Vanderbilt Bootcamp Instructor
        </p>
      </div>
    </div>
  )
}

export default Home;