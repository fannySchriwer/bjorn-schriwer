/** @jsx jsx */
import { jsx } from "theme-ui";

import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroSection from "../components/heroSection";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
    </Layout>
  );
};

export default IndexPage;
