import React, { useEffect, useState } from 'react';
import styles from './Sidebar.module.css';

const navigation = [
  ['Home', '#home'],
  ['About Me', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Testimonials', '#testimonials'],
  ['Contact', '#contact'],
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const toggleSidebar = () => setIsOpen((current) => !current);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <button
        className={`${styles.menuButton} ${isOpen ? styles.menuButtonOpen : ''}`}
        type="button"
        onClick={toggleSidebar}
        aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={isOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ''}`}
        onClick={closeSidebar}
        aria-hidden="true"
      />

      <aside className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
        <a href="#home" className={styles.logo} onClick={closeSidebar}>
          <span className={styles.logoMark}>J</span>
          <span>My Portfolio</span>
        </a>

        <nav aria-label="Main navigation">
          <ul>
            {navigation.map(([label, href]) => (
              <li key={href}>
                <a href={href} onClick={closeSidebar}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className={styles.availability}>
          <span /> Available for work
        </p>
      </aside>
    </>
  );
};

export default Sidebar;