import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.content}>
        <p className={styles.eyebrow}>Full-Stack Developer / .NET Developer</p>
 
        <h1>
          Building things
          <span>that don&apos;t break.</span>
        </h1>

        <p className={styles.description}>
          I create scalable full‑stack systems with optimized APIs, 
          responsive interfaces, and reliable performance across every layer of the stack.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.primaryButton}>
            View my work <span>↗</span>
          </a>
          <a href="#contact" className={styles.secondaryButton}>
            Let’s talk
          </a>
        </div>
      </div>

      <div className={styles.visual} aria-hidden="true">
        <div className={styles.glow} />
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span />
            <span />
            <span />
          </div>
          <div className={styles.codeLine} />
          <div className={styles.codeLineShort} />
          <div className={styles.codeLineLarge} />
          <div className={styles.codeLineShort} />
        </div>
      </div>
    </section>
  );
};

export default Hero;