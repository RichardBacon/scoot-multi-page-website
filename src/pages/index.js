import * as React from 'react';
import Seo from '../components/seo/seo';
import Layout from '../components/layout/layout';
import HeroSection from '../components/heroSection/heroSection';
import FeaturesSection from '../components/featuresSection/featuresSection';
import DetailsSection from '../components/detailsSection/detailsSection';

const HomePage = () => {
  return (
    <>
      <Seo />
      <Layout>
        <HeroSection />
        <FeaturesSection />
        <DetailsSection />
      </Layout>
    </>
  );
};

export default HomePage;
