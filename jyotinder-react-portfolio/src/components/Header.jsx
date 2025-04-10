import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for routing

function Header() {
  // State for hamburger menu toggle
  const [isNavOpen, setIsNavOpen] = useState(false);
  // State for dark mode (will be moved to context/global state later)
  const [isDark, setIsDark] = useState(true); // Default to dark

  // Effect to load theme from localStorage (simplified for now)
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const initialIsDark = storedTheme !== "light";
    setIsDark(initialIsDark);
    document.body.classList.toggle("dark-mode", initialIsDark);
    // Ideally, also update meta theme-color here if needed
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
    document.body.classList.toggle("dark-mode", newIsDark);
    // Update meta theme-color if needed
  };

  // Function to determine NavLink class based on active state
  const getNavLinkClass = ({ isActive }) => isActive ? 'active' : '';

  return (
    <header>
      <div className="nav-container">
        <button
          className="dark-mode-toggle"
          aria-label="Toggle Dark Mode"
          aria-pressed={isDark}
          onClick={toggleDarkMode}
        >
          <span className="toggle-icon">{isDark ? '🔆' : '🌑'}</span>
        </button>

        <button
          className={`hamburger ${isNavOpen ? 'open' : ''}`}
          aria-label="Toggle Navigation"
          aria-expanded={isNavOpen}
          onClick={toggleNav}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Use NavLink for automatic active class handling */}
        <nav className={`nav-links ${isNavOpen ? 'open' : ''}`} aria-label="Main navigation">
          <NavLink to="/" className={getNavLinkClass} onClick={() => setIsNavOpen(false)}>Home</NavLink>
          <NavLink to="/bookshelf" className={getNavLinkClass} onClick={() => setIsNavOpen(false)}>Bookshelf</NavLink>
          <NavLink to="/resume" className={getNavLinkClass} onClick={() => setIsNavOpen(false)}>Resume</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header; 