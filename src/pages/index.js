import * as React from 'react';
import Seo from '../components/seo/seo';
import Layout from '../components/layout/layout';
import Hero from '../components/hero/hero';

const HomePage = () => {
  return (
    <>
      <Seo />
      <Layout>
        <Hero />
      </Layout>
    </>
  );
};

export default HomePage;
