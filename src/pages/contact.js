/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";

import SEO from "../components/seo";
import Layout from "../components/layout";
import FullPageContainer from "../components/fullPageContainer";

const ContactPage = () => {
  const { datoCmsKontakt: datoCmsContact, datoCmsFooter } = useStaticQuery(
    graphql`
      query {
        datoCmsKontakt {
          pageTitle
          pageContent
          image {
            alt
            url
          }
        }
        datoCmsFooter {
          email
          phone
        }
      }
    `
  );
  return (
    <Layout>
      <FullPageContainer>
        <SEO title="Kontakta oss" />
        <div
          sx={{
            display: "flex",
            flexDirection: ["column", "column", "row"],
            justifyContent: "center",
            alignItems: ["flex-start", "flex-start", "center"],
            marginBottom: "42px",
          }}
        >
          <div sx={{ padding: ["36px 16px", "36px", "16px 48px"] }}>
            <Styled.h1
              sx={{
                textAlign: "center",
                marginLeft: "0px",
                paddingLeft: "0px",
              }}
            >
              {datoCmsContact.pageTitle}
            </Styled.h1>
            <Styled.p sx={{ marginBottom: "8px" }}>
              Tele: {datoCmsFooter.phone}
            </Styled.p>
            <Styled.p sx={{ marginBottom: "8px" }}>
              Email:{" "}
              <a
                href={`mailto: ${datoCmsFooter.email}`}
                sx={{ color: "black", fontWeight: "600" }}
              >
                {datoCmsFooter.email}
              </a>
            </Styled.p>
          </div>
          <div
            sx={{
              padding: ["8px", "36px", "16px 48px"],
              maxWidth: "800px",
            }}
          >
            <img
              sx={{ maxWidth: ["100%"], maxHeight: "100%" }}
              src={datoCmsContact.image.url}
              alt={datoCmsContact.image.alt}
            />
          </div>
        </div>
      </FullPageContainer>
    </Layout>
  );
};

export default ContactPage;
