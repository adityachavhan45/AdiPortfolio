import React from "react";
import "./Home.css";


export default function Home({ homeRef }) {
 // Function to handle downloading the CV
 const handleDownload = () => {
  // Path to the PDF file in the public folder
  const cvUrl = "/pdf/Adi_CV (1).pdf"; // Update with the new file path

  // Trigger the download
  const link = document.createElement('a');
  link.href = cvUrl;
  link.download = 'Adi_CV.pdf'; // Specify the filename for download
  link.click();
};
  return (
    <section ref={homeRef} className="home">
      <div className="home-content">
        {/* Profile Image */}
        <div className="profile-img">
          <img src="your-image-url.jpg" alt="Aditya Chavhan" />
        </div>

        <h1>Hello, I'm Aditya Chavhan</h1>
        <h2 className="title">Full-Stack Developer & Penetration Tester</h2>
        <p>
          I specialize in building modern, scalable web applications and securing them against vulnerabilities.
          Passionate about coding and cybersecurity.
        </p>
        <div className="btn-group">
          <a href="#projects" className="btn-primary">View Projects</a>
          <button  className="btn-secondary" onClick={handleDownload}>Download CV</button>
        </div>
      </div>
    </section>
  );
}
