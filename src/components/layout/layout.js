import * as React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import * as styles from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
