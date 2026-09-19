import React from 'react';
import styles from './About.module.css';

const About = ({
  name = 'John Vincent Canseco',
  bio = 'I craft full‑stack applications with React, JavaScript, and robust .NET backend services.',
  image = '/resume_pic.jpg',
}) => {
  return (
    <section className={styles.section} id="about">
      <div className={styles.heading}>
        <p className={styles.eyebrow}>A little about me</p>
        <h2>
          I turn ideas into
          <span> production‑ready standalone and web applications.</span>
        </h2>
      </div>

      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <div className={styles.imageAccent} />
          <img
            src={image}
            alt={`${name}'s portrait`}
            className={styles.image}
          />
        </div>

        <div className={styles.text}>
          <p className={styles.intro}>
            Hi, I&apos;m <strong>{name}</strong> — a full‑stack and .NET developer crafting polished, 
            meaningful digital experiences across frontend and backend.
          </p>

          <p className={styles.bio}>{bio}</p>

          <div className={styles.details}>
            <div>
              <strong>Focus</strong>
              <span>Full‑stack development & modern .NET applications</span>
            </div>
            <div>
              <strong>Based in</strong>
              <span>Philippines</span>
            </div>
          </div>

          <a href="#contact" className={styles.link}>
            Let&apos;s build something great<span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;