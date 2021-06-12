/** @jsx jsx */
import { jsx } from "theme-ui";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import HeroSection from "../components/HeroSection";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
    </Layout>
  );
};

export default IndexPage;
