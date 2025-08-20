import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";

// Header Component
const Header = ({ toggleTheme, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header>
      <div className="logo">KDY</div>
      <nav className={isMenuOpen ? "mobile-menu" : ""}>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <button onClick={toggleTheme}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

// Hero Section Component (Homepage)
const Hero = () => {
  return (
    <section className="hero">
      <div>
        <h1>I'm Esther Kim</h1>
        <p>Web Development | Database Management | Problem Solving</p>
        <Link to="/about">
          <button>Learn More About Me</button>
        </Link>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        <a
          href="https://github.com/estherkdy"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/estherkimmy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
      <p>Esther Kim</p>
    </footer>
  );
};

// Main App Component
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark-mode");
    } else {
      setIsDarkMode(false);
      document.body.classList.add("light-mode");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        localStorage.setItem("theme", "dark");
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
      } else {
        localStorage.setItem("theme", "light");
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
      }
      return newMode;
    });
  };

  return (
    <Router>
      <div className="App">
        <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

        {/* Define Page Routes */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
