/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroSection from "../components/heroSection";
import Services from "../components/services";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <Services />
    </Layout>
  );
};

export default IndexPage;
