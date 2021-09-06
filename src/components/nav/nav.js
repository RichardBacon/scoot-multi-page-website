import * as React from 'react';
import { Link } from 'gatsby';
import * as styles from './nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.linkList}>
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
  );
};

export default Nav;
