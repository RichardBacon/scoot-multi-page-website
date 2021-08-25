import * as React from 'react';
import { Link } from 'gatsby';
import * as styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerSection}>
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

        <button className={styles.button}>Get Scootin</button>
      </div>
    </header>
  );
};

export default Header;
