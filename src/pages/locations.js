import * as React from 'react';
import Seo from '../components/seo/seo';
import Layout from '../components/layout/layout';
import PageBanner from '../components/pageBanner/pageBanner';

const LocationsPage = () => {
  return (
    <>
      <Seo title="Locations" />
      <Layout>
        <PageBanner pageTitle="Locations" />
      </Layout>
    </>
  );
};

export default LocationsPage;
