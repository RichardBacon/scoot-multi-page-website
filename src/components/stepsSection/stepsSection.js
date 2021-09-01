import * as React from 'react';
import Line from '../../assets/patterns/line-grey.svg';
import LocateIcon from '../../assets/icons/locate.svg';
import ScooterIcon from '../../assets/icons/scooter.svg';
import RideIcon from '../../assets/icons/ride.svg';
import * as styles from './stepsSection.module.css';

const StepsSection = () => {
  return (
    <section className={styles.stepsSection}>
      <div className={styles.lineWrapper}>
        <Line className={styles.line} />
      </div>

      <div className={styles.stepsWrapper}>
        <div className={styles.stepCard}>
          <LocateIcon />

          <div className={styles.content}>
            <h4 className={styles.heading}>Locate with app</h4>
            <p className={styles.text}>
              Use the app to find the nearest scooter to you. We are
              continuously placing scooters in the areas with most demand, so
              one should never be too far away.
            </p>
          </div>
        </div>

        <div className={styles.stepCard}>
          <ScooterIcon />

          <div className={styles.content}>
            <h4 className={styles.heading}>Pick your scooter</h4>
            <p className={styles.text}>
              We show the most important info for the scooters closest to you.
              So you know how much charge they have left and can see roughly how
              much it will cost.
            </p>
          </div>
        </div>

        <div className={styles.stepCard}>
          <RideIcon />

          <div className={styles.content}>
            <h4 className={styles.heading}>Enjoy the ride</h4>
            <p className={styles.text}>
              Scan the QR code and the bike will unlock. Retract the cable lock,
              put on a helmet, and you’re off! Always lock bikes away from
              walkways and accessibility ramps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
