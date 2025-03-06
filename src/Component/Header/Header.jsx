import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const Header = ({ scrollToSection, refs }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid"> {/* Full width container */}
        {/* Left-aligned Brand */}
        <a className="navbar-brand fw-bold ms-2" href="#">Aditya Chavhan</a> 
        
        {/* Navbar Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items (Aligned Left, just after name) */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-4"> {/* Adds spacing after name */}
            <li className="nav-item">
              <button className="nav-link btn btn-link text-dark fw-semibold" onClick={() => scrollToSection(refs.homeRef)}>
                Home
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link text-dark fw-semibold" onClick={() => scrollToSection(refs.aboutRef)}>
                About
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link text-dark fw-semibold" onClick={() => scrollToSection(refs.projectsRef)}>
                Projects
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link text-dark fw-semibold" onClick={() => scrollToSection(refs.contactRef)}>
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
