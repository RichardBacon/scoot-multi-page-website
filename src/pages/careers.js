import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo/seo';
import Layout from '../components/layout/layout';
import PageBanner from '../components/pageBanner/pageBanner';
import FeaturesSection from '../components/featuresSection/featuresSection';
import ValuesSection from '../components/valuesSection/valuesSection';

const CareersPage = () => {
  const features = [
    {
      id: 1,
      heading: 'Care to join our mission?',
      text: 'We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!',
      image: (
        <StaticImage
          src="../assets/images/join-us.jpg"
          alt="A group of people working on laptops in a modern office"
        />
      ),
    },
  ];

  return (
    <>
      <Seo title="Careers" />
      <Layout>
        <PageBanner pageTitle="Careers" />
        <FeaturesSection features={features} />
        <ValuesSection />
      </Layout>
    </>
  );
};

export default CareersPage;
