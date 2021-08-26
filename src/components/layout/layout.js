import * as React from 'react';
import Header from '../header/header';
import SignUp from '../signup/signup';
import Footer from '../footer/footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
        <SignUp />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
