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
            Hi, I'm Esther. I like chasing the world of technology.
          </p>
          <p>
            Passionate in Audio Visual control systems and how we interact with data. 

            With a focus on front-end technologies, I also build
            modern and responsive websites that provide excellent user
            experiences.
          </p>
          <p>
            My interests include network engineering, data analytics, visualization, and
            project management, allowing me to tackle both technical and
            organizational challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
