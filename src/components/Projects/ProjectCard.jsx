import React from 'react';
import PropTypes from 'prop-types';
import styles from './Projects.module.css';

// ProjectCard component to display individual project details
const ProjectCard = ({ project }) => {
    return (
        <div className={styles.projectCard}>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.projectLinks}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    GitHub
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    Live Demo
                </a>
            </div>
        </div>
    );
};

// PropTypes for type checking
// ProjectCard.propTypes = {
//     project: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//         description: PropTypes.string.isRequired,
//         image: PropTypes.string.isRequired,
//         github: PropTypes.string.isRequired,
//         live: PropTypes.string.isRequired,
//     }).isRequired,
// };

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};


export default ProjectCard;