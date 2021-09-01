import * as React from 'react';
import Seo from '../components/seo/seo';
import Layout from '../components/layout/layout';
import HeroSection from '../components/heroSection/heroSection';
import StepsSection from '../components/stepsSection/stepsSection';
import DetailsSection from '../components/detailsSection/detailsSection';

const HomePage = () => {
  return (
    <>
      <Seo />
      <Layout>
        <HeroSection />
        <StepsSection />
        <DetailsSection />
      </Layout>
    </>
  );
};

export default HomePage;
