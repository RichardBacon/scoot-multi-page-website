import * as React from 'react';
import { Link } from 'gatsby';
import Nav from '../nav/nav';
import HamburgerIcon from '../../assets/icons/hamburger.svg';
import Logo from '../../assets/icons/logo-blue.svg';
import Button from '../button/button';
import * as styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <HamburgerIcon className={styles.hamburgerIcon} />
        <Link to="/">
          <Logo className={styles.logo} />
        </Link>

        <div className={styles.navWrapper}>
          <Nav />
        </div>

        <div className={styles.buttonWrapper}>
          <Button>Get Scootin</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
