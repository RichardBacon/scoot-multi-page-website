import * as React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import SignUp from '../signup/signup';

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
