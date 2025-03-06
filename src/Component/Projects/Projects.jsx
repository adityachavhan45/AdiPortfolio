import React from "react";
import "./Projects.css";

export default function Projects({ projectsRef }) {
  return (
    <section ref={projectsRef} className="projects">
      <div className="container">
        <h2 className="title">My Projects</h2>

        <div className="project-list">
          {/* Blogging Website */}
          <div className="project-card">
            <h3>📖 Blogging Website</h3>
            <p>
              A fully responsive blogging platform built with React.js,Bootstrap, Node.js, 
              and MongoDB. Users can create, edit, and delete posts, 
              comment on articles, and interact in a secure environment.
            </p>
          </div>

          {/* E-commerce Website */}
          <div className="project-card">
            <h3>🛒 E-commerce Website</h3>
            <p>
              A feature-rich online store developed using React.js, Express.js, 
              and MongoDB. Integrated with secure payment gateways, 
              a user-friendly cart system, and an admin panel for product management.
            </p>
          </div>

          {/* Cybersecurity Vulnerability Scanner */}
          <div className="project-card">
            <h3>🛡️ Cybersecurity Vulnerability Scanner</h3>
            <p>
              A custom-built vulnerability scanner using Python, designed to detect 
              security weaknesses in web applications. Uses Python, Requests, and BeautifulSoup 
              for scanning and analyzing website security vulnerabilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
