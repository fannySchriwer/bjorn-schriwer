/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";

const HeroSection = () => {
  const { datoCmsHeroSection } = useStaticQuery(
    graphql`
      query {
        datoCmsHeroSection {
          heroText
          heroTitle
          backgroundImage {
            url
          }
          heroAction {
            slug
            text
          }
        }
      }
    `
  );

  return (
    <div
      sx={{
        height: "90vh",
        backgroundImage: `url(${datoCmsHeroSection.backgroundImage.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        sx={{
          background: "rgba(0, 0, 0, 0.3)",
          width: "100%",
          height: "100%",
          padding: [3, 4],
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Styled.h2>{datoCmsHeroSection.heroTitle}</Styled.h2>
        <Styled.h4>{datoCmsHeroSection.heroText}</Styled.h4>
        <Link
          to={datoCmsHeroSection.heroAction[0].slug}
          sx={{
            padding: "10px 16px",
            backgroundColor: "#030523",
            color: "white",
            fontSize: "12px",
            fontFamily: "Lato, sans-serif",
            textDecoration: "none",
          }}
        >
          {datoCmsHeroSection.heroAction[0].text}
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
