/** @jsx jsx */
import { jsx } from "theme-ui";

import SEO from "../components/seo";
import Layout from "../components/layout";
import Services from "../components/services";

const ServicesPage = () => {
  return (
    <Layout>
      <SEO title="Våra tjänster" />
      <Services />
    </Layout>
  );
};

export default ServicesPage;
