import * as React from 'react';
import Line from '../../assets/patterns/line-yellow.svg';
import RightArrow from '../../assets/patterns/right-arrow.svg';
import WhiteCircles from '../../assets/patterns/white-circles.svg';
import Button from '../button/button';
import * as styles from './heroSection.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.headingWrapper}>
        <h1 className={styles.heading}>Scooter sharing made simple</h1>
      </div>

      <div className={styles.info}>
        <Line />
        <div className={styles.text}>
          <p>
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you’re away!
          </p>
        </div>
        <RightArrow className={styles.rightArrow} />
        <WhiteCircles className={styles.whiteCircles} />
      </div>

      <div className={styles.buttonWrapper}>
        <Button>Get Scootin</Button>
      </div>
    </section>
  );
};

export default Hero;
