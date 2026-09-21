import React from 'react';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'Personal Portfolio - Website',
    description: 'A focused personal portfolio for showcasing work and achievements.',
    category: 'Web Design & Development',
    color: 'purple',
  },
  {
    title: 'In-house Auxiliary Reporting Channel',
    description: 'A reporting channel for internal use, designed for bank data collection.',
    category: 'Web Design & Development',
    color: 'blue',
  },
  {
    title: 'F3DE - File Formatter & Data Extractor',
    description: 'A simple productivity tool designed for Data Extraction Requests.',
    category: 'Standalone Application Development',
    color: 'orange',
  },
];

const Projects = () => {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Selected work</p>
          <h2>Projects with purpose.</h2>
        </div>
        <p className={styles.intro}>
          A curated collection of full‑stack and .NET projects 
          built with performance, clarity, and real‑world impact in mind.
        </p>
      </div>

      <div className={styles.grid}>
        {projects.map((project) => (
          <article
            className={`${styles.project} ${styles[project.color]}`}
            key={project.title}
          >
            <div className={styles.mockup} aria-hidden="true">
              <div />
              <div />
              <div />
            </div>

            <div className={styles.projectBody}>
              <p>{project.category}</p>
              <h3>{project.title}</h3>
              <span>{project.description}</span>
              {/* <a href="#contact" aria-label={`Discuss ${project.title}`}>
                View project ↗
              </a> */}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;