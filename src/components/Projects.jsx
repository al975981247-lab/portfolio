import { useState } from "react";
import Section from "./Section.jsx";
import { projects } from "../data/portfolio.js";
import "../styles/projects.css";

function ProjectRow({ project, open, onToggle }) {
  const panelId = `panel-${project.id}`;
  return (
    <li className="project" data-open={open}>
      <h3 className="project__heading">
        <button
          type="button"
          className="project__toggle"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="project__title">{project.title}</span>
          <span className="project__meta">{project.type}, {project.year}</span>
          <span className="project__icon" aria-hidden="true" />
        </button>
      </h3>
      <div id={panelId} className="project__panel" role="region" aria-label={project.title}>
        <div className="project__panel-inner">
          <p>{project.description}</p>
          <ul className="project__stack" aria-label="Built with">
            {project.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <div className="project__links">
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer">Visit site</a>
            )}
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noreferrer">View code</a>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default function Projects() {
  const [openId, setOpenId] = useState(projects[0].id);

  return (
    <Section id="projects" title="Projects">
      <ul className="projects">
        {projects.map((project) => (
          <ProjectRow
            key={project.id}
            project={project}
            open={openId === project.id}
            onToggle={() => setOpenId((id) => (id === project.id ? null : project.id))}
          />
        ))}
      </ul>
    </Section>
  );
}
