import React, { useState } from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote: 'Reliable, detail-oriented, and always committed from start to finish. A dependable colleague who is always willing to answer questions, share knowledge, and lend a helping hand whenever needed. Truly a one-call-away teammate you can always count on.',
    name: 'Ruby Ann Navarro',
    role: 'Full-Stack Developer, ITM',
  },
  {
    quote: 'A friend who truly knows his value, he is goal-oriented, a dependable team player, and someone you can rely on. His dedication and consistency make him an asset in any endeavor, and his character inspires trust and respect from those around him.',
    name: 'Anjanette Tabamo',
    role: 'Associate Technical Architect, BPI',
  },
  {
    quote: 'Even as a first‑year developer, John showed qualities of someone who will eventually lead teams. He communicates clearly, documents his work well, and approaches tasks with a sense of ownership.',
    name: 'Jan-Benedict Lukban',
    role: 'Technical Support Representative 4, Foundever',
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];

  const changeTestimonial = (direction) => {
    setActive(
      (current) =>
        (current + direction + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className={styles.section} id="testimonials">
      <p className={styles.eyebrow}>Testimonials</p>

      <blockquote>“{testimonial.quote}”</blockquote>

      <div className={styles.author}>
        <strong>{testimonial.name}</strong>
        <span>{testimonial.role}</span>
      </div>

      <div className={styles.controls}>
        <button onClick={() => changeTestimonial(-1)} aria-label="Previous testimonial">
          ←
        </button>
        <span>
          {String(active + 1).padStart(2, '0')} /{' '}
          {String(testimonials.length).padStart(2, '0')}
        </span>
        <button onClick={() => changeTestimonial(1)} aria-label="Next testimonial">
          →
        </button>
      </div>
    </section>
  );
};

export default Testimonials;