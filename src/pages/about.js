import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo/seo';
import Layout from '../components/layout/layout';
import PageBanner from '../components/pageBanner/pageBanner';
import FeaturesSection from '../components/featuresSection/featuresSection';
import ValuesSection from '../components/valuesSection/valuesSection';
import FaqsSection from '../components/faqsSection/faqsSection';

const AboutPage = () => {
  const features = [
    {
      id: 1,
      heading: 'Mobility for the digital era',
      text: 'Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.',
      image: (
        <StaticImage
          src="../assets/images/digital-era.jpg"
          alt="A closeup of a lady looking at a mobile phone"
        />
      ),
    },
    {
      id: 2,
      heading: 'Better urban living',
      text: 'We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.',
      image: (
        <StaticImage
          src="../assets/images/better-living.jpg"
          alt="View looking down a city street with city buildings and a tram"
        />
      ),
    },
  ];

  return (
    <>
      <Seo title="About" />
      <Layout>
        <PageBanner pageTitle="About" />
        <FeaturesSection features={features} />
        <ValuesSection />
        <FaqsSection />
      </Layout>
    </>
  );
};

export default AboutPage;
