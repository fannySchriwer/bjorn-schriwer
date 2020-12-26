/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroSection from "../components/heroSection";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export default IndexPage;
