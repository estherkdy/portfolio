import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="section-container about-container">
        <div className="about-text">
          <h1>About</h1>
          <hr />
          <div className="about-image">
            <img src="/profilepic.jpeg" alt="Esther Kim" />
          </div>
          <p>
            Hi, I'm Esther, a passionate web developer focused on creating
            engaging and user-friendly websites and applications.
          </p>
          <p>
            With a focus on front-end technologies like React, I aim to build
            modern and responsive websites that provide excellent user
            experiences.
          </p>
          <p>
            I also have experience in data analytics, visualization, and
            project management, allowing me to tackle both technical and
            organizational challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
