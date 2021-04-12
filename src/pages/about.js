/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";

import SEO from "../components/seo";
import Layout from "../components/layout";
import FullPageContainer from "../components/fullPageContainer";

const AboutPage = () => {
  const { datoCmsOmOss } = useStaticQuery(
    graphql`
      query {
        datoCmsOmOss {
          pageTitle
          pageIntroduction
          aboutIntro
          sections {
            description
            title
            image {
              alt
              url
            }
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
        <div sx={{ padding: ["0 16px", "0 24px"] }}>
          <Styled.h3 sx={{ textAlign: "center", marginTop: "46px" }}>
            {datoCmsOmOss.pageIntroduction}
          </Styled.h3>
          <Styled.p
            sx={{
              maxWidth: "700px",
              marginX: "auto",
              textAlign: "center",
            }}
          >
            {datoCmsOmOss.aboutIntro}
          </Styled.p>
        </div>
        <div sx={{ marginTop: "65px" }}>
          {datoCmsOmOss.sections.map((section, index) => (
            <div
              key={index}
              sx={{
                display: "flex",
                flexDirection: ["column", "column", "row"],
                justifyContent: "center",
                marginY: "32px",
              }}
            >
              <div sx={{ flex: "1" }}>
                <img
                  src={section.image.url}
                  alt={section.image.alt}
                  sx={{ width: "100%", maxHeight: "35vh", objectFit: "cover" }}
                />
              </div>
              <div sx={{ flex: "2", padding: ["0 20px", "0 24px"] }}>
                <Styled.h3>{section.title}</Styled.h3>
                {/* <div
                  dangerouslySetInnerHTML={{ __html: section.description }}
                /> */}
                <Styled.p
                  sx={{
                    maxWidth: "720px",
                  }}
                >
                  {section.description}
                </Styled.p>
              </div>
            </div>
          ))}
        </div>
      </FullPageContainer>
    </Layout>
  );
};

export default AboutPage;
