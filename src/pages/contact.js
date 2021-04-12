/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
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
        <Styled.h1>{datoCmsKontakt.pageTitle}</Styled.h1>
        <Styled.p>{datoCmsKontakt.pageContent}</Styled.p>
      </FullPageContainer>
    </Layout>
  );
};

export default ContactPage;
