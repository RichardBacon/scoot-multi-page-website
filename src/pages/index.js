import * as React from 'react';
import Seo from '../components/seo/seo';
import Layout from '../components/layout/layout';
import HeroSection from '../components/heroSection/heroSection';
import FeaturesSection from '../components/featuresSection/featuresSection';

const HomePage = () => {
  return (
    <>
      <Seo />
      <Layout>
        <HeroSection />
        <FeaturesSection />
      </Layout>
    </>
  );
};

export default HomePage;
