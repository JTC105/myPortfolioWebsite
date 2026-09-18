import React, { useState } from 'react';
import styles from './Contact.module.css';

const initialFormData = {
  name: '',
  email: '',
  message: '',
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');

  const handleChange = ({ target }) => {
    setFormData((current) => ({ ...current, [target.name]: target.value }));
    setErrors((current) => ({ ...current, [target.name]: '' }));
    setSubmitted(false);
    setServerError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message.';
    }

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setServerError('');
    setSubmitted(false);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Unable to send your message.');
      }

      setFormData(initialFormData);
      setSubmitted(true);
    } catch (error) {
      setServerError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.intro}>
        <p className={styles.eyebrow}>Get in touch</p>
        <h2>Have an idea? Let&apos;s make it happen.</h2>
        <p>Tell me about your project and I&apos;ll get back to you soon.</p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        {[
          ['name', 'Name', 'text', 'Your name'],
          ['email', 'Email', 'email', 'you@example.com'],
        ].map(([id, label, type, placeholder]) => (
          <div className={styles.formGroup} key={id}>
            <label htmlFor={id}>{label}</label>
            <input
              id={id}
              name={id}
              type={type}
              value={formData[id]}
              onChange={handleChange}
              placeholder={placeholder}
              aria-invalid={Boolean(errors[id])}
            />
            {errors[id] && <span className={styles.error}>{errors[id]}</span>}
          </div>
        ))}

        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message && (
            <span className={styles.error}>{errors.message}</span>
          )}
        </div>

        <button
          className={styles.submitButton}
          type="submit"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send message'}
          {!loading && <span aria-hidden="true">↗</span>}
        </button>

        {submitted && (
          <p className={styles.success} role="status">
            Your message was sent successfully.
          </p>
        )}

        {serverError && (
          <p className={styles.serverError} role="alert">
            {serverError}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;