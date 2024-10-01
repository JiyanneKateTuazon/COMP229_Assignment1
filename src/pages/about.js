// src/pages/About.js

/**
 * File name: Navigation.css
 * Student's Name: Jiyanne Kate Tuazon
 * Student ID: 301320584
 * Date: 09/27/24
 */

import React from 'react';
import './about.css';
import profilePic from '../assets/jiyanne.jpg'; 
import resumePDF from '../assets/Tuazon - Resume.pdf'; 

const About = () => {
    return (
  <div className="about">
    <div className="about-content">
      <div className="about-image">
        <img src={profilePic} alt="Profile" />
      </div>
      <div className="about-text">
        <h1>About Me</h1>
        <p>Hello, My name is Jiyanne Kate Tuazon. I've decided to study Software Engineering Technology.</p><p> This is my assignment portfolio in React. I am an experienced Database Administrator and Project Research and Development Manager who is passionate about developing immersive digital experiences.</p>
         <p>With experience in both design principles and technological implementation, I specialize in developing a well-oriented and user-friendly applications.</p>
         <p>My approach is guided by a desire for excellence, innovation, and lifelong learning, ensuring that each project exceeds expectations and resonates with audiences.</p>
        <a href={resumePDF} className="btn" target="_blank" rel="noopener noreferrer">Download Resume</a>
      </div>
    </div>
  </div>
);

};


export default About;