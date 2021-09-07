import * as React from 'react';
import Nav from '../nav/nav';
import Logo from '../../assets/icons/logo-white.svg';
import FacebookIcon from '../../assets/icons/facebook.svg';
import TwitterIcon from '../../assets/icons/twitter.svg';
import InstagramIcon from '../../assets/icons/instagram.svg';
import * as styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <Logo className={styles.logo} />
        <Nav />

        <ul className={styles.socialLinks}>
          <li>
            <a href="https://www.facebook.com">
              <FacebookIcon className={styles.socialLink} />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <TwitterIcon className={styles.socialLink} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com">
              <InstagramIcon className={styles.socialLink} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
