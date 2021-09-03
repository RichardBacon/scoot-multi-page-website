import * as React from 'react';
import LocateIcon from '../../assets/icons/locate.svg';
import ScooterIcon from '../../assets/icons/scooter.svg';
import RideIcon from '../../assets/icons/ride.svg';
import Step from '../step/step';
import * as styles from './stepsSection.module.css';

const StepsSection = () => {
  const steps = [
    {
      id: 1,
      icon: <LocateIcon />,
      heading: 'Locate with app',
      text: 'Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.',
    },
    {
      id: 2,
      icon: <ScooterIcon />,
      heading: 'Pick your scooter',
      text: 'We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.',
    },
    {
      id: 3,
      icon: <RideIcon />,
      heading: 'Enjoy the ride',
      text: 'Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.',
    },
  ];

  return (
    <section className={styles.stepsSection}>
      <div className={styles.stepsWrapper}>
        {steps.map((step) => (
          <Step
            key={step.id}
            icon={step.icon}
            heading={step.heading}
            text={step.text}
          />
        ))}
      </div>
    </section>
  );
};

export default StepsSection;
