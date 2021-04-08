/** @jsx jsx */
import { jsx } from "theme-ui";

import SEO from "../components/seo";
import Layout from "../components/layout";
import Services from "../components/services";
import FullPageContainer from "../components/fullPageContainer";

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
