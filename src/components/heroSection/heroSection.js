import * as React from 'react';
import Line from '../../assets/patterns/line-yellow.svg';
import RightArrow from '../../assets/patterns/right-arrow.svg';
import WhiteCircles from '../../assets/patterns/white-circles.svg';
import Button from '../button/button';
import * as styles from './heroSection.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.info}>
        <h1 className={styles.heading}>Scooter sharing made simple</h1>

        <p className={styles.text}>
          Scoot takes the hassle out of urban mobility. Our bikes are placed in
          convenient locations in each of our cities. Use our app to locate the
          nearest bike, unlock it with a tap, and you’re away!
        </p>

        <div className={styles.buttonWrapper}>
          <Button>Get Scootin</Button>
        </div>
      </div>

      <div className={styles.icons}>
        <Line className={styles.line} />
        <RightArrow className={styles.rightArrow} />
        <WhiteCircles className={styles.whiteCircles} />
      </div>
    </section>
  );
};

export default Hero;
