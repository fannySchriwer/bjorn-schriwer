/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";

import SEO from "../components/SEO";
import Layout from "../components/Layout";
import FullPageContainer from "../components/FullPageContainer";
import Image from "../components/Image";

const AboutPage = () => {
  const { datoCmsOmOss } = useStaticQuery(
    graphql`
      query {
        datoCmsOmOss {
          pageTitle
          pageIntroduction
          aboutIntro
          aboutImage {
            alt
            url
          }
          sections {
            description
            title
          }
        }
      }
    `
  );

  return (
    <Layout>
      <FullPageContainer>
        <SEO title="Om oss" />
        <Styled.h1>{datoCmsOmOss.pageTitle}</Styled.h1>
        <div
          sx={{
            marginTop: "45px",
            display: "flex",
            flexDirection: ["column", "column", "row"],
          }}
        >
          <div
            sx={{
              width: ["100%", "100%", "45%"],
              padding: ["8px", "8px", "0px"],
            }}
          >
            <Image
              src={datoCmsOmOss.aboutImage.url}
              alt={datoCmsOmOss.aboutImage.alt}
              sx={{
                width: "100%",
                maxHeight: ["75vh", "70vh", "unset"],
                objectFit: "cover",
              }}
            />
          </div>
          <div>
            <div sx={{ padding: ["8px 16px", "12px 32px"], maxWidth: "600px" }}>
              <Styled.h3>{datoCmsOmOss.pageIntroduction}</Styled.h3>
              <Styled.p>{datoCmsOmOss.aboutIntro}</Styled.p>
            </div>
            {datoCmsOmOss.sections.map((section, index) => (
              <div
                key={index}
                sx={{
                  flex: "1",
                  padding: ["8px 16px", "12px 32px"],
                  maxWidth: "700px",
                }}
              >
                <Styled.h3>{section.title}</Styled.h3>
                <Styled.p>{section.description}</Styled.p>
              </div>
            ))}
          </div>
        </div>
      </FullPageContainer>
    </Layout>
  );
};

export default AboutPage;
