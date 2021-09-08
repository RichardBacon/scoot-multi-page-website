import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Button from '../button/button';
import * as styles from './locationsSection.module.css';

const LocationsSection = () => {
  return (
    <section className={styles.locationsSection}>
      <div className={styles.map}>
        <StaticImage src="../../assets/images/world-map-desktop.png" />

        <div className={`${styles.locationMarker} ${styles.newYorkMarker}`}>
          New York
        </div>
        <div className={`${styles.locationMarker} ${styles.londonMarker}`}>
          London
        </div>
        <div className={`${styles.locationMarker} ${styles.yokohamaMarker}`}>
          Yokohama
        </div>
        <div className={`${styles.locationMarker} ${styles.jakartaMarker}`}>
          Jakarta
        </div>
      </div>

      <div className={styles.content}>
        <h2 className={styles.heading}>Your city not listed?</h2>
        <p className={styles.text}>
          If you’d like to see Scoot in your hometown, be sure to let us know.
          We track requests and plan launches based on demand. Feel free to
          message us by clicking the link or messaging us on social.
        </p>

        <Button>Message Us</Button>
      </div>
    </section>
  );
};

export default LocationsSection;
