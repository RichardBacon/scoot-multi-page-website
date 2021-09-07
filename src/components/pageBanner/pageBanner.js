import * as React from 'react';
import WhiteCircles from '../../assets/patterns/white-circles.svg';
import * as styles from './pageBanner.module.css';

const PageBanner = ({ pageTitle }) => {
  return (
    <section className={styles.pageBanner}>
      <div className={styles.headingWrapper}>
        <h1 className={styles.heading}>{pageTitle}</h1>
        <WhiteCircles className={styles.whiteCircles} />
      </div>
    </section>
  );
};

export default PageBanner;
