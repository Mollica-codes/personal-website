import React from 'react';
import headshot from '../images/profile-pic-2.JPG';


function About() {
    return (
     <div>
        <div className="green-rectangle"></div>
         <div  id="about-section" className="about-me-wrapper">
            <div className="brown-rectangle"></div>
            <div className="about-img-container">
                <img className="about-img" src={headshot} alt="myself" />
            </div>
            <div className="about-info">
                <h1 className="about-title">About Me</h1>
                <p className="about-text">Hello, I am a recent graduate with a degree in Finance from The Ohio State University.
                 I had started learning code as a hobby and recently decided that I would pursue a career in tech!
                 As for my coding journey, I began learning through FreeCodeCamp. After finishing the sites front-end development courses and projects,
                 I then wanted to test what I've learned in a different online platform. This led me to earning a Scrimba certificate in front-end development.
                 While I am working on more projects, I'm excited to continue developing my skills in python and SQL! 
                 </p>
            </div>
        </div>
     </div>
    );
}

export default About;