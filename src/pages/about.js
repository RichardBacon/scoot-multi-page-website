import * as React from 'react';
import Seo from '../components/seo/seo';
import Layout from '../components/layout/layout';
import PageBanner from '../components/pageBanner/pageBanner';

const AboutPage = () => {
  return (
    <>
      <Seo title="About" />
      <Layout>
        <PageBanner pageTitle="About" />
      </Layout>
    </>
  );
};

export default AboutPage;
