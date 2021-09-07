import * as React from 'react';
import Button from '../button/button';
import * as styles from './job.module.css';

const Job = ({ title, location }) => {
  return (
    <div className={styles.job}>
      <div className={styles.content}>
        <h3 className={styles.heading}>{title}</h3>
        <p className={styles.text}>{location}</p>
      </div>

      <Button>Apply</Button>
    </div>
  );
};

export default Job;
