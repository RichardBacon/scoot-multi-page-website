import * as React from 'react';
import Logo from '../../assets/icons/logo-blue.svg';
import Nav from '../nav/nav';
import Button from '../button/button';
import * as styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <Nav>
          <Logo />
        </Nav>

        <Button>Get Scootin</Button>
      </div>
    </header>
  );
};

export default Header;
