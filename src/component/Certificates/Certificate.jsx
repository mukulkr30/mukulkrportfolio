import React from "react";
import "./Certificate.css";
import { certificates } from "../app/app";




export default function Certificate() {
  return (
    <section className="cert-section" id="certificates">
      <h2 className="cert-title">Certificates</h2>

      <div className="cert-grid">
        {certificates.map((cert, index) => (
          <div className="cert-card" key={index}>
            <img src={cert.img} alt="Certificate" />
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-btn"
            >
              Verify
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
