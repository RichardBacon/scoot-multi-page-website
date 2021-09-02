import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo/seo';
import Layout from '../components/layout/layout';
import PageBanner from '../components/pageBanner/pageBanner';
import Feature from '../components/feature/feature';
import * as styles from './about.module.css';

const AboutPage = () => {
  return (
    <>
      <Seo title="About" />
      <Layout>
        <PageBanner pageTitle="About" />
        <section className={styles.featuresSection}>
          <Feature
            heading="Mobility for the digital era"
            text="Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips."
            image={
              <StaticImage
                className={styles.image}
                src="../assets/images/digital-era.jpg"
                alt="A closeup of a lady looking at a mobile phone"
              />
            }
          />

          <Feature
            heading="Better urban living"
            text="We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride."
            image={
              <StaticImage
                className={styles.image}
                src="../assets/images/better-living.jpg"
                alt="View looking down a city street with city buildings and a tram"
              />
            }
            reverse={true}
          />
        </section>
      </Layout>
    </>
  );
};

export default AboutPage;
