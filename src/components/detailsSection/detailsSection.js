import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Circle from '../../assets/patterns/circle.svg';
import Arrow from '../../assets/patterns/left-downward-arrow.svg';
import Button from '../button/button';
import * as styles from './detailsSection.module.css';

const DetailsSection = () => {
  return (
    <section className={styles.detailsSection}>
      <div className={styles.detail}>
        <Circle className={styles.circle} />
        <Arrow className={styles.arrow} />
        <div className={styles.content}>
          <h2 className={styles.heading}>Easy to use riding telemetry</h2>
          <p className={styles.text}>
            The Scoot app is available with riding telemetry. This means it can
            show you your average speed, how long you've been using the scooter,
            your traveling distance, and many more things all in an easy to use
            app.
          </p>
          <Button>Learn More</Button>
        </div>

        <StaticImage
          className={styles.image}
          src="../../assets/images/telemetry.jpg"
          alt="A young woman looking at a mobile phone"
        />
      </div>

      <div className={`${styles.detail} ${styles.detailReverse}`}>
        <Circle className={styles.circleReverse} />
        <Arrow className={styles.arrowReverse} />
        <div className={styles.contentReverse}>
          <h2 className={styles.heading}>Coming to a city near you</h2>
          <p className={styles.text}>
            Scoot is available in 4 major cities so far. We’re expanding
            rapidly, so be sure to let us know if you want to see us in your
            hometown. We’re aiming to let our scooters loose on 23 cities over
            the coming year.
          </p>
          <Button>Learn More</Button>
        </div>

        <StaticImage
          className={styles.image}
          src="../../assets/images/near-you.jpg"
          alt="View looking down a busy city street with high rise builidings on either side"
        />
      </div>

      <div className={styles.detail}>
        <Circle className={styles.circle} />
        <Arrow className={styles.arrow} />
        <div className={styles.content}>
          <h2 className={styles.heading}>Zero hassle payments</h2>
          <p className={styles.text}>
            Our payment is as easy as one two three. We accept most credit cards
            and debit cards. You can also link your PayPal account inside the
            app. Need to pay later? No worries! You can defer payment for up to
            a month.
          </p>
          <Button>Learn More</Button>
        </div>

        <StaticImage
          className={styles.image}
          src="../../assets/images/payments.jpg"
          alt="Close up of a man opening a wallet and taking out a bank note"
        />
      </div>
    </section>
  );
};

export default DetailsSection;
