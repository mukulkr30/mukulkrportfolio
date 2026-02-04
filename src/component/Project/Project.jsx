import React from "react";
import "./Project.css";
import { projects } from "../app/app";
import ProjectCard from "./ProjectCard";


export default function Project() {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index}/>
        ))}
      </div>
    </section>
  );
}
