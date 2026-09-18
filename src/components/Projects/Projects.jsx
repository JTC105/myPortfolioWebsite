import React from 'react';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'Finance Dashboard',
    description: 'A focused dashboard for tracking personal finances and goals.',
    category: 'Product design',
    color: 'purple',
  },
  {
    title: 'Creative Studio',
    description: 'A refined marketing website for a modern creative agency.',
    category: 'Web development',
    color: 'blue',
  },
  {
    title: 'Task Flow',
    description: 'A simple productivity tool designed for focused teams.',
    category: 'React application',
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
          A selection of products and experiences built with clarity,
          performance, and detail in mind.
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
              <a href="#contact" aria-label={`Discuss ${project.title}`}>
                View project ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;