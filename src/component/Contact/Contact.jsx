import React from "react";
import { NavLink } from "react-router-dom";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact</h2>

      <div className="contact-container">
        {/* Left: Info */}
        <div className="contact-card">
          <h3>Get in Touch</h3>
          <p>
            I’m open to software development and AI-related opportunities.
            Feel free to reach out for collaboration, internships, or full-time roles.
          </p>

          <div className="contact-info">
            <span>Email</span>
            <a href="mailto:kumarmukulgupta05@gmail.com">
              kumarmukulgupta05@gmail.com
            </a>
          </div>

          <div className="contact-info">
            <span>Phone</span>
            <a href="tel:+918102266541">+91 8102266541</a>
          </div>

          <div className="contact-links">
            {/* External links MUST stay <a> */}
            <a
              href="https://github.com/mukulkr30"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/mukulkr-aiml/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right: Form */}
        <div className="contact-card">
          <h3>Send a Message</h3>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4" required />

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
