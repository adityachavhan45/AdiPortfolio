import React, { useState, useEffect } from "react";
import "./About.css";

export default function About({ aboutRef }) {
  const [open, setOpen] = useState(null);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fullText = "Full-Stack Developer & Penetration Tester";
    let index = 0;

    const typingEffect = setInterval(() => {
      setTitle(fullText.slice(0, index + 1));
      index++;
      if (index >= fullText.length) {
        clearInterval(typingEffect);
      }
    }, 100);

    return () => clearInterval(typingEffect);
  }, []);

  const toggleAccordion = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section ref={aboutRef} className="about">
      <div className="about-content">
        <h2 className="title">About Me</h2>
        <p className="typing-text">
          I am a <strong>{title}</strong>
        </p>
        <p>
          With experience in frontend, backend, and security testing, I bridge
          the gap between development and cybersecurity, ensuring applications
          are both functional and secure.
        </p>

        <div className="accordion-container">
          <button onClick={() => toggleAccordion(1)} className="accordion-title">
            Programming Languages ▼
          </button>
          {open === 1 && (
            <ul className="accordion-content">
              <li>C and C++</li>
              <li>Core Java</li>
              <li>Python</li>
              <li>ASP .NET</li>
              <li>HTML, CSS, JS, React.js</li>
              <li>Node.js and MongoDB</li>
            </ul>
          )}

          <button onClick={() => toggleAccordion(2)} className="accordion-title">
            Cyber Security ▼
          </button>
          {open === 2 && (
            <ul className="accordion-content">
              <li>Penetration Testing</li>
              <li>Network Security</li>
              <li>Mobile Application Vulnerability Analysis</li>
              <li>Cloud Security</li>
              <li>OWASP Top 10</li>
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
