import * as React from 'react';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../../hooks/use-site-metadata';

const Seo = ({ title }) => {
  const { defaultTitle, titleTemplate, defaultDescription } = useSiteMetadata();

  return (
    <Helmet defaultTitle={defaultTitle} titleTemplate={titleTemplate}>
      <html lang="en"></html>
      <title>{title}</title>
      <meta name="description" content={defaultDescription} />
    </Helmet>
  );
};

export default Seo;
