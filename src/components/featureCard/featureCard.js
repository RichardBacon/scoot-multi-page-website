import * as React from 'react';
import * as styles from './featureCard.module.css';

const FeatureCard = ({ heading, text, icon }) => {
  return (
    <div className={styles.featureCard}>
      {icon}

      <div className={styles.content}>
        <h4 className={styles.heading}>{heading}</h4>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
