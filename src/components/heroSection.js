import React from "react";
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
        }
      }
    `
  );

  return (
    <>
      <div
        style={{
          height: "95vh",
          backgroundImage: `url(${datoCmsHeroSection.backgroundImage.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ color: "white" }}>{datoCmsHeroSection.heroTitle}</h2>
        <p style={{ color: "white" }}>{datoCmsHeroSection.heroText}</p>
      </div>
    </>
  );
};

export default HeroSection;
