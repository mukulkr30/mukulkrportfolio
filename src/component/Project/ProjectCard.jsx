import React from 'react'

function ProjectCard({project,index}) {
    return (
        <div className="project-card" key={index}>
            <div className="project-header">
              <h3>{project.title}</h3>
              <span className="project-date">{project.date}</span>
            </div>

            <p className="project-desc">{project.desc}</p>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>
          </div>
    )
}

export default ProjectCard
