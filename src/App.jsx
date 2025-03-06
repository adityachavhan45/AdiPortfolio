import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Projects from "./Component/Projects/Projects";
import Contact from "./Component/Contact/Contact";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <div>
      <Header
        scrollToSection={scrollToSection}
        refs={{ homeRef, aboutRef, projectsRef, contactRef }}
      />
      <div ref={homeRef}>
        <Home />
      </div> <br />
 
      <div ref={aboutRef}>
        <About />
      </div> <br />
      <div ref={projectsRef}>
        <Projects />
      </div> <br />
      <div ref={contactRef}>
        <Contact />
      </div>
      </div>
    </>
  );
};

export default App;
