/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";

import SEO from "../components/seo";
import Layout from "../components/layout";
import FullPageContainer from "../components/fullPageContainer";

const ContactPage = () => {
  const { datoCmsKontakt } = useStaticQuery(
    graphql`
      query {
        datoCmsKontakt {
          pageTitle
          pageContent
        }
      }
    `
  );
  return (
    <Layout>
      <FullPageContainer>
        <SEO title="Kontakta oss" />
        <h1
          sx={{
            textAlign: "center",
            marginTop: "32px",
            fontSize: "32px",
            fontFamily: "Roboto, sans-serif",
            fontWeight: "400",
          }}
        >
          {datoCmsKontakt.pageTitle}
        </h1>
        <p>{datoCmsKontakt.pageContent}</p>
      </FullPageContainer>
    </Layout>
  );
};

export default ContactPage;
