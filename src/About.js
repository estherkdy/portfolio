import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="section-container about-container">
        <div className="about-image">
          <img src="/profilepic.jpeg" alt="Esther Kim" />
        </div>
        <div className="about-text">
          <h1>About</h1>
          <hr />
          <p>
            Hi, I'm Esther. I like chasing the world of technology.
          </p>
          <p>
            Passionate in Audio Visual control systems and how we interact with data.
            With a focus on front-end technologies, I also build modern and
            responsive websites that provide excellent user experiences.
          </p>
          <p>
            My interests include network engineering, data analytics, visualization, and
            project management, allowing me to tackle both technical and
            organizational challenges.
          </p>
          <div className="about-highlights">
            <span>AV Control Systems</span>
            <span>Extron ControlScript</span>
            <span>Network Engineering</span>
            <span>Data Analytics</span>
            <span>Cybersecurity</span>
            <span>Data Control</span>
            <span>Work Management</span>
          </div>

          <div className="certifications">
            <h2>Certifications</h2>
            <div className="cert-card">
              <img src="/SecPlus_badge_EstherKim.png" alt="CompTIA Security+ Certified badge" className="cert-badge" />
              <div className="cert-details">
                <h4>CompTIA Security+</h4>
                <p>CompTIA &middot; September 2026</p>
                <div className="cert-links">
                  <a href="/SecPlus_Certificate_EstherKim.pdf" target="_blank" rel="noopener noreferrer">View Certificate</a>
                </div>
              </div>
            </div>
            <div className="cert-card">
              <img src="/CTS_small_badge_EstherKim.png" alt="AVIXA Certified Technology Specialist badge" className="cert-badge" />
              <div className="cert-details">
                <h4>Certified Technology Specialist (CTS)</h4>
                <p>AVIXA &middot; March 2026</p>
                <div className="cert-links">
                  <a href="/CTS_Certificate_EstherKim.pdf" target="_blank" rel="noopener noreferrer">View Certificate</a>
                  <a href="/CTSVerificationLetter_EstherKim.pdf" target="_blank" rel="noopener noreferrer">Verification Letter</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
