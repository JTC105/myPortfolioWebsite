import React from 'react';
import PropTypes from 'prop-types';
import styles from './SkillCard.module.css';

const SkillCard = ({ skill }) => {
  return (
    <div className={styles.skillCard}>
      <img
        src={skill.icon}
        alt={skill.name}
        className={styles.skillIcon}
      />
      <h3 className={styles.skillName}>{skill.name}</h3>
    </div>
  );
};

SkillCard.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default SkillCard;