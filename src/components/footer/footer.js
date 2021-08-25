import * as React from 'react';
import { Link } from 'gatsby';
import Logo from '../../assets/icons/logo-white.svg';
import FacebookIcon from '../../assets/icons/facebook.svg';
import TwitterIcon from '../../assets/icons/twitter.svg';
import InstagramIcon from '../../assets/icons/instagram.svg';
import * as styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <Link to="/">
            <Logo />
          </Link>

          <nav>
            <ul className={styles.links}>
              <li>
                <Link className={styles.link} to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/locations">
                  Locations
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/careers">
                  Careers
                </Link>
              </li>
            </ul>
          </nav>
        </div>

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
