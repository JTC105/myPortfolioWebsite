import React, { useState } from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote: 'John transformed our complex idea into a clear and beautiful product.',
    name: 'Maria Santos',
    role: 'Product Manager',
  },
  {
    quote: 'Reliable, thoughtful, and highly detail-oriented from start to finish.',
    name: 'Daniel Cruz',
    role: 'Founder, Northstar',
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