import * as React from 'react';
import Chevron from '../../assets/icons/chevron.svg';
import * as styles from './faq.module.css';

const Faq = ({ heading }) => {
  return (
    <div className={styles.faq}>
      <h4 className={styles.heading}>{heading}</h4>
      <Chevron />
    </div>
  );
};

export default Faq;
