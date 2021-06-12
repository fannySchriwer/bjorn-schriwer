/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./Header";
import "./layout.css";

const Layout = ({ children }) => {
  const { datoCmsHeroSection, datoCmsFooter } = useStaticQuery(
    graphql`
      query {
        datoCmsHeroSection {
          id
          logo {
            url
          }
          backgroundImage {
            url
          }
        }
        datoCmsFooter {
          email
          phone
          adress
          orgNumber
          postCode
        }
      }
    `
  );
  return (
    <div>
      <Header logoUrl={datoCmsHeroSection.logo.url} />
      <main sx={{ minHeight: "70vh" }}>{children}</main>
      <footer
        sx={{
          backgroundColor: "#030523",
        }}
      >
        <div
          sx={{
            display: "flex",
            flexDirection: ["column", "row", "row"],
            justifyContent: "space-around",
            padding: ["16px", "36px 24px 16px 24px"],
            maxWidth: "1130px",
            marginX: "auto",
          }}
        >
          <div>
            <Styled.h4 sx={{ marginTop: ["16px", "0px"], color: "white" }}>
              Kontakta oss
            </Styled.h4>
            <a
              href={`mailto: ${datoCmsFooter.email}`}
              sx={{
                color: "white",
                fontWeight: "600",
                fontSize: "18px",
                marginBottom: "6px",
              }}
            >
              {datoCmsFooter.email}
            </a>
            <Styled.p sx={{ marginBottom: "6px", color: "white" }}>
              {datoCmsFooter.phone}
            </Styled.p>
            <Styled.p sx={{ marginBottom: "6px", color: "white" }}>
              Org.nr: {datoCmsFooter.orgNumber}
            </Styled.p>
          </div>
          <div>
            <Styled.h4 sx={{ marginTop: ["16px", "0px"], color: "white" }}>
              Här finns vi
            </Styled.h4>
            <Styled.p sx={{ marginBottom: "6px", color: "white" }}>
              {datoCmsFooter.adress}
            </Styled.p>
            <Styled.p sx={{ marginBottom: "6px", color: "white" }}>
              {datoCmsFooter.postCode}
            </Styled.p>
          </div>
        </div>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
