import * as React from 'react';
import Layout from '../components/layout/layout';
import Seo from '../components/seo/seo';

const NotFoundPage = () => {
  return (
    <>
      <Seo title="Page Not Found" />
      <Layout>Not Found Page</Layout>
    </>
  );
};

export default NotFoundPage;
