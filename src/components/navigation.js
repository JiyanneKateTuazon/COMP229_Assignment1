// src/components/Navigation.js

/**
 * File name: Navigation.css
 * Student's Name: Jiyanne Kate Tuazon
 * Student ID: 301320584
 * Date: 09/27/24
 */

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.jpg'; 
import './navigation.css'; 

const Navigation = () => {
  return (
  <nav className="navigation">
    <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" />
    </div>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About Me</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
    );

  };

export default Navigation; 