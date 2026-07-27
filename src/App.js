import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from "react-router-dom";
import "./App.css";

import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";

// Header Component
const Header = ({ toggleTheme, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const linkClass = ({ isActive }) => (isActive ? "active-link" : "");

  return (
    <header>
      <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
        EK
      </Link>
      <nav className={isMenuOpen ? "mobile-menu" : ""}>
        <NavLink to="/about" className={linkClass} onClick={() => setIsMenuOpen(false)}>About</NavLink>
        <NavLink to="/projects" className={linkClass} onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
        <NavLink to="/resume" className={linkClass} onClick={() => setIsMenuOpen(false)}>Resume</NavLink>
        <NavLink to="/contact" className={linkClass} onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
      </nav>
      <div className="header-right">
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          ☰
        </button>
      </div>
    </header>
  );
};

// Hero Section Component (Homepage)
const Hero = () => {
  return (
    <section className="hero">
      <div>
        <div className="eyebrow">Hello, I'm</div>
        <h1>
          Esther Kim
          <a
            href="/CTS_Certificate_EstherKim.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-badge-link"
            title="AVIXA Certified Technology Specialist — view certificate"
          >
            <img src="/CTS_small_badge_EstherKim.png" alt="AVIXA CTS Certified" className="hero-badge" />
          </a>
        </h1>
        <p className="tagline">
          AV Control Systems Programmer building reliable, well-documented systems —
          with a growing focus on network engineering, data, and cybersecurity.
        </p>
        <div className="hero-actions">
          <Link to="/projects">
            <button>View My Work</button>
          </Link>
          <Link to="/contact">
            <button className="btn-secondary">Get in Touch</button>
          </Link>
        </div>
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
        <a href="mailto:estherkimmy@protonmail.com">Email</a>
      </div>
      <p>&copy; {new Date().getFullYear()} Esther Kim</p>
    </footer>
  );
};

// Main App Component
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setIsDarkMode(false);
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    } else {
      // Default to dark mode
      setIsDarkMode(true);
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
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
