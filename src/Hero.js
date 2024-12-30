import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="group">
      <div>
        <h1>Welcome to Esther's Portfolio</h1>
        <p>Web Developer | React Expert | Problem Solver</p>
        <button onClick={() => window.scrollTo({ top: document.getElementById('about').offsetTop, behavior: 'smooth' })}>
          Learn More About Me
        </button>
      </div>
    </section>
  );
};

export default Hero;
