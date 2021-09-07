import * as React from 'react';
import Circle from '../../assets/patterns/circle.svg';
import Arrow from '../../assets/patterns/left-downward-arrow.svg';
import Button from '../button/button';
import * as styles from './feature.module.css';

const Feature = ({ heading, text, image, reverse }) => {
  return (
    <div className={`${styles.feature} ${reverse && styles.featureReverse}`}>
      <Circle
        className={`${styles.circle} ${reverse && styles.circleReverse}`}
      />
      <Arrow className={`${reverse ? styles.arrowReverse : styles.arrow}`} />
      <div className={`${styles.content} ${reverse && styles.contentReverse}`}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.text}>{text}</p>
        <Button>Learn More</Button>
      </div>

      <div className={styles.imageWrapper}>{image}</div>
    </div>
  );
};

export default Feature;
