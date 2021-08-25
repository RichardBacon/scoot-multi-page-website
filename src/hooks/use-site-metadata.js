import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          defaultTitle: title
          titleTemplate
          defaultDescription: description
        }
      }
    }
  `);

  return site.siteMetadata;
};

export default useSiteMetadata;
