import * as React from 'react';
import { Link } from 'gatsby';
import { FaFacebookSquare } from '@react-icons/all-files/fa/FaFacebookSquare';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import * as styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <Link className={styles.logo} to="/">
            scoot
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
            <a className={styles.socialLink}>
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a className={styles.socialLink}>
              <FaTwitter />
            </a>
          </li>
          <li>
            <a className={styles.socialLink}>
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
