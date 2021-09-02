import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Feature from '../feature/feature';
import * as styles from './featuresSection.module.css';

const FeaturesSection = () => {
  return (
    <section className={styles.featuresSection}>
      <Feature
        heading="Easy to use riding telemetry"
        text="The Scoot app is available with riding telemetry. This means it can
          show you your average speed, how long you've been using the scooter,
          your traveling distance, and many more things all in an easy to use
          app."
        image={
          <StaticImage
            className={styles.image}
            src="../../assets/images/telemetry.jpg"
            alt="A young woman looking at a mobile phone"
          />
        }
      />

      <Feature
        heading="Coming to a city near you"
        text="Scoot is available in 4 major cities so far. We’re expanding
            rapidly, so be sure to let us know if you want to see us in your
            hometown. We’re aiming to let our scooters loose on 23 cities over
            the coming year."
        image={
          <StaticImage
            className={styles.image}
            src="../../assets/images/near-you.jpg"
            alt="View looking down a busy city street with high rise builidings on either side"
          />
        }
        reverse={true}
      />

      <Feature
        heading="Zero hassle payments"
        text="Our payment is as easy as one two three. We accept most credit cards
            and debit cards. You can also link your PayPal account inside the
            app. Need to pay later? No worries! You can defer payment for up to
            a month."
        image={
          <StaticImage
            className={styles.image}
            src="../../assets/images/payments.jpg"
            alt="Close up of a man opening a wallet and taking out a bank note"
          />
        }
      />
    </section>
  );
};

export default FeaturesSection;
