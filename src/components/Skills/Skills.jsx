import React from 'react';
import styles from './Skills.module.css';

// Import Icons
import dotnetIcon from '../../assets/icons/dotnet.svg';
import sqlserverIcon from '../../assets/icons/sql.png';
import vbnetIcon from '../../assets/icons/vb.png';

const skills = [
  { name: 'React', icon: 'devicon-react-original colored' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
  { name: 'HTML5', icon: 'devicon-html5-plain colored' },
  { name: 'CSS3', icon: 'devicon-css3-plain colored' },
  { name: 'Git', icon: 'devicon-git-plain colored' },

  // Microsoft stack (Simple Icons)
  { name: '.NET', icon: dotnetIcon, type: 'svg' },
  { name: 'C#', icon: 'devicon-csharp-plain colored' },
  { name: 'VB.NET', icon: vbnetIcon, type: 'png' },

  // Backend & tools
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
  { name: 'Express', icon: 'devicon-express-original colored' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
  { name: 'MS SQL Server', icon: sqlserverIcon, type: 'png' },
  { name: 'Oracle', icon: 'devicon-oracle-plain colored' },
  { name: 'Playwright', icon: 'devicon-playwright-plain colored' },
];

const Skills = () => {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.heading}>
        <p className={styles.eyebrow}>TECHNOLOGIES</p>
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