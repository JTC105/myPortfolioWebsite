import React from 'react';
import PropTypes from 'prop-types';
import styles from './Testimonials.module.css';

// TestimonialCard component to display individual testimonials
const TestimonialCard = ({ testimonial }) => {
    return (
        <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>"{testimonial.text}"</p>
            <h4 className={styles.author}>{testimonial.author}</h4>
            <p className={styles.role}>{testimonial.role}</p>
        </div>
    );
};

// PropTypes for type checking
TestimonialCard.propTypes = {
    testimonial: PropTypes.shape({
        text: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
    }).isRequired,
};

export default TestimonialCard;