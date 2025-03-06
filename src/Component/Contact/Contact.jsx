import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact({ contactRef }) {
  const formRef = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t97f64j", //EmailJS Service ID
        "template_0wco1un", //EmailJS Template ID
        formRef.current,
        "RsFIMefRRqw0VDEMr" //EmailJS Public Key
      )
      .then(
        (result) => {
          setStatusMessage(" Message sent successfully!");
          formRef.current.reset(); //Clear the form
        },
        (error) => {
          setStatusMessage(" Failed to send message. Try again!");
        }
      );
  };

  return (
    <section ref={contactRef} className="contact">
      <div className="container">
        <h2 className="title">Contact Me</h2>

        <div className="contact-info">
          <p>📧 Email: <a href="mailto:chavhanshivaji50@gmail.com">chavhanshivaji50@gmail.com</a></p>
          <p>📞 Mobile: <a href="tel:+918087182774">+91 8087182774</a></p>
        </div>

        {/* Contact Form */}
        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="from_name" placeholder="Your Name" required />
          <input type="email" name="from_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Status Message */}
        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </div>
    </section>
  );
}
