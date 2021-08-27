import * as React from 'react';
import Seo from '../components/seo/seo';
import Layout from '../components/layout/layout';
import Hero from '../components/hero/hero';
import FeatureCard from '../components/featureCard/featureCard';
import Line from '../assets/patterns/line-grey.svg';
import LocateIcon from '../assets/icons/locate.svg';
import ScooterIcon from '../assets/icons/scooter.svg';
import RideIcon from '../assets/icons/ride.svg';
import * as styles from './index.module.css';

const HomePage = () => {
  return (
    <>
      <Seo />
      <Layout>
        <Hero />
        <section className={styles.featuresSection}>
          <div className={styles.lineWrapper}>
            <Line className={styles.line} />
          </div>

          <div className={styles.featuresWrapper}>
            <FeatureCard
              icon={<LocateIcon />}
              heading="Locate with app"
              text={
                'Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.'
              }
            />
            <FeatureCard
              icon={<ScooterIcon />}
              heading="Pick your scooter"
              text={
                'We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.'
              }
            />
            <FeatureCard
              icon={<RideIcon />}
              heading="Enjoy the ride"
              text={
                'Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.'
              }
            />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default HomePage;
