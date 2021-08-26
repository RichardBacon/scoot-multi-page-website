import * as React from 'react';
import Seo from '../components/seo/seo';
import Layout from '../components/layout/layout';

const NotFoundPage = () => {
  return (
    <>
      <Seo title="Page Not Found" />
      <Layout>Not Found Page</Layout>
    </>
  );
};

export default NotFoundPage;
