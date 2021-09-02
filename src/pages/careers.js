import * as React from 'react';
import Seo from '../components/seo/seo';
import Layout from '../components/layout/layout';
import PageBanner from '../components/pageBanner/pageBanner';

const CareersPage = () => {
  return (
    <>
      <Seo title="Careers" />
      <Layout>
        <PageBanner pageTitle="Careers" />
      </Layout>
    </>
  );
};

export default CareersPage;
