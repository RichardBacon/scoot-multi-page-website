import * as React from 'react';
import * as styles from './value.module.css';

const Value = ({ number, heading, text, image }) => {
  return (
    <div className={styles.value}>
      <div className={styles.imageWrapper}>
        {image}
        <div className={styles.valueNumber}>{number}</div>
      </div>

      <div className={styles.content}>
        <h4 className={styles.heading}>{heading}</h4>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default Value;
