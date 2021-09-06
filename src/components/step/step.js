import * as React from 'react';
import * as styles from './step.module.css';

const Step = ({ icon, heading, text }) => {
  return (
    <div className={styles.step}>
      <div className={styles.iconWrapper}>{icon}</div>

      <div className={styles.content}>
        <h4 className={styles.heading}>{heading}</h4>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default Step;
