/** @jsx jsx */
import { jsx } from "theme-ui";
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
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2 sx={{ color: "white", marginBottom: "1rem" }}>
        {datoCmsHeroSection.heroTitle}
      </h2>
      <p sx={{ color: "white", fontFamily: "Roboto, sans-serif" }}>
        {datoCmsHeroSection.heroText}
      </p>
      <Link
        to={datoCmsHeroSection.heroAction[0].contact}
        sx={{
          padding: "10px 16px",
          backgroundColor: "black",
          color: "white",
          fontSize: "12px",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        {datoCmsHeroSection.heroAction[0].text}
      </Link>
    </div>
  );
};

export default HeroSection;
