import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const HeroSection = () => {
  const { datoCmsHeroSection } = useStaticQuery(
    graphql`
      query {
        datoCmsHeroSection {
          heroSection
          heroTitle
        }
      }
    `
  );

  return (
    <>
      <div
        style={{
          marginX: `auto`,
          maxWidth: 660,
          padding: `1.0875rem 0`,
        }}
      >
        <h2>{datoCmsHeroSection.heroTitle}</h2>
        <p>{datoCmsHeroSection.heroSection}</p>
      </div>
    </>
  );
};

export default HeroSection;
