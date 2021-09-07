import * as React from 'react';
import Header from '../header/header';
import SignUp from '../signup/signup';
import Footer from '../footer/footer';
import * as styles from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        {children}
        <SignUp />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
