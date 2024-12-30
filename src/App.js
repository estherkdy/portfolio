import React, { useState, useEffect } from 'react';
import './App.css';

// Header Component
const Header = ({ toggleTheme, isDarkMode }) => {
  return (
    <header>
      <div className="logo">Esther Kim</div>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </nav>
      <button onClick={toggleTheme}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};

// Hero Section Component
const Hero = () => {
  return (
    <section className="hero">
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

// About Section Component
const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>Hi, I'm Esther, a passionate web developer focused on creating engaging and user-friendly websites and applications.</p>
      <p>With a focus on front-end technologies like React, I aim to build modern and responsive websites that provide excellent user experiences.</p>
    </section>
  );
};

// Projects Section Component
const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <p>Here are some of the projects I've worked on...</p>
    </section>
  );
};

// Resume Section Component
const Resume = () => {
  return (
    <section id="resume">
      <h2>My Resume</h2>
      <p>Download my resume here.</p>
    </section>
  );
};

// Contact Section Component
const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>Feel free to get in touch with me!</p>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        <a href="https://github.com/estherkdy" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/estherkdy/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <p>Esther Kim</p>
    </footer>
  );
};

// Main App Component
const App = () => {
  // Dark Mode/Light Mode state
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Load the theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    } else {
      setIsDarkMode(false);
      document.body.classList.add('light-mode');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      if (newMode) {
        localStorage.setItem('theme', 'dark');
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
      } else {
        localStorage.setItem('theme', 'light');
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
      }
      return newMode;
    });
  };

  return (
    <div className="App">
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
