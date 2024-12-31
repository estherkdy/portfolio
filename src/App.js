import React, { useState, useEffect } from 'react';
import './App.css';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
// Header Component
const Header = ({ toggleTheme, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header>
      <div className="logo">KDY</div>
      <nav className={isMenuOpen ? 'mobile-menu' : ''}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
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
        <h1>I'm Esther Kim</h1>
        <p>Web Developement | Database Management | Problem Solving</p>
        <button onClick={() => window.scrollTo({ top: document.getElementById('about').offsetTop, behavior: 'smooth' })}>
          Learn More About Me
        </button>
      </div>
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
 
// Footer Component
const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        <a href="https://github.com/estherkdy" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/estherkimmy/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
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
