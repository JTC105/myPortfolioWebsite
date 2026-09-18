import React from 'react';
import styles from './About.module.css';

const About = ({
  name = 'John Vincent Canseco',
  bio = 'I create modern, responsive web experiences with React and JavaScript.',
  image = '/myPortfolioWebsite/profile.jpg',
}) => {
  return (
    <section className={styles.section} id="about">
      <div className={styles.heading}>
        <p className={styles.eyebrow}>A little about me</p>
        <h2>
          Turning ideas into
          <span> meaningful experiences.</span>
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
            Hi, I&apos;m <strong>{name}</strong> — a frontend developer focused
            on building thoughtful digital products.
          </p>

          <p className={styles.bio}>{bio}</p>

          <div className={styles.details}>
            <div>
              <strong>Focus</strong>
              <span>UI development & interaction</span>
            </div>
            <div>
              <strong>Based in</strong>
              <span>Philippines</span>
            </div>
          </div>

          <a href="#contact" className={styles.link}>
            Let&apos;s work together <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;