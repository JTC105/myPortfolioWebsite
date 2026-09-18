import React from 'react';
import styles from './Skills.module.css';

const skills = [
  { name: 'React', icon: 'devicon-react-original colored' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
  { name: 'HTML5', icon: 'devicon-html5-plain colored' },
  { name: 'CSS3', icon: 'devicon-css3-plain colored' },
  { name: 'Git', icon: 'devicon-git-plain colored' },
];

const Skills = () => {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.heading}>
        <p className={styles.eyebrow}>My toolkit</p>
        <h2>Tools I use to bring ideas to life.</h2>
      </div>

      <div className={styles.grid}>
        {skills.map((skill) => (
          <article className={styles.skill} key={skill.name}>
            <i className={`${skill.icon} ${styles.icon}`} aria-hidden="true" />
            <span>{skill.name}</span>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;