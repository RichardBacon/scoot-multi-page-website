import * as React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import './layout.module.css';

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