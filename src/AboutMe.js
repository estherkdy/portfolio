// src/components/AboutMe.js
import React from 'react';
import Skills from './Skills';
import ContactButton from './ContactButton';
//import profileImage from '../assets/profile.jpg'; // Add your profile image to assets folder

const AboutMe = () => {
  return (
    <section id="about" className="about-me-container">
      <div className="about-me-header">
        <h2>About Me</h2>
        <p>Hi I'm Esther Kim, a passionate web developer focused on creating engaging and user-friendly websites and applications.</p>
      </div>

      <div className="about-me-content">
        <div className="about-me-image">
        
          {/* <img src={profileImage} alt="Your Profile" /> */}
        </div>
        
        <div className="about-me-info">
          <p>
            I specialize in front-end development using React, but I also have experience working with back-end technologies such as Node.js. I love learning new technologies and improving my skills every day. My goal is to build modern, responsive, and accessible websites.
          </p>
          
          <Skills />
          <ContactButton />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
