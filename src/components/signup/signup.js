import React from 'react';
import AppStoreIcon from '../../assets/icons/app-store.svg';
import GooglePlayIcon from '../../assets/icons/google-play.svg';
import * as styles from './signup.module.css';

const SignUp = () => {
  return (
    <section className={styles.signup}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2 className={styles.heading}>Sign up and Scoot off today</h2>
        </div>

        <div className={styles.icons}>
          <AppStoreIcon />
          <GooglePlayIcon />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
