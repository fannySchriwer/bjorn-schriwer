/** @jsx jsx */
import { jsx } from "theme-ui";

import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Services from "../components/ServicesComponent";
import FullPageContainer from "../components/FullPageContainer";

const ServicesPage = () => {
  return (
    <Layout>
      <FullPageContainer>
        <SEO title="Våra tjänster" />
        <Services />
      </FullPageContainer>
    </Layout>
  );
};

export default ServicesPage;
