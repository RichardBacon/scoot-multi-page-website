import * as React from 'react';
import Logo from '../../assets/icons/logo-white.svg';
import FacebookIcon from '../../assets/icons/facebook.svg';
import TwitterIcon from '../../assets/icons/twitter.svg';
import InstagramIcon from '../../assets/icons/instagram.svg';
import Nav from '../nav/nav';
import * as styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <Nav>
          <Logo />
        </Nav>

        <ul className={styles.socialLinks}>
          <li>
            <a href="https://www.facebook.com">
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com">
              <InstagramIcon />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
