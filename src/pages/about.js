/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";

import SEO from "../components/seo";
import Layout from "../components/layout";

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
  console.log(datoCmsOmOss);

  return (
    <Layout>
      <SEO title="Om oss" />
      <h1 sx={{ textAlign: "center", marginTop: "32px" }}>
        {datoCmsOmOss.pageTitle}
      </h1>
      <h4 sx={{ textAlign: "center", marginTop: "46px" }}>
        {datoCmsOmOss.pageIntroduction}
      </h4>
      <p
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontSize: "14px",
          maxWidth: "700px",
          marginX: "auto",
          textAlign: "center",
        }}
      >
        {datoCmsOmOss.aboutIntro}
      </p>
      <div sx={{ marginTop: "65px" }}>
        {datoCmsOmOss.sections.map((section, index) => (
          <div
            key={index}
            sx={{ display: "flex", justifyContent: "center", marginY: "32px" }}
          >
            <div sx={{ flex: "1" }}>
              <img
                src={section.image.url}
                alt={section.image.alt}
                sx={{ width: "100%" }}
              />
            </div>
            <div sx={{ flex: "2", padding: "0 24px" }}>
              <h3 sx={{ fontFamily: "Roboto, sans-serif", fontSize: "18px" }}>
                {section.title}
              </h3>
              <p sx={{ fontFamily: "Roboto, sans-serif", fontSize: "14px" }}>
                {section.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default AboutPage;
