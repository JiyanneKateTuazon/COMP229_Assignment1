// src/pages/Home.js

/**
 * File name: Navigation.css
 * Student's Name: Jiyanne Kate Tuazon
 * Student ID: 301320584
 * Date: 09/27/24
 */

import React from 'react';
import './home.css';
import profilePic from '../assets/jiyanne_pic.jpg';

const Home = () => {
  return (
      <div className="home">
        <div className="home-content">
          <div className="home-image">
            <img src={profilePic} alt="Profile" />
          </div>
          <div className="home-text">
            <h1>Welcome to My Portfolio</h1>
            <p>
            "As a dedicated Database Administrator and Project Research and Development Manager, my mission is to foster innovation and efficiency by ensuring the integrity, security, and accessibility of data systems while driving forward-thinking research initiatives. I aim to provide strategic solutions that empower teams and organizations to make informed decisions, leveraging data to optimize operations and achieve sustainable growth. Through collaboration, continuous improvement, and the application of cutting-edge technologies, I strive to contribute to the development of impactful projects that address both current and future challenges."
            </p>
            <a href="/about" className="btn">Learn More About Me</a>
          </div>
        </div>
      </div>
    );
  }
  
  
  export default Home;